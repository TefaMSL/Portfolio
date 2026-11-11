/**
 * MULTI-PAGE TRANSLATION ENGINE FOR MOHAMED SAYID LOTFY PORTFOLIO
 * Complete bilingual (Arabic / English) coverage for all 14 internal pages.
 */

const AR_PAGES_DATA = {
  // 01 / SUMMARY
  summary: {
    label: "01 / نبذة عني",
    title: 'نبذة <span class="c">عني</span>',
    box: `<strong>مهندس بنية تحتية وأمن معلومات</strong> بخبرة تزيد عن <strong>5 سنوات من الممارسة الميدانية</strong> في قطاعات المؤسسات الكبرى، الرعاية الصحية، والقطاع المالي في مصر.<br><br>
أشغل حالياً منصب <span class="hla">مدير عمليات تقنية المعلومات (IT Operations Manager)</span> بشركة <span class="hl">Viion</span>، حيث أتولى قيادة وتأمين العمليات التقنية عبر <strong>5 مواقع تشغيلية</strong> بفريق مكون من 5 مهندسين. أمتلك سجلاً حافلاً في ترحيل وتحديث البنى التحتية القديمة إلى مجموعات Hyper-V عالية التوافر (HA)، وأتمتة أكثر من 200 جهاز شبكي عبر بايثون وAnsible، وتطبيق مخازن نسخ احتياطي مقاومة لهجمات الفدية (Veeam RTO أقل من ساعتين)، ورفع الامتثال الأمني لنقاط النهاية من 40% إلى 98%.<br><br>
أحمل خبرة تخصصية عميقة في <strong>تقنية معلومات المستشفيات والمنشآت الطبية</strong> من خلال عملي بمستشفى جمعية الشريعة الرئيسي (عزل وتأمين شبكات أنظمة HIS/PACS خلف جدران حماية Fortinet/Sophos بجاهزية تتخطى 99%)، بالإضافة إلى إدارة وتنسيق مشاريع واستشارات بنية تحتية دولية ومحلية.`,
    stats: [
      { n: "5", l: "سنوات في إدارة مشاريع الـ IT" },
      { n: "5", l: "مواقع تشغيلية مدارة بنجاح" },
      { n: "90%", l: "انخفاض حوادث واختراقات الأمان" },
      { n: "99%+", l: "نسبة استقرار وجاهزية الأنظمة" },
      { n: "200+", l: "أجهزة شبكية تمت أتمتتها بالكامل" }
    ]
  },

  // 02 / EXPERIENCE
  experience: {
    label: "02 / الخبرات العملية",
    title: 'المسيرة <span class="c">المهنية</span>',
    items: [
      {
        date: '<div class="tl-badge">الحالي</div><br>فبراير 2025 – حتى الآن',
        role: "مدير عمليات تقنية المعلومات (مهندس بنية تحتية وأمن)",
        comp: "شركة Viion · دوام كامل",
        bullets: [
          "إعادة تصميم وهندسة الشبكة المؤسسية بالكامل عبر محولات Layer 3 وبروتوكول OSPF وعزل VLANs وجدران حماية محيطية، مما قضى على فترات التوقف الأسبوعية تماماً.",
          "ترحيل 6 خوادم قديمة بنظام Windows Server 2008 R2 إلى بيئة افتراضية متقدمة Hyper-V HA Cluster تعمل على Windows Server 2019.",
          "تطبيق سياسات الأمان الإلزامية GPO (قفل منافذ USB، تشفير BitLocker، وخادم التحديثات WSUS)، مما رفع نسبة الامتثال الأمني من 40% إلى 98%.",
          "أتمتة أخذ النسخ الاحتياطية ومراجعة إعدادات أكثر من 200 جهاز سيسكو باستخدام لغة بايثون (Netmiko/Paramiko) وأداة Ansible.",
          "نشر نظام النسخ الاحتياطي Veeam Backup & Replication بمستودعات بيانات غير قابلة للتعديل (Immutable Repositories) عبر 5 فروع مع تحقيق زمن استعادة (RTO) أقل من ساعتين.",
          "التدرج الوظيفي من إدارة البنية التحتية لموقع واحد إلى قيادة عمليات الـ IT لجميع الفروع الخمسة وإدارة فريق تقني مكون من 5 مهندسين.",
          "قيادة تقييم الموردين والتفاوض الفني (Fortinet مقابل Sophos، Google Workspace مقابل M365) وإعداد مصفوفة الصلاحيات والحوكمة لـ 16 دوراً وظيفياً.",
          "إعداد خطط التعافي من الكوارث (Disaster Recovery Playbooks) وسيناريوهات الطوارئ مع أتمتة الفحص اليومي للأنظمة عبر Google Apps Script."
        ]
      },
      {
        date: "ديسمبر 2023 – فبراير 2025",
        role: "أخصائي شبكات ونظم إدارة",
        comp: "مستشفى جمعية الشريعة الرئيسي",
        bullets: [
          "تأسيس وإعداد بيئة Windows Server 2019 و Active Directory من الصفر لأكثر من 100 مستخدم مع تنظيم الوحدات التنظيمية (OUs)، الـ Group Policy، والـ DNS/DHCP دون أي توقف أثناء الإطلاق.",
          "عزل الأنظمة الطبية الحساسة (HIS، PACS، وأجهزة المعامل) في شبكات VLAN منفصلة خلف جدران حماية Fortinet/Sophos، مما خفض محاولات الوصول غير المصرح بها بنسبة 90%.",
          "بناء بيئة افتراضية قائمة على Hyper-V للأنظمة الطبية الحرجة مع نسخ احتياطي خارج الموقع، وتحقيق استقرار وتوافر للأنظمة بنسبة تتجاوز 99%.",
          "إعادة بناء العمود الفقري للشبكة (Network Core) باستخدام سويتشات Layer 3 وبروتوكولات OSPF و RSTP لمنع عواصف البث (Broadcast Storms).",
          "إرساء جداول نسخ احتياطي صارمة، ونظام تحكم في الوصول متعدد المستويات، وخطة استجابة فورية للحوادث الطارئة."
        ]
      },
      {
        date: "أبريل 2023 – أكتوبر 2023",
        role: "أخصائي دعم فني وتقنية معلومات",
        comp: "شركة Xceed",
        bullets: [
          "تقديم دعم فني متقدم عن بُعد وميدانياً للأجهزة والبرمجيات وشبكات المؤسسات، وحل التذاكر الفنية المعقدة المحولة من المستويات الأولى.",
          "تطبيق دورة عمل لمكتب المساعدة مستندة إلى معايير ITIL مع اتفاقيات مستوى خدمة (SLAs) واضحة، وتصعيد متعدد المراحل، وتقارير أداء شهرية للإدارة."
        ]
      },
      {
        date: '<div class="tl-badge" style="background:var(--acc2);color:var(--txt)">مشاريع</div><br>2020 – حتى الآن',
        role: "استشارات تقنية ودعم البنية التحتية عن بُعد",
        comp: "مشاريع مستقلة ومؤسسية",
        bullets: [
          "<strong>المصرية للاتصالات (WE):</strong> مشروع تحديث الخوادم لتطوير وتحسين بنية الخوادم المؤسسية ورفع كفاءتها التشغيلية.",
          "<strong>بنك الإسكندرية (فرع القاهرة):</strong> عضو أساسي بفريق تجهيز البنية التحتية لفرع البنك؛ مسؤول عن إعداد سويتشات المؤسسات، وتنسيق كابلات الشبكات واختبار الاتصال.",
          "<strong>شركة Art Topia (كندا) و4 شركات عالمية:</strong> إدارة الدعم الفني عن بُعد وتذاكر الأنظمة عبر أدوات الوصول الآمن للأجهزة والبرامج وحل مشاكل الشبكات.",
          "<strong>دعم البنية التحتية (الأرجنتين):</strong> تقديم دعم تقني شامل للبنية التحتية وأنظمة التشغيل عن بُعد لمؤسسة في الأرجنتين.",
          "<strong>منشآت ومراكز طبية خاصة (مصر):</strong> استشارات متخصصة في تصميم الشبكات وتجهيز غرف الخوادم لمنشآت الرعاية الصحية.",
          "<strong>مركز طبي تجميلي (الدقي، القاهرة):</strong> تسليم متكامل لتصميم الشبكات، الكابلات المنظمة، تقسيم الـ VLAN، وتأمين الجدار الناري.",
          "<strong>عيادة طبية تخصصية:</strong> تخطيط وتنفيذ ترحيل خادم البريد الإلكتروني إلى سحابة حديثة بدون أي فقد للبيانات."
        ]
      }
    ]
  },

  // 03 / SKILLS
  skills: {
    label: "03 / المهارات التقنية",
    title: 'ترسانة <span class="c">المهارات</span>',
    categories: [
      {
        label: "إدارة وهندسة الشبكات",
        chips: ["شبكات LAN / WAN / VLAN", "إعداد جدران الحماية", "راوترات وسويتشات سيسكو", "شبكات VPN الآمنة", "بروتوكول OSPF", "تقسيم الشبكات Subnetting", "أمن الشبكات Network Security"]
      },
      {
        label: "إدارة الخوادم والأنظمة",
        chips: ["خوادم Windows Server", "الدليل النشط Active Directory", "خدمات DHCP / DNS", "سياسات المجموعة Group Policy", "الافتراضية Hyper-V", "خوادم VMware", "النسخ والتعافي Backup", "تحديثات SCCM / WSUS", "أساسيات أنظمة Linux"]
      },
      {
        label: "تقنية المعلومات والأمن السيبراني",
        chips: ["استكشاف الأعطال وحلها", "الأمن السيبراني Cybersecurity", "الخدمات السحابية Cloud", "حماية نقاط النهاية EDR", "التوثيق التقني Documentation", "حماية البيانات والتشفير", "الاستجابة للحوادث Incident Response", "أنظمة المراقبة SIEM/IDS", "مبدأ انعدام الثقة Zero-Trust"]
      },
      {
        label: "الديف أوبس والأتمتة",
        chips: ["لغة بايثون Python", "أتمتة Ansible", "حاويات Docker", "برمجة Shell / Bash", "مكتبة Netmiko", "إدارة الإصدارات Git / GitHub", "بيئة Proxmox VE"]
      },
      {
        label: "المهارات الشخصية والقيادية",
        chips: ["القيادة التقنية", "إدارة فرق العمل", "التواصل الفعال", "حل المشكلات المعقدة", "مهارات التفاوض", "خدمة ودعم العملاء", "منهجية العمل المرنة Agile"]
      }
    ],
    barsLabel: "مستويات الكفاءة والاحتراف",
    bars: [
      { name: "سيسكو (CCNA / CCNP)", pct: 92 },
      { name: "جدران الحماية (Fortinet / pfSense)", pct: 88 },
      { name: "خوادم ويندوز و Active Directory", pct: 90 },
      { name: "الأنظمة الافتراضية (VMware / Hyper-V)", pct: 85 },
      { name: "أتمتة الشبكات (Python / Netmiko)", pct: 70 },
      { name: "الحوسبة السحابية (Azure / Cloud)", pct: 75 },
      { name: "أنظمة المستشفيات الطبية (HIS / PACS)", pct: 84 },
      { name: "إدارة وتوزيع أنظمة لينكس (Linux)", pct: 78 }
    ],
    certsLabel: "الشهادات والاعتمادات الرسمية",
    certs: [
      { org: "سيسكو الرسمية · المعرّف: CSCO15040282 · سارية حتى نوفمبر 2028", name: "شهادة سيسكو المعتمدة لمهندسي الشبكات (CCNA)" },
      { org: "أكاديمية سيسكو للشبكات · نوفمبر 2024", name: "CCNAv7: مقدمة في علوم الشبكات والربط" },
      { org: "أكاديمية سيسكو للشبكات · نوفمبر 2024", name: "CCNAv7: التبديل والتوجيه والشبكات اللاسلكية" },
      { org: "أكاديمية سيسكو للشبكات · نوفمبر 2024", name: "CCNAv7: شبكات المؤسسات والأتمتة والأمان" },
      { org: "أكاديمية سيسكو للشبكات · ديسمبر 2024", name: "CCNP Enterprise: Core Networking (ENCOR)" },
      { org: "أكاديمية SCAL · يناير 2025 · رقم: 1010", name: "دورة مسؤول خوادم مايكروسوفت المعتمد MCSA (60 ساعة)" }
    ],
    extraCards: [
      { ico: "🌍", tag: "اللغات", text: "اللغة العربية (اللغة الأم)" },
      { ico: "🇬🇧", tag: "اللغات", text: "اللغة الإنجليزية (مستوى متقدم واحترافي)" },
      { ico: "⚖️", tag: "الموقف التجنيدي", text: "معافى نهائياً وبات من الخدمة العسكرية" }
    ]
  },

  // 04 / PROJECTS
  projects: {
    label: "04 / المشاريع",
    title: 'أبرز <span class="c">المشاريع</span>',
    items: [
      {
        ico: "🏥",
        title: "تحديث وتأمين شبكة المستشفى بالكامل",
        desc: "إعادة بناء وتطوير البنية التحتية لشبكة مستشفى جمعية الشريعة، وعزل مسارات الأجهزة والأنظمة الطبية عن شبكات الضيوف والإدارة، وتحقيق استقرار تشغيلي بنسبة 99.9%.",
        tags: ["عزل الشبكات", "بروتوكول OSPF", "الأمن السيبراني", "تقنية المستشفيات"]
      },
      {
        ico: "🔐",
        title: "ترحيل وتطوير Active Directory للمؤسسة",
        desc: "قيادة ترحيل خوادم الدليل النشط إلى Windows Server 2022 دون دقيقة توقف واحدة. تطبيق سياسات GPO أمنية صارمة على أكثر من 150 جهاز كمبيوتر بالشركة.",
        tags: ["الدليل النشط", "Windows Server", "سياسات GPO", "تأمين المنافذ"]
      },
      {
        ico: "☁️",
        title: "بيئة الخوادم الافتراضية Hyper-V Cluster",
        desc: "دمج واختصار 8 خوادم فيزيائية قديمة داخل بيئة افتراضية متطورة عبر Hyper-V، مما وفر 60% من استهلاك الطاقة مع جدولة نسخ احتياطي دوري آلي.",
        tags: ["Hyper-V", "الافتراضية", "استعادة الكوارث", "خفض التكاليف"]
      },
      {
        ico: "🔥",
        title: "تأمين محيط الشبكة بجدار حماية FortiGate",
        desc: "تثبيت وضبط جدار حماية موحد لمراقبة وإدارة البيانات الصادرة والواردة، وتأسيس أنفاق IPsec VPN آمنة لتسهيل العمل عن بُعد للموظفين والإداريين.",
        tags: ["جدار حماية", "شبكات VPN", "تأمين الشبكات", "اتصال مشفر"]
      },
      {
        ico: "🤖",
        title: "أتمتة إدارة ومراقبة الشبكة ببايثون",
        desc: "تطوير أدوات برمجية مخصصة باستخدام Python ومكتبة Netmiko لأتمتة عمليات أخذ النسخ الاحتياطية وتدقيق الإعدادات عبر 200+ جهاز سيسكو بلحظات.",
        tags: ["Python", "أتمتة الشبكات", "Netmiko", "Ansible"]
      },
      {
        ico: "💾",
        title: "مستودع النسخ الاحتياطي المقاوم للفدية (Veeam)",
        desc: "تطبيق بنية نسخ احتياطي غير قابلة للحذف أو التشفير (Immutable Backup Repository) باستخدام نظام ملفات ZFS ونظام Veeam لضمان تعافي فوري ضد هجمات Ransomware.",
        tags: ["Veeam Backup", "مقاومة الفدية", "نظام ZFS", "RTO < 2h"]
      }
    ]
  },

  // 05 / HOMELAB
  homelab: {
    label: "05 / المختبر الافتراضي",
    title: 'المختبر <span class="c">والأنظمة</span>',
    desc: "بيئة اختبار ومحاكاة معقدة ومتقدمة على مدار الساعة لتجربة بنى تحتية مؤسسية، جدران حماية متعددة، وتدريب حقيقي على سيناريوهات الهجمات والتعافي.",
    nodes: [
      { title: "خادم المحاكاة والافتراضية Proxmox VE", sub: "بيئة KVM/LXC مخصصة لمحاكاة البنى التحتية للمؤسسات واختبار السيناريوهات المعقدة." },
      { title: "مجموعة محولات سيسكو الافتراضية (EVE-NG)", sub: "طوبولوجيا شبكية متقدمة تحاكي 50+ راوتر وسويتش سيسكو بتقنيات OSPF, BGP, MPLS." },
      { title: "جدار حماية افتراضي pfSense / OPNsense", sub: "مختبر اختبار سياسات الوصول، عزل الشبكات، كشف التسلل Suricata، والتشفير." },
      { title: "مختبر المراقبة والتحليل Wazuh SIEM", sub: "نظام تجميع سجلات الأحداث وتحليل التهديدات واختبار استجابة نقاط النهاية للبرمجيات الخبيثة." }
    ]
  },

  // 06 / SERVICES
  services: {
    label: "06 / الخدمات التقنية",
    title: 'الخدمات <span class="c">والحلول</span>',
    items: [
      {
        ico: "🌐",
        title: "هندسة وتأمين شبكات المؤسسات",
        desc: "تصميم وتنفيذ شبكات المؤسسات من الصفر (Layer 2/3 Switching, OSPF Routing, VLANs, VPNs) وحمايتها بجدران حماية متطورة."
      },
      {
        ico: "🖥️",
        title: "إدارة الخوادم والأنظمة الافتراضية",
        desc: "تجهيز خوادم Windows Server و Active Directory والأنظمة الافتراضية (Hyper-V / VMware ESXi) وترحيل الأنظمة القديمة بلا توقف."
      },
      {
        ico: "🏥",
        title: "استشارات وحلول تقنية المستشفيات",
        desc: "خبرة متخصصة في تأمين وعزل شبكات أنظمة الرعاية الصحية الحساسة (HIS, PACS, EMR) وضمان استمرارية عمل المنشآت الطبية."
      },
      {
        ico: "💾",
        title: "استراتيجيات النسخ والتعافي من الكوارث",
        desc: "بناء مستودعات نسخ احتياطي محصنة ضد برمجيات الفدية (Veeam Immutable) مع خطط استعادة فورية (Disaster Recovery Plan)."
      },
      {
        ico: "🤖",
        title: "أتمتة مهام الشبكات والأنظمة",
        desc: "برمجة أدوات أتمتة مخصصة عبر Python و Ansible لإدارة مئات الأجهزة وتدقيق الإعدادات وإصدار تقارير دورية آلياً."
      },
      {
        ico: "🛡️",
        title: "تقييم الأمان وحماية نقاط النهاية",
        desc: "تطبيق معايير التحصين الأمني (GPO Hardening, BitLocker, EDR, WSUS) ومراقبة التهديدات عبر أنظمة SIEM."
      }
    ]
  },

  // 07 / CASE STUDIES
  casestudies: {
    label: "07 / دراسات الحالة",
    title: 'دراسات <span class="c">حالة واقعية</span>',
    cs1: {
      title: "إعادة هندسة البنية التحتية لشبكة شركة Viion",
      client: "شركة Viion · فبراير 2025 – حتى الآن",
      probLbl: "المشكلة والواقع السابق",
      probText: "شبكة مسطحة قديمة تفتقر لأي عزل أو تقسيم (Flat Network)، مما كان يسبب عواصف بث وبطء شديد وفجوات أمنية خطيرة، وفترات توقف أسبوعية تتراوح بين 3 إلى 4 ساعات.",
      solLbl: "الحل الهندسي المنفذ",
      archTitle: "📐 البنية المنفذة: نواة Layer 3 OSPF مع شبكة IPsec مشفرة بين الفروع",
      resLbl: "النتائج بالأرقام الملموسة",
      results: [
        "القضاء التام على فترات التوقف الأسبوعية (صفر دقيقة توقف غير مخطط لها).",
        "ربط مشفر وفوري بين المقر الرئيسي و5 فروع تشغيلية عبر أنفاق IPsec آمنة.",
        "أتمتة الفحص والنسخ الاحتياطي لـ 200+ جهاز سيسكو عبر بايثون وAnsible.",
        "استعادة فورية للخدمات في أقل من ثانية عند انقطاع أي خط رئيسي (Sub-second Failover)."
      ]
    },
    cs2: {
      title: "عزل وتأمين أنظمة مستشفى جمعية الشريعة الرئيسي",
      client: "مستشفى الشريعة · ديسمبر 2023 – فبراير 2025",
      probLbl: "المشكلة والواقع السابق",
      probText: "أجهزة طبية حساسة وأنظمة السجلات الصحية (HIS/PACS) تعمل على نفس شبكة الإنترنت العامة مع أجهزة الإدارة، مما شكل تهديداً خطيراً لخصوصية المرضى وخطر التعرض لبرمجيات الفدية.",
      solLbl: "الحل الهندسي المنفذ",
      archTitle: "🏥 البنية المنفذة: عزل ثلاثي الطبقات عبر جدران نارية لحماية بيانات المرضى",
      resLbl: "النتائج بالأرقام الملموسة",
      results: [
        "انخفاض محاولات الوصول غير المصرح بها للأجهزة الطبية بنسبة 90%.",
        "تحقيق نسبة استقرار وجاهزية 99.9% للأنظمة الطبية الحرجة دون أي انقطاع.",
        "بناء بيئة افتراضية متكاملة للأنظمة مع نسخ احتياطي فوري خارج الموقع.",
        "فصل كامل لشبكات زوار المستشفى عن الشبكات الطبية والإدارية."
      ]
    }
  },

  // 08 / EDUCATION
  education: {
    label: "08 / التعليم والمؤهلات",
    title: 'الخلفية <span class="c">الأكاديمية والشهادات</span>',
    degree: "بكالوريوس نظم المعلومات الإدارية (B.Sc. MIS)",
    school: "معهد العباسية للعلوم التجارية والحاسبات",
    year: "سبتمبر 2019 – يوليو 2023",
    note: "المنهج الدراسي الأساسي: <strong>نظم المعلومات، إدارة قواعد البيانات، تحليل النظم والأعمال، البنية التحتية لتقنية المعلومات للمؤسسات</strong>",
    coursesLabel: "الشهادات المهنية والدورات المتقدمة المعتمدة",
    courses: [
      { ico: "🥇", name: "شهادة سيسكو المعتمدة لمهندسي الشبكات (CCNA)", org: "سيسكو الرسمية · المعرّف: CSCO15040282 · صالحة حتى نوفمبر 2028" },
      { ico: "⚙️", name: "دبلومة الديف أوبس والأتمتة DevOps Diploma (120 ساعة)", org: "أكاديمية SCAL · سبتمبر 2026" },
      { ico: "🛡️", name: "كورس أمن سيسكو المتقدم CCNP Security: SCOR (40 ساعة)", org: "أكاديمية SCAL · أغسطس 2026" },
      { ico: "🤖", name: "كورس أتمتة الأنظمة باستخدام Ansible RH294 (40 ساعة)", org: "أكاديمية SCAL · يونيو 2026" },
      { ico: "🐧", name: "إدارة وتوزيع أنظمة لينكس Linux Administration I & II (64 ساعة)", org: "أكاديمية SCAL · فبراير 2026" },
      { ico: "📜", name: "البرمجة النصية عبر Bash Scripting (20 ساعة)", org: "أكاديمية SCAL · مايو 2025" },
      { ico: "🖥️", name: "دورة مسؤول خوادم مايكروسوفت MCSA 2016 (60 ساعة)", org: "أكاديمية SCAL · يناير 2025 · رقم: 1010" },
      { ico: "🌐", name: "كورس CCNP Enterprise Core (ENCOR)", org: "أكاديمية سيسكو للشبكات عبر SCAL · ديسمبر 2024" },
      { ico: "🔀", name: "مسار CCNAv7 المتكامل (3 أجزاء كاملة)", org: "Introduction to Networks · SRWE · ENSA · سيسكو، نوفمبر 2024" },
      { ico: "🧠", name: "مقدمة في البرمجة والذكاء الاصطناعي (40 ساعة)", org: "أكاديمية SCAL · أبريل 2026" }
    ],
    statusCards: [
      { label: "اللغات المتقنة", val: "العربية (اللغة الأم) · الإنجليزية (مستوى متقدم واحترافي)" },
      { label: "الموقف التجنيدي", val: "معافى نهائياً وبات من الخدمة العسكرية" }
    ]
  },

  // 10 / ACHIEVEMENTS
  achievements: {
    label: "10 / الإنجازات المهنية",
    title: 'أبرز <span class="c">مؤشرات النجاح</span>',
    items: [
      { ico: "🚀", title: "تحسين أداء الشبكة بنسبة +75%", desc: "رفع كفاءة وسرعة الشبكة المؤسسية بنسبة 75% من خلال ضبط التوجيه الأمثل وتقسيم الـ VLANs.", tags: ["شبكات", "تحسين الأداء", "توجيه البيانات"] },
      { ico: "🛡️", title: "خفض الحوادث الأمنية بنسبة 90%", desc: "تحصين البنية التحتية عبر سياسات جدار الحماية متعدد الطبقات وتأمين نقاط النهاية EDR.", tags: ["جدار ناري", "أمن نقاط النهاية", "تحصين الأنظمة"] },
      { ico: "🖥️", title: "ترحيل وتحديث الخوادم القديمة", desc: "نجاح ترحيل خوادم فيزيائية قديمة إلى بيئات افتراضية متطورة، مما قلص تكاليف الهاردوير ورفع الكفاءة.", tags: ["VMware", "Hyper-V", "الافتراضية"] },
      { ico: "👥", title: "تدريب وبناء الفرق التقنية", desc: "توجيه وتدريب مهندسي الدعم الفني الجدد بنجاح، ورفع إنتاجية الفريق وانسجام العمل المشترك.", tags: ["القيادة", "التدريب", "إدارة الفرق"] },
      { ico: "🏥", title: "تأمين بيئة تقنية المستشفيات", desc: "تأسيس بنية تحتية طبية بجاهزية تتخطى 99% مع الالتزام التام بحماية خصوصية بيانات المرضى.", tags: ["تقنية المستشفيات", "الامتثال", "استقرار 99%+"] },
      { ico: "⏱️", title: "تحديث الأنظمة دون انقطاع (Zero Downtime)", desc: "تنفيذ عمليات ترحيل الدليل النشط وشبكة النواة أثناء فترات العمل الحية بالمستشفى دون أي تأثير.", tags: ["ترحيل", "استمرارية العمل", "تخطيط دقيق"] },
      { ico: "🤖", title: "أتمتة إطلاق الخوادم بنسبة 80%", desc: "اختصار وقت نشر وإعداد الخوادم الافتراضية بنسبة 80% عبر نماذج مركزية وقوالب آلية.", tags: ["أتمتة", "برمجة", "كفاءة الوقت"] },
      { ico: "💰", title: "خفض تكاليف الـ IT بنسبة 40%", desc: "تقليص تكاليف التشغيل بنسبة 40% من خلال دمج الخوادم والاعتماد على البرمجيات السحابية والافتراضية.", tags: ["توفير التكاليف", "حلول سحابية", "تحسين الموارد"] }
    ]
  },

  // 11 / TECH LIBRARY
  techlibrary: {
    label: "11 / المكتبة التقنية",
    title: 'قاعدة <span class="c">المعرفة والأوامر</span>',
    filterBtns: [
      { id: "all", txt: "الكل" },
      { id: "networking", txt: "الشبكات" },
      { id: "security", txt: "الأمن السيبراني" },
      { id: "windows server", txt: "ويندوز سيرفر" },
      { id: "scripting", txt: "البرمجة والأتمتة" },
      { id: "vmware", txt: "الأنظمة الافتراضية" }
    ],
    items: [
      { ico: "📝", title: "نماذج إعداد راوترات وسويتشات سيسكو", desc: "قوالب موحدة لإعداد بروتوكول OSPF، منافذ الـ Trunk، وقواعد التحصين الأمني على أجهزة Cisco ISR و Catalyst.", tags: ["سيسكو", "شبكات", "أتمتة"] },
      { ico: "🏛️", title: "دليل تهيئة Active Directory و GPO", desc: "توثيق شامل لتطبيق معايير الأمان (قفل الـ USB، تفعيل BitLocker، وجدولة تحديثات WSUS) عبر الـ Group Policy.", tags: ["Active Directory", "ويندوز", "الأمان"] },
      { ico: "🛡️", title: "إعدادات وقواعد جدار الحماية pfSense / FortiGate", desc: "أفضل الممارسات لضبط مناطق الأمان (DMZ)، تقييد المنافذ، وسياسات الوصول للأنظمة الطبية والمالية.", tags: ["جدار حماية", "أمن المعلومات", "pfSense"] },
      { ico: "🐍", title: "سكربتات بايثون لأتمتة فحص الشبكات", desc: "أدوات برمجية لسحب نسخ احتياطية دورية وتدقيق حالة المنافذ وتوليد تقارير أداء آلية عبر Netmiko.", tags: ["Python", "Netmiko", "أتمتة"] },
      { ico: "💾", title: "إجراءات وسياسات التعافي من الكوارث (DRP)", desc: "سيناريوهات الطوارئ وخطوات استعادة خوادم النطاق والبيانات الحيوية باستخدام Veeam في أقل من ساعتين.", tags: ["التعافي من الكوارث", "النسخ الاحتياطي", "Veeam"] }
    ]
  },

  // 12 / ANALYSIS
  analysis: {
    label: "12 / التحليلات والتقييم",
    title: 'رؤى <span class="c">المهارات التقنية</span>',
    domainTitle: "مجالات الكفاءة الهندسية",
    toggleBtnClassic: "عرض تقليدي",
    toggleBtnChart: "عرض المخطط",
    domains: [
      { name: "هندسة وإدارة الشبكات", pct: 92 },
      { name: "إدارة الخوادم والأنظمة", pct: 88 },
      { name: "جدران الحماية والأمن", pct: 85 },
      { name: "تقنية معلومات المستشفيات", pct: 80 },
      { name: "الأنظمة الافتراضية", pct: 82 },
      { name: "الخدمات السحابية", pct: 75 }
    ],
    strengthsTitle: "أبرز نقاط القوة والتميز",
    strengths: [
      { tag: "Medical IT", text: "خبرة مزدوجة نادرة تجمع بين شبكات المؤسسات الكبرى والبنى التحتية للمستشفيات والأنظمة الطبية." },
      { tag: "CCNA + CCNP", text: "شهادات وتدريبات سيسكو المتقدمة في بناء وتشغيل شبكات المؤسسات الضخمة." },
      { tag: "Leadership", text: "قدرة مثبتة على قيادة فرق العمل التقنية وإدارة المشاريع عبر فروع متعددة." },
      { tag: "Security Focus", text: "سجل ناجح في تقليص الحوادث الأمنية بنسبة 90% عبر تحصين دفاعات الشبكة." },
      { tag: "Troubleshooting", text: "مهارة استثنائية في عزل الأعطال وحلها فوراً في بيئات العمل الحية الحرجة." },
      { tag: "Process Automation", text: "تقليص زمن الإجراءات والمهام اليدوية عبر سكربتات بايثون وAnsible." }
    ],
    techTitle: "حزمة التقنيات المستخدمة"
  },

  // 13 / SOCIAL PROOF
  socialproof: {
    label: "13 / شركاء النجاح",
    title: 'آراء <span class="c">وتوصيات الشركاء</span>',
    stats: [
      { n: "5+", l: "سنوات من الاحتراف التقني" },
      { n: "5", l: "فروع ومواقع تشغيلية مدارة" },
      { n: "90%", l: "انخفاض معدل الحوادث الأمنية" },
      { n: "99%+", l: "نسبة استقرار وجاهزية الأنظمة" }
    ],
    testTitle: "شهادات وتوصيات المسؤولين والزملاء",
    items: [
      {
        quote: "محمد مهندس استثنائي يمتلك إلماماً عميقاً بشبكات سيسكو وخوادم ويندوز. أدار البنية التحتية لـ 5 مواقع تشغيلية ونفذ مشاريع ترحيل الخوادم بدقة فائقة وبلا توقف.",
        author: "مسؤول قطاع تقنية المعلومات",
        role: "إشراف هندسي مؤسسي · Viion"
      },
      {
        quote: "يمتلك محمد فهماً نادراً لمتطلبات المنشآت الطبية الحساسة. ساهم بشكل جوهري في تأمين وفصل شبكات الأجهزة الطبية HIS/PACS داخل المستشفى بنجاح تام.",
        author: "إدارة العمليات الطبية",
        role: "مستشفى جمعية الشريعة الرئيسي"
      }
    ],
    credTitle: "المؤسسات والمشاريع المعتمدة",
    creds: [
      { name: "بنك الإسكندرية", sub: "تجهيز البنية التحتية لفرع البنك بالقاهرة" },
      { name: "المصرية للاتصالات (WE)", sub: "مشروع تحديث وتطوير خوادم المؤسسة" },
      { name: "Art Topia (كندا)", sub: "دعم البنية التحتية وإدارة الأنظمة عن بُعد" },
      { name: "مستشفى جمعية الشريعة", sub: "عزل وتأمين شبكات الأنظمة الطبية HIS/PACS" }
    ]
  },

  // 14 / CONTACT
  contact: {
    label: "14 / تواصل معي",
    title: 'ابدأ <span class="c">المحادثة</span>',
    heading: 'دعنا نبني معاً <span class="c">بنية تحتية موثوقة وآمنة</span>',
    intro: "أنا متاح دائماً لمناقشة الفرص الوظيفية الجديدة، قيادة مشاريع البنية التحتية، أو تقديم استشارات متخصصة في الشبكات والأمن السيبراني.",
    cvBtn: "تحميل السيرة الذاتية (CV)",
    vcardBtn: "حفظ كجهة اتصال (vCard)",
    locLbl: "الموقع:", locVal: "القاهرة، مصر",
    phoneLbl: "الهاتف:",
    emailLbl: "البريد:",
    availLbl: "الحالة:", availVal: "متاح للفرص الجديدة والاستشارات",
    formName: "الاسم الكامل",
    formEmail: "البريد الإلكتروني",
    formPhone: "رقم الهاتف / واتساب",
    formMsg: "اكتب رسالتك أو تفاصيل المشروع هنا...",
    formBtn: "إرسال الرسالة الآن ➔"
  },

  // 09 / CERT GALLERY
  certgallery: {
    label: "09 / معرض الشهادات",
    title: 'الشهادات <span class="c">المعتمدة</span>'
  }
};

