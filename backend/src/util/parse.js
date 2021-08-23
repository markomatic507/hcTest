async function parse(page) {
  let data = {};

  data.image = await page.evaluate(() => {
    let imageSrc = document.body.querySelector(
      ".pv-top-card-profile-picture__image.pv-top-card-profile-picture__image--show.ember-view"
    );

    if (imageSrc === null) {
      imageSrc = document.body.querySelector(
        ".profile-photo-edit__preview.ember-view"
      );
    }

    if (imageSrc !== null) {
      return imageSrc.src;
    } else {
      return null;
    }
  });

  data.name = await page.evaluate(() => {
    let nameText = document.body.querySelector(".t-24");

    if (nameText !== null) {
      return nameText.innerText;
    } else {
      return null;
    }
  });

  data.desc = await page.evaluate(() => {
    let descText = document.body.querySelector(".text-body-medium");

    if (descText !== null) {
      return descText.innerText;
    } else {
      return null;
    }
  });

  data.connections = await page.evaluate(() => {
    let connectionsText = document.body.querySelector(".pv-top-card--list");

    if (connectionsText !== null) {
      return connectionsText.innerText;
    } else {
      return null;
    }
  });

  data.about = await page.evaluate(() => {
    let aboutText = document.body.querySelector(
      "div.inline-show-more-text.inline-show-more-text--is-collapsed.mt4.t-14"
    );

    if (aboutText !== null) {
      aboutText = aboutText.innerText;
      aboutText = aboutText.replace(/\n/g, "");
      return aboutText.replace(/…see more/g, "");
    } else {
      return null;
    }
  });

  data.exp = await page.evaluate(() => {
    let jobs = document.body.querySelectorAll(
      ".pv-profile-section__card-item-v2.pv-profile-section.pv-position-entity.ember-view"
    );

    if (jobs !== null) {
      return Object.values(jobs).map((x) => {
        let title = x.querySelector(
          ".pv-entity__summary-info.pv-entity__summary-info--background-section>.t-16.t-black.t-bold"
        );
        let company = x.querySelector(
          ".pv-entity__summary-info.pv-entity__summary-info--background-section>.pv-entity__secondary-title.t-14.t-black.t-normal"
        );
        let image = x.querySelector(
          ".pv-entity__logo-img.EntityPhoto-square-5.lazy-image.ember-view"
        );
        return {
          title: title !== null ? title.innerText : null,
          company: company !== null ? company.innerText : null,
          image: image !== null ? image.src : null,
        };
      });
    } else {
      return null;
    }
  });

  data.topSkills = await page.evaluate(() => {
    let skillList = document.body.querySelectorAll(
      ".pv-skill-categories-section__top-skills.pv-profile-section__section-info.section-info.pb1>li"
    );

    if (skillList !== null) {
      return Object.values(skillList).map((x) => {
        let skill = x.querySelector(
          "p.pv-skill-category-entity__name.tooltip-container>a>span"
        );
        return {
          skill: skill !== null ? skill.innerText : null,
        };
      });
    } else {
      return null;
    }
  });

  console.log(data);

  return data;
}

module.exports = parse;
