// /* ═══════════════════════════════════════════
//    RKS Investments — Main Scripts
//    ═══════════════════════════════════════════ */

// // ── NAV SCROLL SHRINK ──
// window.addEventListener('scroll', () => {
//     document.getElementById('main-nav').classList.toggle('scrolled', window.scrollY > 40);
// });

// // ── HAMBURGER MENU ──
// function toggleMenu() {
//     document.getElementById('nav-links').classList.toggle('open');
// }

// document.addEventListener('click', e => {
//     if (!e.target.closest('nav')) {
//         document.getElementById('nav-links').classList.remove('open');
//     }
// });

// // ── PAGE ROUTING ──
// function showPage(name) {
//     document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
//     document.getElementById('page-' + name).classList.add('active');
//     document.getElementById('nav-links').classList.remove('open');
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     if (name === 'clients') renderClients('all');
// }

// // ── CLIENTS DATA ──
// const clientsData = [
//     { abbr: 'VKM', name: 'Veekayam Industries', type: 'IPO', tag: 'ipo' },
//     { abbr: 'SBR', name: 'Sabar Fintech', type: 'IPO', tag: 'ipo' },
//     { abbr: 'JFL', name: 'JFL Foods Ltd.', type: 'M&A', tag: 'ma' },
//     { abbr: 'MFI', name: 'Mafai Technologies', type: 'Private Equity', tag: 'pe' },
//     { abbr: 'HCL', name: 'HCL Ventures', type: 'IPO', tag: 'ipo' },
//     { abbr: 'ASC', name: 'Ascensive Capital', type: 'Valuation', tag: 'valuation' },
//     { abbr: 'DHY', name: 'Dhyani Pharma', type: 'IPO', tag: 'ipo' },
//     { abbr: 'BRD', name: 'Baroda Organics', type: 'M&A', tag: 'ma' },
//     { abbr: 'DLT', name: 'Direct Listing Co.', type: 'IPO', tag: 'ipo' },
//     { abbr: 'AIF', name: 'AIF Growth Fund', type: 'Private Equity', tag: 'pe' },
//     { abbr: 'NPB', name: 'Napbooks Digital', type: 'Valuation', tag: 'valuation' },
//     { abbr: 'PSL', name: 'Parasol Infra', type: 'Debt', tag: 'ma' },
//     { abbr: 'SMK', name: 'Sumko Logistics', type: 'M&A', tag: 'ma' },
//     { abbr: 'GRN', name: 'GreenPath Energy', type: 'Private Equity', tag: 'pe' },
//     { abbr: 'NVT', name: 'NovaTech Systems', type: 'Valuation', tag: 'valuation' },
//     { abbr: 'PRC', name: 'Precision Mfg.', type: 'IPO', tag: 'ipo' },
// ];

// function renderClients(filter) {
//     const mosaic = document.getElementById('clients-mosaic');
//     const filtered = filter === 'all'
//         ? clientsData
//         : clientsData.filter(c => c.tag === filter);

//     mosaic.innerHTML = filtered.map(c => `
//     <div class="client-tile">
//       <div class="client-tile-abbr">${c.abbr}</div>
//       <div class="client-tile-name">${c.name}</div>
//       <div class="client-tile-type">${c.type}</div>
//     </div>
//   `).join('');
// }

// function filterClients(filter, btn) {
//     document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
//     btn.classList.add('active');
//     renderClients(filter);
// }

// // ── CONTACT FORM ──
// function submitForm() {
//     const success = document.getElementById('form-success');
//     success.style.display = 'block';
//     setTimeout(() => { success.style.display = 'none'; }, 5000);
// }