/**
 * Capture original English innerHTML for all pages on boot.
 */
let ORIGINAL_EN_PAGES = {};

function initPageTranslations() {
  document.querySelectorAll(".pov").forEach(el => {
    const id = el.id.replace("pg-", "");
    if (!ORIGINAL_EN_PAGES[id]) {
      ORIGINAL_EN_PAGES[id] = el.innerHTML;
    }
  });
}

/**
 * Apply translation across all 14 internal pages cleanly.
 */
function applyAllPageTranslations(lang) {
  initPageTranslations();

  if (lang === "en") {
    // Restore English original for all pages
    Object.keys(ORIGINAL_EN_PAGES).forEach(id => {
      const el = document.getElementById("pg-" + id);
      if (el && ORIGINAL_EN_PAGES[id]) {
        el.innerHTML = ORIGINAL_EN_PAGES[id];
      }
    });
    return;
  }

  // ── APPLY ARABIC TRANSLATIONS ──

  // 01 / SUMMARY
  const elSum = document.getElementById("pg-summary");
  if (elSum && AR_PAGES_DATA.summary) {
    const d = AR_PAGES_DATA.summary;
    const phLabel = elSum.querySelector(".ph-label"); if (phLabel) phLabel.textContent = d.label;
    const phH = elSum.querySelector(".ph-h"); if (phH) phH.innerHTML = d.title;
    const sBox = elSum.querySelector(".sum-box"); if (sBox) sBox.innerHTML = d.box;
    const statCards = elSum.querySelectorAll(".stat-card");
    d.stats.forEach((st, idx) => {
      if (statCards[idx]) {
        const n = statCards[idx].querySelector(".stat-n"); if (n) n.textContent = st.n;
        const l = statCards[idx].querySelector(".stat-l"); if (l) l.textContent = st.l;
      }
    });
  }

  // 02 / EXPERIENCE
  const elExp = document.getElementById("pg-experience");
  if (elExp && AR_PAGES_DATA.experience) {
    const d = AR_PAGES_DATA.experience;
    const phLabel = elExp.querySelector(".ph-label"); if (phLabel) phLabel.textContent = d.label;
    const phH = elExp.querySelector(".ph-h"); if (phH) phH.innerHTML = d.title;
    const tlis = elExp.querySelectorAll(".tli");
    d.items.forEach((item, idx) => {
      if (tlis[idx]) {
        const dEl = tlis[idx].querySelector(".tl-date"); if (dEl) dEl.innerHTML = item.date;
        const rEl = tlis[idx].querySelector(".tl-role"); if (rEl) rEl.innerHTML = item.role;
        const cEl = tlis[idx].querySelector(".tl-comp"); if (cEl) cEl.innerHTML = item.comp;
        const ul = tlis[idx].querySelector(".tl-ul");
        if (ul && item.bullets) {
          ul.innerHTML = item.bullets.map(b => `<li>${b}</li>`).join("");
        }
      }
    });
  }

  // 03 / SKILLS
  const elSk = document.getElementById("pg-skills");
  if (elSk && AR_PAGES_DATA.skills) {
    const d = AR_PAGES_DATA.skills;
    const phLabel = elSk.querySelector(".ph-label"); if (phLabel) phLabel.textContent = d.label;
    const phH = elSk.querySelector(".ph-h"); if (phH) phH.innerHTML = d.title;
    
    const sgs = elSk.querySelectorAll(".sg");
    d.categories.forEach((cat, idx) => {
      if (sgs[idx]) {
        const lEl = sgs[idx].querySelector(".sg-label"); if (lEl) lEl.textContent = cat.label;
        const chipsEl = sgs[idx].querySelector(".chips");
        if (chipsEl && cat.chips) {
          chipsEl.innerHTML = cat.chips.map(c => `<span class="chip">${c}</span>`).join("");
        }
      }
    });

    const bLbl = elSk.querySelector(".bars-label"); if (bLbl) bLbl.textContent = d.barsLabel;
    const bRows = elSk.querySelectorAll(".bar-row");
    d.bars.forEach((b, idx) => {
      if (bRows[idx]) {
        const nEl = bRows[idx].querySelector(".bar-name"); if (nEl) nEl.textContent = b.name;
        const fEl = bRows[idx].querySelector(".bar-fill"); if (fEl) fEl.setAttribute("data-pct", b.pct);
        const pEl = bRows[idx].querySelector(".bar-pct"); if (pEl) pEl.textContent = b.pct + "%";
      }
    });

    const cLbl = elSk.querySelector(".certs-label"); if (cLbl) cLbl.textContent = d.certsLabel;
    const ccis = elSk.querySelectorAll(".certs-grid .cci");
    d.certs.forEach((c, idx) => {
      if (ccis[idx]) {
        const cn = ccis[idx].querySelector(".cn");
        if (cn) cn.innerHTML = `<span style="color:var(--acc);display:block;font-size:10px;margin-bottom:3px">${c.org}</span>${c.name}`;
      }
    });

    const extraCards = elSk.querySelectorAll("div[style*='margin-top:22px'] .cci");
    d.extraCards.forEach((ec, idx) => {
      if (extraCards[idx]) {
        const cn = extraCards[idx].querySelector(".cn");
        if (cn) cn.innerHTML = `<span style="color:var(--acc);font-size:10px;letter-spacing:.1em">${ec.tag}</span><br>${ec.text}`;
      }
    });
  }

  // 04 / PROJECTS
  const elProj = document.getElementById("pg-projects");
  if (elProj && AR_PAGES_DATA.projects) {
    const d = AR_PAGES_DATA.projects;
    const phLabel = elProj.querySelector(".ph-label"); if (phLabel) phLabel.textContent = d.label;
    const phH = elProj.querySelector(".ph-h"); if (phH) phH.innerHTML = d.title;
    const cards = elProj.querySelectorAll(".proj-c");
    d.items.forEach((item, idx) => {
      if (cards[idx]) {
        const pn = cards[idx].querySelector(".pn"); if (pn) pn.textContent = item.title;
        const pd = cards[idx].querySelector(".pd"); if (pd) pd.textContent = item.desc;
        const ps = cards[idx].querySelector(".ps");
        if (ps && item.tags) {
          ps.innerHTML = item.tags.map(t => `<span class="pt">${t}</span>`).join("");
        }
      }
    });
  }

  // 05 / HOMELAB
  const elHl = document.getElementById("pg-homelab");
  if (elHl && AR_PAGES_DATA.homelab) {
    const d = AR_PAGES_DATA.homelab;
    const phLabel = elHl.querySelector(".ph-label"); if (phLabel) phLabel.textContent = d.label;
    const phH = elHl.querySelector(".ph-h"); if (phH) phH.innerHTML = d.title;
    const dWidgets = elHl.querySelectorAll(".dash-widget .dash-l span");
    const dLabels = ["مدة التشغيل المتواصل", "متوسط التحميل", "زمن الاستجابة الحية", "الخوادم الافتراضية النشطة"];
    dWidgets.forEach((w, idx) => {
      if (dLabels[idx]) w.textContent = dLabels[idx];
    });
  }

  // 06 / SERVICES
  const elSvc = document.getElementById("pg-services");
  if (elSvc && AR_PAGES_DATA.services) {
    const d = AR_PAGES_DATA.services;
    const phLabel = elSvc.querySelector(".ph-label"); if (phLabel) phLabel.textContent = d.label;
    const phH = elSvc.querySelector(".ph-h"); if (phH) phH.innerHTML = d.title;
    const cards = elSvc.querySelectorAll(".proj-c");
    d.items.forEach((item, idx) => {
      if (cards[idx]) {
        const pn = cards[idx].querySelector(".pn"); if (pn) pn.textContent = item.title;
        const pd = cards[idx].querySelector(".pd"); if (pd) pd.textContent = item.desc;
      }
    });
  }

  // 07 / CASE STUDIES
  const elCs = document.getElementById("pg-casestudies");
  if (elCs && AR_PAGES_DATA.casestudies) {
    const d = AR_PAGES_DATA.casestudies;
    const phLabel = elCs.querySelector(".ph-label"); if (phLabel) phLabel.textContent = d.label;
    const phH = elCs.querySelector(".ph-h"); if (phH) phH.innerHTML = d.title;
    const cards = elCs.querySelectorAll(".cs-card");
    if (cards[0] && d.cs1) {
      const c1 = cards[0];
      const t = c1.querySelector(".cs-title"); if (t) t.textContent = d.cs1.title;
      const cl = c1.querySelector(".cs-client"); if (cl) cl.textContent = d.cs1.client;
      const probL = c1.querySelector(".cs-block-label.problem"); if (probL) probL.textContent = d.cs1.probLbl;
      const probT = c1.querySelector(".cs-sections > div:first-child .cs-text"); if (probT) probT.textContent = d.cs1.probText;
      const solL = c1.querySelector(".cs-block-label.solution"); if (solL) solL.textContent = d.cs1.solLbl;
      const resL = c1.querySelector(".cs-block-label.results"); if (resL) resL.textContent = d.cs1.resLbl;
      const resUl = c1.querySelector(".cs-results-list");
      if (resUl && d.cs1.results) {
        resUl.innerHTML = d.cs1.results.map(r => `<li>${r}</li>`).join("");
      }
    }
    if (cards[1] && d.cs2) {
      const c2 = cards[1];
      const t = c2.querySelector(".cs-title"); if (t) t.textContent = d.cs2.title;
      const cl = c2.querySelector(".cs-client"); if (cl) cl.textContent = d.cs2.client;
      const probL = c2.querySelector(".cs-block-label.problem"); if (probL) probL.textContent = d.cs2.probLbl;
      const probT = c2.querySelector(".cs-sections > div:first-child .cs-text"); if (probT) probT.textContent = d.cs2.probText;
      const solL = c2.querySelector(".cs-block-label.solution"); if (solL) solL.textContent = d.cs2.solLbl;
      const resL = c2.querySelector(".cs-block-label.results"); if (resL) resL.textContent = d.cs2.resLbl;
      const resUl = c2.querySelector(".cs-results-list");
      if (resUl && d.cs2.results) {
        resUl.innerHTML = d.cs2.results.map(r => `<li>${r}</li>`).join("");
      }
    }
  }

  // 08 / EDUCATION
  const elEdu = document.getElementById("pg-education");
  if (elEdu && AR_PAGES_DATA.education) {
    const d = AR_PAGES_DATA.education;
    const phLabel = elEdu.querySelector(".ph-label"); if (phLabel) phLabel.textContent = d.label;
    const phH = elEdu.querySelector(".ph-h"); if (phH) phH.innerHTML = d.title;
    const deg = elEdu.querySelector(".edu-deg"); if (deg) deg.textContent = d.degree;
    const sch = elEdu.querySelector(".edu-sch"); if (sch) sch.textContent = d.school;
    const yr = elEdu.querySelector(".edu-yr"); if (yr) yr.textContent = d.year;
    const note = elEdu.querySelector(".edu-note"); if (note) note.innerHTML = d.note;
    const cLbl = elEdu.querySelector(".courses-label"); if (cLbl) cLbl.textContent = d.coursesLabel;
    const cCards = elEdu.querySelectorAll(".course-c");
    d.courses.forEach((c, idx) => {
      if (cCards[idx]) {
        const cn = cCards[idx].querySelector(".c-name"); if (cn) cn.textContent = c.name;
        const co = cCards[idx].querySelector(".c-org"); if (co) co.textContent = c.org;
      }
    });
    const sCards = elEdu.querySelectorAll("div[style*='display:flex; gap:15px'] > div");
    d.statusCards.forEach((sc, idx) => {
      if (sCards[idx]) {
        const l = sCards[idx].querySelector("div:first-child"); if (l) l.textContent = sc.label;
        const v = sCards[idx].querySelector("div:last-child"); if (v) v.textContent = sc.val;
      }
    });
  }

  // 10 / ACHIEVEMENTS
  const elAch = document.getElementById("pg-achievements");
  if (elAch && AR_PAGES_DATA.achievements) {
    const d = AR_PAGES_DATA.achievements;
    const phLabel = elAch.querySelector(".ph-label"); if (phLabel) phLabel.textContent = d.label;
    const phH = elAch.querySelector(".ph-h"); if (phH) phH.innerHTML = d.title;
    const cards = elAch.querySelectorAll(".proj-c");
    d.items.forEach((item, idx) => {
      if (cards[idx]) {
        const pn = cards[idx].querySelector(".pn"); if (pn) pn.textContent = item.title;
        const pd = cards[idx].querySelector(".pd"); if (pd) pd.textContent = item.desc;
        const ps = cards[idx].querySelector(".ps");
        if (ps && item.tags) {
          ps.innerHTML = item.tags.map(t => `<span class="pt">${t}</span>`).join("");
        }
      }
    });
  }

  // 11 / TECH LIBRARY
  const elTl = document.getElementById("pg-techlibrary");
  if (elTl && AR_PAGES_DATA.techlibrary) {
    const d = AR_PAGES_DATA.techlibrary;
    const phLabel = elTl.querySelector(".ph-label"); if (phLabel) phLabel.textContent = d.label;
    const phH = elTl.querySelector(".ph-h"); if (phH) phH.innerHTML = d.title;
    const fBtns = elTl.querySelectorAll(".tl-filter-btn");
    d.filterBtns.forEach((fb, idx) => {
      if (fBtns[idx]) fBtns[idx].textContent = fb.txt;
    });
    const cards = elTl.querySelectorAll(".proj-c");
    d.items.forEach((item, idx) => {
      if (cards[idx]) {
        const pn = cards[idx].querySelector(".pn"); if (pn) pn.textContent = item.title;
        const pd = cards[idx].querySelector(".pd"); if (pd) pd.textContent = item.desc;
        const ps = cards[idx].querySelector(".ps");
        if (ps && item.tags) {
          ps.innerHTML = item.tags.map(t => `<span class="pt">${t}</span>`).join("");
        }
      }
    });
  }

  // 12 / ANALYSIS
  const elAn = document.getElementById("pg-analysis");
  if (elAn && AR_PAGES_DATA.analysis) {
    const d = AR_PAGES_DATA.analysis;
    const phLabel = elAn.querySelector(".ph-label"); if (phLabel) phLabel.textContent = d.label;
    const phH = elAn.querySelector(".ph-h"); if (phH) phH.innerHTML = d.title;
    const titles = elAn.querySelectorAll(".an-title");
    if (titles[0]) titles[0].textContent = d.domainTitle;
    if (titles[1]) titles[1].textContent = d.strengthsTitle;
    if (titles[2]) titles[2].textContent = d.techTitle;
    const dRows = elAn.querySelectorAll(".domain-row");
    d.domains.forEach((dm, idx) => {
      if (dRows[idx]) {
        const dn = dRows[idx].querySelector(".domain-name"); if (dn) dn.textContent = dm.name;
      }
    });
    const tmItems = elAn.querySelectorAll(".tm-item");
    d.strengths.forEach((st, idx) => {
      if (tmItems[idx]) {
        const txt = tmItems[idx].querySelector(".tm-txt");
        if (txt) txt.innerHTML = `<strong style="color:var(--acc)">${st.tag}</strong> — ${st.text}`;
      }
    });
  }

  // 13 / SOCIAL PROOF
  const elSp = document.getElementById("pg-socialproof");
  if (elSp && AR_PAGES_DATA.socialproof) {
    const d = AR_PAGES_DATA.socialproof;
    const phLabel = elSp.querySelector(".ph-label"); if (phLabel) phLabel.textContent = d.label;
    const phH = elSp.querySelector(".ph-h"); if (phH) phH.innerHTML = d.title;
    const tItems = elSp.querySelectorAll(".sp-trust-item");
    d.stats.forEach((st, idx) => {
      if (tItems[idx]) {
        const l = tItems[idx].querySelector(".sp-trust-l"); if (l) l.textContent = st.l;
      }
    });
    const tLbl = elSp.querySelector(".sp-testimonials-label"); if (tLbl) tLbl.textContent = d.testTitle;
    const cLbl = elSp.querySelector(".sp-creds-label"); if (cLbl) cLbl.textContent = d.credTitle;
    const credCards = elSp.querySelectorAll(".sp-cred");
    d.creds.forEach((cr, idx) => {
      if (credCards[idx]) {
        const cn = credCards[idx].querySelector(".sp-cred-name"); if (cn) cn.textContent = cr.name;
        const cs = credCards[idx].querySelector(".sp-cred-sub"); if (cs) cs.textContent = cr.sub;
      }
    });
  }

  // 14 / CONTACT
  const elCt = document.getElementById("pg-contact");
  if (elCt && AR_PAGES_DATA.contact) {
    const d = AR_PAGES_DATA.contact;
    const phLabel = elCt.querySelector(".ph-label"); if (phLabel) phLabel.textContent = d.label;
    const phH = elCt.querySelector(".ph-h"); if (phH) phH.innerHTML = d.title;
    const h3 = elCt.querySelector(".contact-l h3"); if (h3) h3.innerHTML = d.heading;
    const p = elCt.querySelector(".contact-l p"); if (p) p.textContent = d.intro;
    const ctas = elCt.querySelectorAll(".ctab .cta");
    if (ctas[0]) ctas[0].textContent = d.cvBtn;
    if (ctas[1]) ctas[1].textContent = d.vcardBtn;
    const fInpName = elCt.querySelector("input[name='name']"); if (fInpName) fInpName.placeholder = d.formName;
    const fInpEmail = elCt.querySelector("input[name='email']"); if (fInpEmail) fInpEmail.placeholder = d.formEmail;
    const fInpPhone = elCt.querySelector("input[name='phone']"); if (fInpPhone) fInpPhone.placeholder = d.formPhone;
    const fInpMsg = elCt.querySelector("textarea[name='message']"); if (fInpMsg) fInpMsg.placeholder = d.formMsg;
    const fBtn = elCt.querySelector(".f-btn"); if (fBtn) fBtn.innerHTML = d.formBtn;
  }

  // 09 / CERT GALLERY
  const elCg = document.getElementById("pg-certgallery");
  if (elCg && AR_PAGES_DATA.certgallery) {
    const d = AR_PAGES_DATA.certgallery;
    const phLabel = elCg.querySelector(".ph-label"); if (phLabel) phLabel.textContent = d.label;
    const phH = elCg.querySelector(".ph-h"); if (phH) phH.innerHTML = d.title;
  }
}

// Auto-run on DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
  initPageTranslations();
  if (currentLang === "ar") {
    applyAllPageTranslations("ar");
  }
});
