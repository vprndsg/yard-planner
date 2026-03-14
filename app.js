const STORAGE_KEY = 'yard-garden-planner-layout-v3';
const SNAP_FEET = 0.25;
const MIN_BOX_SIZE = 0.5;
const BASE_BOARD_WIDTH = 780;
const VIEWBOX = { width: 51, height: 47.8 };
const DEFAULT_ZOOM = window.innerWidth < 780 ? 0.84 : 1.08;
const DEFAULT_OVERLAY = 0.58;
const ITEM_TYPES = {
  planter: {
    label: 'Planter',
    shortLabel: 'Planter',
    icon: '<img src="./assets/icon_planter.png" class="item-icon" />',
    image: 'planter_1773194590250.png'
  },
  plant: {
    label: 'Plant',
    shortLabel: 'Plant',
    icon: '<img src="./assets/icon_plant.png" class="item-icon" />',
    image: 'generic_plant_1773194602469.png'
  },
  lemonTree: {
    label: 'Lemon tree',
    shortLabel: 'Tree',
    icon: '<img src="./assets/icon_lemonTree.png" class="item-icon" />',
    image: 'lemon_tree_1773194550127.png'
  },
  woodChips: {
    label: 'Wood chips',
    shortLabel: 'Wood chips',
    icon: '<img src="./assets/icon_woodChips.png" class="item-icon" />',
    image: 'irregular_wood_chips.png'
  },
  steppingStone: {
    label: 'Stepping stone',
    shortLabel: 'Stone',
    icon: '<img src="./assets/icon_steppingStone.png" class="item-icon" />',
    image: 'stepping_stone_1773194577054.png'
  },
  manzanita: {
    label: 'Manzanita',
    shortLabel: 'Manzanita',
    icon: '<img src="./assets/icon_manzanita.png" class="item-icon" />',
    image: 'manzanita_1773194625175.png',
    scientificName: 'Arctostaphylos',
    bio: 'Evergreen shrub with distinctive smooth orange/red bark and stiff, twisting branches.',
    conditions: 'Full sun, excellent drainage, drought tolerant once established.'
  },
  californiaLilac: {
    label: 'California lilac',
    shortLabel: 'Lilac',
    icon: '<img src="./assets/icon_californiaLilac.png" class="item-icon" />',
    image: 'california_lilac_1773194638605.png',
    scientificName: 'Ceanothus',
    bio: 'Fast-growing shrub famous for its brilliant displays of blue, purple, or white flowers.',
    conditions: 'Full sun to part shade, well-draining soil, low water.'
  },
  californiaPoppy: {
    label: 'California poppy',
    shortLabel: 'Poppy',
    icon: '<img src="./assets/icon_californiaPoppy.png" class="item-icon" />',
    image: 'california_poppy_1773194650514.png',
    scientificName: 'Eschscholzia californica',
    bio: 'The state flower of California, known for its vibrant orange, cup-shaped flowers that close at night.',
    conditions: 'Full sun, sandy/poor soils, drought tolerant.'
  },
  hummingbirdSage: {
    label: 'Hummingbird sage',
    shortLabel: 'Sage',
    icon: '<img src="./assets/icon_hummingbirdSage.png" class="item-icon" />',
    image: 'hummingbird_sage_1773194663143.png',
    scientificName: 'Salvia spathacea',
    bio: 'Highly fragrant, drought-tolerant perennial featuring tall, magenta flower spikes that attract hummingbirds.',
    conditions: 'Part shade to shade, under oaks, low to moderate water.'
  },
  commonYarrow: {
    label: 'Common yarrow',
    shortLabel: 'Yarrow',
    icon: '<img src="./assets/icon_commonYarrow.png" class="item-icon" />',
    image: 'common_yarrow_1773194679752.png',
    scientificName: 'Achillea millefolium',
    bio: 'Hardy perennial herb with fern-like leaves and flat clusters of tiny, usually white flowers.',
    conditions: 'Full sun to part shade, adaptable soil, low water.'
  },
  deergrass: {
    label: 'Deergrass',
    shortLabel: 'Grass',
    icon: '<img src="./assets/icon_deergrass.png" class="item-icon" />',
    image: 'deergrass_1773194706106.png',
    scientificName: 'Muhlenbergia rigens',
    bio: 'A large, dense, clumping perennial grass native to California with long, thin foliage.',
    conditions: 'Full sun to part shade, adaptable soil, low to moderate water.'
  },
  pomegranateTree: {
    label: 'Pomegranate tree',
    shortLabel: 'Pomegranate',
    icon: '<img src="./assets/icon_pomegranateTree.png" class="item-icon" />',
    image: 'pomegranate_tree_1773195451884.png',
    scientificName: 'Punica granatum',
    bio: 'Deciduous fruit-bearing shrub or small tree, notable for highly decorative flowers and red jewel-like arils.',
    conditions: 'Full sun, well-draining soil, drought-tolerant once established but needs regular water for good fruit.'
  },
  whiteRufflesPoppy: {
    label: 'White ruffles poppy',
    shortLabel: 'Poppy',
    icon: '<img src="./assets/icon_whiteRufflesPoppy.png" class="item-icon" />',
    image: 'white_ruffles_poppy_1773195464172.png',
    scientificName: 'Papaver somniferum',
    bio: 'Stunning ornamental poppy variety with deeply fringed, pure white petals resembling ruffled silk.',
    conditions: 'Full sun, well-draining soil, low to moderate water, sow in fall or early spring.'
  },
  passionFruit: {
    label: 'Passion fruit',
    shortLabel: 'Passion fruit',
    icon: '<img src="./assets/icon_passionFruit.png" class="item-icon" />',
    image: 'passion_fruit_1773195477245.png',
    scientificName: 'Passiflora edulis',
    bio: 'Vigorous climbing vine featuring incredibly complex, beautiful flowers and eventually, delicious tart fruits.',
    conditions: 'Full sun, rich well-draining soil, frequent watering, needs strong vertical support structure.'
  },
  rockingChair: {
    label: 'Rocking chair',
    shortLabel: 'Chair',
    icon: '<img src="./assets/icon_rockingChair.png" class="item-icon" />',
    image: 'rocking_chair_1773195491166.png'
  },
  lavender: {
    label: 'Lavender',
    shortLabel: 'Lavender',
    icon: '🪻',
    image: 'lavender_1773198089165.png',
    scientificName: 'Lavandula stoechas',
    bio: 'Fragrant and highly attractive to pollinators, Mediterranean herb prized for its purple blooms.',
    conditions: 'Full sun, highly well-draining soil, low water once established.'
  },
  rosemary: {
    label: 'Rosemary',
    shortLabel: 'Rosemary',
    icon: '🌿',
    image: 'rosemary_1773198101785.png',
    scientificName: 'Salvia rosmarinus',
    bio: 'Aromatic evergreen woody herb with needle-like leaves, excellent for culinary use.',
    conditions: 'Full sun, well-draining soil, drought-tolerant.'
  },
  bench: {
    label: 'Bench',
    shortLabel: 'Bench',
    icon: '🪑',
    image: 'bench_asset.png'
  },
  trellis: {
    label: 'Trellis',
    shortLabel: 'Trellis',
    icon: '🪜',
    image: 'trellis_asset.png'
  },
  wisteria: {
    label: 'Wisteria',
    shortLabel: 'Wisteria',
    icon: '🍇',
    image: 'wisteria_asset.png',
    scientificName: 'Wisteria sinensis',
    bio: 'A vigorous climbing vine with cascading clusters of fragrant, purple flowers.',
    conditions: 'Full sun to part shade, sturdy support needed.'
  },
  jasmine: {
    label: 'Jasmine',
    shortLabel: 'Jasmine',
    icon: '🌼',
    image: 'jasmine_asset.png',
    scientificName: 'Jasminum',
    bio: 'A popular climbing shrub known for its intensely fragrant, star-shaped white flowers.',
    conditions: 'Full sun to part shade, regular watering, well-draining soil.'
  }
};

