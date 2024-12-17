export const title = `CreDiCo ${new Date().getFullYear()}`
export const configuration = {
  participant: {
    title: 'Учасникам',
    mapping: {
      ua: {
        nameUA: {
          pos: [0, 1830],
          fontsize: 150,
          centerX: true,
        },
      },
      en: {
        nameEN: {
          pos: [0, 1830],
          fontsize: 150,
          centerX: true,
        },
      },
    },
  },
  mentor: {
    title: 'Викладачам',
    mapping: {
      ua: {
        nameUA: {
          pos: [0, 1080],
          color: [0, 0, 0],
          fontsize: 150,
          centerX: true,
        },
      },
      en: {
        nameEN: {
          pos: [0, 1080],
          color: [0, 0, 0],
          fontsize: 150,
          centerX: true,
        },
      },
    },
  },
  diplomas: {
    title: 'Переможцям',
    mapping: {
      ua: {
        nameUA: {
          pos: [0, 1660],
          color: [0, 0, 0],
          fontsize: 135,
          centerX: true,
        },
        nominationUA: {
          pos: [751.76, 2352],
          fontsize: 90,
          centerX: false,
        },
        placeUA: {
          pos: [1363, 1870],
          fontsize: 100,
          centerX: false,
        },
      },
      en: {
        nameEN: {
          pos: [0, 1660],
          fontsize: 135,
          centerX: true,
        },
        nominationEN: {
          pos: [751.76, 2352],
          fontsize: 90,
          centerX: false,
        },
        placeEN: {
          pos: [1050, 1870],
          fontsize: 100,
          centerX: false,
        },
      },
    },
  },
}
