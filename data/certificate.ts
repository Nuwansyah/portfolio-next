export type Certificate = {
    id: string;
    name: {
      id: string;
      en: string;
    };
    date: string;
    file: string;
  };
  
  export const certificates: Certificate[] = [
    {
      id: "programming-competence",
      name: {
        id: "Sertifikat Kompetensi Pemrograman",
        en: "Competency Certificate of Programming",
      },
      date: "2025-05-12",
      file: "/certificates/sertifikat_kopetensi_pemograman.pdf",
    },
    {
      id: "kompetensi-junior-game-programmer",
      name: {
        id: "Sertifikat Kompetensi Junior Game Programmer",
        en: "Competency Certificate of Junior Game Programmer",
      },
      date: "2024-06-24",
      file: "/certificates/sertifikat_kompetensi_junior_game_programmer_24062024.pdf",
    },
    {
      id: "pelatihan-application-implementation",
      name: {
        id: "Sertifikat Pelatihan Implementasi dan Pengembangan Aplikasi",
        en: "Training Certificate of Application Implementation and Development",
      },
      date: "2025-05-27",
      file: "/certificates/sertifikat_pelatihan_application_implementation_and_development_27052025.pdf",
    },
    {
      id: "pelatihan-application-design",
      name: {
        id: "Sertifikat Pelatihan Desain Pengembangan Aplkasi",
        en: "Training Certificate of Application Development Design",
      },
      date: "2024-09-28",
      file: "/certificates/sertifikat_pelatihan_application_development_design_23092024.pdf",
    },
    {
      id: "pelatihan-java-intermediate",
      name: {
        id: "Sertifikat Pelatihan Pemrograman Java untuk Tingkat Lanjut",
        en: "Training Certificate of Java for Intermedate",
      },
      date: "2024-02-19",
      file: "/certificates/sertifikat_pelatihan_java_for_intermediate_19022024.pdf",
    },
    {
      id: "pelatihan-visualbasic-intermediate",
      name: {
        id: "Sertifikat Pelatihan Pemrogramman Visual Basic.Net untuk Tingkat Lanjut",
        en: "Training Certificate of Visual Basic.Net for Intermedate",
      },
      date: "2024-08-19",
      file: "/certificates/sertifikat_pelatihan_visualbasic_for_intermediate_19082024.pdf",
    },
    {
      id: "pelatihan-java-beginner",
      name: {
        id: "Sertifikat Pelatihan Pemrogramman Java untuk Tingkat Pemula",
        en: "Training Certificate of Visual Basic.Net for Beginner",
      },
      date: "2023-02-20",
      file: "/certificates/sertifikat_pelatihan_java_for_beginner_20022023.pdf",
    },
    {
      id: "pelatihan-visualbasic-beginner",
      name: {
        id: "Sertifikat Pelatihan Pemrogramman Visual Basic.Net untuk Tingkat Pemula",
        en: "Training Certificate of Visual Basic.Net for Beginner",
      },
      date: "2024-08-19",
      file: "/certificates/sertifikat_pelatihan_visualbasic_for_beginner_19082024.pdf",
    },
    {
      id: "pelatihan-fundamental_dbms",
      name: {
        id: "Sertifikat Pelatihan Dasar Sistem Manajemen Basis Data",
        en: "Training Certificate of Fundamental DBMS",
      },
      date: "2022-08-22",
      file: "/certificates/sertifikat_pelatihan_fundamental_dbms_04082022.pdf",
    },
    {
      id: "pelatihan-fundamental-desktop",
      name: {
        id: "Sertifikat Pelatihan Dasar Pemrograman Berbasis Desktop",
        en: "Training Certificate of Fundamental Desktop Programming",
      },
      date: "2022-02-21",
      file: "/certificates/sertifikat_pelatihan_fundamental_desktop_programming_21022022.pdf",
    },

  ];