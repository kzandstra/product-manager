/**
 * PARCOURS PRODUCT OWNER — APPLICATION INTERACTIVE
 * Logique principale : Navigation, Quiz interactifs, LocalStorage, Chronomètre & Confettis
 */

(function () {
  'use strict';

  // --- ÉTAT GLOBAL DE L'APPLICATION ---
  const STORAGE_KEY = 'PO_CURRICULUM_STATE_V1';

  let state = {
    currentPageId: null,
    completedPages: {}, // { [pageId]: boolean }
    quizStates: {},     // { [quizId]: { answers: {}, submitted: boolean, score: 0, total: 0, passed: false, attempts: 0, revealCorrig: false } }
    checkedTasks: {},   // { [taskKey]: boolean }
    theme: 'dark',
    filter: 'all',
    searchQuery: '',
    sidebarCollapsed: false
  };

  // Chronomètre pour l'examen blanc
  let timerInterval = null;
  let timerSecondsLeft = 900; // 15 min par défaut
  let timerIsRunning = false;

  // --- CHARGEMENT & SAUVEGARDE DU LOCALSTORAGE ---
  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        state = { ...state, ...parsed };
      }
    } catch (e) {
      console.warn('Erreur chargement localStorage:', e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Erreur sauvegarde localStorage:', e);
    }
    updateGlobalProgress();
  }

  // --- INITIALISATION ---
  function init() {
    loadState();
    applyTheme(state.theme);

    // Initialisation page courante
    const hash = window.location.hash.replace('#', '');
    const pageExists = COURSE_DATA.pages.some(p => p.id === hash);
    if (hash && pageExists) {
      state.currentPageId = hash;
    } else if (!state.currentPageId || !COURSE_DATA.pages.some(p => p.id === state.currentPageId)) {
      state.currentPageId = COURSE_DATA.pages[0].id;
    }

    renderSidebar();
    renderPage(state.currentPageId);
    setupGlobalEvents();
    updateGlobalProgress();
  }

  // --- GESTION DU THÈME ---
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    const themeBtn = document.getElementById('btn-theme-toggle');
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      themeBtn.setAttribute('title', theme === 'dark' ? 'Passer au mode clair' : 'Passer au mode sombre');
    }
  }

  function toggleTheme() {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
    saveState();
  }

  // --- NAVIGATION ---
  function getCurrentPageIndex() {
    return COURSE_DATA.pages.findIndex(p => p.id === state.currentPageId);
  }

  function navigateToPage(pageId) {
    if (!pageId) return;
    const target = COURSE_DATA.pages.find(p => p.id === pageId);
    if (!target) return;

    state.currentPageId = pageId;
    window.location.hash = pageId;
    renderPage(pageId);
    renderSidebar();
    saveState();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Fermer sidebar mobile si ouverte
    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('mobile-open')) {
      sidebar.classList.remove('mobile-open');
    }
  }

  function navigateStep(offset) {
    const idx = getCurrentPageIndex();
    const nextIdx = idx + offset;
    if (nextIdx >= 0 && nextIdx < COURSE_DATA.pages.length) {
      navigateToPage(COURSE_DATA.pages[nextIdx].id);
    }
  }

  // --- MISE À JOUR DE LA PROGRESSION GLOBALE ---
  function updateGlobalProgress() {
    const totalPages = COURSE_DATA.pages.length;
    const completedPagesCount = Object.values(state.completedPages).filter(Boolean).length;
    const percent = Math.round((completedPagesCount / totalPages) * 100);

    const percentEl = document.getElementById('global-progress-percent');
    const barEl = document.getElementById('global-progress-bar');
    if (percentEl) percentEl.textContent = `${percent}%`;
    if (barEl) barEl.style.width = `${percent}%`;

    // Statistiques des Quiz
    const allQuizPages = COURSE_DATA.pages.filter(p => p.quiz);
    const passedQuizCount = allQuizPages.filter(p => state.quizStates[p.quiz.id]?.passed).length;
    const statPill = document.getElementById('quiz-stat-pill');
    if (statPill) {
      statPill.innerHTML = `🏆 ${passedQuizCount} / ${allQuizPages.length} quiz`;
      if (passedQuizCount === allQuizPages.length && allQuizPages.length > 0) {
        statPill.classList.add('success');
      } else {
        statPill.classList.remove('success');
      }
    }
  }

  // --- RENDU DU SOMMAIRE (SIDEBAR) ---
  function renderSidebar() {
    const navContainer = document.getElementById('sidebar-nav');
    if (!navContainer) return;

    const currentIdx = getCurrentPageIndex();
    const currentPage = COURSE_DATA.pages[currentIdx];

    const searchLower = state.searchQuery.toLowerCase().trim();

    let html = '';

    COURSE_DATA.modules.forEach(mod => {
      // Filtrer les pages du module selon recherche et catégorie
      let modPages = COURSE_DATA.pages.filter(p => p.moduleId === mod.id);

      if (state.filter === 'quiz') {
        modPages = modPages.filter(p => p.quiz);
      } else if (state.filter === 'deliverable') {
        modPages = modPages.filter(p => p.type === 'deliverable');
      } else if (state.filter === 'todo') {
        modPages = modPages.filter(p => !state.completedPages[p.id]);
      } else if (state.filter === 'done') {
        modPages = modPages.filter(p => state.completedPages[p.id]);
      }

      if (searchLower) {
        modPages = modPages.filter(p =>
          p.title.toLowerCase().includes(searchLower) ||
          (p.partTitle && p.partTitle.toLowerCase().includes(searchLower))
        );
      }

      if (modPages.length === 0) return;

      const isCurrentModule = currentPage && currentPage.moduleId === mod.id;
      const completedInMod = modPages.filter(p => state.completedPages[p.id]).length;
      const openClass = (isCurrentModule || searchLower || modPages.some(p => p.id === state.currentPageId)) ? 'open' : '';

      html += `
        <div class="module-group ${openClass}" data-module-id="${mod.id}">
          <button type="button" class="module-toggle" aria-expanded="${openClass ? 'true' : 'false'}">
            <div class="module-title-wrapper">
              <span class="module-arrow">▶</span>
              <span class="module-name">${mod.title}</span>
            </div>
            <span class="module-badge">${completedInMod}/${modPages.length}</span>
          </button>
          <ul class="module-pages-list">
      `;

      modPages.forEach(p => {
        const isActive = p.id === state.currentPageId ? 'active' : '';
        const isDone = state.completedPages[p.id];
        const hasQuiz = p.quiz;
        const quizPassed = hasQuiz && state.quizStates[p.quiz.id]?.passed;

        let icon = '📖';
        if (p.type === 'quiz' || hasQuiz) icon = '🎯';
        if (p.type === 'deliverable') icon = '📋';
        if (p.type === 'intro' || p.type === 'sources') icon = 'ℹ️';

        let statusBadge = '';
        if (quizPassed) {
          statusBadge = '<span class="nav-status-icon quiz-pass" title="Quiz validé">✓⭐</span>';
        } else if (isDone) {
          statusBadge = '<span class="nav-status-icon done" title="Terminé">✓</span>';
        }

        html += `
          <li class="page-nav-item">
            <a href="#${p.id}" class="page-nav-link ${isActive}" data-page-id="${p.id}">
              <div class="page-nav-title-group">
                <span class="nav-icon">${icon}</span>
                <span class="page-nav-title">${p.title}</span>
              </div>
              ${statusBadge}
            </a>
          </li>
        `;
      });

      html += `
          </ul>
        </div>
      `;
    });

    if (!html) {
      html = '<div style="padding:1.5rem;text-align:center;color:var(--text-muted);font-size:0.85rem;">Aucune leçon ne correspond à votre filtre.</div>';
    }

    navContainer.innerHTML = html;

    // Événements d'accordéon pour les groupes
    navContainer.querySelectorAll('.module-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const group = btn.closest('.module-group');
        group.classList.toggle('open');
        btn.setAttribute('aria-expanded', group.classList.contains('open'));
      });
    });

    // Événements de clic sur les liens de pages
    navContainer.querySelectorAll('.page-nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const pid = link.getAttribute('data-page-id');
        navigateToPage(pid);
      });
    });
  }

  // --- RENDU D'UNE PAGE ---
  function renderPage(pageId) {
    const page = COURSE_DATA.pages.find(p => p.id === pageId);
    if (!page) return;

    const pageIdx = page.index;
    const prevPage = pageIdx > 0 ? COURSE_DATA.pages[pageIdx - 1] : null;
    const nextPage = pageIdx < COURSE_DATA.pages.length - 1 ? COURSE_DATA.pages[pageIdx + 1] : null;

    const mainContainer = document.getElementById('main-content');
    if (!mainContainer) return;

    const isDone = state.completedPages[page.id];

    // Badge Type
    let typeLabel = 'Leçon';
    let typeClass = 'lesson';
    if (page.type === 'quiz') { typeLabel = 'Quiz Interactif'; typeClass = 'quiz'; }
    if (page.type === 'deliverable') { typeLabel = 'Livrable de Projet'; typeClass = 'deliverable'; }
    if (page.type === 'intro') { typeLabel = 'Guide Pratique'; typeClass = 'intro'; }
    if (page.type === 'sources') { typeLabel = 'Ressources'; typeClass = 'intro'; }

    let html = `
      <!-- Breadcrumb -->
      <nav class="breadcrumb" aria-label="Fil d'Ariane">
        <span class="breadcrumb-item">${page.moduleTitle}</span>
        ${page.partTitle ? `<span class="breadcrumb-separator">›</span><span class="breadcrumb-item">${page.partTitle}</span>` : ''}
        <span class="breadcrumb-separator">›</span>
        <span class="breadcrumb-current">${page.title}</span>
      </nav>

      <!-- Page Header Card -->
      <header class="page-header-card">
        <div class="page-meta-row">
          <div style="display:flex;align-items:center;gap:0.75rem;">
            <span class="page-type-badge ${typeClass}">${typeLabel}</span>
            ${page.duration ? `<span class="page-time-badge">⏱️ ${page.duration}</span>` : ''}
          </div>
          <div class="page-status-action">
            <button type="button" id="btn-toggle-done" class="btn-toggle-done ${isDone ? 'is-done' : ''}">
              ${isDone ? '✓ Terminé' : '○ Marquer comme terminé'}
            </button>
          </div>
        </div>
        <h1 class="page-main-title">${page.title}</h1>
      </header>

      <!-- Content Body -->
      <article class="curriculum-body">
        ${page.htmlContent}
      </article>
    `;

    // Si la page contient un Quiz
    if (page.quiz) {
      html += renderQuizComponent(page.quiz);
    }

    // Barre de Navigation Inférieure (Précédent / Suivant)
    html += `
      <footer class="page-bottom-nav">
        ${prevPage ? `
          <button type="button" class="nav-btn prev" id="btn-nav-prev" data-target-id="${prevPage.id}">
            <span class="nav-btn-sub">← Précédent <span class="kbd-shortcut">Alt+←</span></span>
            <span class="nav-btn-title">${prevPage.title}</span>
          </button>
        ` : `
          <button type="button" class="nav-btn prev" disabled>
            <span class="nav-btn-sub">Début du cours</span>
            <span class="nav-btn-title">Première leçon</span>
          </button>
        `}

        <button type="button" id="btn-footer-toggle-done" class="btn-toggle-done ${isDone ? 'is-done' : ''}">
          ${isDone ? '✓ Leçon validée' : '○ Marquer cette leçon comme terminée'}
        </button>

        ${nextPage ? `
          <button type="button" class="nav-btn next" id="btn-nav-next" data-target-id="${nextPage.id}">
            <span class="nav-btn-sub">Suivant → <span class="kbd-shortcut">Alt+→</span></span>
            <span class="nav-btn-title">${nextPage.title}</span>
          </button>
        ` : `
          <button type="button" class="nav-btn next" disabled>
            <span class="nav-btn-sub">Fin du parcours</span>
            <span class="nav-btn-title">Félicitations !</span>
          </button>
        `}
      </footer>
    `;

    mainContainer.innerHTML = html;

    // Attacher les écouteurs d'événements
    setupPageEvents(page);
  }

  // --- RENDU DU MOTEUR DE QUIZ INTERACTIF ---
  function renderQuizComponent(quiz) {
    const qState = state.quizStates[quiz.id] || {
      answers: {},
      submitted: false,
      score: 0,
      total: quiz.questions.length,
      passed: false,
      attempts: 0,
      revealCorrig: false
    };

    const isSubmitted = qState.submitted;
    const hasPassed = qState.passed;

    let timerHtml = '';
    if (quiz.timeLimit) {
      timerHtml = `
        <div class="timer-widget" id="quiz-timer-widget">
          <span>⏱️</span>
          <span id="timer-display">15:00</span>
          <button type="button" class="timer-btn" id="timer-toggle-btn" title="Démarrer / Pause">▶ Démarrer</button>
          <button type="button" class="timer-btn" id="timer-reset-btn" title="Réinitialiser">↺</button>
        </div>
      `;
    }

    let questionsHtml = quiz.questions.map(q => {
      const isMulti = q.isMultiple;
      const userSelected = qState.answers[q.num] || [];

      // Statut après soumission
      let cardStateClass = '';
      if (isSubmitted) {
        const correctSet = new Set(q.correctKeys.map(k => k.toLowerCase()));
        const userSet = new Set(userSelected.map(k => k.toLowerCase()));
        const isQuestionCorrect = correctSet.size === userSet.size && [...correctSet].every(k => userSet.has(k));
        cardStateClass = isQuestionCorrect ? 'state-correct' : 'state-incorrect';
      }

      const optionsHtml = q.options.map(opt => {
        const isChecked = userSelected.includes(opt.key);
        let optionStateClass = '';

        if (isSubmitted) {
          const isTarget = q.correctKeys.includes(opt.key);
          if (isTarget) {
            optionStateClass = 'is-correct-target';
          } else if (isChecked && !isTarget) {
            optionStateClass = 'is-incorrect-choice';
          }
        }

        return `
          <label class="option-item ${isChecked ? 'selected' : ''} ${optionStateClass}">
            <input
              type="${isMulti ? 'checkbox' : 'radio'}"
              name="quiz-q-${q.num}"
              value="${opt.key}"
              class="option-input"
              ${isChecked ? 'checked' : ''}
              ${isSubmitted ? 'disabled' : ''}
            >
            <span class="option-key">${opt.key.toUpperCase()}</span>
            <span class="option-text">${opt.text}</span>
          </label>
        `;
      }).join('');

      let explanationHtml = '';
      if (isSubmitted && q.note) {
        explanationHtml = `<div class="question-explanation">💡 <strong>Précision :</strong> ${q.note}</div>`;
      }

      return `
        <div class="question-card ${cardStateClass}" data-q-num="${q.num}">
          <div class="question-header">
            <span class="q-number">${q.num}</span>
            <div class="q-stem">
              ${q.stem}
              ${isMulti ? '<span class="q-badge-multi">Plusieurs réponses</span>' : ''}
            </div>
          </div>
          <div class="options-list">
            ${optionsHtml}
          </div>
          ${explanationHtml}
        </div>
      `;
    }).join('');

    // Messages de feedback dynamiques
    let feedbackBannerHtml = '';
    if (isSubmitted) {
      if (hasPassed) {
        feedbackBannerHtml = `
          <div class="feedback-banner success">
            <div class="fb-title">🎉 Bravo ! Compétence validée avec succès !</div>
            <div class="fb-score">Score obtenu : <strong>${qState.score} / ${quiz.questions.length}</strong> (${Math.round((qState.score / quiz.questions.length) * 100)}%) — Objectif : ${quiz.targetScore}%</div>
            <p class="fb-message">Excellente maîtrise des notions abordées ! Vous avez le niveau attendu sur cette partie pour réussir la certification et vos livrables de PO.</p>
            <div class="fb-actions">
              <button type="button" class="btn-secondary" id="btn-quiz-retry">🔄 Refaire le quiz pour réviser</button>
            </div>
          </div>
        `;
      } else {
        const encouragements = [
          "Pas d'inquiétude ! L'esprit agile repose sur l'inspection et l'adaptation : prenez 2 minutes pour relire les points délicats et retentez votre chance !",
          "C'est en forgeant qu'on devient forgeron ! Vos erreurs sont les meilleures opportunités d'apprentissage. Cliquez sur « Réessayer » pour ancrer ces concepts !",
          "Vous y êtes presque ! Relisez attentivement les définitions dans la leçon ci-dessus et refaites le test pour viser les 80% requis.",
          "Chaque tentative renforce votre mémoire à long terme (principe de récupération en mémoire de la leçon 4.1). Retentez sans hésiter !"
        ];
        const randomEncouragement = encouragements[qState.attempts % encouragements.length];

        feedbackBannerHtml = `
          <div class="feedback-banner encouragement">
            <div class="fb-title">💪 Bel effort ! Vous y êtes presque !</div>
            <div class="fb-score">Score obtenu : <strong>${qState.score} / ${quiz.questions.length}</strong> (${Math.round((qState.score / quiz.questions.length) * 100)}%) — Objectif requis : ${quiz.targetScore}%</div>
            <p class="fb-message">${randomEncouragement}</p>
            <div class="fb-actions">
              <button type="button" class="btn-primary" id="btn-quiz-retry">🔄 Réessayer le quiz maintenant</button>
            </div>
          </div>
        `;
      }
    }

    return `
      <section class="quiz-container" id="quiz-section" data-quiz-id="${quiz.id}">
        <div class="quiz-header">
          <div class="quiz-title-badge">
            <span class="quiz-icon">🎯</span>
            <h2 class="quiz-title">${quiz.title}</h2>
          </div>
          <div class="quiz-targets">
            <span class="target-badge">🎯 Objectif : ${quiz.targetScore}% de réussite</span>
            ${timerHtml}
          </div>
        </div>

        <form id="quiz-form" class="questions-list">
          ${questionsHtml}

          <div class="quiz-actions-row">
            ${!isSubmitted ? `
              <button type="submit" class="btn-primary" id="btn-quiz-submit">
                ✓ Valider mes réponses
              </button>
            ` : `
              <button type="button" class="btn-secondary" id="btn-quiz-retry-alt">
                🔄 Recommencer le quiz
              </button>
            `}

            <div class="corrig-accordion ${qState.revealCorrig ? 'open' : ''}" id="corrig-accordion">
              <button type="button" class="corrig-toggle-btn" id="btn-corrig-toggle">
                <span>👁️ ${qState.revealCorrig ? 'Masquer le corrigé officiel' : 'Afficher le corrigé officiel'}</span>
                <span>▼</span>
              </button>
              <div class="corrig-content">
                <strong>Corrigé :</strong> ${quiz.rawCorrig}
              </div>
            </div>
          </div>
        </form>

        ${feedbackBannerHtml}
      </section>
    `;
  }

  // --- ÉVÉNEMENTS SPÉCIFIQUES À LA PAGE ---
  function setupPageEvents(page) {
    // Boutons Marquer comme terminé
    const toggleDone = () => {
      state.completedPages[page.id] = !state.completedPages[page.id];
      saveState();
      renderPage(page.id);
      renderSidebar();
    };

    const btnDone = document.getElementById('btn-toggle-done');
    const btnDoneFooter = document.getElementById('btn-footer-toggle-done');
    if (btnDone) btnDone.addEventListener('click', toggleDone);
    if (btnDoneFooter) btnDoneFooter.addEventListener('click', toggleDone);

    // Boutons navigation précédent / suivant
    const btnPrev = document.getElementById('btn-nav-prev');
    const btnNext = document.getElementById('btn-nav-next');
    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        navigateToPage(btnPrev.getAttribute('data-target-id'));
      });
    }
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        navigateToPage(btnNext.getAttribute('data-target-id'));
      });
    }

    // Checkboxes des exercices / livrables
    document.querySelectorAll('.task-checkbox').forEach(chk => {
      const taskKey = chk.getAttribute('data-text');
      if (state.checkedTasks[taskKey]) {
        chk.checked = true;
        chk.closest('.checklist-item')?.classList.add('checked');
      }

      chk.addEventListener('change', () => {
        state.checkedTasks[taskKey] = chk.checked;
        if (chk.checked) {
          chk.closest('.checklist-item')?.classList.add('checked');
        } else {
          chk.closest('.checklist-item')?.classList.remove('checked');
        }
        saveState();
      });
    });

    // Si la page contient un Quiz, brancher la logique du quiz
    if (page.quiz) {
      setupQuizEvents(page.quiz);
    }
  }

  // --- LOGIQUE DU MOTEUR DE QUIZ ---
  function setupQuizEvents(quiz) {
    const form = document.getElementById('quiz-form');
    if (!form) return;

    if (!state.quizStates[quiz.id]) {
      state.quizStates[quiz.id] = {
        answers: {},
        submitted: false,
        score: 0,
        total: quiz.questions.length,
        passed: false,
        attempts: 0,
        revealCorrig: false
      };
    }

    // Gestion du changement d'options (sélection visuelle)
    form.querySelectorAll('.option-input').forEach(input => {
      input.addEventListener('change', () => {
        const item = input.closest('.option-item');
        const qCard = input.closest('.question-card');
        const qNum = parseInt(qCard.getAttribute('data-q-num'), 10);

        if (input.type === 'radio') {
          qCard.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
          if (input.checked) item.classList.add('selected');
          state.quizStates[quiz.id].answers[qNum] = [input.value];
        } else {
          item.classList.toggle('selected', input.checked);
          const checkedValues = Array.from(qCard.querySelectorAll('.option-input:checked')).map(i => i.value);
          state.quizStates[quiz.id].answers[qNum] = checkedValues;
        }
        saveState();
      });
    });

    // Validation du Quiz
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      validateQuiz(quiz);
    });

    // Boutons Réessayer
    const retryButtons = document.querySelectorAll('#btn-quiz-retry, #btn-quiz-retry-alt');
    retryButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        resetQuiz(quiz.id);
      });
    });

    // Accordéon du corrigé
    const corrigBtn = document.getElementById('btn-corrig-toggle');
    const corrigAccordion = document.getElementById('corrig-accordion');
    if (corrigBtn && corrigAccordion) {
      corrigBtn.addEventListener('click', () => {
        corrigAccordion.classList.toggle('open');
        state.quizStates[quiz.id].revealCorrig = corrigAccordion.classList.contains('open');
        corrigBtn.querySelector('span').textContent = state.quizStates[quiz.id].revealCorrig ? '👁️ Masquer le corrigé officiel' : '👁️ Afficher le corrigé officiel';
        saveState();
      });
    }

    // Chronomètre
    if (quiz.timeLimit) {
      setupTimer(quiz.timeLimit);
    }
  }

  function validateQuiz(quiz) {
    const qState = state.quizStates[quiz.id];
    let score = 0;

    quiz.questions.forEach(q => {
      const userAnswers = qState.answers[q.num] || [];
      const correctAnswers = q.correctKeys || [];

      const correctSet = new Set(correctAnswers.map(k => k.toLowerCase()));
      const userSet = new Set(userAnswers.map(k => k.toLowerCase()));

      const isExactMatch = correctSet.size === userSet.size && [...correctSet].every(k => userSet.has(k));
      if (isExactMatch) {
        score++;
      }
    });

    const percent = Math.round((score / quiz.questions.length) * 100);
    const passed = percent >= quiz.targetScore;

    qState.score = score;
    qState.total = quiz.questions.length;
    qState.submitted = true;
    qState.passed = passed;
    qState.attempts = (qState.attempts || 0) + 1;

    // Si réussi, marquer automatiquement la leçon comme terminée
    if (passed) {
      state.completedPages[state.currentPageId] = true;
      triggerConfetti();
    }

    saveState();
    renderPage(state.currentPageId);
    renderSidebar();

    // Scroll doux vers le feedback
    setTimeout(() => {
      const fb = document.querySelector('.feedback-banner');
      if (fb) fb.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  }

  function resetQuiz(quizId) {
    if (!state.quizStates[quizId]) return;
    state.quizStates[quizId].answers = {};
    state.quizStates[quizId].submitted = false;
    state.quizStates[quizId].revealCorrig = false;
    saveState();
    renderPage(state.currentPageId);

    // Reset du timer si présent
    if (timerIsRunning) {
      clearInterval(timerInterval);
      timerIsRunning = false;
    }
  }

  // --- CHRONOMÈTRE (EXAMEN BLANC) ---
  function setupTimer(durationSeconds) {
    const timerDisplay = document.getElementById('timer-display');
    const timerToggleBtn = document.getElementById('timer-toggle-btn');
    const timerResetBtn = document.getElementById('timer-reset-btn');
    const widget = document.getElementById('quiz-timer-widget');

    if (!timerDisplay || !timerToggleBtn) return;

    timerSecondsLeft = durationSeconds;

    const updateDisplay = () => {
      const mins = Math.floor(timerSecondsLeft / 60);
      const secs = timerSecondsLeft % 60;
      timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

      if (timerSecondsLeft <= 120 && timerSecondsLeft > 0) {
        widget?.classList.add('warning');
      } else {
        widget?.classList.remove('warning');
      }
    };

    updateDisplay();

    timerToggleBtn.addEventListener('click', () => {
      if (timerIsRunning) {
        clearInterval(timerInterval);
        timerIsRunning = false;
        timerToggleBtn.textContent = '▶ Reprendre';
      } else {
        timerIsRunning = true;
        timerToggleBtn.textContent = '⏸ Pause';
        timerInterval = setInterval(() => {
          if (timerSecondsLeft > 0) {
            timerSecondsLeft--;
            updateDisplay();
          } else {
            clearInterval(timerInterval);
            timerIsRunning = false;
            timerToggleBtn.textContent = 'Fin du temps';
            alert('⏰ Temps écoulé pour cet examen blanc ! Pensez à valider vos réponses.');
          }
        }, 1000);
      }
    });

    if (timerResetBtn) {
      timerResetBtn.addEventListener('click', () => {
        clearInterval(timerInterval);
        timerIsRunning = false;
        timerSecondsLeft = durationSeconds;
        timerToggleBtn.textContent = '▶ Démarrer';
        updateDisplay();
      });
    }
  }

  // --- ÉVÉNEMENTS GLOBAUX ---
  function setupGlobalEvents() {
    // Bouton thème
    const themeBtn = document.getElementById('btn-theme-toggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    // Bouton collapse sidebar
    const toggleSidebarBtn = document.getElementById('btn-toggle-sidebar');
    const sidebar = document.getElementById('sidebar');
    if (toggleSidebarBtn && sidebar) {
      toggleSidebarBtn.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
          sidebar.classList.toggle('mobile-open');
        } else {
          sidebar.classList.toggle('collapsed');
          state.sidebarCollapsed = sidebar.classList.contains('collapsed');
        }
      });
    }

    // Raccourcis clavier (Alt + Flèche Gauche / Alt + Flèche Droite)
    window.addEventListener('keydown', (e) => {
      if (e.altKey && e.key === 'ArrowRight') {
        e.preventDefault();
        navigateStep(1);
      } else if (e.altKey && e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateStep(-1);
      }
    });

    // Recherche dans la sidebar
    const searchInput = document.getElementById('sidebar-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderSidebar();
      });
    }

    // Filtres de catégories
    document.querySelectorAll('.chip-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.filter = btn.getAttribute('data-filter');
        renderSidebar();
      });
    });

    // Réinitialisation de la progression
    const resetBtn = document.getElementById('btn-reset-progress');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const confirmReset = window.confirm(
          '⚠️ Voulez-vous vraiment réinitialiser toute votre progression (leçons complétées, scores aux quiz et checklists) ?'
        );
        if (confirmReset) {
          localStorage.removeItem(STORAGE_KEY);
          state = {
            currentPageId: COURSE_DATA.pages[0].id,
            completedPages: {},
            quizStates: {},
            checkedTasks: {},
            theme: state.theme,
            filter: 'all',
            searchQuery: '',
            sidebarCollapsed: false
          };
          saveState();
          init();
        }
      });
    }

    // Écouteur de changement de hash d'URL
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash !== state.currentPageId) {
        navigateToPage(hash);
      }
    });
  }

  // --- MOTEUR DE CONFETTIS (LÉGER ET SANS DÉPENDANCE) ---
  function triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#6366f1', '#10b981', '#f59e0b', '#ec4899', '#06b6d4', '#8b5cf6'];
    const particles = [];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 200,
        y: canvas.height * 0.4,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 1.2) * 10,
        gravity: 0.25,
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 10,
        alpha: 1
      });
    }

    let animationId;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let aliveCount = 0;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.vRot;
        p.alpha -= 0.012;

        if (p.alpha > 0) {
          aliveCount++;
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });

      if (aliveCount > 0) {
        animationId = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animationId);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    animate();
  }

  // --- DÉMARRAGE DE L'APPLICATION ---
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
