import anime from 'animejs';

// スクロール時に発動するアニメーション
export const animateOnScroll = (
  element: HTMLElement | null,
  animation: (el: HTMLElement) => void,
  options: IntersectionObserverInit = { threshold: 0.1 }
) => {
  if (!element) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animation(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(element);
};

// 横棒グラフのアニメーション
export const animateBars = (
  element: HTMLElement[] | null,
  duration: number = 1000,
  easing: string = 'easeInOutQuad'
) => {
  if (element) {
    anime({
      targets: element,
      width: (el: HTMLElement) => el.getAttribute('data-width') + '%',
      easing,
      duration,
      delay: anime.stagger(100),
    });
  }
};

// フェードインアニメーション
export const fadeIn = (
  element: HTMLElement | null,
  duration: number = 1000,
  easing: string = 'easeInOutQuad'
) => {
  if (element) {
    anime({
      targets: element,
      opacity: [0, 1],
      easing,
      duration,
    });
  }
};

// スライドインアニメーション
export const slideIn = (
  element: HTMLElement | null,
  direction: 'left' | 'right' | 'top' | 'bottom' = 'left',
  duration: number = 1000,
  easing: string = 'easeInOutQuad'
) => {
  if (element) {
    let translateX = 0;
    let translateY = 0;

    switch (direction) {
      case 'left':
        translateX = -100;
        break;
      case 'right':
        translateX = 100;
        break;
      case 'top':
        translateY = -100;
        break;
      case 'bottom':
        translateY = 100;
        break;
    }

    anime({
      targets: element,
      translateX: [translateX, 0],
      translateY: [translateY, 0],
      opacity: [0, 1],
      easing,
      duration,
    });
  }
};

// 回転アニメーション
export const rotate = (
  element: HTMLElement | null,
  angle: number = 360,
  duration: number = 1000,
  easing: string = 'easeInOutQuad'
) => {
  if (element) {
    anime({
      targets: element,
      rotate: [0, angle],
      easing,
      duration,
    });
  }
};

// バウンスアニメーション
export const bounce = (
  element: HTMLElement | null,
  duration: number = 1000,
  easing: string = 'easeInOutQuad'
) => {
  if (element) {
    anime({
      targets: element,
      translateY: [0, -30, 0],
      easing,
      duration,
      loop: true,
      direction: 'alternate',
    });
  }
};

export const typingAnimation = (
  element: HTMLElement | null,
  text: string,
  duration: number = 2000
) => {
  if (!element) return;

  anime({
    targets: element,
    textContent: [0, text.length],
    round: 1,
    easing: 'easeInOutQuad',
    duration: duration,
    update: function (anime) {
      element.innerHTML = text.substring(
        0,
        Number(anime.animations[0].currentValue)
      );
    },
  });
};
