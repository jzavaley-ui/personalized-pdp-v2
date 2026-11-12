/* @ds-bundle: {"format":3,"namespace":"DeltaChildrenDesignSystem_6fc118","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"CategoryCard","sourcePath":"components/commerce/CategoryCard.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Pagination","sourcePath":"components/core/Pagination.jsx"},{"name":"Rating","sourcePath":"components/core/Rating.jsx"},{"name":"SectionHeader","sourcePath":"components/core/SectionHeader.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"ColorSwatch","sourcePath":"components/forms/ColorSwatch.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"982d2ab11d59","components/commerce/CategoryCard.jsx":"bd162a81f8e1","components/commerce/ProductCard.jsx":"befb8548cbf9","components/core/Badge.jsx":"1d004e46c416","components/core/Button.jsx":"21d38547834d","components/core/IconButton.jsx":"20a657b51a2f","components/core/Pagination.jsx":"8718e472d7a6","components/core/Rating.jsx":"b922de26511a","components/core/SectionHeader.jsx":"2081275b5d23","components/core/Tag.jsx":"be59409b456b","components/feedback/Accordion.jsx":"9439b685bb63","components/feedback/Modal.jsx":"e3b3e4a8f7e1","components/feedback/Skeleton.jsx":"eb1d9e4edc3d","components/feedback/Spinner.jsx":"d87c3534cff5","components/feedback/Tooltip.jsx":"44a7220b9c9b","components/forms/Checkbox.jsx":"054d1ff2799f","components/forms/ColorSwatch.jsx":"e7763e062b2a","components/forms/Input.jsx":"0c07c3ede8a6","components/forms/QuantityStepper.jsx":"503ebe838e4c","components/forms/Radio.jsx":"bdfaf8d6b384","ui_kits/storefront/Homepage.jsx":"b5427bb66f32","ui_kits/storefront/ProductPage.jsx":"67bbe4d405ef","ui_kits/storefront/StoreChrome.jsx":"2c47cc1f4d2b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DeltaChildrenDesignSystem_6fc118 = window.DeltaChildrenDesignSystem_6fc118 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Delta Children — Logo wordmark (official vector).
 * "DELTA ♥ CHILDREN" — gray letterforms with a blue heart between the words.
 * Gray paths inherit `color`; the heart uses `heartColor`.
 * Source: assets/logo/delta-children-logo.svg (294 × 24).
 */
function Logo({
  height = 24,
  color = "var(--neutrals-darkest-gray)",
  heartColor = "var(--chromatic-lightblue-70)",
  title = "Delta Children",
  style = {},
  ...rest
}) {
  const width = height * 294 / 24;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 294 24",
    width: width,
    height: height,
    fill: "none",
    role: "img",
    "aria-label": title,
    style: {
      display: "block",
      flex: "none",
      color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M114.444 3.9067H114.177C111.873 4.02197 110.35 6.40962 110.35 6.40962C110.35 6.40962 108.818 4.02197 106.527 3.89847H106.247C103.517 3.89847 101.694 6.05147 101.556 8.46794C101.418 10.8844 103.029 13.1733 104.34 14.6758C106.105 16.6395 108.126 18.3643 110.35 19.8052C112.571 18.3671 114.591 16.6482 116.36 14.6923C117.662 13.1774 119.281 10.9544 119.143 8.4844C119.006 6.01442 117.182 3.91082 114.444 3.91082",
    fill: heartColor
  }), /*#__PURE__*/React.createElement("g", {
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.18189 0.0452576H0V23.9712H9.18189C12.3986 23.9712 15.4835 22.7108 17.758 20.4673C20.0325 18.2238 21.3103 15.181 21.3103 12.0082C21.3103 8.83544 20.0325 5.79261 17.758 3.54912C15.4835 1.30564 12.3986 0.0452576 9.18189 0.0452576ZM9.18189 22.0899H1.90733V1.91833H9.18189C11.8938 1.91833 14.4946 2.98093 16.4123 4.87238C18.3299 6.76383 19.4072 9.32918 19.4072 12.0041C19.4072 14.679 18.3299 17.2444 16.4123 19.1358C14.4946 21.0273 11.8938 22.0899 9.18189 22.0899"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M26.6901 23.9712H41.6566V22.0899H28.5974V12.6751H39.5906V10.7938H28.5974V1.92659H41.6566V0.0411682H26.6901V23.9712Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M49.7408 0.0411682H47.8335V23.9712H62.2991V22.0899H49.7408V0.0411682Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M79.2856 0.0411682H60.2666V1.92659H68.8057V23.9712H70.7131V1.92659H79.2856V0.0411682Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M89.0435 0.0452576H88.3006L76.9776 23.9712H79.0644L82.1069 17.5574H95.3038L98.3422 23.9712H100.475L89.0435 0.0452576ZM82.9959 15.6885L88.6887 3.64732L94.3815 15.6761L82.9959 15.6885Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M206.175 0.0452576H215.357C218.574 0.0452576 221.659 1.30564 223.933 3.54912C226.208 5.79261 227.486 8.83544 227.486 12.0082C227.486 15.181 226.208 18.2238 223.933 20.4673C221.659 22.7108 218.574 23.9712 215.357 23.9712H206.175V0.0452576ZM215.357 22.0899C218.069 22.0899 220.67 21.0273 222.587 19.1358C224.505 17.2444 225.582 14.679 225.582 12.0041C225.582 9.32918 224.505 6.76383 222.587 4.87238C220.67 2.98093 218.069 1.91833 215.357 1.91833H208.099V22.0899H215.357Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M255.144 0.0329285H270.11V1.91423H257.051V10.7856H268.044V12.6669H257.051V22.0775H270.11V23.9588H255.144V0.0329285Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M186.326 0.0411682H188.237V22.0899H200.795V23.9712H186.326V0.0411682Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M143.308 19.3482C141.384 21.1249 138.85 22.1189 136.213 22.131C134.863 22.131 133.527 21.8688 132.28 21.3592C131.032 20.8497 129.899 20.1028 128.945 19.1613C127.99 18.2198 127.233 17.1021 126.716 15.8719C126.2 14.6417 125.934 13.3233 125.934 11.9918C125.934 10.6603 126.2 9.34179 126.716 8.11163C127.233 6.88148 127.99 5.76373 128.945 4.82221C129.899 3.88069 131.032 3.13384 132.28 2.62429C133.527 2.11475 134.863 1.85249 136.213 1.85249C138.855 1.86295 141.393 2.86876 143.308 4.66415L143.379 4.73002L144.54 3.29331L144.477 3.23568C142.743 1.64597 140.577 0.588754 138.244 0.193178C135.911 -0.202399 133.512 0.0807903 131.34 1.00815C129.167 1.93551 127.315 3.46689 126.011 5.41523C124.706 7.36357 124.005 9.64451 123.993 11.9794C123.983 14.3281 124.675 16.6277 125.98 18.5916C127.286 20.5556 129.149 22.0971 131.337 23.024C133.525 23.951 135.941 24.2224 138.284 23.8045C140.628 23.3865 142.794 22.2977 144.515 20.6738L144.577 20.6161L143.375 19.2741L143.308 19.3482Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M168.429 11.0285H152.774L152.732 0.160546V0.0740967H150.788L150.825 23.9094V24H152.732L152.774 12.9015H168.429L168.388 23.9094V24H170.332V0.0740967H168.388L168.429 11.0285Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M179.301 0.0329285H177.357V23.9588H179.301V0.0329285Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M248.992 7.99039C248.992 2.93516 245.515 0.0329285 239.46 0.0329285H232.736V23.9588H234.685V16.1372H239.46C240.094 16.1539 240.728 16.1264 241.359 16.0549L246.951 23.9135V23.9753H249.334L243.266 15.6803C246.96 14.6346 248.992 11.9094 248.992 7.99039ZM247.076 8.02332C247.076 12.0576 244.384 14.2765 239.493 14.2765H234.685V1.92658H239.493C244.384 1.906 247.076 4.07958 247.076 8.02332"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M292.147 0.0329285V20.7643L277.744 0.0740949L277.719 0.0329285H275.816H275.778L275.724 0.0864448V23.9588H277.61V3.23156L291.976 23.9177L292.001 23.9588H294V0.0329285H292.147Z"
  })));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/commerce/CategoryCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Arrow = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.25",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));

/**
 * Delta Children — CategoryCard. Image with a tinted info band beneath:
 * eyebrow, Luxenta title, subtitle and a "Shop now" link. Used across the
 * homepage category showcases.
 */
