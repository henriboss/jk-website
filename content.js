// JK Pinturas - Content Data
// Dados de conteúdo para internacionalização (PT/ES)

const JK_CONTENT = {
  pt: {
    nav: {
      empresa: "Empresa",
      linhas: "Linhas",
      contato: "Contato"
    },
    hero: {
      eyebrow: "Distribuidora de Tintas",
      subtitle: "Conheça nossas linhas de tintas pensadas especialmente para sua necessidade.",
      cta1: "Ver linhas",
      cta2: "Fale conosco"
    },
    lines: {
      sub: "Formulações selecionadas das melhores marcas — para cada projeto, a tinta certa.",
      items: [
        {
          id: "Auto",
          name: "Linha Automotiva",
          tagline: "Alta performance para o setor automotivo",
          desc: "Tintas de alta resistência e brilho impecável para o setor automotivo. Acabamentos que duram.",
          tags: ["Automotiva", "Brilho", "Resistência"]
        },
        {
          id: "Imob",
          name: "Linha Imobiliária",
          tagline: "Sofisticação para ambientes residenciais",
          desc: "Sofisticação e durabilidade para ambientes residenciais. Cores que transformam espaços.",
          tags: ["Residencial", "Decoração", "Acabamento"]
        },
        {
          id: "Ind",
          name: "Linha Industrial",
          tagline: "Proteção anticorrosiva de alto desempenho",
          desc: "Proteção anticorrosiva e alto desempenho técnico para indústrias e infraestrutura.",
          tags: ["Industrial", "Anticorrosivo", "Proteção"]
        },
        {
          id: "Ferr",
          name: "Ferramentas",
          tagline: "O arsenal completo para acabamento perfeito",
          desc: "O arsenal completo para o acabamento perfeito. Pincéis, rolos e acessórios profissionais.",
          tags: ["Pincéis", "Rolos", "Acessórios"]
        }
      ]
    },
    about: {
      eyebrow: "A empresa",
      body: "Há mais de 30 anos no mercado, a JK Pinturas se tornou referência em distribuição de tintas de qualidade no Paraguai. Nossa missão é oferecer produtos de excelência com atendimento personalizado.",
      yearsSub: "Anos distribuindo cor · Ciudad del Este"
    },
    video: {
      eyebrow: "Conheça a JK",
      body: "Assista ao nosso vídeo institucional e descubra como a JK Pinturas pode transformar seus projetos.",
      placeholder: "Vídeo institucional",
      caption: "Placeholder — substituir pelo vídeo original"
    },
    brands: {
      sub: "Trabalhamos com as melhores marcas nacionais e internacionais para oferecer qualidade superior.",
    },
    location: {
      eyebrow: "Localização",
      title: "JK Pinturas S.A.",
      address: "Avenida Monseñor Rodriguez, Ciudad del Este 7000, Alto Paraná, Paraguay.",
      address2: "Rua Internacional Nro. VII — Km. 7, Barrio Ciudad Nueva"
    },
    contact: {
      eyebrow: "Contato",
      title: "Tem alguma dúvida? Envie uma mensagem.",
      name: "Nome",
      phone: "Número de celular",
      email: "Email",
      message: "Mensagem",
      send: "Enviar",
      waForm: {
        headlines: ["Escolha suas cores", "Fale com a gente", "Tire suas dúvidas"],
        name: "Seu nome",
        message: "Sua mensagem",
        send: "Enviar WhatsApp",
        defaultText: "Olá JK Pinturas, gostaria de saber mais sobre os produtos."
      }
    },
    channels: {
      email: "E-mail",
      phone: "Telefone",
      facebook: "Facebook",
      instagram: "Instagram"
    },
    footer: {
      tagline: "Renove suas cores.",
      contactTitle: "Contato",
      linhasTitle: "Linhas",
      storesTitle: "Nossas Lojas",
      legalTitle: "Legal",
      addressTitle: "Endereço",
      address1: "Avenida Monseñor Rodriguez",
      address2: "Ciudad del Este 7000",
      address3: "Alto Paraná, Paraguay",
      address4: "Rua Internacional Nro. VII — Km. 7",
      address5: "Barrio Ciudad Nueva",
      lines: {
        auto: "Automotiva",
        imob: "Imobiliária",
        ind: "Industrial",
        tools: "Ferramentas"
      },
      copy: "© 2026 JK Pinturas S.A. — Todos os direitos reservados."
    },
    stats: [
      { value: "30+", label: "Anos de experiência" },
      { value: "∞", label: "Cores disponíveis" },
      { value: "4", label: "Linhas de produtos" },
      { value: "100%", label: "Satisfação garantida" }
    ],
    toast: {
      title: "Nova venda!",
      bought: "comprou",
      purchases: [
        { name: "Juan Pérez", city: "Ciudad del Este", product: "Tinta Coral Premium" },
        { name: "María González", city: "Assunção", product: "Verniz Sherwin-Williams" },
        { name: "Carlos López", city: "Ciudad del Este", product: "Tinta Dacar Automotiva" },
        { name: "Ana Rodríguez", city: "Encarnación", product: "Esmalte Sintético" },
        { name: "Pedro Sánchez", city: "Ciudad del Este", product: "Tinta Texturada" },
        { name: "José García", city: "Pedro Juan Caballero", product: "Tinta Acrílica Premium" },
        { name: "Luis Mendoza", city: "Foz do Iguaçu", product: "Tinta Coral Super" },
        { name: "Carmen Díaz", city: "Ciudad del Este", product: "Tinta Impermeabilizante" },
        { name: "Miguel Torres", city: "Assunção", product: "Tinta PVA Gold" },
        { name: "Rosa Martínez", city: "Ciudad del Este", product: "Tinta Esmalte Brilhante" },
        { name: "Jorge Ramírez", city: "Presidente Franco", product: "Tinta Sika Chapisco" },
        { name: "Andrea Fuentes", city: "Ciudad del Este", product: "Tinta Colorgin Spray" },
        { name: "Mario Benítez", city: "Encarnación", product: "Tinta Iquine Premium" },
        { name: "Sandra Vargas", city: "Ciudad del Este", product: "Tinta Epóxi Industrial" },
        { name: "Roberto Casas", city: "Assunção", product: "Tinta Látex Premium" }
      ]
    },
    lgpd: {
      title: "Política de Privacidade - LGPD",
      intro: "A JK Pinturas S.A. respeita sua privacidade e está comprometida em proteger seus dados pessoais.",
      sections: [
        {
          title: "1. Coleta de Dados",
          content: "Coletamos apenas dados necessários para为您提供 um melhor atendimento: nome, email, telefone e mensagem através do nosso formulário de contato."
        },
        {
          title: "2. Finalidade",
          content: "Seus dados são utilizados exclusivamente para: responder suas consultas, enviar orçamentos solicitados e informar sobre novos produtos e promoções."
        },
        {
          title: "3. Proteção",
          content: "Implementamos medidas de segurança adequadas para proteger seus dados contra acesso não autorizado, alteração ou destruição."
        },
        {
          title: "4. Seus Direitos",
          content: "Você tem direito a: acesso aos seus dados, correção, exclusão, portabilidade e revogação do consentimento. Para exercer, entre em contato conosco."
        },
        {
          title: "5. Contato",
          content: "Para questões sobre esta política ou exercícios de seus direitos, contate-nos pelo email: contato@jkpinturas.com"
        }
      ]
    },
    cookies: {
      title: "Política de Cookies",
      intro: "Utilizamos cookies para melhorar sua experiência em nosso site.",
      sections: [
        {
          title: "1. O que são Cookies",
          content: "Cookies são pequenos arquivos de texto armazenados no seu navegador quando você visita um site."
        },
        {
          title: "2. Tipos de Cookies",
          content: "• Essenciais: necessários para o funcionamento do site.\n• Analíticos: nos ajudam a entender como os visitantes usam o site.\n• Marketing: utilizados para exibir anúncios relevantes."
        },
        {
          title: "3. Como Usamos",
          content: "Utilizamos cookies para: lembrar suas preferências, analisar estatísticas de acesso e melhorar nossos serviços."
        },
        {
          title: "4. Gerenciamento",
          content: "Você pode aceitar, rejeitar ou gerenciar cookies através das configurações do seu navegador. A rejeição pode afetar algumas funcionalidades do site."
        }
      ]
    },
    stores: {
      matriz: "Matriz - Ciudad del Este",
      matrizAddress: "Avenida Monseñor Rodriguez, Ciudad del Este",
      asu: "Loja ASU - Assunção",
      asuAddress: "Av. República Argentina, Asunción",
      minga: "Loja Minga Guazú",
      mingaAddress: "PY-02, Km 7 - Minga Guazú"
    },
    cookieBanner: {
      text: "Utilizamos cookies.",
      accept: "Aceitar",
      reject: "Recusar"
    }
  },
  es: {
    nav: {
      empresa: "Empresa",
      linhas: "Líneas",
      contato: "Contacto"
    },
    hero: {
      eyebrow: "Distribuidora de Pinturas",
      subtitle: "Conocé nuestras líneas de pinturas pensadas especialmente para tu necesidad.",
      cta1: "Ver líneas",
      cta2: "Hablemos"
    },
    lines: {
      sub: "Formulaciones seleccionadas de las mejores marcas — para cada proyecto, la pintura correcta.",
      items: [
        {
          id: "Auto",
          name: "Línea Automotriz",
          tagline: "Alta performance para el sector automotriz",
          desc: "Pinturas de alta resistencia y brillo impecable para el sector automotriz. Acabados que duran.",
          tags: ["Automotriz", "Brillo", "Resistencia"]
        },
        {
          id: "Imob",
          name: "Línea Inmobiliaria",
          tagline: "Sofisticación para ambientes residenciales",
          desc: "Sofisticación y durabilidad para ambientes residenciales. Colores que transforman espacios.",
          tags: ["Residencial", "Decoración", "Acabado"]
        },
        {
          id: "Ind",
          name: "Línea Industrial",
          tagline: "Protección anticorrosiva de alto rendimiento",
          desc: "Protección anticorrosiva y alto rendimiento técnico para industrias e infraestructura.",
          tags: ["Industrial", "Anticorrosivo", "Protección"]
        },
        {
          id: "Ferr",
          name: "Herramientas",
          tagline: "El arsenal completo para acabado perfecto",
          desc: "El arsenal completo para el acabado perfecto. Pinceles, rodillos y accesorios profesionales.",
          tags: ["Pinceles", "Rodillos", "Accesorios"]
        }
      ]
    },
    about: {
      eyebrow: "La empresa",
      body: "Hace más de 30 años en el mercado, JK Pinturas se convirtió en referencia en distribución de pinturas de calidad en Paraguay. Nuestra misión es ofrecer productos de excelencia con atención personalizada.",
      yearsSub: "Años distribuyendo color · Ciudad del Este"
    },
    video: {
      eyebrow: "Conocé JK",
      body: "Mirá nuestro video institucional y descubrí cómo JK Pinturas puede transformar tus proyectos.",
      placeholder: "Video institucional",
      caption: "Placeholder — reemplazar por el video original"
    },
    brands: {
      sub: "Trabajamos con las mejores marcas nacionales e internacionales para ofrecer calidad superior.",
    },
    location: {
      eyebrow: "Ubicación",
      title: "JK Pinturas S.A.",
      address: "Avenida Monseñor Rodriguez, Ciudad del Este 7000, Alto Paraná, Paraguay.",
      address2: "Rua Internacional Nro. VII — Km. 7, Barrio Ciudad Nueva"
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Tenés alguna duda? Envianos un mensaje.",
      name: "Nombre",
      phone: "Número de teléfono",
      email: "Correo electrónico",
      message: "Mensaje",
      send: "Enviar",
      waForm: {
        headlines: ["Elige tus colores", "Contáctanos", "Haz tus preguntas"],
        name: "Tu nombre",
        message: "Tu mensaje",
        send: "Enviar WhatsApp",
        defaultText: "Hola JK Pinturas, me gustaría saber más sobre los productos."
      }
    },
    channels: {
      email: "Correo electrónico",
      phone: "Teléfono",
      facebook: "Facebook",
      instagram: "Instagram"
    },
    footer: {
      tagline: "Renová tus colores.",
      contactTitle: "Contacto",
      linhasTitle: "Líneas",
      storesTitle: "Nuestras Tiendas",
      legalTitle: "Legal",
      addressTitle: "Dirección",
      address1: "Avenida Monseñor Rodriguez",
      address2: "Ciudad del Este 7000",
      address3: "Alto Paraná, Paraguay",
      address4: "Calle Internacional Nro. VII — Km. 7",
      address5: "Barrio Ciudad Nueva",
      lines: {
        auto: "Automotriz",
        imob: "Inmobiliaria",
        ind: "Industrial",
        tools: "Herramientas"
      },
      copy: "© 2026 JK Pinturas S.A. — Todos los derechos reservados."
    },
    stats: [
      { value: "30+", label: "Años de experiencia" },
      { value: "∞", label: "Colores disponibles" },
      { value: "4", label: "Líneas de productos" },
      { value: "100%", label: "Satisfacción garantizada" }
    ],
toast: {
      title: "¡Nueva venta!",
      bought: "compró",
      purchases: [
        { name: "Juan Pérez", city: "Ciudad del Este", product: "Pintura Coral Premium" },
        { name: "María González", city: "Asunción", product: "Barniz Sherwin-Williams" },
        { name: "Carlos López", city: "Ciudad del Este", product: "Pintura Dacar Automotriz" },
        { name: "Ana Rodríguez", city: "Encarnación", product: "Esmalte Sintético" },
        { name: "Pedro Sánchez", city: "Ciudad del Este", product: "Pintura Texturizada" },
        { name: "Mario Benítez", city: "Pedro Juan Caballero", product: "Pintura Acrílica Premium" },
        { name: "Lucas Martins", city: "Foz do Iguaçu", product: "Pintura Coral Super" },
        { name: "Carmen Díaz", city: "Ciudad del Este", product: "Pintura Impermeabilizante" },
        { name: "Miguel Torres", city: "Asunción", product: "Pintura PVA Gold" },
        { name: "Rosa Martínez", city: "Ciudad del Este", product: "Pintura Esmalte Brillante" },
        { name: "Jorge Ramírez", city: "Presidente Franco", product: "Pintura Sika Chapisco" },
        { name: "Andrea Fuentes", city: "Ciudad del Este", product: "Pintura Colorgin Spray" },
        { name: "Luis Vargas", city: "Encarnación", product: "Pintura Iquine Premium" },
        { name: "Sandra Ortega", city: "Ciudad del Este", product: "Pintura Epóxi Industrial" },
        { name: "Roberto Casas", city: "Asunción", product: "Pintura Látex Premium" }
      ]
    },
    lgpd: {
      title: "Política de Privacidad - LGPD",
      intro: "JK Pinturas S.A. respeta su privacidad y está comprometida a proteger sus datos personales.",
      sections: [
        {
          title: "1. Recolección de Datos",
          content: "Solo recopilamos datos necesarios para ayudarle: nombre, email, teléfono y mensaje a través de nuestro formulario de contacto."
        },
        {
          title: "2. Finalidad",
          content: "Sus datos se utilizan exclusivamente para: responder sus consultas, enviar presupuestos solicitados e informar sobre nuevos productos y promociones."
        },
        {
          title: "3. Protección",
          content: "Implementamos medidas de seguridad adecuadas para proteger sus datos contra acceso no autorizado, alteración o destrucción."
        },
        {
          title: "4. Sus Derechos",
          content: "Usted tiene derecho a: acceso a sus datos, corrección, eliminación, portabilidad y revocación del consentimiento. Para ejercer, contáctenos."
        },
        {
          title: "5. Contacto",
          content: "Para cuestiones sobre esta política o ejercicio de sus derechos, contáctenos al email: contacto@jkpinturas.com"
        }
      ]
    },
    cookies: {
      title: "Política de Cookies",
      intro: "Utilizamos cookies para mejorar su experiencia en nuestro sitio.",
      sections: [
        {
          title: "1. Qué son Cookies",
          content: "Cookies son pequeños archivos de texto almacenados en su navegador cuando visita un sitio web."
        },
        {
          title: "2. Tipos de Cookies",
          content: "• Esenciales: necesarios para el funcionamiento del sitio.\n• Analíticos: nos ayudan a entender cómo los visitantes usan el sitio.\n• Marketing: utilizados para mostrar anuncios relevantes."
        },
        {
          title: "3. Cómo Usamos",
          content: "Utilizamos cookies para: recordar sus preferencias, analizar estadísticas de acceso y mejorar nuestros servicios."
        },
        {
          title: "4. Gestión",
          content: "Puede aceptar, rechazar o gestionar cookies a través de la configuración de su navegador. El rechazo puede afectar algunas funcionalidades del sitio."
        }
      ]
    },
    stores: {
      matriz: "Matriz - Ciudad del Este",
      matrizAddress: "Avenida Monseñor Rodriguez, Ciudad del Este",
      asu: "Tienda ASU - Asunción",
      asuAddress: "Av. República Argentina, Asunción",
      minga: "Tienda Minga Guazú",
      mingaAddress: "PY-02, Km 7 - Minga Guazú"
    },
    cookieBanner: {
      text: "Utilizamos cookies.",
      accept: "Aceptar",
      reject: "Rechazar"
    }
  }
};

const JK_CHANNELS = {
  email: "contato@jkpinturas.com",
  phone: "(+59561)574 174",
  phoneHref: "tel:+59561574174",
  facebook: "JK Pinturas",
  facebookHref: "https://facebook.com/jkpinturas",
  instagram: "@jkpinturas",
  instagramHref: "https://instagram.com/jkpinturas"
};