const PLAN = {
  stageWidth: 48,
  stageHeight: 42.25,
  planterWidth: 31 + 8 / 12,
  walkwayWidth: 56 / 12,
  drivewayDepth: 22.25,
  planterTop: 2,
};

const ENTRY_COURT = {
  left: 29.25,
  right: 35.7,
  top: 25.15,
  bottom: 35.55,
  notchLeft: 34.5,
  notchTop: 33.9,
  notchBottom: 35.55,
};

const VALID_YARD_POLYGON = [
  [0.3, 2.1],
  [31.65, 2.1],
  [31.65, 13.8],
  [31.2, 17.0],
  [30.0, 19.9],
  [28.0, 22.7],
  [25.3, 24.7],
  [20.6, 24.9],
  [18.3, 24.4],
  [17.0, 23.7],
  [14.2, 23.0],
  [10.4, 25.2],
  [8.2, 25.6],
  [2.7, 25.5],
  [0.2, 24.8],
  [0.3, 7.3],
];

const state = {
  items: loadItems(),
  selectedId: null,
  activePanel: loadPanel('panel', 'buildPanel'),
  zoom: loadNumber('zoom', DEFAULT_ZOOM, 0.7, 1.8),
  overlay: loadNumber('overlay', DEFAULT_OVERLAY, 0, 0.9),
};
state.selectedId = state.items[0]?.id ?? null;

const plannerSvg = document.getElementById('plannerSvg');
const traceLayer = document.getElementById('traceLayer');
const itemLayer = document.getElementById('itemLayer');
const referenceImage = document.getElementById('referenceImage');
const itemList = document.getElementById('itemList');
const boardScroll = document.getElementById('boardScroll');
const addBoxForm = document.getElementById('addBoxForm');
const boxWidthInput = document.getElementById('boxWidthInput');
const boxHeightInput = document.getElementById('boxHeightInput');
const formMessage = document.getElementById('formMessage');
const rotateLeftButton = document.getElementById('rotateLeftButton');
const rotateRightButton = document.getElementById('rotateRightButton');
const removeBoxButton = document.getElementById('removeBoxButton');
const clearAllButton = document.getElementById('clearAllButton');
const presetButtons = Array.from(document.querySelectorAll('[data-item-kind]'));
const presetGrid = document.getElementById('presetGrid');
const librarySearchInput = document.getElementById('librarySearchInput');
const libraryEmptyState = document.getElementById('libraryEmptyState');
const toolTabButtons = Array.from(document.querySelectorAll('[data-tool-panel]'));
const toolPanels = Array.from(document.querySelectorAll('[data-tool-panel-body]'));
const selectionCard = document.getElementById('selectionCard');

let dragState = null;

buildTraceLayer();
wireControls();
render();
window.addEventListener('resize', renderBoardSize);

function buildTraceLayer() {
  const walkwayX = PLAN.planterWidth;
  const drivewayX = PLAN.planterWidth + PLAN.walkwayWidth;
  const drivewayWidth = PLAN.stageWidth - drivewayX;

  traceLayer.innerHTML = `
    ${buildUpperYardFill()}
    ${buildLowerYardFill()}
    <rect x="${walkwayX}" y="${PLAN.planterTop}" width="${PLAN.walkwayWidth}" height="29.2" class="walkway-fill" />
    <rect x="${drivewayX}" y="${PLAN.planterTop}" width="${drivewayWidth}" height="${PLAN.drivewayDepth}" class="driveway-fill" />
    <rect x="${drivewayX}" y="${PLAN.planterTop}" width="${drivewayWidth}" height="${PLAN.drivewayDepth}" fill="url(#drivewayPattern)" opacity="0.34" />
    ${buildWalkwaySteps(walkwayX)}
    ${buildConcreteLip()}
    ${buildEntryCourt()}
    ${buildHouseFronts()}
    ${buildDimensionLines(walkwayX, drivewayX)}
    ${buildLabels(walkwayX, drivewayX)}
    ${buildScaleBar()}
  `;
}

function buildUpperYardFill() {
  return `
    <path class="yard-zone-fill" d="
      M 0.3 2.1
      H 31.65
      V 13.8
      C 31.65 17.6, 30.9 20.4, 28.7 22.8
      C 25.9 25.9, 22.5 26.2, 18.8 25.8
      C 15.0 25.3, 11.5 22.9, 8.1 18.7
      C 5.5 15.4, 2.8 11.5, 0.3 7.3
      Z
    " />
  `;
}

