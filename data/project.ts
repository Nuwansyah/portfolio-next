import type { Project } from "@/types/project";

export const projects = [
  {
    slug: "company-profile",
    title: {
      id: "Web Profil Perusahaan",
      en: "Web Company Profile",
    },
    description:{
      id: ["Website perusahaan yang saya kembangkan untuk PT Cipta Solusindo Nugraha. Project ini menampilkan informasi mengenai layanan dan produk perusahaan melalui antarmuka web yang responsif, serta dilengkapi fitur demo request yang memungkinkan calon klien mengajukan akses sementara ke demo produk.",
           "Fitur demo request terintegrasi dengan backend ASP.NET Core untuk memproses permintaan, membuat link akses sementara, dan mengirimkannya melalui email. Versi portofolio ini dikembangkan tanpa menggunakan aset perusahaan, data customer, maupun informasi perusahaan yang bersifat rahasia."
      ],
      en: ["Company website I developed for PT Cipta Solusindo Nugraha. The project showcases the company's services and product information through a responsive web interface, along with a demo request feature that allows prospective clients to request temporary access to product demonstrations.",
           "The demo request workflow is integrated with an ASP.NET Core backend to process requests, generate temporary access links, and deliver them via email. This portfolio version is developed without company assets, customer data, or other confidential company information."
      ],    
    },
    keyContribution: {
      id: [
        "Merancang dan mengembangkan website company profile menggunakan Next.js dan TypeScript.",
        "Membangun UI yang responsif dan reusable untuk halaman layanan dan produk perusahaan.",
        "Mengimplementasikan dukungan multibahasa untuk Bahasa Indonesia dan Bahasa Inggris.",
        "Mengembangkan form demo request dan mengintegrasikannya dengan backend API berbasis ASP.NET Core.",
        "Mengimplementasikan sistem akses sementara berbasis token dengan masa berlaku otomatis.",
        "Merancang struktur database PostgreSQL untuk menyimpan data demo request dan token akses.",
        "Mengimplementasikan keamanan token menggunakan hashing untuk mencegah penyimpanan token dalam bentuk plaintext.",
        "Mengimplementasikan pengiriman email otomatis untuk link akses demo yang telah dibuat.",
        "Menyusun struktur backend dengan pemisahan service untuk demo request, pengelolaan token, dan pengiriman email.",
        "Merancang arsitektur aplikasi agar dapat dikembangkan untuk mendukung layanan berbasis web perusahaan di masa mendatang."

      ],
      en: [
        "Designed and developed the company profile website using Next.js and TypeScript.",
        "Built responsive and reusable UI components for the company's service and product pages.",
        "Implemented multilingual content support for Indonesian and English.",
        "Developed the demo request form and integrated it with the ASP.NET Core backend API.",
        "Implemented a token-based temporary access system with automatic link expiration.",
        "Designed the PostgreSQL database structure for demo requests and access tokens.",
        "Implemented token hashing to prevent access tokens from being stored in plaintext.",
        "Implemented automated email delivery for generated demo access links.",
        "Structured the backend into separate services for demo requests, token management, and email delivery.",
        "Designed the application architecture to support future expansion of the company's web-based services."
      ],
    },
    tech: ["React", "Next.js", "C#", "ASP.Net", "PostgreSQL", "MailTrap"],
    thumnail: "images/CompanyProfile/1.png",
    media: [
      "/images/CompanyProfile/1.png",
      "/images/CompanyProfile/2.png",
      "/images/CompanyProfile/3.png",
      "/images/CompanyProfile/4.png",
      "/images/CompanyProfile/5.png",
      "/images/CompanyProfile/6.png",
      "/images/CompanyProfile/7.png",
      "/images/CompanyProfile/8.png"
      
    ],
    attachments: [
      {
        type: "github",
        url: "https://github.com/username/project",
      },
    ],
  },
  {
    slug: "budget-confirmation-digitalization-system",
    title: {
      id: "Sistem Digitalisasi Konfirmasi Anggaran",
      en: "Budget Confirmation Digitalization System",
    },
    description:{
      id: ["Sistem Digitalisasi Konfirmasi Anggaran merupakan aplikasi internal yang dikembangkan selama program magang di PT Bank Negara Indonesia (BNI) untuk mendigitalisasi proses konfirmasi anggaran pada tim IT Financial Controller pada divisi IT Strategy & Architecture.",
           "Aplikasi ini mengganti proses berbasis dokumen fisik dan tanda tangan manual dengan alur kerja digital yang lebih efisien, memungkinkan pengguna mengajukan permintaan, memantau status secara real-time, serta mengotomatisasi proses validasi dan persetujuan menggunakan Microsoft Power Platform."
      ],
      en: ["The Budget Confirmation Digitalization System is an internal application developed during my internship at PT Bank Negara Indonesia (BNI to digitalize the budget confirmation process for the IT Financial Controller team.",
           "The application replace paper-based forms and handwritten approvals with a streamlined digital workflow, enabling users to submit request, track their status in real time, and automate validation and approval processes using Microsoft Power Platform."
      ],
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
      id: ["Prototipe sistem Point of Sale (POS) restoran berbasis desktop yang dikembangkan untuk mensimulasikan dan mengelola alur operasional restoran secara menyeluruh.",
           "Sistem ini mengintegrasikan proses pemesanan, pengelolaan menu, pemrosesan pesanan oleh dapur, hingga administrasi dalam satu aplikasi."
      ],
      en: ["Desktop-based Restaurant Point of Sale (POS) system prototype developed to simulate and streamline end-to-end restaurant operations.",
           "The application integrates menu ordering, kitchen order processing, inventory management, and administrative tasks into a single system."
      ],
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
    attachments: [
      {
        type: "github",
        url: "https://github.com/Nuwansyah/AplikasiPemesananSaliraResto",
      },
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
        "Game simulasi bertani 2D berbasis desktop yang dikembangkan menggunakan Unity sebagai bagian dari tugas akhir. Game ini mengusung latar pedesaan Indonesia dan menghadirkan berbagai sistem inti seperti farming, inventory, crafting, toko, penempatan furnitur, serta manajemen waktu.",
        "Fokus utama pengembangan bukan hanya pada gameplay, tetapi juga pada perancangan arsitektur modular sehingga setiap sistem dapat dikembangkan, dipelihara, dan diperluas secara independen untuk mendukung pengembangan fitur di masa depan."
      ],
      en: [
        "2D farming simulation game developed with Unity as my undergraduate thesis project. Inspired by rural Indonesian village life, the game features core gameplay systems including farming, inventory, crafting, shops, furniture placement, and time management.",
        "The primary focus of the project was not only gameplay implementation, but also designing a modular architecture that enables each system to be developed, maintained, and extended independently for future feature expansion."
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
    attachments: [
      {
        type: "github",
        url: "https://github.com/username/project",
      },
    ],
  },
  {
    slug: "vr-mitigation-simulation",
    title: {
      id: "Simulasi Mitigasi VR - Game Pelatihan Kesiapsiagaan Bencana",
      en: "VR Mitigation Simulation - Disaster Preparedness Training Game",
    },
    description:{
      id: ["Game pelatihan berbasis Virtual Reality yang dikembangkan sebagai media pembelajaran interaktif untuk meningkatkan kesiapsiagaan dalam menghadapi bencana. Project ini mensimulasikan situasi bencana seperti gempa bumi, di mana pemain dapat berinteraksi secara langsung dengan lingkungan virtual dan mengikuti panduan mengenai prosedur keselamatan yang tepat selama kondisi darurat. Project ini dikembangkan selama program magang di Universitas Gunadarma melalui kolaborasi dengan BPBD Cianjur.",
           "Simulasi dirancang untuk memberikan pengalaman pembelajaran yang lebih interaktif dengan menggabungkan lingkungan 3D, interaksi berbasis VR, panduan keselamatan, serta sistem penilaian berdasarkan tindakan yang dilakukan pemain."
    ],
      en: ["Virtual Reality-based training game developed as an interactive learning medium to improve disaster preparedness. The project simulates disaster scenarios such as earthquakes, allowing players to directly interact with the virtual environment and follow guidance on appropriate safety procedures during emergency situations. The project was developed during an internship program at Gunadarma University in collaboration with BPBD Cianjur.",
           "The simulation was designed to provide a more interactive learning experience by combining a 3D environment, VR-based interactions, safety guidance, and a scoring system based on the actions performed by the player."
    ],
    },
    keyContribution: {
      id: [
        "Mengembangkan gameplay simulasi mitigasi bencana berbasis Virtual Reality menggunakan Unity.",
        "Mengimplementasikan sistem interaksi VR menggunakan Unity XR Interaction Toolkit.",
        "Mengembangkan skenario simulasi gempa bumi sebagai bagian dari pelatihan kesiapsiagaan bencana.",
        "Membuat dan mengintegrasikan model 3D objek yang digunakan dalam lingkungan simulasi.",
        "Merancang dan membangun environment 3D untuk mendukung kebutuhan skenario simulasi.",
        "Mengimplementasikan sistem interaksi pemain dengan objek dan lingkungan virtual.",
        "Mengembangkan sistem panduan interaktif untuk mengarahkan pemain mengikuti prosedur keselamatan yang sesuai.",
        "Mengimplementasikan sistem scoring untuk mengevaluasi tindakan pemain selama simulasi.",
        "Merancang alur gameplay berdasarkan tahapan tindakan yang harus dilakukan pemain dalam menghadapi situasi bencana.",
        "Berkontribusi dalam pengembangan project selama program magang di Universitas Gunadarma melalui kolaborasi dengan BPBD Cianjur."
      ],
      en: [
        "Developed a Virtual Reality-based disaster mitigation simulation using Unity.",
        "Implemented VR interaction systems using Unity XR Interaction Toolkit.",
        "Developed an earthquake simulation scenario as part of disaster preparedness training.",
        "Created and integrated 3D object models used throughout the simulation environment.",
        "Designed and built 3D environments to support the simulation scenarios.",
        "Implemented player interactions with objects and the virtual environment.",
        "Developed an interactive guidance system to direct players through appropriate safety procedures.",
        "Implemented a scoring system to evaluate player actions throughout the simulation.",
        "Designed gameplay flow based on the sequence of actions players are expected to perform during a disaster scenario.",
        "Contributed to the project during an internship at Gunadarma University in collaboration with BPBD Cianjur."
      ],
    },
    tech: ["C#", "Unity", "VR Framework"],
    thumnail: "/images/VRMitigasi/1.png",
    media: [
      "/images/VRMitigasi/1.png",
      "/images/VRMitigasi/2.png",
      "/images/VRMitigasi/3.png",
    ],
    attachments: [
      {
        type: "github",
        url: "https://github.com/AchdiyatFT/MitigasiBencanaVRUG",
      },
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
        "3D top-down shooter dengan elemen survival yang berfokus pada pertarungan melawan gelombang zombie yang terus meningkat. Pemain harus bertahan hidup dengan memanfaatkan senjata, mengelola sumber daya, dan mengembangkan kemampuan bertarung untuk menghadapi tingkat kesulitan yang semakin tinggi.",
        "Game ini menggunakan sistem progression yang memungkinkan pemain mengumpulkan mata uang dari aktivitas selama permainan untuk membeli senjata serta membuka area baru."
      ],
      en: [
        "3D top-down shooter survival game focused on surviving increasingly difficult waves of zombies. Players must survive by utilizing available weapons, managing resources, and improving their combat capabilities as the difficulty progressively increases.",
        "The game features a progression system where players can collect in-game currency through gameplay activities to purchase weapons and unlock new areas."
      ],
    },
    keyContribution: {
      id: [
        "Mengimplementasikan sistem pergerakan dan combat pemain, termasuk mekanisme shooting dan interaksi dengan musuh..",
        "Mengembangkan sistem health untuk pemain dan musuh sebagai dasar mekanisme combat.",
        "Mengimplementasikan enemy AI untuk mengatur perilaku dan pergerakan zombie dalam mengejar serta menyerang pemain.",
        "Mengembangkan sistem wave manager untuk mengatur spawning dan progression gelombang zombie dengan tingkat kesulitan yang meningkat.",
        "Mengimplementasikan sistem senjata dan mekanisme pembelian senjata menggunakan mata uang dalam game.",
        "Mengembangkan sistem currency untuk memberikan reward berdasarkan aktivitas pemain selama gameplay.",
        "Mengimplementasikan sistem unlockable area untuk membuka area permainan secara bertahap.",
        "Mengembangkan gameplay progression yang menggabungkan combat, resource management, weapon upgrades, dan eksplorasi area.",
        "Merancang gameplay loop yang menghubungkan combat, enemy waves, resource collection, weapon purchasing, dan area progression."
      ],
      en: [
        "Implemented player movement and combat systems, including shooting mechanics and enemy interactions.",
        "Developed a health system for both players and enemies as the foundation of the combat mechanics.",
        "Implemented enemy AI to control zombie behavior and movement for pursuing and attacking the player.",
        "Developed a wave manager system to control zombie spawning and progressively increasing wave difficulty.",
        "Implemented a weapon system and weapon purchasing mechanics using in-game currency.",
        "Developed an in-game currency system to reward players based on gameplay activities.",
        "Implemented an unlockable area system to progressively expand the playable environment.",
        "Developed player progression by combining combat, resource management, weapon upgrades, and area exploration.",
        "Designed the core gameplay loop around combat, enemy waves, resource collection, weapon purchasing, and area progression."
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
    attachments: [
      {
        type: "github",
        url: "",
      },
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
        "3D top-down shooting yang dibuat secara tim selama program Kampus Merdeka di Agate. Project ini dikerjakan oleh tim yang terdiri dari programmer, game designer, dan artist.",
        "Sebagai Programmer, saya bertanggung jawab mengembangkan beberapa bagian utama gameplay menggunakan Unity dan C#, seperti movement, interaksi pemain, shooting, sistem hit pada enemy, dan sound effect. Saya juga bekerja sama dengan anggota tim lainnya untuk menghubungkan sistem gameplay dengan desain dan aset yang dibuat selama proses pengembangan."
      ],
      en: [
        "3D top-down shooting game developed as a team during the Kampus Merdeka program at Agate. The project was created by a team of programmers, game designers, and artists.",
        "As a Programmer, I was responsible for developing several core gameplay features using Unity and C#, including player movement, player interaction, shooting, enemy hit systems, and sound effects. I also worked with other team members to connect the gameplay systems with the designs and assets created during development."
      ],
    },
    keyContribution: {
      id: [
        "Mengembangkan player movement menggunakan Unity dan C#.",
        "Membuat sistem interaksi pemain dengan objek di dalam game.",
        "Mengembangkan sistem shooting.",
        "Membuat fondasi sistem hit untuk enemy.",
        "Menambahkan sound effect untuk memberikan feedback pada aksi pemain dan kejadian di dalam game.",
        "Mengembangkan game logic yang dibutuhkan untuk mendukung gameplay.",
        "Mengintegrasikan sistem yang dibuat dengan aset dan desain dari anggota tim lainnya.",
        "Bekerja sama dengan programmer, game designer, dan artist selama proses pengembangan."
      ],
      en: [
        "Developed player movement using Unity and C#.",
        "Created player interaction systems with objects in the game.",
        "Developed the shooting system.",
        "Built the foundation of the enemy hit system.",
        "Added sound effects to provide feedback for player actions and in-game events.",
        "Developed game logic needed to support the gameplay.",
        "Integrated the implemented systems with assets and designs from other team members.",
        "Worked with programmers, game designers, and artists throughout the development process."
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
    attachments: [
      {
        type: "external",
        url: "https://itch.io/jam/milestone-3-build-studi-independen-pengembangan-game-agate-2024-angkatan-6/rate/2656542",
      }
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
        "Prototype platform e-learning yang dibuat untuk menyediakan tempat bagi pengguna untuk melihat dan mengikuti berbagai kursus online. Project ini memiliki landing page untuk menampilkan informasi kursus dan mentor, serta sistem akun untuk mengelola pengguna.",
        "Project ini dibuat menggunakan Next.js dengan Clerk untuk authentication dan account management, serta PostgreSQL melalui Aiven untuk menyimpan data kursus."
      ],
      en: [
        "E-learning platform prototype designed to provide users with a place to explore and take online courses. The project includes a landing page for showcasing courses and mentors, along with an account system for managing users.",
        "The project was built with Next.js, using Clerk for authentication and account management, and PostgreSQL through Aiven for storing course data."
      ],
    },
    keyContribution: {
      id: [
        "Mengembangkan web e-learning menggunakan Next.js.",
        "Membuat landing page untuk menampilkan kursus dan informasi mentor.",
        "Mengimplementasikan authentication dan account management menggunakan Clerk.",
        "Mengintegrasikan database PostgreSQL melalui Aiven untuk menyimpan dan mengelola data kursus.",
        "Membuat struktur awal sistem subscription dan pricing.",
        "Menyiapkan struktur untuk pengembangan integrasi pembayaran."
      ],
      en: [
        "Developed an e-learning web application using Next.js.",
        "Built a landing page to showcase courses and mentor information.",
        "Implemented authentication and account management using Clerk.",
        "Integrated PostgreSQL through Aiven to store and manage course data.",
        "Created the initial subscription and pricing structure.",
        "Prepared the application structure for future payment integration."
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
    attachments: [
      {
        type: "github",
        url: "https://github.com/Nuwansyah/EdukompKel5",
      },
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
        "3D model yang dibuat untuk mengeksplorasi proses pembuatan scene interior dan environment menggunakan Blender. Yang berfokus pada bagaimana modeling, material, lighting, dan detail objek dapat digunakan untuk menghasilkan scene 3D yang lebih realistis."
      ],
      en: [
        "Model created to explore the process of building interior and environment scenes using Blender. Focuses on how modeling, materials, lighting, and object details can be combined to create more realistic 3D scenes."
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
        "Kumpulan project modifikasi untuk Minecraft Bedrock Edition yang dibuat untuk menambahkan berbagai konten dan mekanik baru ke dalam game. Project ini mencakup custom mob, item, equipment, dan block.",
        "Beberapa project yang dibuat meliputi NB Monster Expanded untuk menambahkan hostile mob dan tantangan baru, NB Items & Equipment untuk custom tools, weapons, dan items, serta Treasure Vases yang menambahkan block dekoratif dan interaktif."
      ],
      en: [
        "Collection of Minecraft Bedrock Edition projects created to add new content and gameplay mechanics to the game. The projects include custom mobs, items, equipment, and blocks.",
        "The projects include NB Monster Expanded, which adds new hostile mobs and challenges; NB Items & Equipment, which introduces custom tools, weapons, and items; and Treasure Vases, which adds decorative and interactive blocks."
      ],
    },
    keyContribution: {
      id: [
        "Mendesain dan mengembangkan custom mob, item, equipment, dan interactive block untuk Minecraft Bedrock Edition.",
        "Mengimplementasikan behavior dan gameplay mechanics menggunakan JSON dan JavaScript.",
        "Membuat model dan asset 3D menggunakan Blockbench.",
        "Menyesuaikan gameplay mechanics agar tetap sesuai dengan sistem dan gameplay Minecraft.",
        "Mengembangkan konten yang mendukung combat, exploration, dan progression dalam game.",
        "Melakukan testing dan balancing terhadap custom content yang dibuat.",
        "Mempublikasikan mod melalui MCPEDL agar dapat digunakan dan diakses oleh komunitas Minecraft.",
      ],
      en: [
        "Designed and developed custom mobs, items, equipment, and interactive blocks for Minecraft Bedrock Edition.",
        "Implemented behaviors and gameplay mechanics using JSON and JavaScript.",
        "Created 3D models and assets using Blockbench.",
        "Adjusted gameplay mechanics to fit within Minecraft's existing systems and gameplay.",
        "Developed content supporting combat, exploration, and player progression.",
        "Tested and balanced custom content to improve the gameplay experience.",
        "Published mods on MCPEDL for public access and community use.",
      ],
    },
    tech: ["Javascript", "Blockbench"],
    thumnail: "/images/MinecraftModding/1.jpg",
    media: [
      "/images/MinecraftModding/1.jpg",
      "/images/MinecraftModding/2.jpg",
      "/images/MinecraftModding/3.jpg",
    ],
    attachments: [
      {
        type: "external",
        url: "https://mcpedl.com/nb-monster-expanded/",
      },
      {
        type: "external",
        url: "https://mcpedl.com/nb-items-equipment/",
      },
      {
        type: "external",
        url: "https://mcpedl.com/treasure-vases-1-0-0/",
      },
    ],
  }
] satisfies Project[];;