function CategoryCard({
  image,
  eyebrow,
  title = "Category",
  subtitle,
  cta = "Shop now",
  onClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: "#",
    onClick: e => {
      e.preventDefault();
      onClick && onClick();
    },
    className: "dc-catcard",
    style: {
      display: "flex",
      flexDirection: "column",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      textDecoration: "none",
      background: "var(--surface-card)",
      boxShadow: "inset 0 0 0 1px var(--border-hairline)",
      transition: "box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "6 / 5",
      background: "var(--surface-subtle)"
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)",
      padding: "var(--space-3) var(--space-4) var(--space-4)",
      background: "var(--surface-tint-strong)"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-micro)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-eyebrow)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-card-title)",
      color: "var(--text-heading-ink)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, subtitle), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-1)",
      marginTop: "var(--space-2)",
      font: "var(--type-body-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--action-primary)"
    }
  }, cta, " ", /*#__PURE__*/React.createElement(Arrow, null))), /*#__PURE__*/React.createElement("style", null, `.dc-catcard:hover{ box-shadow: inset 0 0 0 1px var(--border-hairline), var(--shadow-hover); transform: translateY(-2px); }`));
}
Object.assign(__ds_scope, { CategoryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CategoryCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Delta Children — Badge / Tag.
 * Small uppercase label. Used as product flags ("New Arrival", "Best Deal"),
 * category eyebrows on cards, and certification chips.
 */
function Badge({
  children,
  tone = "tint",
  style = {},
  ...rest
}) {
  const tones = {
    tint: {
      background: "var(--surface-tint)",
      color: "var(--text-heading)"
    },
    solid: {
      background: "var(--action-primary)",
      color: "var(--text-on-dark)"
    },
    promo: {
      background: "var(--promo-green-dark)",
      color: "var(--promo-green-light)"
    },
    sale: {
      background: "var(--sale-red)",
      color: "var(--text-on-dark)"
    },
    neutral: {
      background: "var(--border-hairline)",
      color: "var(--text-muted)"
    }
  };
  const t = tones[tone] || tones.tint;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-1)",
      padding: "3px 8px",
      borderRadius: "var(--radius-sm)",
      font: "var(--type-micro)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Delta Children — Button
 * Primary action uses the brand blue with a soft glow; secondary is an
 * outlined white pill; tertiary/ghost are quieter text-style actions.
 */
function Button({
  children,
  variant = "primary",
  size = "base",
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    small: {
      padding: "6px 16px",
      font: "var(--weight-semibold) 14px/1.5 var(--font-body)",
      minHeight: 32
    },
    base: {
      padding: "8px 20px",
      font: "var(--type-button)",
      minHeight: 40
    },
    large: {
      padding: "12px 28px",
      font: "var(--weight-semibold) 16px/1.5 var(--font-body)",
      minHeight: 48
    },
    xlarge: {
      padding: "16px 36px",
      font: "var(--weight-semibold) 18px/1.5 var(--font-body)",
      minHeight: 56
    }
  };
  const variants = {
    primary: {
      background: "var(--action-primary)",
      color: "var(--text-on-dark)",
      boxShadow: "inset 0 0 0 1px var(--action-primary-border), var(--shadow-primary)"
    },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--action-primary)",
      boxShadow: "inset 0 0 0 2px var(--action-secondary-border)"
    },
    tertiary: {
      background: "transparent",
      color: "var(--action-primary)",
      boxShadow: "none"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-body)",
      boxShadow: "none"
    }
  };
  const s = sizes[size] || sizes.base;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    className: `dc-btn dc-btn--${variant}`,
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-2)",
      padding: s.padding,
      minHeight: s.minHeight,
      font: s.font,
      borderRadius: "var(--radius-md)",
      border: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      whiteSpace: "nowrap",
      transition: "transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard), background var(--duration-base) var(--ease-standard)",
      ...v,
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flex: "none"
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flex: "none"
    }
  }, iconRight), /*#__PURE__*/React.createElement("style", null, `
        .dc-btn:active { transform: translateY(1px); }
        .dc-btn--primary:hover:not(:disabled) { background: var(--action-primary-hover); }
        .dc-btn--secondary:hover:not(:disabled) { background: var(--surface-tint); }
        .dc-btn--tertiary:hover:not(:disabled) { text-decoration: underline; }
        .dc-btn--ghost:hover:not(:disabled) { background: var(--border-hairline); }
      `));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Delta Children — IconButton. A square/round button for a single glyph.
 * Used for nav controls, carousel arrows, cart, search, quantity, etc.
 */
function IconButton({
  children,
  variant = "primary",
  size = 40,
  round = false,
  ariaLabel,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const variants = {
    primary: {
      background: "var(--action-primary)",
      color: "var(--text-on-dark)",
      boxShadow: "inset 0 0 0 1px var(--action-primary-border), var(--shadow-primary)"
    },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--action-primary)",
      boxShadow: "inset 0 0 0 2px var(--action-secondary-border)"
    },
    soft: {
      background: "var(--surface-tint)",
      color: "var(--action-primary)",
      boxShadow: "none"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-body)",
      boxShadow: "none"
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    className: "dc-iconbtn",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      flex: "none",
      border: "none",
      borderRadius: round ? "var(--radius-pill)" : "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "transform var(--duration-fast) var(--ease-standard), background var(--duration-base) var(--ease-standard)",
      ...v,
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("style", null, `.dc-iconbtn:active{transform:translateY(1px)}`));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Delta Children — Pagination.
 * Page tiles sit in a 44px touch target; the visible tile is 32×32 with a 4px
 * radius. The current page fills brand blue (white bold 12px); the rest are a
 * quiet off-white that washes on hover / presses darker. First / prev / next /
 * last arrows flank the range and disable at the ends.
 *
 * Pass total + page (1-based) + onChange. siblingCount controls how many
 * neighbours show around the current page before collapsing to an ellipsis.
 */
function Pagination({
  page = 1,
  total = 1,
  siblingCount = 1,
  showEdges = true,
  onChange,
  style = {},
  ...rest
}) {
  const go = p => {
    const next = Math.max(1, Math.min(total, p));
    if (next !== page && onChange) onChange(next);
  };
  const range = (a, b) => Array.from({
    length: b - a + 1
  }, (_, i) => a + i);
  let pages;
  const totalShown = siblingCount * 2 + 5; // first,last,current,2 dots
  if (total <= totalShown) {
    pages = range(1, total);
  } else {
    const left = Math.max(page - siblingCount, 1);
    const right = Math.min(page + siblingCount, total);
    const showLeftDots = left > 2;
    const showRightDots = right < total - 1;
    if (!showLeftDots && showRightDots) {
      pages = [...range(1, 3 + siblingCount * 2), "…", total];
    } else if (showLeftDots && !showRightDots) {
      pages = [1, "…", ...range(total - (2 + siblingCount * 2), total)];
    } else {
      pages = [1, "…", ...range(left, right), "…", total];
    }
  }
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Pagination",
    style: {
      display: "inline-flex",
      alignItems: "center",
      ...style
    }
  }, rest), showEdges && /*#__PURE__*/React.createElement(Arrow, {
    kind: "first",
    disabled: page <= 1,
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    kind: "prev",
    disabled: page <= 1,
    onClick: () => go(page - 1)
  }), pages.map((p, i) => p === "…" ? /*#__PURE__*/React.createElement("span", {
    key: `dots-${i}`,
    style: dotsStyle,
    "aria-hidden": "true"
  }, "\u2026") : /*#__PURE__*/React.createElement(PageTile, {
    key: p,
    value: p,
    selected: p === page,
    onClick: () => go(p)
  })), /*#__PURE__*/React.createElement(Arrow, {
    kind: "next",
    disabled: page >= total,
    onClick: () => go(page + 1)
  }), showEdges && /*#__PURE__*/React.createElement(Arrow, {
    kind: "last",
    disabled: page >= total,
    onClick: () => go(total)
  }));
}
const touch = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 44,
  height: 44,
  flex: "none",
  border: "none",
  background: "transparent",
  padding: 0,
  cursor: "pointer"
};
const dotsStyle = {
  display: "inline-flex",
  alignItems: "flex-end",
  justifyContent: "center",
  width: 44,
  height: 44,
  paddingBottom: 12,
  color: "var(--text-faint)",
  font: "var(--weight-bold) var(--size-12)/1 var(--font-body)"
};
function PageTile({
  value,
  selected,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    "aria-current": selected ? "page" : undefined,
    className: "dc-page",
    "data-selected": selected ? "" : undefined,
    style: touch
  }, /*#__PURE__*/React.createElement("span", {
    className: "dc-page__tile",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: selected ? 36 : 32,
      height: selected ? 36 : 32,
      padding: "0 6px",
      borderRadius: "var(--radius-sm)",
      background: selected ? "var(--action-primary)" : "transparent",
      color: selected ? "var(--text-on-dark)" : "var(--text-body)",
      font: "var(--weight-bold) var(--size-12)/1 var(--font-body)",
      transition: "background var(--duration-fast) var(--ease-standard)"
    }
  }, value), /*#__PURE__*/React.createElement("style", null, `
        .dc-page:not([data-selected]):hover .dc-page__tile { background: var(--neutrals-medium-light-gray); }
        .dc-page:not([data-selected]):active .dc-page__tile { background: var(--neutrals-medium-gray); }
        .dc-page:focus-visible { outline: none; }
        .dc-page:focus-visible .dc-page__tile { box-shadow: 0 0 0 3px var(--glow-blue); }
      `));
}
function Arrow({
  kind,
  disabled,
  onClick
}) {
  const labels = {
    first: "First page",
    prev: "Previous page",
    next: "Next page",
    last: "Last page"
  };
  const single = /*#__PURE__*/React.createElement("path", {
    d: "M14 6l-6 6 6 6"
  });
  const dbl = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M17 6l-6 6 6 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 6l-6 6 6 6"
  }));
  const flip = kind === "next" || kind === "last";
  const icon = kind === "first" || kind === "last" ? dbl : single;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    disabled: disabled,
    "aria-label": labels[kind],
    className: "dc-page-arrow",
    style: {
      ...touch,
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dc-page-arrow__tile",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 32,
      height: 32,
      borderRadius: "var(--radius-sm)",
      color: disabled ? "var(--neutrals-medium-gray)" : "var(--neutrals-darker-gray)",
      transition: "background var(--duration-fast) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.25",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: flip ? "scaleX(-1)" : "none"
    },
    "aria-hidden": "true"
  }, icon)), /*#__PURE__*/React.createElement("style", null, `
        .dc-page-arrow:not(:disabled):hover .dc-page-arrow__tile { background: var(--neutrals-medium-light-gray); }
        .dc-page-arrow:not(:disabled):active .dc-page-arrow__tile { background: var(--neutrals-medium-gray); }
        .dc-page-arrow:focus-visible { outline: none; }
        .dc-page-arrow:focus-visible .dc-page-arrow__tile { box-shadow: 0 0 0 3px var(--glow-blue); }
      `));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/core/Rating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Star = ({
  fill,
  size
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  style: {
    flex: "none"
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2.5l2.9 6.1 6.6.8-4.9 4.5 1.3 6.6L12 17.8 6.1 21l1.3-6.6L2.5 9.9l6.6-.8L12 2.5z",
  fill: fill === "full" ? "var(--rating-star)" : "none",
  stroke: "var(--rating-star)",
  strokeWidth: "1.5",
  strokeLinejoin: "round"
}));