function buildLowerYardFill() {
  return `
    <path class="yard-zone-fill" d="
      M 0.3 7.3
      C 5.3 8.1, 9.5 10.2, 13.1 13.5
      C 16.9 17.0, 19.3 21.1, 20.8 25.7
      C 16.1 27.3, 11.3 27.0, 6.8 26.0
      C 4.3 25.4, 2.1 24.7, 0.3 23.8
      Z
    " />
  `;
}

function buildWalkwaySteps(walkwayX) {
  const center = walkwayX + PLAN.walkwayWidth / 2;
  return `
    <path class="boundary-line" d="M ${center - 2.15} 10.8 C ${center - 0.9} 11.25, ${center + 0.9} 11.25, ${center + 2.15} 10.8" opacity="0.7" />
    <path class="boundary-line" d="M ${center - 2.2} 17.9 C ${center - 0.95} 18.35, ${center + 0.95} 18.35, ${center + 2.2} 17.9" opacity="0.7" />
    <path class="boundary-line" d="M ${center - 2.25} 25.1 C ${center - 1} 25.55, ${center + 1} 25.55, ${center + 2.25} 25.1" opacity="0.7" />
  `;
}

function buildConcreteLip() {
  return `
    <path class="boundary-line heavy" d="
      M 0.2 24.8
      C 2.7 25.5, 5.5 25.9, 8.2 25.6
      C 10.4 25.2, 12.0 24.5, 13.2 23.6
      C 14.2 23.0, 15.5 22.9, 17.0 23.7
      C 18.3 24.4, 19.3 24.7, 20.6 24.9
    " />
  `;
}

function buildEntryCourt() {
  return `
    <path
      class="entry-court-fill"
      d="
        M ${ENTRY_COURT.left} ${ENTRY_COURT.top}
        H ${ENTRY_COURT.right}
        V ${ENTRY_COURT.notchTop}
        H ${ENTRY_COURT.notchLeft}
        V ${ENTRY_COURT.notchBottom}
        H ${ENTRY_COURT.left}
        Z
      "
    />
    <rect x="30.92" y="25.95" width="3.92" height="2.65" class="step-pad" />
    <rect x="30.92" y="28.6" width="3.92" height="2.65" class="step-pad" />
    <path class="boundary-line" d="M ${ENTRY_COURT.left} ${ENTRY_COURT.top + 0.25} C ${ENTRY_COURT.left - 0.55} 23.95, ${ENTRY_COURT.left + 0.15} 22.05, ${ENTRY_COURT.left + 1.25} 20.6" opacity="0.62" />
    <path class="boundary-line" d="M ${ENTRY_COURT.left + 0.32} ${ENTRY_COURT.bottom} H ${ENTRY_COURT.notchLeft - 0.18}" opacity="0.55" />
  `;
}

function buildHouseFronts() {
  return `
    <g>
      <path
        class="house-outline"
        d="
          M 4.4 29.55
          H 24.05
          L 28.85 34.45
          V 41.15
          H 4.4
          Z
        "
      />
      <path class="roof-ridge" d="M 4.55 29.7 L 12.1 39.05" />
      <path class="roof-ridge" d="M 24.0 29.7 L 12.1 39.05" />
      <path class="roof-ridge light" d="M 28.75 34.5 L 24.05 29.7" />

      <path
        class="house-outline"
        d="
          M 37.1 24.95
          H 47.65
          V 41.15
          H 37.1
          Z
        "
      />
      <path class="roof-ridge" d="M 37.2 25.1 L 44.55 34.45" />
      <path class="roof-ridge" d="M 47.55 25.1 L 44.55 34.45" />
      <path class="roof-ridge light" d="M 42.5 41.0 L 47.1 36.65" />
    </g>
  `;
}

function buildDimensionLines(walkwayX, drivewayX) {
  const topY = 0.6;
  const rightX = drivewayX + 1.8;
  return `
    ${dimensionLine(0.3, topY, walkwayX, topY, "31' 8\"")}
    ${dimensionLine(walkwayX, topY, drivewayX, topY, '56"')}
    ${dimensionLine(rightX, PLAN.planterTop, rightX, PLAN.planterTop + PLAN.drivewayDepth, "22' 3\"", true)}
  `;
}

function buildLabels(walkwayX, drivewayX) {
  return `
    <text x="12.4" y="11.1" class="board-label" font-size="1.55">Yard zone</text>
    <text x="${walkwayX + PLAN.walkwayWidth / 2 + 0.15}" y="15.8" class="board-label" font-size="0.88" transform="rotate(90 ${walkwayX + PLAN.walkwayWidth / 2 + 0.15} 15.8)">Walkway to entry</text>
    <text x="${drivewayX + 5.2}" y="13.9" class="board-label" font-size="1.45">Driveway</text>
    <text x="2.1" y="26.8" class="board-label muted" font-size="0.84" transform="rotate(-17 2.1 26.8)">Concrete lip</text>
    <text x="31.25" y="36.7" class="board-label muted" font-size="0.76">Entry court</text>
    <text x="1.3" y="1.3" class="board-label muted" font-size="0.7">1 ft grid</text>
  `;
}

function buildScaleBar() {
  return `
    <g class="foot-scale" transform="translate(2.2, 39.5)">
      <rect x="0" y="0" width="8" height="0.5" fill="rgba(47, 52, 39, 0.16)" rx="0.18" />
      <rect x="0" y="0" width="4" height="0.5" fill="rgba(184, 91, 63, 0.24)" rx="0.18" />
      <line x1="0" y1="-0.2" x2="0" y2="0.9" class="boundary-line" />
      <line x1="4" y1="-0.2" x2="4" y2="0.9" class="boundary-line" />
      <line x1="8" y1="-0.2" x2="8" y2="0.9" class="boundary-line" />
      <text x="0" y="1.6">0</text>
      <text x="3.68" y="1.6">4 ft</text>
      <text x="7.32" y="1.6">8 ft</text>
    </g>
  `;
}

