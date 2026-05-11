// JK Pinturas - Sistema de Internacionalização
// Uso: incluir este arquivo após content.js

(function() {
  'use strict';

  const I18n = {
    lang: localStorage.getItem('jk.lang') || 'pt',

    init() {
      this.apply();
      this.bindEvents();
      this.initCookieBanner();
      this.initPolicyModal();
    },

    apply() {
      document.documentElement.lang = this.lang;
      this.applyCookieBanner();
      this.applyNav();
      this.applyHero();
      this.applyLines();
      this.applyAbout();
      this.applyVideo();
      this.applyBrands();
      this.applyLocation();
      this.applyContact();
      this.applyChannels();
      this.applyFooter();
      this.applyPlaceholders();
      this.applyI18nAttributes();
      this.updateLangSwitch();
      this.renderStats();
      this.renderLines();
      this.renderChannels();
      this.renderTicker();
      this.applyWaForm();
      this.renderColorMarquee();
    },

    t(path) {
      return path.split('.').reduce((obj, key) => obj?.[key], JK_CONTENT[this.lang]);
    },

    setText(selector, value) {
      const el = document.querySelector(selector);
      if (el && value != null) el.textContent = value;
    },

    setHtml(selector, value) {
      const el = document.querySelector(selector);
      if (el && value != null) el.innerHTML = value;
    },

    applyNav() {
      document.querySelectorAll('[data-i18n^="nav."]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = this.t(key);
      });
    },

    applyHero() {
      this.setText('[data-i18n="hero.subtitle"]', this.t('hero.subtitle'));
      this.setText('[data-i18n="hero.cta1"]', this.t('hero.cta1'));
      this.setText('[data-i18n="hero.cta2"]', this.t('hero.cta2'));
    },

    applyCookieBanner() {
      const cookieText = document.getElementById('cookie-text');
      const cookieTextExtra = document.getElementById('cookie-text-extra');
      const cookieReject = document.getElementById('cookie-reject');
      const cookieAccept = document.getElementById('cookie-accept');
      
      const banner = this.t('cookieBanner');
      if (!banner) return;
      
      if (cookieText) cookieText.textContent = banner.text;
      if (cookieTextExtra) {
        cookieTextExtra.textContent = this.lang === 'pt' 
          ? 'para melhorar sua experiência.' 
          : 'para mejorar su experiencia.';
      }
      if (cookieReject) cookieReject.textContent = banner.reject;
      if (cookieAccept) cookieAccept.textContent = banner.accept;
    },

    applyLines() {
      const eyebrow = this.lang === 'pt' ? '04 linhas + ferramentas' : '04 líneas + herramientas';
      this.setText('[data-i18n="lines.eyebrow"]', eyebrow);
      this.setHtml('[data-i18n="lines.title"]', this.lang === 'pt'
        ? 'A tinta <em>exata</em> para cada projeto.'
        : 'La pintura <em>exacta</em> para cada proyecto.');
      this.setText('[data-i18n="lines.sub"]', this.t('lines.sub'));
    },

    applyAbout() {
      this.setText('[data-i18n="about.eyebrow"]', this.t('about.eyebrow'));
      this.setHtml('[data-i18n="about.title"]', this.lang === 'pt'
        ? 'Criada para <em>colorir</em> sua vida'
        : 'Creada para <em>colorear</em> tu vida');
      this.setText('[data-i18n="about.body"]', this.t('about.body'));
      this.setText('[data-i18n="about.yearsSub"]', this.lang === 'pt'
        ? 'Anos distribuindo cor · Ciudad del Este'
        : 'Años distribuyendo color · Ciudad del Este');
    },

    applyVideo() {
      this.setText('[data-i18n="video.eyebrow"]', this.t('video.eyebrow'));
      this.setHtml('[data-i18n="video.title"]', this.lang === 'pt'
        ? 'JK Pinturas, sempre pensando em <em>você</em>'
        : 'JK Pinturas, siempre pensando en <em>vos</em>');
      this.setText('[data-i18n="video.body"]', this.t('video.body'));
      this.setText('[data-i18n="video.placeholder"]', this.t('video.placeholder'));
      this.setText('[data-i18n="video.caption"]', this.lang === 'pt'
        ? 'Placeholder — substituir pelo vídeo original'
        : 'Placeholder — reemplazar por el video original');
    },

    applyBrands() {
      this.setHtml('[data-i18n="brands.title"]', this.lang === 'pt'
        ? 'Parceiros que confiam na <em>nossa distribuição</em>'
        : 'Proveedores que confían en <em>nuestra distribución</em>');
      this.setText('[data-i18n="brands.sub"]', this.t('brands.sub'));
    },

    applyLocation() {
      this.setText('[data-i18n="location.eyebrow"]', this.t('location.eyebrow'));
      this.setText('[data-i18n="location.title"]', this.t('location.title'));
      this.setText('[data-i18n="location.address"]', this.t('location.address'));
      this.setText('[data-i18n="location.address2"]', this.t('location.address2'));
    },

    applyContact() {
      this.setText('[data-i18n="contact.eyebrow"]', this.t('contact.eyebrow'));
      this.setHtml('[data-i18n="contact.title"]', this.lang === 'pt'
        ? 'Tem alguma dúvida? Envie uma <em>mensagem</em>.'
        : '¿Tenés alguna duda? Envianos un <em>mensaje</em>.');
      this.setText('[data-i18n="contact.send"]', this.t('contact.send'));
      this.setText('[data-i18n="channels.phone"]', this.lang === 'pt' ? 'Telefone' : 'Teléfono');
    },

    applyFooter() {
      this.setHtml('[data-i18n="footer.tagline"]', this.lang === 'pt'
        ? 'Renove suas <em>cores.</em>'
        : 'Renová tus <em>colores.</em>');
      this.setText('[data-i18n="footer.contactTitle"]', this.t('footer.contactTitle'));
      this.setText('[data-i18n="footer.linhasTitle"]', this.t('footer.linhasTitle'));
      this.setText('[data-i18n="footer.addressTitle"]', this.t('footer.addressTitle'));

      const footer = this.t('footer');
      if (footer) {
        this.setText('[data-i18n="footer.address1"]', footer.address1);
        this.setText('[data-i18n="footer.address2"]', footer.address2);
        this.setText('[data-i18n="footer.address3"]', footer.address3);
        this.setText('[data-i18n="footer.address4"]', footer.address4);
        this.setText('[data-i18n="footer.address5"]', footer.address5);
      }

      const lines = this.t('footer.lines');
      if (lines) {
        this.setText('[data-i18n="footer.lines.auto"]', lines.auto);
        this.setText('[data-i18n="footer.lines.imob"]', lines.imob);
        this.setText('[data-i18n="footer.lines.ind"]', lines.ind);
        this.setText('[data-i18n="footer.lines.tools"]', lines.tools);
      }

      this.setText('[data-i18n="footer.copy"]', this.t('footer.copy'));
    },

    applyChannels() {
      const channels = this.t('channels');
      if (!channels) return;

      this.setText('[data-i18n="channels.email"]', channels.email);
      this.setText('[data-i18n="channels.phone"]', channels.phone);
      this.setText('[data-i18n="channels.facebook"]', channels.facebook);
      this.setText('[data-i18n="channels.instagram"]', channels.instagram);
    },

    applyPlaceholders() {
      document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        const value = this.t(key);
        if (value) el.placeholder = value;
      });
    },

    applyI18nAttributes() {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = this.t(key);
        if (value) {
          el.textContent = value;
        }
      });
    },