/**
 * Delta Children — Rating. Row of blue stars with an optional count.
 */
function Rating({
  value = 5,
  max = 5,
  count,
  size = 16,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 2
    },
    "aria-label": `${value} out of ${max} stars`
  }, Array.from({
    length: max
  }).map((_, i) => /*#__PURE__*/React.createElement(Star, {
    key: i,
    fill: i < Math.round(value) ? "full" : "empty",
    size: size
  }))), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, count, " Reviews"));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rating.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Delta Children — SectionHeader.
 * The recurring page-section opener: a bold blue eyebrow over a centered
 * Luxenta title, with an optional subtitle.
 */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      gap: "var(--space-1)",
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      color: "var(--text-eyebrow)"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-section)",
      color: "var(--text-heading)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      marginTop: "var(--space-1)",
      font: "var(--type-body)",
      color: "var(--text-muted)",
      maxWidth: 560
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Delta Children — Tag.
 * A compact filter / selection chip: pale-blue fill, brand-blue bold 12px
 * label, 4px radius. Set `dismissible` to show a trailing ✕ that calls
 * `onDismiss`. Used for active filters and applied facets.
 */
function Tag({
  children,
  dismissible = false,
  onDismiss,
  onClick,
  disabled = false,
  style = {},
  ...rest
}) {
  const interactive = !!onClick && !dismissible;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "dc-tag",
    onClick: interactive && !disabled ? onClick : undefined,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-1)",
      height: 24,
      padding: dismissible ? "4px 4px 4px 8px" : "4px 8px",
      borderRadius: "var(--radius-sm)",
      background: "var(--chromatic-lightblue-20)",
      color: "var(--action-primary)",
      font: "var(--weight-bold) var(--size-12)/1.3 var(--font-body)",
      whiteSpace: "nowrap",
      cursor: interactive && !disabled ? "pointer" : "default",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--duration-fast) var(--ease-standard)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), dismissible && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    disabled: disabled,
    onClick: e => {
      e.stopPropagation();
      if (!disabled && onDismiss) onDismiss();
    },
    className: "dc-tag__x",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 16,
      height: 16,
      flex: "none",
      padding: 0,
      border: "none",
      borderRadius: "var(--radius-xs)",
      background: "transparent",
      color: "var(--action-primary)",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.25",
    strokeLinecap: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))), /*#__PURE__*/React.createElement("style", null, `
        .dc-tag:hover { background: var(--chromatic-lightblue-30); }
        .dc-tag__x:hover { background: var(--chromatic-lightblue-40); }
        .dc-tag__x:active { transform: translateY(1px); }
      `));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Delta Children — Accordion. Collapsible info rows used for product detail
 * tabs (Description, Dimensions…) and FAQs. Each row toggles a +/− sign.
 */
function Accordion({
  items = [],
  defaultOpen = -1,
  style = {},
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: "100%",
      ...style
    }
  }, rest), items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        gap: "var(--space-4)",
        padding: "16px 4px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        font: "var(--type-body)",
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-body)"
      },
      "aria-expanded": isOpen
    }, /*#__PURE__*/React.createElement("span", null, it.title), /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      stroke: "var(--action-primary)",
      strokeWidth: "2.25",
      strokeLinecap: "round",
      fill: "none",
      style: {
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14"
    }), !isOpen && /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateRows: isOpen ? "1fr" : "0fr",
        transition: "grid-template-rows var(--duration-slow) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 4px 18px",
        font: "var(--type-body-sm)",
        color: "var(--text-muted)",
        lineHeight: 1.6
      }
    }, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Delta Children — Modal.
 * A centered dialog over a dark scrim: rounded 24px card, soft ambient shadow,
 * a centered bold title with a round close button top-right, a scrollable body,
 * and an optional footer for actions. Closes on scrim click or Esc.
 *
 * <Modal open={open} onClose={fn} title="…" footer={<…/>}>body</Modal>
 */
function Modal({
  open = false,
  onClose,
  title = null,
  footer = null,
  size = "base",
  closeOnScrim = true,
  children,
  style = {},
  ...rest
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => e.key === "Escape" && onClose && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  const widths = {
    small: 440,
    base: 560,
    large: 680
  };
  const w = widths[size] || widths.base;
  return /*#__PURE__*/React.createElement("div", {
    className: "dc-modal__scrim",
    onMouseDown: e => {
      if (closeOnScrim && e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-6)",
      background: "rgba(26, 58, 108, 0.45)",
      animation: "dcModalFade var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined,
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      maxWidth: w,
      maxHeight: "calc(100vh - 48px)",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-2xl)",
      boxShadow: "var(--shadow-hover), var(--shadow-card)",
      overflow: "hidden",
      animation: "dcModalPop var(--duration-base) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-4)",
      padding: "20px 16px 16px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      paddingTop: 4
    }
  }, typeof title === "string" ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--weight-bold) var(--size-24)/1.3 var(--font-body)",
      color: "var(--text-body)",
      textAlign: "center"
    }
  }, title) : title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: () => onClose && onClose(),
    className: "dc-modal__x",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      flex: "none",
      border: "none",
      borderRadius: "var(--radius-pill)",
      background: "transparent",
      color: "var(--neutrals-darker-gray)",
      cursor: "pointer",
      transition: "background var(--duration-fast) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.25",
    strokeLinecap: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 8px",
      overflowY: "auto",
      font: "var(--type-body)",
      color: "var(--text-body)",
      lineHeight: 1.55
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-3)",
      padding: "16px 24px 24px",
      flexWrap: "wrap"
    }
  }, footer), /*#__PURE__*/React.createElement("style", null, `
          .dc-modal__x:hover { background: var(--neutrals-medium-light-gray); }
          .dc-modal__x:active { transform: translateY(1px); }
          @keyframes dcModalFade { from { opacity: 0 } to { opacity: 1 } }
          @keyframes dcModalPop { from { opacity: 0; transform: translateY(8px) scale(.98) } to { opacity: 1; transform: none } }
          @media (prefers-reduced-motion: reduce) {
            .dc-modal__scrim, .dc-modal__scrim > * { animation: none !important; }
          }
        `)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Delta Children — Skeleton.
 * A soft shimmer placeholder for content that's still loading. Use the base
 * <Skeleton> for any block (set width / height / radius), or the convenience
 * shapes: variant="text" (a line), "title", "circle", "image" (4:3 tile).
 * Honors prefers-reduced-motion (falls back to a steady tint).
 */
function Skeleton({
  variant = "block",
  width,
  height,
  radius,
  lines = 1,
  style = {},
  ...rest
}) {
  const base = {
    display: "block",
    background: "linear-gradient(100deg, var(--neutrals-medium-light-gray) 30%, var(--neutrals-light-gray) 50%, var(--neutrals-medium-light-gray) 70%)",
    backgroundSize: "200% 100%",
    animation: "dcShimmer 1.4s ease-in-out infinite",
    borderRadius: "var(--radius-sm)"
  };
  const shimmerStyle = /*#__PURE__*/React.createElement("style", null, `
      @keyframes dcShimmer { 0% { background-position: 200% 0 } 100% { background-position: -200% 0 } }
      @media (prefers-reduced-motion: reduce) {
        .dc-skeleton { animation: none !important; background: var(--neutrals-medium-light-gray) !important; }
      }
    `);
  if (variant === "text" && lines > 1) {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-2)",
        width: width || "100%",
        ...style
      }
    }, rest), Array.from({
      length: lines
    }).map((_, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "dc-skeleton",
      style: {
        ...base,
        height: 12,
        borderRadius: "var(--radius-xs)",
        width: i === lines - 1 ? "70%" : "100%"
      }
    })), shimmerStyle);
  }
  const presets = {
    block: {},
    text: {
      height: height || 12,
      borderRadius: "var(--radius-xs)",
      width: width || "100%"
    },
    title: {
      height: height || 24,
      borderRadius: "var(--radius-sm)",
      width: width || "60%"
    },
    circle: {
      width: width || 48,
      height: height || width || 48,
      borderRadius: "50%"
    },
    image: {
      width: width || "100%",
      aspectRatio: "4 / 3",
      borderRadius: "var(--radius-md)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "dc-skeleton",
    "aria-hidden": "true",
    style: {
      ...base,
      width,
      height,
      ...(radius != null ? {
        borderRadius: radius
      } : {}),
      ...presets[variant],
      ...style
    }
  }, rest), shimmerStyle);
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Delta Children — Spinner.
 * A restrained indeterminate loader: a ~2.5px ring with one bright arc rotating
 * on the brand-blue (or neutral / on-dark) track. Use inside buttons, icon
 * buttons, and content placeholders. Honors prefers-reduced-motion.
 *
 * tone: primary (blue) | neutral (gray) | onDark (white, for filled buttons)
 */