function dimensionLine(x1, y1, x2, y2, label, vertical = false) {
  const labelX = vertical ? x1 + 0.82 : (x1 + x2) / 2;
  const labelY = vertical ? (y1 + y2) / 2 : y1 - 0.45;
  const labelRotate = vertical ? ` transform="rotate(90 ${labelX} ${labelY})"` : '';

  return `
    <g>
      <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="dimension-line" />
      ${arrowMark(x1, y1, vertical)}
      ${arrowMark(x2, y2, vertical, true)}
      <text x="${labelX}" y="${labelY}" class="board-label muted" font-size="0.76" text-anchor="middle"${labelRotate}>${label}</text>
    </g>
  `;
}

function arrowMark(x, y, vertical, reverse = false) {
  if (vertical) {
    const dir = reverse ? -1 : 1;
    return `<path class="dimension-arrow" d="M ${x - 0.32} ${y + 0.38 * dir} L ${x} ${y} L ${x + 0.32} ${y + 0.38 * dir}" />`;
  }

  const dir = reverse ? -1 : 1;
  return `<path class="dimension-arrow" d="M ${x + 0.38 * dir} ${y - 0.32} L ${x} ${y} L ${x + 0.38 * dir} ${y + 0.32}" />`;
}

function wireControls() {
  addBoxForm.addEventListener('submit', handleAddPlanter);
  boxWidthInput.addEventListener('input', clearFormMessage);
  boxHeightInput.addEventListener('input', clearFormMessage);
  rotateLeftButton.addEventListener('click', () => rotateSelected(-90));
  rotateRightButton.addEventListener('click', () => rotateSelected(90));
  removeBoxButton.addEventListener('click', removeSelectedItem);
  clearAllButton.addEventListener('click', clearAllItems);
  presetButtons.forEach((button) => button.addEventListener('click', () => handleAddPresetItem(button.dataset.itemKind)));
  presetButtons.forEach((button) => {
    const config = ITEM_TYPES[button.dataset.itemKind];
    button.dataset.search = [button.textContent, config?.label, config?.shortLabel, config?.scientificName]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
  });
  toolTabButtons.forEach((button) => {
    button.addEventListener('click', () => setActivePanel(button.dataset.toolPanel));
  });
  librarySearchInput.addEventListener('input', renderLibraryFilter);
  plannerSvg.addEventListener('selectstart', (event) => event.preventDefault());
  plannerSvg.addEventListener('dragstart', (event) => event.preventDefault());

  window.addEventListener('pointermove', handlePointerMove);
  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointercancel', endDrag);
  window.addEventListener('touchmove', handleTouchMove, { passive: false });
  window.addEventListener('touchend', endTouchDrag, { passive: false });
  window.addEventListener('touchcancel', endTouchDrag, { passive: false });
}

function render() {
  renderReferenceOpacity();
  renderItems();
  renderSelectionCard();
  renderItemList();
  renderLibraryFilter();
  syncToolPanels();
  renderBoardSize();
  updateActionState();
}

function renderSelectionCard() {
  const selectedItem = getSelectedItem();
  const mobileMoveCopy = isMobileMoveMode()
    ? '<div class="selection-copy mobile-selection-tip">Phone: tap and drag an item to move it.</div>'
    : '';

  if (!selectedItem) {
    selectionCard.className = 'selection-card empty';
    selectionCard.innerHTML = `
      <p class="section-label">Selected item</p>
      <div class="selection-copy">Select an item on the board to inspect its footprint, status, and notes without expanding every row in the list.</div>
      ${mobileMoveCopy}
    `;
    return;
  }

  const config = ITEM_TYPES[selectedItem.kind] ?? ITEM_TYPES.planter;
  const status = getItemStatus(selectedItem);
  const dims = getWorldDimensions(selectedItem);
  const notes = [config.scientificName ? `<em>${config.scientificName}</em>` : '', config.conditions || config.bio || '']
    .filter(Boolean)
    .join(' ');

  selectionCard.className = 'selection-card';
  selectionCard.innerHTML = `
    <p class="section-label">Selected item</p>
    <div class="selection-head">
      <div class="selection-title">
        <strong>${config.icon} ${config.label} ${selectedItem.id}</strong>
        <span>${formatFeet(selectedItem.width)} ft x ${formatFeet(selectedItem.height)} ft, rotation ${normalizeRotation(selectedItem.rotation)}°</span>
      </div>
      <span class="box-chip selection-badge ${status.valid ? 'valid' : 'invalid'}">${status.valid ? 'inside yard zone' : 'outside yard zone'}</span>
    </div>
    <div class="selection-meta">
      <div>Footprint on map: ${formatFeet(dims.width)} ft x ${formatFeet(dims.height)} ft</div>
      <div>Center: x ${formatFeet(selectedItem.x)} ft, y ${formatFeet(selectedItem.y)} ft</div>
    </div>
    ${notes ? `<div class="selection-copy">${notes}</div>` : ''}
    ${mobileMoveCopy}
  `;
}

function renderLibraryFilter() {
  const query = librarySearchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  presetButtons.forEach((button) => {
    const visible = !query || button.dataset.search.includes(query);
    button.hidden = !visible;
    if (visible) {
      visibleCount += 1;
    }
  });

  libraryEmptyState.hidden = visibleCount > 0;
  presetGrid.hidden = visibleCount === 0;
}

function syncToolPanels() {
  toolTabButtons.forEach((button) => {
    const active = button.dataset.toolPanel === state.activePanel;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
  });

  toolPanels.forEach((panel) => {
    const active = panel.id === state.activePanel;
    panel.classList.toggle('active', active);
    panel.hidden = !active;
  });
}

function setActivePanel(panelId) {
  if (!toolPanels.some((panel) => panel.id === panelId)) {
    return;
  }

  state.activePanel = panelId;
  localStorage.setItem(`${STORAGE_KEY}:panel`, panelId);
  syncToolPanels();
}

function renderReferenceOpacity() {
  referenceImage.style.opacity = String(state.overlay);
  referenceImage.setAttribute('opacity', String(state.overlay));
}

function renderItems() {
  itemLayer.innerHTML = state.items.map(renderItemSvg).join('');

  itemLayer.querySelectorAll('.movable-item').forEach((element) => {
    element.addEventListener('pointerdown', startDrag);
    element.addEventListener('touchstart', startTouchDrag, { passive: false });
    element.addEventListener('click', () => selectItem(element.dataset.itemId));
  });
}

