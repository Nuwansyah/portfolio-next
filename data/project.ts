export const projects = [
  {
    slug: "budget-confirmation-digitalization-system",
    title: {
      id: "Sistem Digitalisasi Konfirmasi Anggaran",
      en: "Budget Confirmation Digitalization System",
    },
    description:{
      id: ["Sistem Digitalisasi Konfirmasi Anggaran merupakan aplikasi internal yang dikembangkan selama program magang di PT Bank Negara Indonesia (BNI) untuk mendigitalisasi proses konfirmasi anggaran pada tim IT Financial Controller pada divisi IT Strategy & Architecture. Aplikasi ini mengganti proses berbasis dokumen fisik dan tanda tangan manual dengan alur kerja digital yang lebih efisien, memungkinkan pengguna mengajukan permintaan, memantau status secara real-time, serta mengotomatisasi proses validasi dan persetujuan menggunakan Microsoft Power Platform."
      ],
      en: ["The Budget Confirmation Digitalization System is an internal application developed during my internship at PT Bank Negara Indonesia (BNI_ to digitalize the budget confirmation process for the IT Financial Controller team. The application replace paper-based forms and handwritten approvals with a streamlined digital workflow, enabling users to submit request, track their status in real time, and automate validation and approval processes using Microsoft Power Platform."],
    },
    keyContribution: {
      id: [
        "Melakukan analisis proses bisnis dan menentukan Microsoft Power Platform sebagai solusi berdasarkan lisensi perusahaan.",
        "Mengembangkan dua aplikasi Power Apps terpisah untuk User dan Admin.",
        "Membangun workflow otomatis menggunakan Power Automate.",
        "Mengimplementasikan pembuatan dokumen PDF secara otomatis berdasarkan template perusahaan.",
        "Mengintegrasikan SharePoint List dan OneDrive sebagai media penyimpanan data dan dokumen.",
        "Mengembangkan sistem pelacakan status permintaan konfirmasi anggaran.",
        "Mendigitalisasi proses validasi dan approval yang sebelumnya dilakukan secara manual.",
      ],
      en: [
        "Analyzed the business process and selected Microsoft Power Platform as the solution based on the company's existing license.",
        "Developed two separate Power Apps applications for User and Admin roles.",
        "Built automated workflows using Power Automate.",
        "Implemented automatic PDF document generation based on the company template.",
        "Integrated SharePoint List and OneDrive as data and document storage.",
        "Developed a request status tracking system for budget confirmation.",
        "Digitalized the validation and approval process that was previously handled manually.",
      ],
    },
    tech: ["Power Apps", "Power Automate", "SharePoint"],
    thumnail: "images/DigitalisasiKA/1.png",
    media: [
      "/images/DigitalisasiKA/1.png",
      "/images/DigitalisasiKA/2.png",
      "/images/DigitalisasiKA/3.png"
    ],
  },
  {
    slug: "salira-resto",
    title: {
      id: "Sistem POS Restoran",
      en: "Restaurant POS System",
    },
    description:{
      id: ["Salira Resto merupakan prototipe sistem Point of Sale (POS) restoran berbasis desktop yang dikembangkan untuk mensimulasikan dan mengelola alur operasional restoran secara menyeluruh. Sistem ini mengintegrasikan proses pemesanan, pengelolaan menu, pemrosesan pesanan oleh dapur, hingga administrasi dalam satu aplikasi."],
      en: ["Salira Resto is a desktop-based Restaurant Point of Sale (POS) system prototype developed to simulate and streamline end-to-end restaurant operations. The application integrates menu ordering, kitchen order processing, inventory management, and administrative tasks into a single system."],
    },
    keyContribution: {
      id: [
        "Menganalisis kebutuhan operasional restoran dan merancang workflow berbasis peran (User, Kasir, Dapur, dan Administrator).",
        "Mengembangkan sistem autentikasi dan manajemen hak akses untuk setiap jenis pengguna.",
        "Membangun fitur pemesanan menu beserta perhitungan total transaksi secara otomatis.",
        "Mengimplementasikan workflow pemrosesan pesanan dari kasir ke dapur dengan status pesanan secara real-time.",
        "Mengembangkan modul manajemen menu, kategori, harga, dan stok makanan.",
        "Mengimplementasikan pencetakan struk transaksi secara otomatis setelah pesanan dikonfirmasi.",
        "Mengembangkan riwayat transaksi, riwayat login pengguna, serta riwayat perubahan stok untuk keperluan monitoring.",
        "Mengintegrasikan aplikasi desktop dengan database SQL menggunakan C# dan .NET Framework.",
      ],
      en: [
        "Analyzed restaurant operational requirements and designed a role-based workflow for Customer, Cashier, Kitchen Staff, and Administrator.",
        "Developed user authentication and role-based access control.",
        "Built menu ordering and automatic transaction calculation features.",
        "Implemented an order processing workflow with real-time status tracking between cashier and kitchen.",
        "Developed menu, category, pricing, and inventory management modules.",
        "Implemented automatic receipt generation and printing after order confirmation.",
        "DBuilt activity logging features, including transaction history, login history, and inventory history.",
        "Integrated the desktop application with a SQL database using C# and .NET Framework.",
      ],
    },
    tech: ["C#", ".Net", "SQL", "Visual Studio"],
    thumnail: "/images/SaliraResto/thumnail.png",
    media: [
      "/images/SaliraResto/1.png",
      "/images/SaliraResto/2.png",
      "/images/SaliraResto/3.png",
      "/images/SaliraResto/4.png",
      "/images/SaliraResto/5.png"
    ],
  },
  {
    slug: "kampung-sebelah",
    title: {
      id: "Kampung Sebelah - Game Simulasi Bertani 2D",
      en: "Kampung Sebelah - 2D Farming Simulation Game",
    },
    description: {
      id: [
        "Kampung Sebelah adalah game simulasi bertani 2D berbasis desktop yang dikembangkan menggunakan Unity sebagai bagian dari tugas akhir. Game ini mengusung latar pedesaan Indonesia dan menghadirkan berbagai sistem inti seperti farming, inventory, crafting, toko, penempatan furnitur, serta manajemen waktu. Fokus utama pengembangan bukan hanya pada gameplay, tetapi juga pada perancangan arsitektur modular sehingga setiap sistem dapat dikembangkan, dipelihara, dan diperluas secara independen untuk mendukung pengembangan fitur di masa depan."
      ],
      en: [
        "Kampung Sebelah is a 2D farming simulation game developed with Unity as my undergraduate thesis project. Inspired by rural Indonesian village life, the game features core gameplay systems including farming, inventory, crafting, shops, furniture placement, and time management. The primary focus of the project was not only gameplay implementation, but also designing a modular architecture that enables each system to be developed, maintained, and extended independently for future feature expansion."
      ],
    },
    keyContribution: {
      id: [
        "Merancang arsitektur modular untuk memisahkan setiap gameplay system menjadi modul yang independen.",
        "Mengembangkan sistem inventory yang mendukung item stackable, equipment, storage, dan sinkronisasi antar UI.",
        "Membangun crop system dengan siklus pertumbuhan berbasis time system dan proses panen.",
        "Mengembangkan sistem penempatan furnitur beserta auto-tiling untuk objek seperti pagar.",
        "Mengimplementasikan save & load system berbasis GUID untuk menyimpan data dunia, bangunan, furnitur, dan progres pemain.",
        "Menerapkan event-driven communication menggunakan Observer Pattern untuk mengurangi dependency antar sistem.",
        "Mengembangkan shop, crafting, selling, dan building interior system yang saling terintegrasi.",
        "Merancang struktur kode yang scalable sehingga fitur seperti NPC, fishing, mining, season, dan multiplayer dapat ditambahkan tanpa perubahan besar pada sistem inti.",
      ],
      en: [
        "Designed a modular architecture that separates gameplay features into independent and reusable systems.",
        "Developed an inventory system supporting stackable items, equipment, storage, and synchronized UI.",
        "Built a crop system featuring time-based growth stages and harvesting mechanics.",
        "Implemented a furniture placement system with automatic tile adaptation for connected objects such as fences.",
        "Developed a GUID-based save and load system to persist world data, buildings, furniture, and player progression.",
        "Applied an event-driven architecture using the Observer Pattern to reduce coupling between gameplay systems.",
        "Implemented integrated shop, crafting, selling, and building interior systems.",
        "Designed the codebase for scalability, allowing future features such as NPC interactions, fishing, mining, seasons, and multiplayer to be added with minimal changes to the core architecture.",
      ],
    },
    tech: ["C#", "Unity"],
    thumnail: "/images/KampungSebelah/1.png",
    media: [
      "/images/KampungSebelah/1.png",
      "https://www.youtube.com/embed/gICyu-lXT8E",
    ],
  },
  {
    slug: "vr-mitigation-simulation",
    title: {
      id: "Simulasi Mitigasi VR - Game Pelatihan Kesiapsiagaan Bencana",
      en: "VR Mitigation Simulation - Disaster Preparedness Training Game",
    },
    description:{
      id: ["indoooooo"],
      en: ["ingreesss"],
    },
    keyContribution: {
      id: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
      en: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    },
    tech: ["C#", "Unity", "VR Framework"],
    thumnail: "/images/VRMitigasi/1.png",
    media: [
      "/images/VRMitigasi/1.png",
      "/images/VRMitigasi/2.png",
      "/images/VRMitigasi/3.png",
    ],
  },
  {
    slug: "on-your-own",
    title: {
      id: "On Your Own - Game Survival Shooter Top-Down 3D",
      en: "On Your Own - 3D Top-Down Shooter Survival Game",
    },
    description: {
      id: [
        "Baris 1",
        "Baris 2",
        "Baris 3"
      ],
      en: [
        "Line 1",
        "Line 2",
        "Line 3"
      ],
    },
    keyContribution: {
      id: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
      en: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    },
    tech: ["C#", "Unity"],
    thumnail: "/images/OnYourOwn/1.png",
    media: [
      "/images/OnYourOwn/1.png",
      "/images/OnYourOwn/2.png",
      "/images/OnYourOwn/3.png",
      "https://www.youtube.com/embed/VPG1YLo_epk",
    ],
  },
  {
    slug: "tree-of-life",
    title: {
      id: "Tree of Life - Game Shooting Top-Down 3D",
      en: "Tree of Life - 3D Top Down Shooting Game",
    },
    description: {
      id: [
        "Baris 1",
        "Baris 2",
        "Baris 3"
      ],
      en: [
        "Line 1",
        "Line 2",
        "Line 3"
      ],
    },
    keyContribution: {
      id: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
      en: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    },
    tech: ["C#", "Unity"],
    thumnail: "images/TreeOfLife/1.png",
    media: [
      "/images/TreeOfLife/1.png",
      "/images/TreeOfLife/2.png",
      "/images/TreeOfLife/3.png",
      "https://www.youtube.com/embed/ToTR7b54010",
    ],
  },
  {
    slug: "edukomp",
    title: {
      id: "Edukomp - Prototipe Platform E-Learning",
      en: "Edukomp - E-Learning Platform Prototype",
    },
    description: {
      id: [
        "Baris 1",
        "Baris 2",
        "Baris 3"
      ],
      en: [
        "Line 1",
        "Line 2",
        "Line 3"
      ],
    },
    keyContribution: {
      id: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
      en: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    },
    tech: ["Next.js", "Clerk", "PostgreSQL", "Vercel"],
    thumnail: "/images/EduKom/1.png",
    media: [
      "/images/EduKom/1.png",
      "/images/EduKom/2.png",
      "/images/EduKom/3.png",
      "/images/EduKom/4.png",
    ],
  },
  {
    slug: "blender3d",
    title: {
      id: "Blender 3D - Rendering Interior & Lingkungan",
      en: "Blender 3D - Interior & Environment Rendering",
    },
    description: {
      id: [
        "Baris 1",
        "Baris 2",
        "Baris 3"
      ],
      en: [
        "Line 1",
        "Line 2",
        "Line 3"
      ],
    },
    tech: ["Blender"],
    thumnail: "/images/Blender/1.png",
    media: [
      "/images/Blender/1.png",
      "/images/Blender/2.png",
      "/images/Blender/3.png",
    ],
  },
  {
    slug: "minecraft-modding",
    title: {
      id: "Modding Minecraft - Konten Kustom & Pengembangan Gameplay",
      en: "Minecraft Modding - Custom Content & Gameplay Extensions",
    },
    description: {
      id: [
        "Baris 1",
        "Baris 2",
        "Baris 3"
      ],
      en: [
        "Line 1",
        "Line 2",
        "Line 3"
      ],
    },
    keyContribution: {
      id: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
      en: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    },
    tech: ["Javascript", "Blockbench"],
    thumnail: "/images/MinecraftModding/1.jpg",
    media: [
      "/images/MinecraftModding/1.jpg",
      "/images/MinecraftModding/2.jpg",
      "/images/MinecraftModding/3.jpg",
    ],
  }
];