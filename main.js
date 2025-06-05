 document.addEventListener("DOMContentLoaded", () => {
        const isDesktop = window.innerWidth >= 768;

        setTimeout(() => {
          if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
          }
          window.scrollTo(0, 0);
        }, 300);

        const rows = {
          row1: document.querySelector(".row1"),
          row2: document.querySelector(".row2"),
          row3: document.querySelector(".row3"),
          row4: document.querySelector(".row4"),
        };
        const navbar = document.querySelector(".nav");

        let hasScrolled = false;

        const visibilityObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach(({ target, isIntersecting }) => {
              target.classList.toggle("visible", isIntersecting);
            });
          },
          { threshold: 0.1 }
        );

        document
          .querySelectorAll(
            ".project1, .project2, .project3, .about, .projects"
          )
          .forEach((el) => visibilityObserver.observe(el));

        const fadeObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach(({ target, isIntersecting }) => {
              target.classList.toggle("animate", isIntersecting);
            });
          },
          { threshold: 0.1 }
        );

        document
          .querySelectorAll(".fade-in-target")
          .forEach((el) => fadeObserver.observe(el));

        let navbarWasVisible = false;
        const handleScroll = () => {
          const scrollY = window.scrollY;

          if (!hasScrolled && scrollY > 0) {
            hasScrolled = true;
          }

          if (isDesktop && hasScrolled) {
            const addLeft = scrollY > 200;
            const addNavbar = scrollY > 500;

            rows.row2?.classList.toggle("text-movement-left", addLeft);
            rows.row4?.classList.toggle("text-movement-left", addLeft);
            rows.row1?.classList.toggle("text-movement-right", addLeft);
            rows.row3?.classList.toggle("text-movement-right", addLeft);

            navbar?.classList.toggle("visible", addNavbar);

            if (addNavbar && !navbarWasVisible) {
      navbarWasVisible = true;
      const firstLink = navbar.querySelector("a");
      if (firstLink) {
        firstLink.focus();
      }
    }
  }
};

        window.addEventListener("scroll", handleScroll);
      });