function renderItemSvg(item) {
  const status = getItemStatus(item);
  const classes = ['movable-item', `item-kind-${item.kind}`];
  if (item.id === state.selectedId) {
    classes.push('selected');
  }
  if (!status.valid) {
    classes.push('invalid');
  }

  const config = ITEM_TYPES[item.kind] || ITEM_TYPES.planter;

  if (item.kind === 'planter') {
    return renderPlanterSvg(item, classes, config);
  } else if (item.kind === 'steppingStone') {
    return renderSteppingStoneSvg(item, classes, config);
  }

  const width = item.width;
  const height = item.height;

  return `
    <g class="${classes.join(' ')}" data-item-id="${item.id}" transform="${getItemTransform(item)}">
      <image href="./assets/${config.image}" x="${(-width / 2).toFixed(2)}" y="${(-height / 2).toFixed(2)}" width="${width.toFixed(2)}" height="${height.toFixed(2)}" preserveAspectRatio="none" style="mix-blend-mode: multiply;" />
    </g>
  `;
}

function renderPlanterSvg(item, classes, config) {
  const inset = getPlanterInset(item);
  const innerWidth = Math.max(item.width - inset * 2, 0.1);
  const innerHeight = Math.max(item.height - inset * 2, 0.1);
  const labelSize = getPlanterLabelSize(item);
  const noteSize = Math.max(labelSize * 0.58, 0.34);
  const showNote = Math.min(item.width, item.height) >= 2.25;

  return `
    <g class="${classes.join(' ')}" data-item-id="${item.id}" transform="${getItemTransform(item)}">
      <rect class="planter-body" x="${(-item.width / 2).toFixed(2)}" y="${(-item.height / 2).toFixed(2)}" width="${item.width.toFixed(2)}" height="${item.height.toFixed(2)}" rx="0.24" />
      <rect class="planter-top" x="${(-item.width / 2 + inset).toFixed(2)}" y="${(-item.height / 2 + inset).toFixed(2)}" width="${innerWidth.toFixed(2)}" height="${innerHeight.toFixed(2)}" rx="0.18" />
      <text class="item-id" x="0" y="${showNote ? -0.18 : 0}" font-size="${labelSize.toFixed(2)}">${item.id}</text>
      ${showNote ? `<text class="item-size-note" x="0" y="${(labelSize * 0.9).toFixed(2)}" font-size="${noteSize.toFixed(2)}">${formatFeet(item.width)}' x ${formatFeet(item.height)}'</text>` : ''}
    </g>
  `;
}

function renderSteppingStoneSvg(item, classes, config) {
  const width = item.width;
  const height = item.height;
  const cornerRadius = Math.min(item.cornerRadius ?? 0.24, Math.min(width, height) / 2 - 0.02);
  const seamOffset = (item.stoneSeamOffset ?? 0) * height;
  return `
    <g class="${classes.join(' ')}" data-item-id="${item.id}" transform="${getItemTransform(item)}">
      <rect class="feature-outline stone-body tone-${item.stoneTone ?? 1}" x="${(-width / 2).toFixed(2)}" y="${(-height / 2).toFixed(2)}" width="${width.toFixed(2)}" height="${height.toFixed(2)}" rx="${cornerRadius.toFixed(2)}" />
      <path class="stone-seam" d="M ${(-width * 0.3).toFixed(2)} ${(-height * 0.04 + seamOffset).toFixed(2)} C ${(-width * 0.1).toFixed(2)} ${(height * 0.16 + seamOffset).toFixed(2)}, ${(width * 0.08).toFixed(2)} ${(-height * 0.14 + seamOffset).toFixed(2)}, ${(width * 0.28).toFixed(2)} ${(height * 0.08 + seamOffset).toFixed(2)}" />
    </g>
  `;
}

function renderItemList() {
  itemList.innerHTML = '';

  if (!state.items.length) {
    itemList.innerHTML = `
      <div class="empty-state">
        No placed items yet. Use the build or library tabs to add pieces to the yard.
      </div>
    `;
    return;
  }

  state.items.forEach((item) => {
    const status = getItemStatus(item);
    const dims = getWorldDimensions(item);
    const config = ITEM_TYPES[item.kind] ?? ITEM_TYPES.planter;
    const listItem = document.createElement('button');
    listItem.type = 'button';
    listItem.className = `box-item ${item.id === state.selectedId ? 'selected' : ''} ${status.valid ? 'valid' : 'invalid'}`;

    listItem.innerHTML = `
      <div class="box-title">
        <span>${config.icon} ${config.label} ${item.id}</span>
        <span class="box-chip ${status.valid ? 'valid' : 'invalid'}">${status.valid ? 'inside yard zone' : 'outside yard zone'}</span>
      </div>
      <div class="box-coordinates">${formatFeet(item.width)} ft x ${formatFeet(item.height)} ft, rotation ${normalizeRotation(item.rotation)}°</div>
      <div class="box-meta">Footprint on map: ${formatFeet(dims.width)} ft x ${formatFeet(dims.height)} ft</div>
      <div class="box-meta">Center: x ${formatFeet(item.x)} ft, y ${formatFeet(item.y)} ft</div>
    `;
    listItem.addEventListener('click', () => selectItem(item.id));
    itemList.appendChild(listItem);
  });
}

function renderBoardSize() {
  const width = Math.max(boardScroll.clientWidth - 2, Math.round(BASE_BOARD_WIDTH * state.zoom));
  const height = Math.round(width * (VIEWBOX.height / VIEWBOX.width));
  plannerSvg.setAttribute('width', String(width));
  plannerSvg.setAttribute('height', String(height));
}

function isMobileMoveMode() {
  return window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 720;
}

function syncBoardInteractionState() {
  boardScroll.classList.toggle('dragging-item', Boolean(dragState));
}

function updateActionState() {
  const hasSelection = Boolean(state.selectedId);
  rotateLeftButton.disabled = !hasSelection;
  rotateRightButton.disabled = !hasSelection;
  removeBoxButton.disabled = !hasSelection;
  clearAllButton.disabled = !state.items.length;
  syncBoardInteractionState();
}