function Spinner({
  size = 24,
  tone = "primary",
  label = "Loading",
  style = {},
  ...rest
}) {
  const tones = {
    primary: {
      track: "var(--chromatic-lightblue-20)",
      arc: "var(--action-primary)"
    },
    neutral: {
      track: "var(--neutrals-medium-light-gray)",
      arc: "var(--neutrals-darker-gray)"
    },
    onDark: {
      track: "rgba(255,255,255,0.35)",
      arc: "var(--neutrals-white)"
    }
  };
  const t = tones[tone] || tones.primary;
  const border = Math.max(2, Math.round(size / 9));
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "status",
    "aria-label": label,
    className: "dc-spinner",
    style: {
      display: "inline-block",
      width: size,
      height: size,
      flex: "none",
      borderRadius: "50%",
      border: `${border}px solid ${t.track}`,
      borderTopColor: t.arc,
      animation: "dcSpin 0.7s linear infinite",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, `
        @keyframes dcSpin { to { transform: rotate(360deg) } }
        @media (prefers-reduced-motion: reduce) { .dc-spinner { animation-duration: 1.6s } }
      `));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Delta Children — Tooltip.
 * A dark slate bubble (white 13px copy, 8px radius) with a small beak, shown on
 * hover / focus of its trigger. Wrap any element: <Tooltip content="…"><button/></Tooltip>.
 * placement = top | bottom | left | right. Purely presentational positioning
 * via absolute offset; the trigger gets the accessible description.
 */
function Tooltip({
  content,
  placement = "top",
  maxWidth = 208,
  children,
  style = {},
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const id = React.useId();
  const isV = placement === "top" || placement === "bottom";
  const gap = 10;
  const pos = {
    top: {
      bottom: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginBottom: gap
    },
    bottom: {
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginTop: gap
    },
    left: {
      right: "100%",
      top: "50%",
      transform: "translateY(-50%)",
      marginRight: gap
    },
    right: {
      left: "100%",
      top: "50%",
      transform: "translateY(-50%)",
      marginLeft: gap
    }
  }[placement];
  const beak = {
    top: {
      top: "100%",
      left: "50%",
      marginLeft: -5,
      borderWidth: "6px 5px 0 5px",
      borderColor: "var(--neutrals-darker-gray) transparent transparent transparent"
    },
    bottom: {
      bottom: "100%",
      left: "50%",
      marginLeft: -5,
      borderWidth: "0 5px 6px 5px",
      borderColor: "transparent transparent var(--neutrals-darker-gray) transparent"
    },
    left: {
      left: "100%",
      top: "50%",
      marginTop: -5,
      borderWidth: "5px 0 5px 6px",
      borderColor: "transparent transparent transparent var(--neutrals-darker-gray)"
    },
    right: {
      right: "100%",
      top: "50%",
      marginTop: -5,
      borderWidth: "5px 6px 5px 0",
      borderColor: "transparent var(--neutrals-darker-gray) transparent transparent"
    }
  }[placement];
  const show = () => setOpen(true);
  const hide = () => setOpen(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: show,
    onMouseLeave: hide,
    onFocus: show,
    onBlur: hide
  }, rest), React.isValidElement(children) ? React.cloneElement(children, {
    "aria-describedby": open ? id : undefined
  }) : children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    id: id,
    style: {
      position: "absolute",
      zIndex: 50,
      ...pos,
      width: "max-content",
      maxWidth,
      padding: isV ? "8px 16px 12px 16px" : "8px 16px",
      borderRadius: "var(--radius-md)",
      background: "var(--neutrals-darker-gray)",
      color: "var(--text-on-dark)",
      font: "var(--weight-regular) var(--size-14)/1.5 var(--font-body)",
      fontSize: 13,
      letterSpacing: "0.01em",
      boxShadow: "var(--shadow-ambient)",
      opacity: open ? 1 : 0,
      visibility: open ? "visible" : "hidden",
      transition: "opacity var(--duration-fast) var(--ease-standard)",
      pointerEvents: "none"
    }
  }, content, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      width: 0,
      height: 0,
      borderStyle: "solid",
      ...beak
    }
  })));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Delta Children — Checkbox.
 * 20×20 box with a 2px brand-blue outline; checked fills blue with a white
 * check. Pass `label` to render the full clickable row (checkbox + 16px text),
 * matching the Figma "checkbox-item" symbol.
 */
function Checkbox({
  checked = false,
  label = null,
  disabled = false,
  onChange,
  id,
  style = {},
  ...rest
}) {
  const box = /*#__PURE__*/React.createElement("span", {
    className: "dc-check__box",
    "data-checked": checked ? "" : undefined,
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      flex: "none",
      borderRadius: "var(--radius-xs)",
      background: checked ? "var(--action-primary)" : "var(--surface-card)",
      boxShadow: checked ? "inset 0 0 0 2px var(--action-primary)" : "inset 0 0 0 2px var(--action-secondary-border)",
      transition: "background var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-on-dark)",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      opacity: checked ? 1 : 0,
      transition: "opacity var(--duration-fast) var(--ease-standard)"
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12.5l4.5 4.5L19 7"
  })));
  const handle = () => !disabled && onChange && onChange(!checked);
  if (label == null) {
    return /*#__PURE__*/React.createElement("button", _extends({
      type: "button",
      role: "checkbox",
      "aria-checked": checked,
      "aria-label": rest["aria-label"],
      disabled: disabled,
      onClick: handle,
      className: "dc-check",
      style: {
        display: "inline-flex",
        padding: 0,
        border: "none",
        background: "transparent",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        ...style
      }
    }, rest), box, /*#__PURE__*/React.createElement(CheckHoverStyle, null));
  }
  return /*#__PURE__*/React.createElement("label", _extends({
    className: "dc-check",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "var(--space-2)",
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    id: id,
    checked: checked,
    disabled: disabled,
    onChange: handle,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), box, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      lineHeight: 1.25,
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement(CheckHoverStyle, null));
}
function CheckHoverStyle() {
  return /*#__PURE__*/React.createElement("style", null, `
      .dc-check:not([disabled]):hover .dc-check__box:not([data-checked]) { box-shadow: inset 0 0 0 2px var(--action-primary-hover); background: var(--surface-tint); }
      .dc-check:active .dc-check__box { transform: translateY(1px); }
      .dc-check:focus-visible { outline: none; }
      .dc-check:focus-visible .dc-check__box { box-shadow: inset 0 0 0 2px var(--action-primary), 0 0 0 3px var(--glow-blue); }
    `);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/ColorSwatch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Delta Children — ColorSwatch. Round finish/fabric swatch used on collection
 * cards and the product page. Shows an active ring when selected and a slash
 * when unavailable.
 */
function ColorSwatch({
  color = "#caa472",
  label,
  size = 24,
  active = false,
  available = true,
  onClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label || color,
    "aria-pressed": active,
    onClick: available ? onClick : undefined,
    disabled: !available,
    title: label,
    style: {
      position: "relative",
      width: size,
      height: size,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      background: color,
      border: "none",
      cursor: available ? "pointer" : "not-allowed",
      boxShadow: active ? "inset 0 0 0 1px rgba(0,0,0,0.12), 0 0 0 2px var(--neutrals-white), 0 0 0 4px var(--action-primary)" : "inset 0 0 0 1px rgba(0,0,0,0.12)",
      transition: "box-shadow var(--duration-base) var(--ease-standard)",
      ...style
    }
  }, rest), !available && /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "20",
    x2: "20",
    y2: "4",
    stroke: "var(--neutrals-white)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "20",
    x2: "20",
    y2: "4",
    stroke: "var(--neutrals-medium-dark-gray)",
    strokeWidth: "1"
  })));
}
Object.assign(__ds_scope, { ColorSwatch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ColorSwatch.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CartIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "20",
  r: "1.4"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "18",
  cy: "20",
  r: "1.4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 3h2.2l2.3 12.2a1.6 1.6 0 0 0 1.6 1.3h8.4a1.6 1.6 0 0 0 1.6-1.3L21 7H5.3"
}));

