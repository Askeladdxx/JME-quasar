import { ref } from "vue";

export default {
  setup() {
    const navbuttons = [
      { label: "Home", route: "/" },
      { label: "Products", route: "/products" },
      { label: "Partners", route: "/partners" },
      { label: "Contact Us", route: "/contact-us" },
    ];

    return {
      navbuttons,
    };
  },
  data() {
    return {
      companyLogo: [
        {
          id: 1,
          name: "PLDT",
          logo: "https://download.logo.wine/logo/PLDT/PLDT-Logo.wine.png",
        },
        {
          id: 2,
          name: "Globe",
          logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Globe-logo.png",
        },
        {
          id: 3,
          name: "Smart",
          logo: "https://download.logo.wine/logo/Smart_Communications/Smart_Communications-Logo.wine.png",
        },

        {
          id: 4,
          name: "Converge",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Converge_ICT_logo.svg/1200px-Converge_ICT_logo.svg.png",
        },
        {
          id: 5,
          name: "SUNG IL",
          logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIREhgSEhESGBIYEhgYGBgYEhgeHBwYHBgZGRgYGRgcJC4oHB4sHxkYJzgmKzAxNTU1HCQ7QDs0Py40NTEBDAwMEA8QHhISHzErISQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0Nf/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQcEBQYDAgj/xABCEAACAQMCAwQHAwkIAgMAAAABAgADBBEFEgYhMQdBUWETIjJxgZGxQmKhFCMzNFJzssHRNUNEVHJ0gpLC8RYkJf/EABoBAQADAQEBAAAAAAAAAAAAAAABAwQCBQb/xAAvEQACAgECBAQFBAMBAAAAAAAAAQIDEQQhEjFBUQUUMqETIlJhkUJxwfAksdEj/9oADAMBAAIRAxEAPwC5oiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgHhUuEVQzMApxgk8jnpPRXBJAPMYz8eYn3EA8lqqcEEcyQPMjOcfIz5S4Rt2GB2nDc+mOuZ7xAPNaik4BGcA48j0M9IiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiRkCIiMgRESQIiIAiIgCIiAIiIAiIgCIiAIiIAiRPh2CjJIAHeTAPuMzieIe0aztMrTJrVBywmNoPm0rjWu0S/uchKgpU/wBlAM482M0V6ayfTCIyXffatb24zVrU0A/acZ+U5bUO0zT6WQjPUP3F5fMyja9Z3O52Z28WYk/jPOa46CP6mMlp3na6x/RWmPN3/pNPc9qWoN7ApJ7lz9ZwkS+OlqXQjJ1VTtC1NutyB7qaieDcb6mf8W/yH9JzsiWfBr+lDJ0i8camP8W/xA/pMil2iamv+IB99NTOTiHTX9KGTvbbtUvl9tKT+8Y+k3Vn2ujpWtW96MPoZVEmVvSVS6DJfWn9o+nVuTVDTP3xgfOdTa39GsM0qtNx91gZ+W5kWt5UondSqOjeKsR/7meegj+lk5P1LmTKK0TtMvaGFrYrJ5gBv+wllcPcdWd7hQ/o6h+w+Ac+R6GZLNPZXu1sMnVxPkGTKCSYiIAiIgCIiAJBgmcrxvxbT02lyw1w4OxP/JvISYxcnhcwZvEvE1tp1PdWb1iDtQe0x93cPOUtxPxrd35KlzTo9yKccvvHvmi1HUKlzUarWcu7HJJ+gHcJiz16NLGvd7s5bAiImogREmSgREmRDAiJMAiIiQBJkSZKBEREgCB+MRAO14V7QrmzK06xNWhyGD7aj7p7/cZc2i6zQvaYq0HDKeo71Pgw7jPzJNnoGuV7GqKtFsHI3KfZYeBEx36SM947MlM/TQkzScL8Q0tQoCrTOG6Oh6q3gZuhPKaaeHzOiYiJAEgyZBgGBrOpU7Sg9xUOFRSfee4D3nE/OGtarUvK716pyzscDuVc8lHkJZvbPqZVKNop9smow8VU4UfP6So56miqShx9WcsSZE23C+kflt3Tt84Dtlj3hBzbHnibXJRWWDUjnEvXV7zTNEpoht1JcHaBTBYherFiPOcVxvxTYXloFt6IWv6Rck0sFUAJOGAwc8pmhqZTaxF47jBX5IjMujsosKNTTt1SkjN6eoMsgJxy7zKfvhiq4HQVXx/2MsruU5yj2DRjZkky8ND0+idEVzSQv+RudxQZztPPM5rsctKdRrj0lNHwqY3KDjr4yvzS4ZSx6RgrQGQTLg7UOF6b24uremoalkOEAGUzzOB3qf5zD7G7SnVp3PpER8VExuUHHqnpmPNJ1Ozt0GCrIJm+vtMe51OpbUVG57qoqgcgo3HJ8gBLQocO6Xo9AVbra797uNxZvBEE6s1EYJd30GCkpEuIdoOkMdrW+E8TRH0xmVjxJc0qt3Ve3QLRZ/UAXA2gAZx3Zk13OTxKOCeF9DVwDNrwzT3XtuGUFTXQEHoRnvlkdrlhSS3omlTRD6Y5KqBy2nwnE9XXCST5d+x2qbHJRxu+RUWREvHh/TqJ0ZGalTL/AJK/rbBnODzzKVFESiXiVUeaZoo0Nt7aj05nhJAMygoiZp+L/TE9GHg31SNtwdrlSwulqj9GxC1F7ihPM48R1n6Gt6yuqupyrAMD4gjIn5kzLs7LdSNaxCMctScp/wAeq/gZkeqd88ySKddoIUVqcG/v/B20SBJnZ5QkGTIMAo/tiYnUEB6C3XHxZszgpZ/bTp5FShcAeqUam3vB3L+BMrCe1pWnTHByxNloOqvZ3NO5QZKNzHip5MvxE1s2vDekG+uktg23fnLeAA5nEunjhfFy6kFxpqela1TVKhQv3Ix2urHuBnC8b9n5skNzbuz0R7at7Sjxz3iezdlN2tT1LintzycBgR59es7XjW9S00x6NRw9VqIpLk+szYxux+M8v4ipkvhyyuxZGLk8JZZj9kJ//NP7+p/KUtqH6Wp+8f8AiMtDsf1dEpvZuwDb99PJ9oEAMB55mPrfZfWqXT1KNVBRdy3Mc03HJHXnO6r64WzbezOpVSi+GSx+51Whf2Ev+yf+Fpy/Yn7Vz/pT+c6Liu9padpn5Kjg1DSFJFzzIxhmI8MZmi7G1Aa4x4L/ADmTzEcSr+otjpZul3dF7m94Z1lal3e6fVwcV6jID3ox9dfgfrJ4E0U2Fze0PsGolSmfuMGx8unwlea7fPbatVr0z66XJb3jPMfEZl06Pe07qklymPXRefeO/afccyuN/FxRW3L26lmp0jojGXNSX4ZXXAtsDrV47Yypq7fjUwfwmu7XmZ7ymjE+jWiCo7sknccePITDtNa/IdXqVjzpmvUVx90vzPw6ywuJuH6Gr0lqUqqh1X1HGCCD9lh4Tj49k90/mWxpdFenuhKa+SSX5wcnwzwFZXVvTqNcVBVZNzIrLyPfynO8baBS0+4FGmSymkHy2M5JI7vdO74M4KubG69NUqIyBGXC55k4wfwnOdrRBvlwf7hfqZXbOcoZlnJfpZR81wwlmOG+RzPDX65Q/wBwn1lk9sH6vR/fn+Eyt+Gv123/AH6fWWT2v/q1H98f4TK4P/ykX6lf51X96my4e/sRf9q/0Mo/+svbhSgamj00BwXtyufAnInFDsruf8xS/wCjf1k2QlJRx2KNFqaqp28bxmX/AEr+JlapZNb1noMwZkqFCQORI7xMWZmsHtxkpLK6iWh2NE//AGB3eofjzlXCXF2SWJS1esQfzlTl/pXl9cy2hfOef4o0tM/u0WAJMgSZuPmBIMmIBoeMdEF/aPR5b8bqZ8HHMfPp8Z+eKto6OyONrqxVgRzBBwZ+pDK57ReDTWzdWy/nAPziD7Y/aH3hOvMW1wxBmrSKmVnDdyf+ynxRnvbO1Ng9NmRx0ZWII+IkEEciCCORBHPPmJExWau6fqkfSw0dEOUUb1eMNQC7RdVMeeCfnNTeXlSs2+rUd28WYn5eE8IlDk2Wxqri8qKz+x906jIQwYqw6EHBHuM3VPjDUFXaLqpjHfgn5zRRCk1yJnXCfqSZ73l3UrNuqu7t4sc/AeE9bDU69tn0NVqe7G7aeuOkw4jLzkngi48LW3Y9Lis1Ri7sWcnLE9SfGZtlrlzQTZSr1EXOdoPLJ6zW5kxliUIyWGtj6q1Wdi7ElmJJJ7yepmVY6pXt/wBDWqJ5Kxx8phxGWHCLWGtjd1OLb9xtN1Ux5HH4zUXFd6jbndnbxZiT8zPOIcmzmNUI+lJH3RqsjB0JDKcqR3EdDMy+1i4uFArVnqKDkBj0PjMCIy+R04Rby1ujaW3EN3SQJTuKiqBhVB5AT1/+U33+bq/OaaBHE+5w6a3zivwfdeszuzuxZ2OWJ6knqZ5xPWhRao4RQWdiAFAySTI5lmyX2MjSdOqXVZKFMEszAe4Z5sfICfojSbBLailBB6tNAo8/E/Oc1wHwkLGn6WqAbl1G77g/ZE7ITbTDhWWfM+I6tXz4Y+mPuTERLjzhERAE+TPqfJ6QCueNOFLW5rbaFREvWUvszycDxHcZV+o6fVtnNOsjIw8RyPmD3y3dU4VNFHrpdBXZg9WrV5kbW3KyH7JAyMdJ7Wt7aarb1GuaaCkjEK7kBigH6TxUHuldunUlxRPS0viU6Vwz3iUlEsTXOzRwPSWbrUpkZCMeePJu+cLfadXt2K1qboR+0OXz6THKuUeaPep1VVy+RmLERODQIiIAiIgCIiAIiIAiJBgExNhpmiXF022hRdvvYwvzMsHQOzEDD3jg9/o0Jx7i3fO41ylyMt2spp9T37Ir/RtFuLxxToIW582+yvmTLj4T4PoWADuVe4YYLnu8kBmTcarY6cmxVwqY3Cmm7aOmWxOfrUqtxqKUrnIzUWtQqqWC+iXDejAHRzyznum2rTpbs8DV+IWX/Kto/wB5lhyZ4W9Jl3bnLZcsM45A9FHkJkTswCIiAIiIAiIgHhc2yVUanUUMjDDKRyInN8ScLLd1KJ5LQp5NSmow1QLgpTJ/Z5dJ1cjElScXlArOtqt5ZI9xUBW4uai0LW26oiqcBmAnei2FWiouVpu2wb/VBXdj1sZ7pkXFqlQbXRWXwIzNdV0FPR1KdN6iCohTk2QoPUqD0M6clIHHVeG9GvEevSf0aLUKM4bam/OMc+s09z2aOw3W1zSqL97kfwnTanwIXtbaxpVQttTqb6uR6znn63hnJmZc8HM7U2W6dNjhtyIqsQPskjkROZUUyNdeuvr2Uv5KyuuBtQp5zb7h4oQZqK2j3Se1b1h70MtNqmo19SrbBVW1poqqu4KGYfbBPXvm005tRSpUa5CG0WmzLuKl9wGfs8sSqWkS6muPi9q9UUUa9Jl6ow96mfO0+DfKWracXVDpNbUKlGiXStsQbORG5Rz8+ZmVQ4mRKO69tEpVGo76b7M03yu5V3fZPTkZD0Mu/wBi1eM94e5UG3yb5T7Sg7clRz7lMtZuJyNHGoi1t/Sek2lNvq43bffMuz1yu6I4p0l3IG5UgMZGepaPJS6vrgPxntD3Kro6Fdv7FtWP/A4+c29pwFqNT+5CDxZh9BLI4l1e4ppQNCpSVX9tiOZ8dp5qPjNZQ126S5pgitVV2wyIUYD7zHAwJ1HRprOSmXi9z9KSNZp/ZW5517gDxCDP4mbu14d0iyP5xleovXe24j4Cdlf27VaT01cozoyhh1UkYyJy/D+i3tpQFvi1cgnFVgSWyerDvMmFVaWTJZrb7Ocnj7bGbq/EFCzp0fRKpNdwlID1Uye9j3CYGv6rfWyo4ehUL1FQ0FQ7iGODtbPd4+U3FvoCPR9HdsLgl95LqMKe4IB7IEzbLSLegc06SqfHHP5mWpxWNjKclp3BjLXq06uXsX/OIpchlqMcsDj2sefhOt0zSqdsmxNxGScsxY8/AnpM/ESJTlLmBJiJyBERAEREAREQBERAEREAjESYgEYnyyAjBAIPUGfcQDEbT6JT0ZpU/R5zt2jbnxxJr2NKono2po1PAG0qCAB0wJlRG4MEaVQ9H6H0SeiznZtG3Oc9JC6RbDkKFPH+gTPiMsHgtugUKEUKOi4GB8J9pTVegA9wnpEAjEYkxAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREA//9k=",
        },
        {
          id: 6,
          name: "Dito Telecommunity",
          logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Dito_Telecommunity_2021_logo.png",
        },
        {
          id: 7,
          name: "Lasaya",
          logo: "https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.15752-9/365474430_684084846907093_1792197930272373151_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFMcItTussgAkRnyeqfZG6hXdBe9uNmDV5d0F7242YNXtPQY4FgqaoqXATxNezLKSkE_mankG49miegyMBWFSLh&_nc_ohc=CpK7p492bzoAX-tNO4E&_nc_ht=scontent.fmnl13-2.fna&oh=03_AdQE98L90mIqIGrt9iKPKb-mqBjpLMfLMfIckQiHYkk9UA&oe=6501C108",
        },
        {
          id: 8,
          name: "FiberHome",
          logo: "https://ardentnetworks.com.ph/wp-content/uploads/2021/07/FIBERHOME-LOGO.png",
        },
      ],
      productCards: [
        {
          id: 1,
          image:
            "https://atlas-content-cdn.pixelsquid.com/stock-images/pipe-clamp-8dZ0yzE-600.jpg",
          name: "Pole Clamp",
        },
        {
          id: 2,
          image:
            "https://www.mymillennium.us/wp-content/uploads/2022/12/600-300115-1.jpg",
          name: "U Guard",
        },
        {
          id: 3,
          image:
            "https://image.made-in-china.com/202f0j00vQbczrWCHTky/High-Performance-5-8-Earth-Copper-Ground-Rod.webp",
          name: "Grounding Rod",
        },
        {
          id: 4,
          image:
            "https://www.anchormark.com.au/wp-content/uploads/050264_threaded-Rod-zink-1000px.jpg",
          name: "Anchor Rod",
        },
        {
          id: 5,
          image:
            "https://www.macleannetworksolutions.com/wp-content/uploads/Hardware-Aerial-Pole-Line-Lashing-Products-Lashing-Wire.jpg",
          name: "Lashing Wire",
        },
        {
          id: 6,
          image:
            "https://i0.wp.com/icc.com/wp-content/uploads/2017/08/2-inch-wall-mount-j-hook-25-pack-iccmsjhk44-1000-revb.jpg?resize=600%2C600&ssl=1",
          name: "J-Hook",
        },
        {
          id: 7,
          image:
            "https://hubbellcdn.com/prodimage1200/HPS_PPHID_251059_1200.jpg",
          name: "Suspension Straight",
        },
        {
          id: 8,
          image:
            "https://hubbellcdn.com/prodimage1200/HPS_PPHID_251057_1200.jpg",
          name: "Suspension Curve",
        },
        {
          id: 9,
          image:
            "https://preformed.com/media/com_eshop/products/resized/Cat.%20No.%20GDE-1104%20%20GDE-1107%20GUY-GRIP%20Dead-ends1-max-1200x1200.png",
          name: "Guy Grip",
          extname: "(All sizes)",
        },
        {
          id: 10,
          image: "https://astmbolts.com/img/images/machine-bolts.jpg",
          name: "Machine Bolt ",
        },
        {
          id: 11,
          image: "https://assets.unilogcorp.com/267/ITEM/IMG/MacLean_J7920.jpg",
          name: "Arms Extension",
        },
        {
          id: 12,
          image:
            "https://hubbellcdn.com/prodimage1200/HPS_ID_GC14101_PRODIMAGE_1200.jpg",
          name: "Grounding Clamp",
          extname: "Top Set",
        },
        {
          id: 13,
          image:
            "https://hubbellcdn.com/prodimage1200/HPS_PPHID_251054_PRODIMAGE_1200.jpg",
          name: "Strand Clamp",
          extname: "Bottom Set",
        },
        {
          id: 14,
          image:
            "https://5.imimg.com/data5/NI/SL/WO/SELLER-11187939/4-inch-electrical-insulator.jpg",
          name: "Insulators",
        },
        {
          id: 15,
          image:
            "https://www.powertelcom.com/wp-content/uploads/2019/11/Alley-Arm-1.jpg",
          name: "Alley Arm",
        },
        {
          id: 16,
          image:
            "https://www.daytaifiberoptic.com/Content/uploads/2022451740/20220902153016d20a67e55a94473a8edbd9a3fb6785d1.png",
          name: "Nap Box and",
          extname: "Closure",
        },
        {
          id: 17,
          image:
            "https://5.imimg.com/data5/IT/FR/NP/SELLER-65040356/flexible-hdpe-pipe-roll.jpg",
          name: "HDPE Pipe",
          extname: "(All sizes)",
        },
        {
          id: 18,
          image:
            "https://image.made-in-china.com/2f0j00AsCiOMLzkpbP/Telecom-PVC-Adhesive-Tape-for-Wrapping-Below-600V.webp",
          name: "Adhesive Tapes",
          extname: "(Any sizes)",
        },
        {
          id: 19,
          image:
            "https://www.telenco-networks.com/media/cache/slideshow_xs/uploads/documents/5dcacbebb81d7_0179.jpg",
          name: "Messenger Wire",
        },
        {
          id: 20,
          image: "https://m.media-amazon.com/images/I/613BAx-bHSL.jpg",
          name: "Manhole cover",
          extname: "(Any sizes)",
        },
      ],
    };
  },
};