function beginDrag(event, item) {
  const point = svgPoint(event);
  dragState = {
    itemId: item.id,
    pointerId: event.pointerId,
    inputType: 'pointer',
    element: event.currentTarget,
    offsetX: point.x - item.x,
    offsetY: point.y - item.y,
  };
  syncBoardInteractionState();

  try {
    event.currentTarget.setPointerCapture(event.pointerId);
  } catch (error) {
    // Ignore synthetic or unsupported pointer-capture failures.
  }
}

function beginTouchDrag(element, touch, item) {
  const point = svgPoint(touch);
  dragState = {
    itemId: item.id,
    touchId: touch.identifier,
    inputType: 'touch',
    element,
    offsetX: point.x - item.x,
    offsetY: point.y - item.y,
  };
  syncBoardInteractionState();
}

function handleAddPlanter(event) {
  event.preventDefault();

  const width = snapToGrid(Number(boxWidthInput.value));
  const height = snapToGrid(Number(boxHeightInput.value));

  if (!Number.isFinite(width) || !Number.isFinite(height) || width < MIN_BOX_SIZE || height < MIN_BOX_SIZE) {
    setFormMessage('Enter width and depth in feet. Minimum size is 0.5 ft.', 'error');
    return;
  }

  if (!canFitOnBoard(width, height)) {
    setFormMessage('That planter is larger than the board area, even after rotation.', 'error');
    return;
  }

  const item = buildPlacedItem('planter', width, height);
  state.items.push(item);
  state.selectedId = item.id;
  persist();
  render();

  const rotatedNote = item.rotation === 90 ? ' Rotated 90° on add to fit.' : '';
  const placementNote = item.autoPlacedValid ? '' : ' Added at a fallback spot and it may show red.';
  setFormMessage(`Added ${formatFeet(width)} x ${formatFeet(height)} ft planter.${rotatedNote}${placementNote}`, item.autoPlacedValid ? 'success' : 'warning');
}

function handleAddPresetItem(kind) {
  if (!ITEM_TYPES[kind] || kind === 'planter') {
    return;
  }

  const spec = buildPresetSpec(kind);
  if (!canFitOnBoard(spec.width, spec.height)) {
    setFormMessage(`The ${ITEM_TYPES[kind].label.toLowerCase()} footprint is too large for the board.`, 'error');
    return;
  }

  const item = buildPlacedItem(kind, spec.width, spec.height, spec.extra);
  state.items.push(item);
  state.selectedId = item.id;
  persist();
  render();

  const placementNote = item.autoPlacedValid ? '' : ' It was placed in a fallback spot and may show red.';
  const detailNote =
    kind === 'steppingStone'
      ? ` (${formatFeet(item.width)} ft x ${formatFeet(item.height)} ft random stone)`
      : '';
  setFormMessage(`Added ${ITEM_TYPES[kind].label.toLowerCase()}${detailNote}.${placementNote}`, item.autoPlacedValid ? 'success' : 'warning');
}

function buildPlacedItem(kind, width, height, extra = {}) {
  const placement = findPlacementForSize(width, height);
  return {
    id: nextItemId(),
    kind,
    x: placement.x,
    y: placement.y,
    width,
    height,
    rotation: placement.rotation,
    autoPlacedValid: placement.validSpot,
    ...extra,
  };
}

function buildPresetSpec(kind) {
  switch (kind) {
    case 'plant': return { width: 2, height: 2, extra: {} };
    case 'lemonTree': return { width: 5, height: 5, extra: {} };
    case 'woodChips': return { width: 8, height: 8, extra: {} };
    case 'steppingStone': return buildSteppingStoneSpec();
    case 'manzanita': return { width: 4, height: 4, extra: {} };
    case 'californiaLilac': return { width: 4.5, height: 4.5, extra: {} };
    case 'californiaPoppy': return { width: 2.5, height: 2.5, extra: {} };
    case 'hummingbirdSage': return { width: 2, height: 2, extra: {} };
    case 'commonYarrow': return { width: 2, height: 2, extra: {} };
    case 'deergrass': return { width: 3, height: 3, extra: {} };
    case 'pomegranateTree': return { width: 5.5, height: 5.5, extra: {} };
    case 'whiteRufflesPoppy': return { width: 2.5, height: 2.5, extra: {} };
    case 'passionFruit': return { width: 3, height: 6, extra: {} };
    case 'rockingChair': return { width: 2.2, height: 2.5, extra: {} };
    case 'lavender': return { width: 3, height: 3, extra: {} };
    case 'rosemary': return { width: 3.5, height: 3.5, extra: {} };
    case 'bench': return { width: 5, height: 1.8, extra: {} };
    case 'trellis': return { width: 4, height: 1, extra: {} };
    case 'wisteria': return { width: 4, height: 4, extra: {} };
    case 'jasmine': return { width: 4, height: 4, extra: {} };
    default: return { width: 2, height: 2, extra: {} };
  }
}

function buildSteppingStoneSpec() {
  return {
    width: randomChoice([1.75, 2, 2, 2.25]),
    height: randomChoice([0.75, 1, 1, 1.25]),
    extra: {
      cornerRadius: randomChoice([0.14, 0.2, 0.26, 0.3]),
      stoneTone: randomChoice([1, 2, 3]),
      stoneSeamOffset: randomChoice([-0.08, -0.03, 0.04, 0.09]),
    },
  };
}

function getSelectedItem() {
  return state.items.find((item) => item.id === state.selectedId) ?? null;
}

function selectItem(itemId) {
  state.selectedId = itemId;
  updateItemSelectionClasses();
  renderSelectionCard();
  renderItemList();
  updateActionState();
}

function rotateSelected(delta) {
  if (!state.selectedId) {
    return;
  }

  const item = state.items.find((entry) => entry.id === state.selectedId);
  if (!item) {
    return;
  }

  item.rotation = normalizeRotation(item.rotation + delta);
  const clamped = clampItemCenter(item, item.x, item.y);
  item.x = clamped.x;
  item.y = clamped.y;
  persist();
  render();
}

function removeSelectedItem() {
  if (!state.selectedId) {
    return;
  }

  state.items = state.items.filter((item) => item.id !== state.selectedId);
  state.selectedId = state.items[0]?.id ?? null;
  persist();
  render();
}