/**
 * Delta Children — ProductCard. Grid card for shop / collection listings:
 * image, optional flag, collection eyebrow, title, rating, finish swatches,
 * price and an add-to-cart action.
 */
function ProductCard({
  image,
  title = "Product name",
  collection,
  flag,
  flagTone = "solid",
  price,
  compareAt,
  rating,
  reviews,
  swatches = [],
  onAdd,
  style = {},
  ...rest
}) {
  const [active, setActive] = React.useState(0);
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      boxShadow: "inset 0 0 0 1px var(--border-hairline)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "1 / 1",
      background: "var(--surface-subtle)"
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }), flag && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: flagTone
  }, flag))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      padding: "var(--space-4)"
    }
  }, collection && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-micro)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-eyebrow)"
    }
  }, collection), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: "var(--type-body)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-body)",
      lineHeight: 1.35
    }
  }, title), rating != null && /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating,
    count: reviews,
    size: 14
  }), swatches.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      marginTop: "var(--space-1)"
    }
  }, swatches.map((s, i) => /*#__PURE__*/React.createElement(__ds_scope.ColorSwatch, {
    key: i,
    color: s.color,
    label: s.label,
    size: 20,
    active: active === i,
    onClick: () => setActive(i)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-lg)",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-price)"
    }
  }, price), compareAt && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-faint)",
      textDecoration: "line-through"
    }
  }, compareAt)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Add to cart",
    onClick: onAdd,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      flex: "none",
      border: "none",
      cursor: "pointer",
      borderRadius: "var(--radius-md)",
      background: "var(--action-primary)",
      color: "var(--text-on-dark)",
      boxShadow: "inset 0 0 0 1px var(--action-primary-border), var(--shadow-primary)"
    }
  }, /*#__PURE__*/React.createElement(CartIcon, null)))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Delta Children — Input. Large rounded text field. Supports an optional
 * trailing action (e.g. newsletter "Subscribe") via the `action` slot.
 */
function Input({
  value,
  onChange,
  placeholder = "",
  type = "text",
  label,
  action = null,
  disabled = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      width: "100%",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      boxShadow: "inset 0 0 0 1px var(--border-default)",
      padding: action ? "4px 4px 4px 16px" : "0 16px",
      height: 48,
      transition: "box-shadow var(--duration-base) var(--ease-standard)"
    },
    className: "dc-input"
  }, /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    type: type,
    disabled: disabled,
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      font: "var(--type-body)",
      color: "var(--text-body)",
      minWidth: 0
    }
  }, rest)), action), /*#__PURE__*/React.createElement("style", null, `.dc-input:focus-within{box-shadow: inset 0 0 0 2px var(--border-focus);}`));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Sign = ({
  d
}) => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: "2.25",
  strokeLinecap: "round",
  fill: "none"
}, d);

/**
 * Delta Children — QuantityStepper. Minus / value / plus control used on the
 * product page and cart.
 */
function QuantityStepper({
  value = 1,
  min = 1,
  max = 99,
  onChange,
  style = {},
  ...rest
}) {
  const set = n => onChange && onChange(Math.max(min, Math.min(max, n)));
  const btn = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 36,
    height: 36,
    border: "none",
    background: "transparent",
    color: "var(--neutrals-darkest-gray)",
    cursor: "pointer",
    borderRadius: "var(--radius-sm)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      boxShadow: "inset 0 0 0 1px var(--border-default)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: btn,
    "aria-label": "Decrease quantity",
    onClick: () => set(value - 1)
  }, /*#__PURE__*/React.createElement(Sign, {
    d: /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14"
    })
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 32,
      textAlign: "center",
      font: "var(--type-body)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-body)"
    }
  }, value), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: btn,
    "aria-label": "Increase quantity",
    onClick: () => set(value + 1)
  }, /*#__PURE__*/React.createElement(Sign, {
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14"
    }))
  })));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Delta Children — Radio.
 * 20×20 circle with a 2px brand-blue ring; selected adds a 10px blue dot.
 * Pass `label` to render the full clickable row. Usually composed inside a
 * <RadioGroup>, which manages selection and accessible grouping.
 */
function Radio({
  checked = false,
  label = null,
  disabled = false,
  name,
  value,
  onChange,
  style = {},
  ...rest
}) {
  const dot = /*#__PURE__*/React.createElement("span", {
    className: "dc-radio__ring",
    "data-checked": checked ? "" : undefined,
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      flex: "none",
      borderRadius: "50%",
      background: "var(--surface-card)",
      boxShadow: "inset 0 0 0 2px var(--action-secondary-border)",
      transition: "box-shadow var(--duration-fast) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--action-primary)",
      transform: checked ? "scale(1)" : "scale(0)",
      transition: "transform var(--duration-fast) var(--ease-standard)"
    }
  }));
  const handle = () => !disabled && onChange && onChange(value);
  const common = {
    className: "dc-radio",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: label == null ? 0 : "var(--space-2)",
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  };
  return /*#__PURE__*/React.createElement("label", _extends({}, common, rest), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: handle,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), dot, label != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      lineHeight: 1.25,
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement("style", null, `
        .dc-radio:hover input:not(:disabled) ~ .dc-radio__ring:not([data-checked]) { box-shadow: inset 0 0 0 2px var(--action-primary-hover); background: var(--surface-tint); }
        .dc-radio:active .dc-radio__ring { transform: translateY(1px); }
        .dc-radio input:focus-visible ~ .dc-radio__ring { box-shadow: inset 0 0 0 2px var(--action-primary), 0 0 0 3px var(--glow-blue); }
      `));
}

/**
 * RadioGroup — a controlled set of radios. `options` is an array of
 * { value, label, disabled? }. Renders a vertical (default) or horizontal list.
 */
function RadioGroup({
  options = [],
  value,
  name = "dc-radio-group",
  direction = "column",
  onChange,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    style: {
      display: "flex",
      flexDirection: direction,
      gap: direction === "row" ? "var(--space-4)" : "var(--space-1)",
      ...style
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o.value,
    name: name,
    value: o.value,
    label: o.label,
    disabled: o.disabled,
    checked: value === o.value,
    onChange: onChange
  })));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Homepage.jsx