updateLangSwitch() {
      document.querySelectorAll('.lang-switch button, .mobile-lang-switch button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === this.lang);
        btn.setAttribute('aria-selected', btn.dataset.lang === this.lang);
      });
    },

    renderStats() {
      const wrap = document.getElementById('stats');
      if (!wrap) return;
      wrap.innerHTML = JK_CONTENT[this.lang].stats.map(s => `
        <div class="stat-item">
          <div class="stat-value">${s.value}</div>
          <div class="stat-label">${s.label}</div>
        </div>
      `).join('');
    },

    renderLines() {
      const wrap = document.getElementById('lines-grid');
      if (!wrap) return;
      const items = JK_CONTENT[this.lang].lines.items;
      wrap.innerHTML = items.map((it, i) => {
        const num = String(i + 1).padStart(2, '0');
        return `
          <article class="line-card" data-line="${it.id.toLowerCase()}">
            <div class="line-cap">
              <span class="line-num">${num} / ${String(items.length).padStart(2, '0')}</span>
              <span class="line-tag">${it.id}</span>
              <h3>${it.name.replace(/(Linha|Línea)/, '<em>$1</em>')}</h3>
            </div>
            <div class="line-body">
              <p class="line-tagline">"${it.tagline}"</p>
              <p class="line-desc">${it.desc}</p>
              <div class="line-tags">${it.tags.map(t => `<span>${t}</span>`).join('')}</div>
            </div>
          </article>
        `;
      }).join('');
    },

    renderChannels() {
      const ch = window.JK_CHANNELS;
      if (!ch) return;

      const emailEl = document.getElementById('ch-email');
      if (emailEl) {
        emailEl.href = 'mailto:' + ch.email;
        emailEl.querySelector('.channel-value').textContent = ch.email;
      }

      const phoneEl = document.getElementById('ch-phone');
      if (phoneEl) {
        phoneEl.href = ch.phoneHref;
        phoneEl.querySelector('.channel-value').textContent = ch.phone;
      }

      const fbEl = document.getElementById('ch-fb');
      if (fbEl) {
        fbEl.href = ch.facebookHref;
        fbEl.querySelector('.channel-value').textContent = ch.facebook;
      }

      const igEl = document.getElementById('ch-ig');
      if (igEl) {
        igEl.href = ch.instagramHref;
        igEl.querySelector('.channel-value').textContent = ch.instagram;
      }

      const footerChannels = document.getElementById('footer-channels');
      if (footerChannels) {
        footerChannels.innerHTML = `
          <li><a href="mailto:${ch.email}">${ch.email}</a></li>
          <li><a href="${ch.phoneHref}">${ch.phone}</a></li>
          <li><a href="${ch.facebookHref}" target="_blank">Facebook</a></li>
          <li><a href="${ch.instagramHref}" target="_blank">Instagram</a></li>
        `;
      }
    },

    renderTicker() {
      const wrap = document.getElementById('ticker');
      if (!wrap) return;
      const words = this.lang === 'pt'
        ? ['Automotiva', 'Imobiliária', 'Industrial', 'Anticorrosivo', 'Epóxi', 'Vernizes', 'Texturas', 'Repintura', 'Sinalização', 'Desde 2004']
        : ['Automotriz', 'Inmobiliaria', 'Industrial', 'Anticorrosivo', 'Epoxi', 'Barnices', 'Texturas', 'Repintado', 'Señalización', 'Desde 2004'];
      const row = words.map(w => `<span>${w}<span class="ticker-dot"></span></span>`).join('');
      wrap.innerHTML = row + row;
    },

    renderColorMarquee() {
      const wrap = document.getElementById('color-marquee');
      if (!wrap) return;

      const colors = this.lang === 'pt' ? [
        { name: 'Pérola Rosa', hex: '#E8D7CB' },
        { name: 'Ouro Tucson', hex: '#D9A441' },
        { name: 'Azul Galápagos', hex: '#5B8FB0' },
        { name: 'Festa de Outono', hex: '#E08A5B' },
        { name: 'Verde Bonsai', hex: '#7A9F4F' },
        { name: 'Carmesim', hex: '#B8302A' },
        { name: 'Telha', hex: '#A85540' },
        { name: 'Pinheiro Majestoso', hex: '#3F5544' },
        { name: 'Quindim', hex: '#F2C84C' },
        { name: 'Lilás Pandora', hex: '#A89BCB' },
        { name: 'Bege Europeu', hex: '#D9C9A8' },
        { name: 'Azul Petróleo', hex: '#1F4655' },
        { name: 'Tijolo', hex: '#8E3A2A' },
        { name: 'Mata Atlântica', hex: '#2C5240' },
        { name: 'Canela Pura', hex: '#B07A4E' },
        { name: 'Maçã do Amor', hex: '#C4264F' },
        { name: 'Roxo Luxo', hex: '#5C3A6E' },
        { name: 'Azul Del Rey', hex: '#2A4D8F' },
        { name: 'Floco de Neve', hex: '#F4F2EC' },
        { name: 'Cinza Grafite', hex: '#3A3A3A' },
      ] : [
        { name: 'Perla Rosa', hex: '#E8D7CB' },
        { name: 'Oro Tucson', hex: '#D9A441' },
        { name: 'Azul Galápagos', hex: '#5B8FB0' },
        { name: 'Fiesta de Otoño', hex: '#E08A5B' },
        { name: 'Verde Bonsái', hex: '#7A9F4F' },
        { name: 'Carmesí', hex: '#B8302A' },
        { name: 'Teja', hex: '#A85540' },
        { name: 'Pino Majestuoso', hex: '#3F5544' },
        { name: 'Quindim', hex: '#F2C84C' },
        { name: 'Lila Pandora', hex: '#A89BCB' },
        { name: 'Beige Europeo', hex: '#D9C9A8' },
        { name: 'Azul Petróleo', hex: '#1F4655' },
        { name: 'Ladrillo', hex: '#8E3A2A' },
        { name: 'Selva Atlántica', hex: '#2C5240' },
        { name: 'Canela Pura', hex: '#B07A4E' },
        { name: 'Manzana de Amor', hex: '#C4264F' },
        { name: 'Púrpura Lujo', hex: '#5C3A6E' },
        { name: 'Azul Del Rey', hex: '#2A4D8F' },
        { name: 'Copo de Nieve', hex: '#F4F2EC' },
        { name: 'Gris Grafito', hex: '#3A3A3A' },
      ];

      const isLight = (hex) => {
        const c = hex.replace('#', '');
        const r = parseInt(c.slice(0, 2), 16);
        const g = parseInt(c.slice(2, 4), 16);
        const b = parseInt(c.slice(4, 6), 16);
        return (r * 299 + g * 587 + b * 114) / 1000 > 160;
      };

      const row = colors.map(c => `
        <div class="marquee-swatch ${isLight(c.hex) ? 'light' : 'dark'}" data-color-name="${c.name}" data-color-hex="${c.hex}" style="background: ${c.hex}">
          <span class="marquee-label">${c.name}</span>
        </div>
      `).join('');
      wrap.innerHTML = row + row;
    },

    bindEvents() {
      const buttons = document.querySelectorAll('.lang-switch button, .mobile-lang-switch button');
      buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          e.preventDefault();
          this.lang = btn.dataset.lang;
          localStorage.setItem('jk.lang', this.lang);
          location.reload();
        });
      });

      document.getElementById('color-marquee')?.addEventListener('click', (e) => {
        const swatch = e.target.closest('.marquee-swatch');
        if (!swatch) return;
        const colorName = swatch.dataset.colorName;
        const colorHex = swatch.dataset.colorHex;
        navigator.clipboard.writeText(`${colorName} (${colorHex})`).then(() => {
          this.showCopyFeedback(swatch);
        });
      });
    },

    showCopyFeedback(swatch) {
      const label = swatch.querySelector('.marquee-label');
      if (!label) return;
      const originalText = label.textContent;
      label.textContent = '✓ Copiado!';
      setTimeout(() => {
        label.textContent = originalText;
      }, 1500);
    },

    applyWaForm() {
      const formName = document.querySelector('.wa-form input[name="nome"]');
      const formMessage = document.querySelector('.wa-form textarea[name="mensagem"]');
      const formSend = document.querySelector('.wa-form .btn-send');
      const waDirect = document.querySelector('.wa-direct');
      const headline = document.querySelector('.wa-typewriter');
      
      if (!JK_CONTENT || !formName || !formMessage || !formSend) return;
      
      const content = JK_CONTENT[this.lang].contact.waForm;
      
      formName.placeholder = content.name;
      formMessage.placeholder = content.message;
      formSend.textContent = content.send;
      
      if (waDirect) {
        waDirect.href = `https://wa.me/595983219798?text=${encodeURIComponent(content.defaultText)}`;
      }
      
      // Typewriter effect controlado por MutationObserver
      if (headline && content.headlines) {
        const phrases = content.headlines;
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeoutId = null;
        
        const typeLoop = () => {
          const currentPhrase = phrases[phraseIndex];
          
          if (!isDeleting) {
            headline.textContent += currentPhrase.charAt(charIndex);
            charIndex++;
            if (charIndex > currentPhrase.length) {
              isDeleting = true;
              timeoutId = setTimeout(typeLoop, 2000);
              return;
            }
            timeoutId = setTimeout(typeLoop, 60);
          } else {
            if (headline.textContent.length > 0) {
              headline.textContent = headline.textContent.slice(0, -1);
              timeoutId = setTimeout(typeLoop, 40);
            } else {
              phraseIndex = (phraseIndex + 1) % phrases.length;
              charIndex = 0;
              isDeleting = false;
              timeoutId = setTimeout(typeLoop, 500);
            }
          }
        };
        
        const stopTypewriter = () => {
          if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
          }
        };
        
        const startTypewriter = () => {
          phraseIndex = 0;
          charIndex = 0;
          isDeleting = false;
          headline.textContent = '';
          timeoutId = setTimeout(typeLoop, 1500);
        };
        
        const overlay = document.querySelector('.wa-overlay');
        if (overlay) {
          const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
              if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                if (overlay.classList.contains('active')) {
                  startTypewriter();
                } else {
                  stopTypewriter();
                }
              }
            });
          });
          
          observer.observe(overlay, { attributes: true });
          
          if (overlay.classList.contains('active')) {
            startTypewriter();
          }
        }
      }
    },

    // Cookie Banner (Bottom Popup)
    initCookieBanner() {
      const banner = document.getElementById('cookie-banner');
      if (!banner) return;

      // Para teste: remova essa linha em produção se quiserremember a escolha
      // localStorage.removeItem('jk.cookies.consent'); // Descomente para testar sempre

      const consent = localStorage.getItem('jk.cookies.consent');
      
      // Mostrar banner apenas se não houve escolha anterior
      if (!consent) {
        // Delay de 1 segundo para animação
        setTimeout(() => {
          banner.classList.add('visible');
        }, 1000);
      }

      document.getElementById('cookie-accept')?.addEventListener('click', () => {
        localStorage.setItem('jk.cookies.consent', 'accepted');
        banner.classList.remove('visible');
      });

      document.getElementById('cookie-reject')?.addEventListener('click', () => {
        localStorage.setItem('jk.cookies.consent', 'rejected');
        banner.classList.remove('visible');
      });
    },

    // Policy Modal
    initPolicyModal() {
      const overlay = document.getElementById('policy-modal-overlay');
      if (!overlay) return;

      const closeBtn = document.getElementById('policy-modal-close');
      const tabs = document.querySelectorAll('.policy-modal-tab');
      const content = document.getElementById('policy-modal-content');

      function openModal(tab = 'lgpd') {
        this.switchPolicyTab(tab);
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }

      function closeModal() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }

      closeBtn?.addEventListener('click', closeModal.bind(this));
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal.call(this);
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) closeModal.call(this);
      });

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          this.switchPolicyTab(tab.dataset.tab);
        });
      });

      // Links in footer
      document.querySelectorAll('[data-policy]').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          openModal.call(this, link.dataset.policy);
        });
      });
    },

    switchPolicyTab(tab) {
      const tabs = document.querySelectorAll('.policy-modal-tab');
      const content = document.getElementById('policy-modal-content');
      const lang = this.lang;

      tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tab));

      const data = JK_CONTENT[lang][tab];
      if (!data) return;

      const titleEl = document.getElementById('policy-modal-title');
      if (titleEl) titleEl.textContent = data.title;

      let html = `<p class="policy-modal-intro">${data.intro}</p>`;
      data.sections.forEach(section => {
        html += `
          <div class="policy-section">
            <h3 class="policy-section-title">${section.title}</h3>
            <p class="policy-section-content">${section.content}</p>
          </div>
        `;
      });
      content.innerHTML = html;
    }
  };

  window.I18n = I18n;
})();