function clearAllItems() {
  state.items = [];
  state.selectedId = null;
  persist();
  render();
  setFormMessage('Cleared all movable items.', 'info');
}

function startDrag(event) {
  if (event.pointerType === 'touch') {
    return;
  }

  const itemId = event.currentTarget.dataset.itemId;
  const item = state.items.find((entry) => entry.id === itemId);
  if (!item) {
    return;
  }

  event.preventDefault();

  state.selectedId = itemId;
  updateItemSelectionClasses();
  renderSelectionCard();
  renderItemList();
  updateActionState();
  beginDrag(event, item);
}

function startTouchDrag(event) {
  const itemId = event.currentTarget.dataset.itemId;
  const item = state.items.find((entry) => entry.id === itemId);
  const touch = event.changedTouches[0];
  if (!item || !touch) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();

  state.selectedId = itemId;
  updateItemSelectionClasses();
  renderSelectionCard();
  renderItemList();
  updateActionState();
  beginTouchDrag(event.currentTarget, touch, item);
}

function handlePointerMove(event) {
  if (!dragState || dragState.inputType !== 'pointer' || event.pointerId !== dragState.pointerId) {
    return;
  }

  const item = state.items.find((entry) => entry.id === dragState.itemId);
  if (!item) {
    return;
  }

  moveDraggedItem(item, event);
}

function endDrag(event) {
  if (!dragState || dragState.inputType !== 'pointer' || (event.pointerId != null && event.pointerId !== dragState.pointerId)) {
    return;
  }

  finishDrag();
}

function handleTouchMove(event) {
  if (!dragState || dragState.inputType !== 'touch') {
    return;
  }

  const touch = getTrackedTouch(event.changedTouches);
  if (!touch) {
    return;
  }

  event.preventDefault();

  const item = state.items.find((entry) => entry.id === dragState.itemId);
  if (!item) {
    return;
  }

  moveDraggedItem(item, touch);
}

function endTouchDrag(event) {
  if (!dragState || dragState.inputType !== 'touch') {
    return;
  }

  const touch = getTrackedTouch(event.changedTouches);
  if (!touch && event.type !== 'touchcancel') {
    return;
  }

  event.preventDefault();
  finishDrag();
}

function getTrackedTouch(touchList) {
  if (!dragState || dragState.inputType !== 'touch') {
    return null;
  }

  return Array.from(touchList).find((touch) => touch.identifier === dragState.touchId) ?? null;
}

function moveDraggedItem(item, pointEvent) {
  const point = svgPoint(pointEvent);
  const next = clampItemCenter(item, point.x - dragState.offsetX, point.y - dragState.offsetY);
  item.x = next.x;
  item.y = next.y;
  dragState.element.setAttribute('transform', getItemTransform(item));
  syncItemVisualState(dragState.element, item);
}

function finishDrag() {
  persist();
  dragState = null;
  render();
}

function findPlacement(width, height, rotation) {
  const template = { x: 0, y: 0, width, height, rotation };
  const dims = getWorldDimensions(template);
  const minX = dims.width / 2;
  const maxX = PLAN.stageWidth - dims.width / 2;
  const minY = dims.height / 2;
  const maxY = PLAN.stageHeight - dims.height / 2;
  if (minX > maxX || minY > maxY) {
    return null;
  }

  let validWithOverlap = null;
  let fallback = null;

  for (let y = minY; y <= maxY + 0.0001; y += SNAP_FEET) {
    for (let x = minX; x <= maxX + 0.0001; x += SNAP_FEET) {
      const candidate = { x: snapToGrid(x), y: snapToGrid(y), width, height, rotation };
      if (!fallback && !doesOverlapAny(candidate)) {
        fallback = candidate;
      }
      if (!isItemInsideValidYardZone(candidate)) {
        continue;
      }
      if (!validWithOverlap) {
        validWithOverlap = candidate;
      }
      if (!doesOverlapAny(candidate)) {
        return { x: candidate.x, y: candidate.y, rotation, validSpot: true, overlapFree: true };
      }
    }
  }

  if (validWithOverlap) {
    return { x: validWithOverlap.x, y: validWithOverlap.y, rotation, validSpot: true, overlapFree: false };
  }

  if (fallback) {
    return { x: fallback.x, y: fallback.y, rotation, validSpot: false, overlapFree: false };
  }

  return { x: snapToGrid(minX), y: snapToGrid(minY), rotation, validSpot: false, overlapFree: false };
}

function findPlacementForSize(width, height) {
  const zeroRotation = findPlacement(width, height, 0);
  const ninetyRotation = findPlacement(width, height, 90);
  const candidates = [zeroRotation, ninetyRotation].filter(Boolean);

  const overlapFreeCandidate = candidates.find((candidate) => candidate.validSpot && candidate.overlapFree);
  if (overlapFreeCandidate) {
    return overlapFreeCandidate;
  }

  const validCandidate = candidates.find((candidate) => candidate.validSpot);
  if (validCandidate) {
    return validCandidate;
  }

  return candidates[0] ?? {
    x: snapToGrid(width / 2),
    y: snapToGrid(height / 2),
    rotation: 0,
    validSpot: false,
    overlapFree: false,
  };
}

function doesOverlapAny(candidate, ignoreId = null) {
  return state.items.some((item) => item.id !== ignoreId && itemsOverlap(candidate, item));
}

function canFitOnBoard(width, height) {
  return (
    (width <= PLAN.stageWidth && height <= PLAN.stageHeight) ||
    (height <= PLAN.stageWidth && width <= PLAN.stageHeight)
  );
}

function itemsOverlap(a, b) {
  const boundsA = getAxisAlignedBounds(a);
  const boundsB = getAxisAlignedBounds(b);

  return !(
    boundsA.right <= boundsB.left ||
    boundsA.left >= boundsB.right ||
    boundsA.bottom <= boundsB.top ||
    boundsA.top >= boundsB.bottom
  );
}

function getAxisAlignedBounds(item) {
  const dims = getWorldDimensions(item);
  return {
    left: item.x - dims.width / 2,
    right: item.x + dims.width / 2,
    top: item.y - dims.height / 2,
    bottom: item.y + dims.height / 2,
  };
}