try { (() => {
/* Delta Children storefront — Homepage screen.
   Exposes window.DCStore.Homepage */
(function () {
  const NS = window.DeltaChildrenDesignSystem_6fc118;
  const {
    SectionHeader,
    Badge,
    Button,
    Rating,
    ColorSwatch,
    ProductCard,
    CategoryCard
  } = NS;
  const {
    Icon
  } = window.DCStore;
  const Wrap = ({
    children,
    bg,
    pad = 64
  }) => /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg || "var(--surface-card)",
      padding: `${pad}px var(--container-pad)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, children));

  // ---- Hero: 3-column promo showcase ----
  const HERO = [{
    img: "../../assets/images/cat-nursery-sets.png",
    eyebrow: "Build & Save",
    title: "Nursery Sets",
    sub: "Save up to 50% when you bundle"
  }, {
    img: "../../assets/images/pdp-small.png",
    eyebrow: "Baby Monitors",
    title: "Smart Sleep Technology",
    sub: "The smartest monitor for the whole family"
  }, {
    img: "../../assets/images/img-c.png",
    eyebrow: "New Arrival",
    title: "Crave High Chair",
    sub: "The only chair you'll ever need"
  }];
  function Hero() {
    return /*#__PURE__*/React.createElement(Wrap, {
      pad: 24
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16
      }
    }, HERO.map((h, i) => /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "#",
      onClick: e => e.preventDefault(),
      className: "dc-hero-card",
      style: {
        position: "relative",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        aspectRatio: "16 / 11",
        display: "block",
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: h.img,
      alt: h.title,
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(15,30,55,0.78) 0%, rgba(15,30,55,0.15) 45%, rgba(15,30,55,0) 70%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 20,
        right: 20,
        bottom: 18,
        color: "#fff"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-micro)",
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        opacity: .9
      }
    }, h.eyebrow), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-title)",
        fontFamily: "var(--font-display)",
        margin: "2px 0 2px"
      }
    }, h.title), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-body-sm)",
        opacity: .92
      }
    }, h.sub), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        marginTop: 10,
        font: "var(--type-body-sm)",
        fontWeight: "var(--weight-bold)"
      }
    }, "Shop now ", /*#__PURE__*/React.createElement(Icon, {
      name: "chevron",
      size: 16,
      stroke: 2.5
    })))))), /*#__PURE__*/React.createElement("style", null, `.dc-hero-card img{ transition: transform var(--duration-slow) var(--ease-standard); } .dc-hero-card:hover img{ transform: scale(1.04); }`));
  }

  // ---- Collection bundles ----
  const FINISHES = [{
    color: "#C9A06A",
    label: "Honey"
  }, {
    color: "#8C6F52",
    label: "Walnut"
  }, {
    color: "#F4F1EC",
    label: "White"
  }, {
    color: "#5A5A5C",
    label: "Charcoal"
  }];
  const BUNDLES = [{
    name: "Saint Collection",
    img: "../../assets/images/img-a.png",
    price: "$1,299.99",
    was: "$1,792.00"
  }, {
    name: "Dylan Collection",
    img: "../../assets/images/pdp-hero.png",
    price: "$1,099.99",
    was: "$1,540.00"
  }, {
    name: "Nest Collection",
    img: "../../assets/images/img-d.png",
    price: "$1,449.99",
    was: "$1,970.00"
  }];
  function BundleCard({
    b
  }) {
    const [sel, setSel] = React.useState(0);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-card)",
        borderRadius: "var(--radius-md)",
        boxShadow: "inset 0 0 0 1px var(--border-hairline)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: "4 / 3",
        background: "var(--surface-subtle)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: b.img,
      alt: b.name,
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body)",
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-heading-ink)"
      }
    }, b.name), /*#__PURE__*/React.createElement(Badge, {
      tone: "tint"
    }, "3-Piece Set")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, FINISHES.map((f, i) => /*#__PURE__*/React.createElement(ColorSwatch, {
      key: i,
      color: f.color,
      label: f.label,
      size: 20,
      active: sel === i,
      onClick: () => setSel(i)
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body-lg)",
        fontWeight: "var(--weight-bold)",
        color: "var(--text-price)"
      }
    }, b.price), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body-sm)",
        color: "var(--text-faint)",
        textDecoration: "line-through"
      }
    }, b.was), /*#__PURE__*/React.createElement(Badge, {
      tone: "sale",
      style: {
        marginLeft: "auto"
      }
    }, "Save 28%")), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true
    }, "Shop this set")));
  }
  function Bundles() {
    return /*#__PURE__*/React.createElement(Wrap, {
      bg: "var(--surface-tint)"
    }, /*#__PURE__*/React.createElement(SectionHeader, {
      eyebrow: "Mix & Match Your Favorites",
      title: "Build Your Dream Nursery & Save!",
      subtitle: "Bundle a crib, dresser and glider in a matching finish \u2014 save up to 50%.",
      style: {
        marginBottom: 36
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20
      }
    }, BUNDLES.map((b, i) => /*#__PURE__*/React.createElement(BundleCard, {
      key: i,
      b: b
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        marginTop: 32
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "large"
    }, "View All Nursery Sets")));
  }

  // ---- Category grid (tinted tiles) ----
  const CATS = ["Nursery Sets", "Bassinets", "High Chairs", "Wagons", "Strollers", "Mattresses", "Smart Monitors", "Personalized"];
  function CategoryTiles() {
    return /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHeader, {
      eyebrow: "Your Baby's Journey Starts Here",
      title: "Find the Perfect Fit for Every Stage",
      subtitle: "From the first night home to the big-kid years.",
      style: {
        marginBottom: 36
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 16
      }
    }, CATS.map(c => /*#__PURE__*/React.createElement("a", {
      key: c,
      href: "#",
      onClick: e => e.preventDefault(),
      className: "dc-tile",
      style: {
        textDecoration: "none",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        boxShadow: "inset 0 0 0 1px var(--border-hairline)",
        background: "var(--surface-card)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: "5 / 3",
        background: "var(--surface-tint)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 16px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body-sm)",
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-heading-ink)"
      }
    }, c), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--action-primary)",
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron",
      size: 16,
      stroke: 2.5
    })))))), /*#__PURE__*/React.createElement("style", null, `.dc-tile{ transition: box-shadow var(--duration-base), transform var(--duration-base);} .dc-tile:hover{ box-shadow: inset 0 0 0 1px var(--border-hairline), var(--shadow-hover); transform: translateY(-2px);}`));
  }

  // ---- Safety section ----
  const PRINCIPLES = [{
    t: "We Are Safe",
    d: "Every product undergoes rigorous testing that exceeds JPMA standards — built to last for years."
  }, {
    t: "We Are Healthy",
    d: "GREENGUARD Gold Certified for low chemical emissions and healthier indoor air."
  }, {
    t: "We Are Sustainable",
    d: "Responsibly sourced materials and packaging, with less waste at every step."
  }, {
    t: "We Are Family",
    d: "Family-owned for 50 years, designing for real families like yours."
  }];
  function Safety() {
    const [open, setOpen] = React.useState(0);
    return /*#__PURE__*/React.createElement(Wrap, {
      bg: "var(--surface-subtle)"
    }, /*#__PURE__*/React.createElement(SectionHeader, {
      eyebrow: "Healthier Sleep Starts Here",
      title: "Designed Around Your Baby's Safety",
      style: {
        marginBottom: 36
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.1fr 1fr",
        gap: 32,
        alignItems: "stretch"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "linear-gradient(160deg, #EAF3E2, #DCEFD0)",
        borderRadius: "var(--radius-md)",
        padding: 36,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        width: 48,
        height: 48,
        borderRadius: "var(--radius-md)",
        background: "#5C8A3A",
        color: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 26,
      stroke: 2
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        font: "var(--type-title)",
        color: "#2F4A1E"
      }
    }, "GREENGUARD Gold Certified"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "8px 0 20px",
        font: "var(--type-body-sm)",
        color: "#3C5A28",
        lineHeight: 1.6,
        maxWidth: 420
      }
    }, "Tested against more than 10,000 chemicals and VOCs by an independent laboratory \u2014 not self-reported. The most rigorous safety certification in the baby industry."), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      style: {
        alignSelf: "flex-start",
        background: "#5C8A3A",
        boxShadow: "inset 0 0 0 1px #4C7530, var(--shadow-ambient)"
      }
    }, "Learn About Our Safety")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-eyebrow)",
        color: "var(--text-eyebrow)"
      }
    }, "Our Core Principles"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 12px",
        font: "var(--type-body-sm)",
        color: "var(--text-muted)"
      }
    }, "We're obsessed with safety. Here's what that means."), /*#__PURE__*/React.createElement("div", null, PRINCIPLES.map((p, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(open === i ? -1 : i),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 4px",
        background: "none",
        border: "none",
        cursor: "pointer",
        font: "var(--type-body)",
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-body)"
      }
    }, p.t, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--action-primary)",
        display: "inline-flex",
        transform: open === i ? "rotate(180deg)" : "none",
        transition: "transform var(--duration-base)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron",
      size: 18,
      stroke: 2.5
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateRows: open === i ? "1fr" : "0fr",
        transition: "grid-template-rows var(--duration-slow) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: "0 4px 16px",
        font: "var(--type-body-sm)",
        color: "var(--text-muted)",
        lineHeight: 1.6
      }
    }, p.d)))))))));
  }

  // ---- Trending products ----
  const TRENDING = [{
    collection: "Naturals Collection",
    title: "Forever 6-Drawer Dresser with Changing Top",
    price: "$899.99",
    was: "$999.99",
    flag: "New Arrival",
    tone: "solid",
    r: 5,
    n: 48
  }, {
    collection: "Dylan Collection",
    title: "Dylan 4-in-1 Convertible Crib",
    price: "$349.99",
    was: "$429.99",
    flag: "Best Seller",
    tone: "tint",
    r: 5,
    n: 114
  }, {
    collection: "Saint Collection",
    title: "Saint 3-Drawer Dresser & Changer",
    price: "$629.99",
    flag: "−18%",
    tone: "sale",
    r: 4,
    n: 32
  }, {
    collection: "Crave",
    title: "Crave Adjustable Wooden High Chair",
    price: "$189.99",
    was: "$219.99",
    r: 5,
    n: 76
  }];
  function Trending({
    onProduct
  }) {
    return /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(SectionHeader, {
      eyebrow: "Shop by Category",
      title: "What's Trending This Month",
      style: {
        marginBottom: 36
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 20
      }
    }, TRENDING.map((p, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        cursor: "pointer"
      },
      onClick: () => onProduct && onProduct(p)
    }, /*#__PURE__*/React.createElement(ProductCard, {
      image: "../../assets/images/img-b.png",
      collection: p.collection,
      title: p.title,
      flag: p.flag,
      flagTone: p.tone,
      price: p.price,
      compareAt: p.was,
      rating: p.r,
      reviews: p.n,
      swatches: FINISHES.slice(0, 3),
      onAdd: () => onProduct && onProduct(p)
    })))));
  }

  // ---- Reviews ----
  const REVIEWS = [{
    t: "Gorgeous, sturdy & functional",
    q: "Great quality and easy to put together. The drawers are spacious and the changing top is super convenient. We always love Delta Children products.",
    n: "Marisa P."
  }, {
    t: "Beautiful nursery dresser",
    q: "I love this dresser so much! The quality is amazing and it came fully assembled — I can't compare it to anything else.",
    n: "Jenna R."
  }, {
    t: "Worth every penny",
    q: "The convertible crib grew with our family. Three kids later and it still looks brand new. Highly recommend.",
    n: "Aaliyah T."
  }];
  function Reviews() {
    return /*#__PURE__*/React.createElement(Wrap, {
      bg: "var(--surface-tint)"
    }, /*#__PURE__*/React.createElement(SectionHeader, {
      eyebrow: "Real Parents. Real Reviews.",
      title: "Loved by Families Everywhere",
      style: {
        marginBottom: 36
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20
      }
    }, REVIEWS.map((rv, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: "var(--surface-card)",
        borderRadius: "var(--radius-md)",
        padding: 24,
        boxShadow: "var(--shadow-card)",
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Rating, {
      value: 5,
      size: 16
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body)",
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-heading-ink)"
      }
    }, rv.t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        font: "var(--type-body-sm)",
        color: "var(--text-muted)",
        lineHeight: 1.6,
        flex: 1
      }
    }, rv.q), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        font: "var(--type-caption)",
        color: "var(--text-eyebrow)",
        fontWeight: "var(--weight-semibold)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 14,
      stroke: 2
    }), " Verified Customer \xB7 ", rv.n)))));
  }

  // ---- Trust stats ----
  const STATS = [{
    big: "#1",
    t: "In Safety",
    d: "We set the bar for nursery safety standards"
  }, {
    big: "1 in 2",
    t: "Babies",
    d: "Sleep on a Delta Children product"
  }, {
    big: "18%",
    t: "Of Profits",
    d: "Go toward improving the lives of children"
  }, {
    big: "50 yrs",
    t: "Of Trust",
    d: "Family-owned and family-obsessed"
  }];
  function Trust() {
    return /*#__PURE__*/React.createElement(Wrap, {
      pad: 56
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        marginBottom: 36,
        font: "var(--type-section)",
        fontFamily: "var(--font-display)",
        color: "var(--text-heading)"
      }
    }, "Why You Can Trust Delta Children"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 16
      }
    }, STATS.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        textAlign: "center",
        padding: "24px 16px",
        borderRadius: "var(--radius-md)",
        background: "var(--surface-tint)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-display)",
        fontFamily: "var(--font-display)",
        color: "var(--action-primary)"
      }
    }, s.big), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-body)",
        fontWeight: "var(--weight-bold)",
        color: "var(--text-heading-ink)",
        marginTop: 4
      }
    }, s.t), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-caption)",
        color: "var(--text-muted)",
        marginTop: 4
      }
    }, s.d)))));
  }
  function Homepage({
    onProduct
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Bundles, null), /*#__PURE__*/React.createElement(CategoryTiles, null), /*#__PURE__*/React.createElement(Safety, null), /*#__PURE__*/React.createElement(Trending, {
      onProduct: onProduct
    }), /*#__PURE__*/React.createElement(Reviews, null), /*#__PURE__*/React.createElement(Trust, null));
  }
  window.DCStore = Object.assign(window.DCStore || {}, {
    Homepage
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Homepage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ProductPage.jsx
try { (() => {
/* Delta Children storefront — Product (PDP) screen.
   Exposes window.DCStore.ProductPage */
(function () {
  const NS = window.DeltaChildrenDesignSystem_6fc118;
  const {
    Badge,
    Button,
    Rating,
    ColorSwatch,
    QuantityStepper,
    Accordion,
    ProductCard
  } = NS;
  const {
    Icon
  } = window.DCStore;
  const Wrap = ({
    children,
    bg,
    pad = 56
  }) => /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg || "var(--surface-card)",
      padding: `${pad}px var(--container-pad)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, children));
  const FINISHES = [{
    color: "#8C6F52",
    label: "Walnut"
  }, {
    color: "#C9A06A",
    label: "Honey"
  }, {
    color: "#F4F1EC",
    label: "White"
  }, {
    color: "#5A5A5C",
    label: "Charcoal"
  }];
  const GALLERY = ["../../assets/images/pdp-hero.png", "../../assets/images/img-a.png", "../../assets/images/img-b.png", "../../assets/images/img-d.png"];
  const FEATURES = ["GREENGUARD Gold Certified", "Grows with baby — 4-in-1 convertible", "Modern mid-century design", "Built to last for years", "Easy, two-person assembly"];
  const UPSELL = [{
    t: "Add the matching Dylan dresser",
    p: "+ $599.99",
    save: "Save $40"
  }, {
    t: "Add a Delta Dream crib mattress",
    p: "+ $129.99",
    save: "Save $20"
  }];
  const DETAILS = [{
    title: "Description",
    content: "The Dylan 4-in-1 convertible crib grows with your child — from crib to toddler bed, daybed and full-size bed (conversion kits sold separately). Its clean mid-century silhouette suits any nursery."
  }, {
    title: "Product Details",
    content: "Solid New Zealand pine and engineered wood. GREENGUARD Gold Certified for low emissions. Three adjustable mattress heights. JPMA certified and tested above U.S. safety standards."
  }, {
    title: "Dimensions",
    content: "54.5\"L × 29.75\"W × 35\"H. Weighs 48 lbs. Fits a standard-size crib mattress (sold separately)."
  }, {
    title: "Assembly Instructions",
    content: "All tools and hardware included. Assembles in about 45 minutes with two people. Step-by-step instructions and replacement-part support available."
  }];
  const COLLECTION = [{
    collection: "Dylan Collection",
    title: "Dylan 6-Drawer Dresser",
    price: "$649.99",
    was: "$729.99",
    r: 5,
    n: 41
  }, {
    collection: "Dylan Collection",
    title: "Dylan 3-Drawer Changing Dresser",
    price: "$549.99",
    r: 5,
    n: 28
  }, {
    collection: "Dylan Collection",
    title: "Dylan Convertible Toddler Rail",
    price: "$89.99",
    r: 4,
    n: 12
  }, {
    collection: "Dylan Collection",
    title: "Dylan Full-Size Bed Conversion Kit",
    price: "$129.99",
    r: 5,
    n: 9
  }];
  function ProductPage({
    product = {},
    onAddToCart,
    onProduct
  }) {
    const [active, setActive] = React.useState(0);
    const [finish, setFinish] = React.useState(0);
    const [qty, setQty] = React.useState(1);
    const [upsell, setUpsell] = React.useState([false, false]);
    const title = product.title || "Dylan 4-in-1 Convertible Crib";
    const price = product.price || "$349.99";
    const was = product.was || "$429.99";
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wrap, {
      pad: 40
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-caption)",
        color: "var(--text-faint)",
        marginBottom: 20
      }
    }, "Home / Nursery / Cribs / ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)"
      }
    }, title)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.15fr 1fr",
        gap: 48,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12,
        position: "sticky",
        top: 124
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        background: "var(--surface-subtle)",
        aspectRatio: "4 / 3"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: GALLERY[active],
      alt: title,
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12
      }
    }, GALLERY.map((g, i) => /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => setActive(i),
      style: {
        width: 84,
        height: 64,
        padding: 0,
        border: "none",
        borderRadius: "var(--radius-sm)",
        overflow: "hidden",
        cursor: "pointer",
        background: "var(--surface-subtle)",
        boxShadow: active === i ? "0 0 0 2px var(--action-primary)" : "inset 0 0 0 1px var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: g,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-micro)",
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "var(--text-eyebrow)"
      }
    }, "Dylan Collection"), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        font: "var(--type-display)",
        fontFamily: "var(--font-display)",
        color: "var(--text-heading-ink)",
        lineHeight: 1.1
      }
    }, title), /*#__PURE__*/React.createElement(Rating, {
      value: 5,
      count: 114
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-display-lg)",
        fontFamily: "var(--font-display)",
        color: "var(--text-price)"
      }
    }, price), was && /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body)",
        color: "var(--text-faint)",
        textDecoration: "line-through"
      }
    }, was), /*#__PURE__*/React.createElement(Badge, {
      tone: "sale"
    }, "Winter Sale")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-body-sm)",
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-body)",
        marginBottom: 8
      }
    }, "Finish \u2014 ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)",
        fontWeight: 400
      }
    }, FINISHES[finish].label)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12
      }
    }, FINISHES.map((f, i) => /*#__PURE__*/React.createElement(ColorSwatch, {
      key: i,
      color: f.color,
      label: f.label,
      active: finish === i,
      onClick: () => setFinish(i)
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-body-sm)",
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-body)"
      }
    }, "Add More & Save"), UPSELL.map((u, i) => /*#__PURE__*/React.createElement("label", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 14px",
        borderRadius: "var(--radius-md)",
        cursor: "pointer",
        background: upsell[i] ? "var(--surface-tint)" : "var(--surface-card)",
        boxShadow: upsell[i] ? "inset 0 0 0 2px var(--action-primary)" : "inset 0 0 0 1px var(--border-hairline)",
        transition: "all var(--duration-base)"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: upsell[i],
      onChange: () => setUpsell(s => s.map((v, j) => j === i ? !v : v)),
      style: {
        width: 18,
        height: 18,
        accentColor: "var(--action-primary)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        font: "var(--type-body-sm)",
        color: "var(--text-body)"
      }
    }, u.t), /*#__PURE__*/React.createElement(Badge, {
      tone: "tint"
    }, u.save), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body-sm)",
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-price)"
      }
    }, u.p)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        alignItems: "stretch"
      }
    }, /*#__PURE__*/React.createElement(QuantityStepper, {
      value: qty,
      onChange: setQty,
      style: {
        height: 48
      }
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "large",
      fullWidth: true,
      onClick: () => onAddToCart && onAddToCart(qty),
      iconLeft: /*#__PURE__*/React.createElement("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, /*#__PURE__*/React.createElement("circle", {
        cx: "9",
        cy: "20",
        r: "1.4"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "18",
        cy: "20",
        r: "1.4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M2 3h2.2l2.3 12.2a1.6 1.6 0 0 0 1.6 1.3h8.4a1.6 1.6 0 0 0 1.6-1.3L21 7H5.3"
      }))
    }, "Add to Cart")), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-caption)",
        color: "var(--text-muted)"
      }
    }, "Free shipping over $99 \xB7 Ships in 3\u20135 business days \xB7 4 interest-free payments available"), /*#__PURE__*/React.createElement(Accordion, {
      items: DETAILS,
      defaultOpen: 0,
      style: {
        marginTop: 8
      }
    })))), /*#__PURE__*/React.createElement(Wrap, {
      bg: "var(--surface-tint)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 48,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-eyebrow)",
        color: "var(--text-eyebrow)"
      }
    }, "Meet the Dylan"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "4px 0 20px",
        font: "var(--type-section)",
        fontFamily: "var(--font-display)",
        color: "var(--text-heading)"
      }
    }, "One Crib for Every Stage"), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, FEATURES.map(f => /*#__PURE__*/React.createElement("li", {
      key: f,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        font: "var(--type-body)",
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        width: 24,
        height: 24,
        borderRadius: "var(--radius-pill)",
        background: "var(--action-primary)",
        color: "#fff",
        alignItems: "center",
        justifyContent: "center",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 13l4 4 10-10"
    }))), f)))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        aspectRatio: "4 / 3"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/images/img-a.png",
      alt: "Dylan crib in a nursery",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })))), /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        marginBottom: 36
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        font: "var(--type-section)",
        fontFamily: "var(--font-display)",
        color: "var(--text-heading)"
      }
    }, "Shop More From This Collection")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 20
      }
    }, COLLECTION.map((p, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        cursor: "pointer"
      },
      onClick: () => onProduct && onProduct(p)
    }, /*#__PURE__*/React.createElement(ProductCard, {
      image: "../../assets/images/img-b.png",
      collection: p.collection,
      title: p.title,
      price: p.price,
      compareAt: p.was,
      rating: p.r,
      reviews: p.n,
      swatches: FINISHES.slice(0, 3),
      onAdd: () => onAddToCart && onAddToCart(1)
    }))))));
  }
  window.DCStore = Object.assign(window.DCStore || {}, {
    ProductPage
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ProductPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/StoreChrome.jsx
try { (() => {
/* Delta Children storefront — shared chrome: promo strip, top nav, footer.
   Exposes window.DCStore.{StripBanner, TopNav, Footer, Icon} */
(function () {
  const {
    Logo,
    IconButton,
    Input,
    Button
  } = window.DeltaChildrenDesignSystem_6fc118;

  // --- tiny inline icon set (stroke, currentColor) ---
  const I = {
    search: /*#__PURE__*/React.createElement("path", {
      d: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm6 13 4 4"
    }),
    user: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "8",
      r: "3.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 20a7 7 0 0 1 14 0"
    })),
    cart: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "20",
      r: "1.4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "20",
      r: "1.4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2 3h2.2l2.3 12.2a1.6 1.6 0 0 0 1.6 1.3h8.4a1.6 1.6 0 0 0 1.6-1.3L21 7H5.3"
    })),
    info: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 11v5M12 8h.01"
    })),
    heart: /*#__PURE__*/React.createElement("path", {
      d: "M12 20S4 14.5 4 9a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 5.5-8 11-8 11z"
    }),
    chevron: /*#__PURE__*/React.createElement("path", {
      d: "M6 9l6 6 6-6"
    })
  };
  function Icon({
    name,
    size = 22,
    stroke = 2
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: stroke,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        flex: "none"
      }
    }, I[name]);
  }
  function StripBanner() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-promo)",
        color: "var(--promo-green-light)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        height: 40,
        font: "var(--type-body-sm)",
        fontWeight: "var(--weight-medium)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase"
      }
    }, "Winter Sale: 15% Off Sitewide with Code WINTER15", /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: .75,
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "info",
      size: 16,
      stroke: 2
    })));
  }
  const NAV = ["Nursery", "Kid's Bedroom", "Play & Outdoor", "Strollers", "Wagons", "Baby Gear", "Mattresses", "Bedding", "Accessories", "Personalization"];
  const PROMO = [{
    t: "New",
    c: "var(--action-primary)"
  }, {
    t: "Sale",
    c: "var(--sale-red)"
  }];
  function TopNav({
    cartCount = 0,
    onLogo
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "var(--surface-card)",
        boxShadow: "0 1px 0 var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--container-pad)",
        height: 60,
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        maxWidth: 280,
        background: "var(--surface-subtle)",
        borderRadius: "var(--radius-pill)",
        padding: "0 16px",
        height: 38,
        color: "var(--text-faint)",
        boxShadow: "inset 0 0 0 1px var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 18
    }), /*#__PURE__*/React.createElement("input", {
      placeholder: "Search",
      style: {
        border: "none",
        background: "transparent",
        outline: "none",
        font: "var(--type-body-sm)",
        color: "var(--text-body)",
        width: "100%"
      }
    })), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onLogo && onLogo();
      },
      style: {
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      height: 26
    })), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      ariaLabel: "Account"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "user"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      ariaLabel: "Cart"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "cart"
    })), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 2,
        right: 2,
        minWidth: 18,
        height: 18,
        padding: "0 4px",
        borderRadius: 9,
        background: "var(--action-primary)",
        color: "#fff",
        font: "var(--type-micro)",
        fontWeight: 700,
        display: "grid",
        placeItems: "center"
      }
    }, cartCount)))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--container-pad)",
        height: 48,
        display: "flex",
        alignItems: "center",
        gap: 22,
        overflow: "hidden"
      }
    }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
      key: n,
      href: "#",
      onClick: e => e.preventDefault(),
      className: "dc-nav-link",
      style: {
        font: "var(--type-body-sm)",
        fontWeight: "var(--weight-medium)",
        color: "var(--text-body)",
        textDecoration: "none",
        whiteSpace: "nowrap"
      }
    }, n)), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), PROMO.map(p => /*#__PURE__*/React.createElement("a", {
      key: p.t,
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        font: "var(--type-body-sm)",
        fontWeight: "var(--weight-bold)",
        color: p.c,
        textDecoration: "none"
      }
    }, p.t)))), /*#__PURE__*/React.createElement("style", null, `.dc-nav-link:hover{ color: var(--action-primary); }`));
  }
  const HELP = [{
    t: "Contact Us",
    d: "Chat, call or email our team"
  }, {
    t: "Product Registration",
    d: "Register for warranty"
  }, {
    t: "Replacement Parts",
    d: "Order missing hardware"
  }, {
    t: "Track Order",
    d: "See where your order is"
  }, {
    t: "Shipping & Returns",
    d: "Policies & timelines"
  }];
  const SOCIAL = ["Instagram", "Facebook", "Pinterest", "YouTube", "TikTok"];
  function Footer() {
    return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-subtle)",
        padding: "48px var(--container-pad)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-eyebrow)",
        color: "var(--text-eyebrow)"
      }
    }, "Here to Help"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "4px 0 28px",
        font: "var(--type-section)",
        color: "var(--text-heading)"
      }
    }, "Get Assistance, Track Orders & More"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 16
      }
    }, HELP.map(h => /*#__PURE__*/React.createElement("a", {
      key: h.t,
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        textDecoration: "none",
        background: "var(--surface-card)",
        borderRadius: "var(--radius-md)",
        padding: "20px 16px",
        boxShadow: "inset 0 0 0 1px var(--border-hairline)",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        transition: "box-shadow var(--duration-base)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body)",
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-heading-ink)"
      }
    }, h.t), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-caption)",
        color: "var(--text-muted)"
      }
    }, h.d)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-tint)",
        padding: "40px var(--container-pad)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 48,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        font: "var(--type-title)",
        color: "var(--text-heading)"
      }
    }, "Sign Up & Get a Surprise Offer"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "6px 0 16px",
        font: "var(--type-body-sm)",
        color: "var(--text-muted)"
      }
    }, "Join for a surprise discount on your first order, plus exclusive deals straight to your inbox."), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 420
      }
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "Email address",
      action: /*#__PURE__*/React.createElement(Button, null, "Subscribe")
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        justifySelf: "end",
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        font: "var(--type-title)",
        color: "var(--text-heading)"
      }
    }, "#DeltaChildren"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "6px 0 16px",
        font: "var(--type-body-sm)",
        color: "var(--text-muted)"
      }
    }, "Tag us to share your nursery \u2014 you might be featured."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 18,
        justifyContent: "flex-end"
      }
    }, SOCIAL.map(s => /*#__PURE__*/React.createElement("a", {
      key: s,
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        font: "var(--type-body-sm)",
        color: "var(--action-primary)",
        textDecoration: "none",
        fontWeight: "var(--weight-medium)"
      }
    }, s)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-card)",
        borderTop: "1px solid var(--border-hairline)",
        padding: "20px var(--container-pad)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      height: 20
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-caption)",
        color: "var(--text-faint)"
      }
    }, "\xA9 2026 Delta Children. Designed for safe, healthier sleep."))));
  }
  window.DCStore = {
    StripBanner,
    TopNav,
    Footer,
    Icon
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/StoreChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.CategoryCard = __ds_scope.CategoryCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.ColorSwatch = __ds_scope.ColorSwatch;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

})();