function getWorldDimensions(item) {
  const radians = degreesToRadians(normalizeRotation(item.rotation ?? 0));
  const cos = Math.abs(Math.cos(radians));
  const sin = Math.abs(Math.sin(radians));
  return {
    width: roundGeometry(item.width * cos + item.height * sin),
    height: roundGeometry(item.width * sin + item.height * cos),
  };
}

function getItemCorners(item) {
  const radians = degreesToRadians(normalizeRotation(item.rotation ?? 0));
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);
  const halfW = item.width / 2;
  const halfH = item.height / 2;
  const corners = [
    [-halfW, -halfH],
    [halfW, -halfH],
    [halfW, halfH],
    [-halfW, halfH],
  ];

  return corners.map(([dx, dy]) => [
    roundGeometry(item.x + dx * cos - dy * sin),
    roundGeometry(item.y + dx * sin + dy * cos),
  ]);
}

function clampItemCenter(item, x, y) {
  const dims = getWorldDimensions(item);
  const minX = dims.width / 2;
  const maxX = PLAN.stageWidth - dims.width / 2;
  const minY = dims.height / 2;
  const maxY = PLAN.stageHeight - dims.height / 2;

  return {
    x: snapToGrid(clamp(x, minX, maxX)),
    y: snapToGrid(clamp(y, minY, maxY)),
  };
}

function getItemStatus(item) {
  return { valid: isItemInsideValidYardZone(item) };
}

function isItemInsideValidYardZone(item) {
  return getItemCorners(item).every(([x, y]) => pointInPolygon(x, y, VALID_YARD_POLYGON));
}

function getItemTransform(item) {
  return `translate(${item.x} ${item.y}) rotate(${normalizeRotation(item.rotation)})`;
}

function getPlanterInset(item) {
  return Math.min(0.22, Math.min(item.width, item.height) * 0.14);
}

function getPlanterLabelSize(item) {
  return Math.min(0.92, Math.max(0.46, Math.min(item.width, item.height) * 0.22));
}

function pointInPolygon(x, y, polygon) {
  let inside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];
    const intersects = (yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersects) {
      inside = !inside;
    }
  }

  return inside;
}

function updateItemSelectionClasses() {
  itemLayer.querySelectorAll('.movable-item').forEach((element) => {
    const item = state.items.find((entry) => entry.id === element.dataset.itemId);
    if (!item) {
      return;
    }
    syncItemVisualState(element, item);
  });
}

function syncItemVisualState(element, item) {
  element.classList.toggle('selected', element.dataset.itemId === state.selectedId);
  element.classList.toggle('invalid', !getItemStatus(item).valid);
  element.setAttribute('transform', getItemTransform(item));
}

function setFormMessage(message = '', tone = 'info') {
  formMessage.textContent = message;
  formMessage.dataset.tone = tone;
}

function clearFormMessage() {
  setFormMessage('');
}

function persist() {
  const cleanItems = state.items.map((item) => {
    const next = {
      id: item.id,
      kind: item.kind,
      x: item.x,
      y: item.y,
      width: item.width,
      height: item.height,
      rotation: item.rotation,
    };

    if (item.kind === 'steppingStone') {
      next.cornerRadius = item.cornerRadius;
      next.stoneTone = item.stoneTone;
      next.stoneSeamOffset = item.stoneSeamOffset;
    }

    return next;
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(cleanItems));
}

function loadItems() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return [];
  }

  try {
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.map(coerceItem).filter(Boolean);
  } catch (error) {
    return [];
  }
}

function coerceItem(entry) {
  if (!entry || typeof entry.id !== 'string') {
    return null;
  }

  const kind = ITEM_TYPES[entry.kind] ? entry.kind : 'planter';
  const width = snapToGrid(Number(entry.width));
  const height = snapToGrid(Number(entry.height));
  const rotation = normalizeRotation(Number(entry.rotation) || 0);
  if (!Number.isFinite(width) || !Number.isFinite(height) || width < MIN_BOX_SIZE || height < MIN_BOX_SIZE) {
    return null;
  }

  const item = {
    id: entry.id,
    kind,
    width,
    height,
    rotation,
    x: Number(entry.x) || width / 2,
    y: Number(entry.y) || height / 2,
  };

  if (kind === 'steppingStone') {
    item.cornerRadius = clamp(Number(entry.cornerRadius) || 0.2, 0.12, 0.3);
    item.stoneTone = clamp(Math.round(Number(entry.stoneTone) || 1), 1, 3);
    item.stoneSeamOffset = clamp(Number(entry.stoneSeamOffset) || 0, -0.15, 0.15);
  }

  const clamped = clampItemCenter(item, item.x, item.y);
  item.x = clamped.x;
  item.y = clamped.y;
  return item;
}

function loadNumber(name, fallback, min, max) {
  const saved = Number(localStorage.getItem(`${STORAGE_KEY}:${name}`));
  if (!Number.isFinite(saved)) {
    return fallback;
  }

  return clamp(saved, min, max);
}

function loadPanel(name, fallback) {
  const saved = localStorage.getItem(`${STORAGE_KEY}:${name}`);
  if (!saved) {
    return fallback;
  }

  return ['buildPanel', 'libraryPanel', 'itemsPanel'].includes(saved) ? saved : fallback;
}

function nextItemId() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (const letter of alphabet) {
    if (!state.items.some((item) => item.id === letter)) {
      return letter;
    }
  }

  let index = state.items.length + 1;
  while (state.items.some((item) => item.id === `I${index}`)) {
    index += 1;
  }
  return `I${index}`;
}

function svgPoint(event) {
  const point = plannerSvg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  return point.matrixTransform(plannerSvg.getScreenCTM().inverse());
}

function formatFeet(value) {
  return Number(value).toFixed(2).replace(/\.00$/, '');
}

function snapToGrid(value) {
  return Math.round(value / SNAP_FEET) * SNAP_FEET;
}

function normalizeRotation(rotation) {
  const snapped = Math.round(rotation / 90) * 90;
  return ((snapped % 360) + 360) % 360;
}

function degreesToRadians(value) {
  return (value * Math.PI) / 180;
}

function roundGeometry(value) {
  return Math.round(value * 1000) / 1000;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function randomChoice(values) {
  return values[Math.floor(Math.random() * values.length)];
}
