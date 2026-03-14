const TRANSLATIONS = {
    ko: {
        title: "축구 리그 순위 및 확률 예측기",
        subtitle: "Monte Carlo 시뮬레이션 기반 예측",
        installBtn: "📱 앱으로 설치하여 독립 실행하기",
        lastUpdate: "마지막 업데이트:",
        syncBtn: "데이터 동기화 및 시뮬레이션 실행",
        tableTitle: "현재 순위 및 확률",
        thRank: "순위",
        thTeam: "팀",
        thPlayed: "경기",
        thPts: "승점",
        thGd: "득실",
        thUcl: "UCL 확률",
        thUel: "UEL 확률",
        thRel: "강등 확률",
        thProm: "승격 확률",
        thPo: "PO 확률",
        insightTitle: "AI 인사이트",
        msgInitial: "데이터를 업데이트하여 예측 결과를 확인하세요.",
        msgSimulating: "시뮬레이션 진행 중...",
        uclTitle: "🏆 UCL 진출 유력",
        uclMsg: "챔피언스리그 진출 확률이 가장 높습니다.",
        promTitle: "🚀 승격 유력",
        promMsg: "더 높은 리그로의 승격 확률이 가장 높습니다.",
        relTitle: "⚠️ 강등 위험",
        relMsg: "팀들이 강등권 탈출을 위해 분투해야 하는 상황입니다.",
        source: "(Source: Daum Sport 2026.03.04 data)",
        thAcle: "ACLE 확률",
        thAcl2: "ACL2 확률"
    },
    en: {
        title: "Football League Rank & Probability Predictor",
        subtitle: "Based on Monte Carlo Simulation",
        installBtn: "📱 Install App for Standalone Mode",
        lastUpdate: "Last Update:",
        syncBtn: "Sync Data & Run Simulation",
        tableTitle: "Current Standings & Probabilities",
        thRank: "Pos",
        thTeam: "Team",
        thPlayed: "Pl",
        thPts: "Pts",
        thGd: "GD",
        thUcl: "UCL Prob",
        thUel: "UEL Prob",
        thRel: "Rel Prob",
        thProm: "Prom Prob",
        thPo: "PO Prob",
        insightTitle: "AI Insights",
        msgInitial: "Update data to see AI predictions.",
        msgSimulating: "Simulation in progress...",
        uclTitle: "🏆 Strong Candidates",
        uclMsg: "have the highest probability of excellence.",
        promTitle: "🚀 Promotion Favorites",
        promMsg: "show the best chance to be promoted.",
        relTitle: "⚠️ Relegation Danger",
        relMsg: "teams need to fight to escape the relegation zone.",
        source: "(Source: Live Data Synced)"
    }
};

const LEAGUES_DATA = {
    EPL: {
        name: 'Premier League',
        teams: [
            { id: 'ARS', name: { ko: '아스널', en: 'Arsenal' }, mp: 28, pts: 61, gd: 35 },
            { id: 'MCI', name: { ko: '맨시티', en: 'Man City' }, mp: 28, pts: 59, gd: 32 },
            { id: 'AVL', name: { ko: '아스톤 빌라', en: 'Aston Villa' }, mp: 28, pts: 51, gd: 8 },
            { id: 'MUN', name: { ko: '맨유', en: 'Man Utd' }, mp: 27, pts: 48, gd: 11 },
            { id: 'LIV', name: { ko: '리버풀', en: 'Liverpool' }, mp: 28, pts: 48, gd: 10 },
            { id: 'CHE', name: { ko: '첼시', en: 'Chelsea' }, mp: 27, pts: 45, gd: 17 },
            { id: 'BRE', name: { ko: '브렌트포드', en: 'Brentford' }, mp: 28, pts: 43, gd: 4 },
            { id: 'EVE', name: { ko: '에버튼', en: 'Everton' }, mp: 28, pts: 40, gd: -1 },
            { id: 'BOU', name: { ko: '본머스', en: 'Bournemouth' }, mp: 28, pts: 39, gd: -2 },
            { id: 'FUL', name: { ko: '풀럼', en: 'Fulham' }, mp: 27, pts: 37, gd: -3 },
            { id: 'SUN', name: { ko: '선더랜드', en: 'Sunderland' }, mp: 28, pts: 37, gd: -5 },
            { id: 'NEW', name: { ko: '뉴캐슬', en: 'Newcastle' }, mp: 28, pts: 36, gd: -2 },
            { id: 'CRY', name: { ko: '크리스탈 팰리스', en: 'Crystal Palace' }, mp: 27, pts: 35, gd: -3 },
            { id: 'BHA', name: { ko: '브라이튼', en: 'Brighton' }, mp: 27, pts: 34, gd: 2 },
            { id: 'LEE', name: { ko: '리즈', en: 'Leeds' }, mp: 28, pts: 31, gd: -10 },
            { id: 'TOT', name: { ko: '토트넘', en: 'Tottenham' }, mp: 27, pts: 29, gd: -4 },
            { id: 'NFO', name: { ko: '노팅엄', en: 'Nottm Forest' }, mp: 27, pts: 27, gd: -14 },
            { id: 'WHU', name: { ko: '웨스트햄', en: 'West Ham' }, mp: 28, pts: 25, gd: -20 },
            { id: 'BUR', name: { ko: '번리', en: 'Burnley' }, mp: 28, pts: 19, gd: -24 },
            { id: 'WOL', name: { ko: '울버햄튼', en: 'Wolves' }, mp: 29, pts: 13, gd: -31 }
        ],
        rules: { totalGames: 38, ucl: [1, 4], uel: [5, 6], relegation: [18, 20] }
    },
    CHAMPIONSHIP: {
        name: 'Championship',
        teams: [
            { "id": "COV", "name": { "ko": "코번트리 시티", "en": "Coventry City" }, "mp": 35, "gd": 34, "pts": 71 },
            { "id": "MID", "name": { "ko": "미들즈브러", "en": "Middlesbrough" }, "mp": 34, "gd": 17, "pts": 63 },
            { "id": "MIL", "name": { "ko": "밀월", "en": "Millwall" }, "mp": 35, "gd": 7, "pts": 62 },
            { "id": "IPS", "name": { "ko": "입스위치 타운", "en": "Ipswich Town" }, "mp": 33, "gd": 25, "pts": 60 },
            { "id": "HUL", "name": { "ko": "헐 시티", "en": "Hull City" }, "mp": 34, "gd": 8, "pts": 60 },
            { "id": "WRE", "name": { "ko": "렉섬", "en": "Wrexham" }, "mp": 35, "gd": 9, "pts": 57 },
            { "id": "SOU", "name": { "ko": "사우샘프턴", "en": "Southampton" }, "mp": 35, "gd": 11, "pts": 53 },
            { "id": "DER", "name": { "ko": "더비 카운티", "en": "Derby County" }, "mp": 35, "gd": 6, "pts": 51 },
            { "id": "WAT", "name": { "ko": "왓포드", "en": "Watford" }, "mp": 35, "gd": 4, "pts": 51 },
            { "id": "BRI", "name": { "ko": "브리스톨 시티", "en": "Bristol City" }, "mp": 35, "gd": 4, "pts": 50 },
            { "id": "BIR", "name": { "ko": "버밍엄 시티", "en": "Birmingham City" }, "mp": 34, "gd": 2, "pts": 49 },
            { "id": "PRE", "name": { "ko": "프레스턴 NE", "en": "Preston North End" }, "mp": 35, "gd": 1, "pts": 49 },
            { "id": "SHE_U", "name": { "ko": "셰필드 유나이티드", "en": "Sheffield United" }, "mp": 35, "gd": 2, "pts": 48 },
            { "id": "STK", "name": { "ko": "스토크 시티", "en": "Stoke City" }, "mp": 35, "gd": 5, "pts": 47 },
            { "id": "QPR", "name": { "ko": "QPR", "en": "Queens Park Rangers" }, "mp": 35, "gd": -8, "pts": 47 },
            { "id": "SWC", "name": { "ko": "스완지 시티", "en": "Swansea City" }, "mp": 35, "gd": -3, "pts": 46 },
            { "id": "NOR", "name": { "ko": "노리치 시티", "en": "Norwich City" }, "mp": 35, "gd": 3, "pts": 45 },
            { "id": "CHA", "name": { "ko": "찰턴 애슬레틱", "en": "Charlton Athletic" }, "mp": 35, "gd": -11, "pts": 41 },
            { "id": "POR", "name": { "ko": "포츠머스", "en": "Portsmouth" }, "mp": 34, "gd": -10, "pts": 39 },
            { "id": "BLB", "name": { "ko": "블랙번 로버스", "en": "Blackburn Rovers" }, "mp": 35, "gd": -13, "pts": 38 },
            { "id": "WBA", "name": { "ko": "웨스트 브로미치", "en": "West Bromwich Albion" }, "mp": 35, "gd": -18, "pts": 35 },
            { "id": "LEI", "name": { "ko": "레스터 시티", "en": "Leicester City" }, "mp": 35, "gd": -9, "pts": 34 },
            { "id": "OXF", "name": { "ko": "옥스퍼드 유나이티드", "en": "Oxford United" }, "mp": 35, "gd": -16, "pts": 32 },
            { "id": "SHW", "name": { "ko": "셰필드 웬즈데이", "en": "Sheffield Wednesday" }, "mp": 35, "gd": -50, "pts": -7 }
        ],
        rules: { totalGames: 46, promotion: [1, 2], playoffs: [3, 6], relegation: [22, 24] }
    },
    K1: {
        name: 'K League 1',
        teams: [
            { id: 'ULS', name: { ko: '울산', en: 'Ulsan' }, mp: 1, pts: 3, gd: 2 },
            { id: 'BUC', name: { ko: '부천', en: 'Bucheon' }, mp: 1, pts: 3, gd: 1 },
            { id: 'SEO', name: { ko: '서울', en: 'Seoul' }, mp: 1, pts: 3, gd: 1 },
            { id: 'ANY', name: { ko: '안양', en: 'Anyang' }, mp: 1, pts: 1, gd: 0 },
            { id: 'GIM', name: { ko: '김천', en: 'Gimcheon' }, mp: 1, pts: 1, gd: 0 },
            { id: 'DAE', name: { ko: '대전', en: 'Daejeon' }, mp: 1, pts: 1, gd: 0 },
            { id: 'POH', name: { ko: '포항', en: 'Pohang' }, mp: 1, pts: 1, gd: 0 },
            { id: 'JEJ', name: { ko: '제주', en: 'Jeju' }, mp: 1, pts: 1, gd: 0 },
            { id: 'GWA', name: { ko: '광주', en: 'Gwangju' }, mp: 1, pts: 1, gd: 0 },
            { id: 'JEO', name: { ko: '전북', en: 'Jeonbuk' }, mp: 1, pts: 0, gd: -1 },
            { id: 'INC', name: { ko: '인천', en: 'Incheon' }, mp: 1, pts: 0, gd: -1 },
            { id: 'GAN', name: { ko: '강원', en: 'Gangwon' }, mp: 1, pts: 0, gd: -2 }
        ],
        rules: { totalGames: 38, acle: [1, 2], acl2: [3, 3], po: [10, 11], relegation: [12, 12] }
    },
    K2: {
        name: 'K League 2',
        teams: [
            { id: 'SFC', name: { ko: '수원FC', en: 'Suwon FC' }, mp: 1, pts: 3, gd: 3 },
            { id: 'ANS', name: { ko: '안산', en: 'Ansan' }, mp: 1, pts: 3, gd: 3 },
            { id: 'JNM', name: { ko: '전남', en: 'Jeonnam' }, mp: 1, pts: 3, gd: 3 },
            { id: 'ASW', name: { ko: '충남아산', en: 'Asan' }, mp: 1, pts: 3, gd: 1 },
            { id: 'SUW', name: { ko: '수원', en: 'Suwon' }, mp: 1, pts: 3, gd: 1 },
            { id: 'DAG', name: { ko: '대구', en: 'Daegu' }, mp: 1, pts: 3, gd: 1 },
            { id: 'YIN', name: { ko: '용인', en: 'Yongin' }, mp: 1, pts: 1, gd: 0 },
            { id: 'CHA', name: { ko: '천안', en: 'Cheonan' }, mp: 1, pts: 1, gd: 0 },
            { id: 'BUS', name: { ko: '부산', en: 'Busan' }, mp: 1, pts: 1, gd: 0 },
            { id: 'SGN', name: { ko: '성남', en: 'Seongnam' }, mp: 1, pts: 1, gd: 0 },
            { id: 'PAJ', name: { ko: '파주', en: 'Paju' }, mp: 1, pts: 0, gd: -1 },
            { id: 'SLE', name: { ko: '서울E', en: 'Seoul E' }, mp: 1, pts: 0, gd: -1 },
            { id: 'GYE', name: { ko: '경남', en: 'Gyeongnam' }, mp: 1, pts: 0, gd: -3 },
            { id: 'GIMH', name: { ko: '김해', en: 'Gimhae' }, mp: 1, pts: 0, gd: -3 },
            { id: 'CBJ', name: { ko: '충북청주', en: 'Cheongju' }, mp: 1, pts: 0, gd: -3 },
            { id: 'HWA', name: { ko: '화성', en: 'Hwaseong' }, mp: 1, pts: 0, gd: -1 }
        ],
        rules: { totalGames: 36, promotion: [1, 1], po: [2, 5], relegation: [16, 16] }
    }
};

let lastResults = null;

// --- 전역 변수 ---
let currentLeague = 'EPL';
let currentLang = localStorage.getItem('league_predictor_lang') || 'ko';
let TEAMS_DATA = LEAGUES_DATA[currentLeague].teams;

// --- API 및 웹 크롤링 연동 함수 ---
const PROXY_URL = 'https://api.allorigins.win/get?url=';
const ALT_PROXY_URL = 'https://api.codetabs.com/v1/proxy?quest=';

async function fetchLeagueData(leagueKey) {
    let targetUrl = '';
    const timestamp = Date.now();

    if (leagueKey === 'EPL') {
        targetUrl = `https://api-gw.sports.naver.com/statistics/categories/epl/seasons/lji9/teams?t=${timestamp}`;
    } else if (leagueKey === 'CHAMPIONSHIP') {
        targetUrl = `https://api-gw.sports.naver.com/statistics/categories/england2/seasons/Vs77/teams?t=${timestamp}`;
    } else if (leagueKey === 'K1') {
        targetUrl = `https://api-gw.sports.naver.com/statistics/categories/kleague/seasons/2026/teams?t=${timestamp}`;
    } else if (leagueKey === 'K2') {
        targetUrl = `https://api-gw.sports.naver.com/statistics/categories/kleague2/seasons/2026/teams?t=${timestamp}`;
    }

    const fetchWithProxy = async (proxyBase, target) => {
        const url = proxyBase + encodeURIComponent(target);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Proxy error');
        const data = await response.json();
        return proxyBase.includes('allorigins') ? data.contents : data;
    };

    try {
        let content;
        try {
            content = await fetchWithProxy(PROXY_URL, targetUrl);
        } catch (e) {
            console.warn('Primary proxy failed, trying alternative...');
            content = await fetchWithProxy(ALT_PROXY_URL, targetUrl);
        }

        const extractedTeams = [];
        const jsonData = typeof content === 'string' ? JSON.parse(content) : content;
        const stats = jsonData.result?.seasonTeamStats || [];

        stats.forEach(item => {
            extractedTeams.push({
                id: item.teamId || item.teamName.substring(0, 3).toUpperCase(),
                name: { ko: item.teamName, en: item.teamName },
                mp: item.matchesPlayed || 0,
                gd: item.goalsDifference || 0,
                pts: item.points || 0
            });
        });

        if (extractedTeams.length === 0) throw new Error('No teams extracted');
        return extractedTeams;

    } catch (error) {
        console.error('Fetch/Parse error:', error);
        return LEAGUES_DATA[leagueKey].teams;
    }
}

// --- 핵심 로직 함수 ---
function generateRemainingFixtures(teams, leagueKey) {
    const rules = LEAGUES_DATA[leagueKey].rules;
    const fixtures = [];
    const teamGamesLeft = {};
    teams.forEach(t => teamGamesLeft[t.id] = Math.max(0, rules.totalGames - t.mp));

    const teamPool = [];
    Object.entries(teamGamesLeft).forEach(([id, left]) => {
        for (let k = 0; k < left; k++) teamPool.push(id);
    });

    for (let i = teamPool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [teamPool[i], teamPool[j]] = [teamPool[j], teamPool[i]];
    }

    for (let i = 0; i < teamPool.length; i += 2) {
        if (teamPool[i + 1]) {
            fixtures.push({ homeId: teamPool[i], awayId: teamPool[i + 1] });
        }
    }
    return fixtures;
}

function updateProgressBar(percent) {
    const fill = document.getElementById('progressFill');
    if (fill) fill.style.width = `${percent}%`;
}

function renderTable(probabilities) {
    const tableBody = document.getElementById('tableBody');
    if (!tableBody) return;
    tableBody.innerHTML = '';

    const lang = TRANSLATIONS[currentLang];
    const sortedTeams = [...TEAMS_DATA].sort((a, b) => b.pts - a.pts || b.gd - a.gd);

    // 헤더 확률 타이틀 업데이트
    const h1 = document.getElementById('probHeader1');
    const h2 = document.getElementById('probHeader2');
    const h3 = document.getElementById('probHeader3');

    if (h1 && h2 && h3) {
        if (currentLeague === 'K1') {
            h1.innerText = lang.thAcle;
            h2.innerText = lang.thAcl2;
            h3.innerText = lang.thPo; // K1 PO (Relegation PO)
        } else if (currentLeague === 'K2') {
            h1.innerText = lang.thProm;
            h2.innerText = lang.thPo; // K2 PO (Promotion PO)
            h3.innerText = lang.thRel; // Just show rel or hide
        } else if (currentLeague === 'EPL') {
            h1.innerText = lang.thUcl;
            h2.innerText = lang.thUel;
            h3.innerText = lang.thRel;
        } else if (currentLeague === 'CHAMPIONSHIP') {
            h1.innerText = lang.thProm;
            h2.innerText = lang.thPo;
            h3.innerText = lang.thRel;
        }
    }

    sortedTeams.forEach((team, index) => {
        const probRel = probabilities.relegation[team.id] || 0;
        const prob1 = probabilities.ucl[team.id] || 0;
        const prob2 = probabilities.uel[team.id] || 0;

        const rank = index + 1;
        const tr = document.createElement('tr');

        const rules = LEAGUES_DATA[currentLeague].rules;

        if (currentLeague === 'K1') {
            if (rank >= rules.acle[0] && rank <= rules.acle[1]) tr.classList.add('ucl-zone');
            else if (rank >= rules.acl2[0] && rank <= rules.acl2[1]) tr.classList.add('uel-zone');
            else if (rank >= rules.po[0] && rank <= rules.po[1]) tr.classList.add('playoff-zone');
            else if (rank >= rules.relegation[0] && rank <= rules.relegation[1]) tr.classList.add('relegation-zone');
        } else if (currentLeague === 'K2') {
            if (rank >= rules.promotion[0] && rank <= rules.promotion[1]) tr.classList.add('ucl-zone');
            else if (rank >= rules.po[0] && rank <= rules.po[1]) tr.classList.add('playoff-zone');
            else if (rank >= rules.relegation[0] && rank <= rules.relegation[1]) tr.classList.add('relegation-zone');
        } else if (currentLeague === 'EPL') {
            if (rank <= 4) tr.classList.add('ucl-zone');
            else if (rank <= 6) tr.classList.add('uel-zone');
            else if (rank >= 18) tr.classList.add('relegation-zone');
        } else { // CHAMPIONSHIP
            if (rank <= 2) tr.classList.add('ucl-zone');
            else if (rank >= 3 && rank <= 6) tr.classList.add('playoff-zone');
            else if (rank >= 22) tr.classList.add('relegation-zone');
        }

        tr.innerHTML = `
            <td>${rank}</td>
            <td class="team-name">${team.name[currentLang]}</td>
            <td>${team.mp}</td>
            <td>${team.pts}</td>
            <td>${team.gd}</td>
            <td class="${prob1 > 50 ? 'ucl-success' : ''}">${prob1.toFixed(1)}%</td>
            <td class="${prob2 > 30 ? 'playoff-success' : ''}">${prob2.toFixed(1)}%</td>
            <td class="${probRel > 30 ? (currentLeague === 'K1' ? 'playoff-success' : 'relegation-danger') : ''}">${probRel.toFixed(1)}%</td>
        `;
        tableBody.appendChild(tr);
    });
}

function updateInsight(probabilities) {
    const insightContent = document.getElementById('insightContent');
    if (!insightContent) return;

    const lang = TRANSLATIONS[currentLang];
    const relProbs = Object.entries(probabilities.relegation).sort((a, b) => b[1] - a[1]);
    const topProbs = Object.entries(probabilities.ucl).sort((a, b) => b[1] - a[1]);

    const highRel = relProbs.slice(0, 3).map(([id, p]) => {
        const team = TEAMS_DATA.find(t => t.id === id);
        return team ? `<strong>${team.name[currentLang]}</strong>(${p.toFixed(1)}%)` : '';
    }).filter(s => s !== '').join(', ');

    const highTop = topProbs.slice(0, 3).map(([id, p]) => {
        const team = TEAMS_DATA.find(t => t.id === id);
        return team ? `<strong>${team.name[currentLang]}</strong>(${p.toFixed(1)}%)` : '';
    }).filter(s => s !== '').join(', ');

    const topTitle = (currentLeague === 'EPL' || currentLeague === 'K1') ? lang.uclTitle : lang.promTitle;
    const topMsg = (currentLeague === 'EPL' || currentLeague === 'K1') ? lang.uclMsg : lang.promMsg;

    insightContent.innerHTML = `
        <div class="insight-section">
            <h4 style="color:var(--accent-secondary); margin-bottom: 5px;">${topTitle}</h4>
            <p>${highTop} ${topMsg}</p>
        </div>
        <div class="insight-section" style="margin-top: 15px;">
            <h4 style="color:#ff4466; margin-bottom: 5px;">${lang.relTitle}</h4>
            <p>${highRel} ${lang.relMsg}</p>
        </div>
        <p style="margin-top: 15px; font-size: 0.9em; opacity: 0.8;">※ ${lastResults ? '' : lang.msgInitial}</p>
    `;
}

async function runSimulation(iterations = 5000) {
    const activeLeague = currentLeague;
    const teams = TEAMS_DATA;
    const n = teams.length;
    const rules = LEAGUES_DATA[activeLeague].rules;

    // 팀 ID를 인덱스로 매핑 (O(1) 접근을 위함)
    const idToIndex = {};
    teams.forEach((t, i) => idToIndex[t.id] = i);

    // 성능 최적화: TypedArray를 사용하여 가비지 컬렉션 부하를 없앰
    const basePts = new Float64Array(n);
    const baseGd = new Float64Array(n);
    const baseMp = new Float64Array(n);
    teams.forEach((t, i) => {
        basePts[i] = t.pts;
        baseGd[i] = t.gd;
        baseMp[i] = t.mp;
    });

    const countsRelegation = new Uint32Array(n);
    const countsUcl = new Uint32Array(n);
    const countsUel = new Uint32Array(n);

    const fixtures = generateRemainingFixtures(teams, activeLeague);
    const fixtureIndices = fixtures.map(f => ({
        h: idToIndex[f.homeId],
        a: idToIndex[f.awayId]
    }));

    for (let i = 0; i < iterations; i++) {
        const simPts = new Float64Array(basePts);
        const simGd = new Float64Array(baseGd);

        for (let j = 0; j < fixtureIndices.length; j++) {
            const f = fixtureIndices[j];
            const h = f.h;
            const a = f.a;

            const hPPG = baseMp[h] > 0 ? simPts[h] / baseMp[h] : 1.3;
            const aPPG = baseMp[a] > 0 ? simPts[a] / baseMp[a] : 1.3;
            const diff = hPPG - aPPG;

            let pHWin = 0.40 + (diff * 0.15);
            pHWin = Math.max(0.1, Math.min(0.7, pHWin));
            const pDraw = 0.25;

            const rand = Math.random();
            if (rand < pHWin) {
                simPts[h] += 3; simGd[h] += 1; simGd[a] -= 1;
            } else if (rand < pHWin + pDraw) {
                simPts[h] += 1; simPts[a] += 1;
            } else {
                simPts[a] += 3; simGd[a] += 1; simGd[h] -= 1;
            }
        }

        // 정렬용 인덱스 배열 생성
        const indices = new Int32Array(n);
        for (let j = 0; j < n; j++) indices[j] = j;
        indices.sort((idxA, idxB) => (simPts[idxB] - simPts[idxA]) || (simGd[idxB] - simGd[idxA]));

        // 순위별 카운트 (인덱스 기반)
        if (activeLeague === 'K1') {
            for (let j = rules.acle[0] - 1; j < rules.acle[1]; j++) if (indices[j] !== undefined) countsUcl[indices[j]]++;
            for (let j = rules.acl2[0] - 1; j < rules.acl2[1]; j++) if (indices[j] !== undefined) countsUel[indices[j]]++;
            for (let j = rules.po[0] - 1; j < rules.po[1]; j++) if (indices[j] !== undefined) countsRelegation[indices[j]]++;
        } else if (activeLeague === 'K2') {
            for (let j = rules.promotion[0] - 1; j < rules.promotion[1]; j++) if (indices[j] !== undefined) countsUcl[indices[j]]++;
            for (let j = rules.po[0] - 1; j < rules.po[1]; j++) if (indices[j] !== undefined) countsUel[indices[j]]++;
            for (let j = rules.relegation[0] - 1; j < rules.relegation[1]; j++) if (indices[j] !== undefined) countsRelegation[indices[j]]++;
        } else if (activeLeague === 'EPL') {
            for (let j = rules.ucl[0] - 1; j < rules.ucl[1]; j++) if (indices[j] !== undefined) countsUcl[indices[j]]++;
            for (let j = rules.uel[0] - 1; j < rules.uel[1]; j++) if (indices[j] !== undefined) countsUel[indices[j]]++;
            for (let j = rules.relegation[0] - 1; j < rules.relegation[1]; j++) if (indices[j] !== undefined) countsRelegation[indices[j]]++;
        } else if (activeLeague === 'CHAMPIONSHIP') {
            for (let j = rules.promotion[0] - 1; j < rules.promotion[1]; j++) if (indices[j] !== undefined) countsUcl[indices[j]]++;
            for (let j = rules.playoffs[0] - 1; j < rules.playoffs[1]; j++) if (indices[j] !== undefined) countsUel[indices[j]]++;
            for (let j = rules.relegation[0] - 1; j < rules.relegation[1]; j++) if (indices[j] !== undefined) countsRelegation[indices[j]]++;
        }

        if (i % 1000 === 0) {
            updateProgressBar((i / iterations) * 100);
            await new Promise(r => setTimeout(r, 0));
        }
    }

    // 결과 변환 (ID 기반으로 다시 맵핑)
    const res = { relegation: {}, ucl: {}, uel: {} };
    teams.forEach((t, i) => {
        res.relegation[t.id] = (countsRelegation[i] / iterations) * 100;
        res.ucl[t.id] = (countsUcl[i] / iterations) * 100;
        res.uel[t.id] = (countsUel[i] / iterations) * 100;
    });
    return res;
}

// --- DOM 이벤트 및 초기화 ---
document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const updateBtn = document.getElementById('updateBtn');
    const simulationProgress = document.getElementById('simulationProgress');
    const lastUpdatedTime = document.getElementById('lastUpdatedTime');
    const btnEPL = document.getElementById('btnEPL');
    const btnCHAMPIONSHIP = document.getElementById('btnCHAMPIONSHIP');
    const btnK1 = document.getElementById('btnK1');
    const btnK2 = document.getElementById('btnK2');
    const btnKO = document.getElementById('btnKO');
    const btnEN = document.getElementById('btnEN');
    const installBtn = document.getElementById('installAppBtn');

    const refreshDisplay = () => {
        const displayProbs = lastResults || { relegation: {}, ucl: {}, uel: {} };
        renderTable(displayProbs);
        updateInsight(displayProbs);
    };

    const performUpdate = async () => {
        try {
            updateBtn.disabled = true;
            const btnText = document.getElementById('btnSyncText');
            const originalText = btnText.innerText;

            simulationProgress.classList.remove('hidden');
            document.getElementById('msgSimulating').classList.remove('hidden');
            btnText.innerText = currentLang === 'ko' ? '실시간 데이터 수집 중...' : 'Fetching Live Data...';

            // 실시간 데이터 동기화
            const liveData = await fetchLeagueData(currentLeague);
            if (liveData && liveData.length > 0) {
                TEAMS_DATA = liveData;
                LEAGUES_DATA[currentLeague].teams = liveData;
            }

            btnText.innerText = currentLang === 'ko' ? '확률 시뮬레이션 중...' : 'Running Simulation...';
            lastResults = await runSimulation(5000);
            refreshDisplay();
            lastUpdatedTime.innerText = new Date().toLocaleTimeString();
            btnText.innerText = originalText;

            // 데이터 출처 업데이트
            const lang = TRANSLATIONS[currentLang];
            const sub = document.querySelector('.subtitle');
            sub.innerHTML = `${lang.subtitle}<br><small style="color:var(--accent-secondary)">${lang.source.replace('2026.03.04 data', 'Live Synced')}</small>`;
        } catch (e) {
            console.error(e);
            alert(currentLang === 'ko' ? '오류가 발생했습니다.' : 'An error occurred.');
        } finally {
            simulationProgress.classList.add('hidden');
            document.getElementById('msgSimulating').classList.add('hidden');
            updateBtn.disabled = false;
        }
    };

    const switchLeague = (key) => {
        currentLeague = key;
        TEAMS_DATA = LEAGUES_DATA[key].teams;
        [btnEPL, btnCHAMPIONSHIP, btnK1, btnK2].forEach(btn => btn?.classList.toggle('active', btn.id === `btn${key}`));
        lastResults = null;
        updateUIStrings();
        initTable();
    };

    const updateUIStrings = () => {
        const lang = TRANSLATIONS[currentLang];
        document.getElementById('mainTitle').innerText = lang.title;
        document.getElementById('mainTitle').setAttribute('data-text', `${currentLeague} PREDICTOR`);
        document.getElementById('subtitle').innerText = lang.subtitle;
        installBtn.innerText = lang.installBtn;
        document.getElementById('lblLastUpdate').innerText = lang.lastUpdate;
        document.getElementById('btnSyncText').innerText = lang.syncBtn;
        document.getElementById('titleTable').innerText = lang.tableTitle;
        document.getElementById('thRank').innerText = lang.thRank;
        document.getElementById('thTeam').innerText = lang.thTeam;
        document.getElementById('thPlayed').innerText = lang.thPlayed;
        document.getElementById('thPts').innerText = lang.thPts;
        document.getElementById('thGd').innerText = lang.thGd;
        document.getElementById('titleInsight').innerText = lang.insightTitle;
        document.getElementById('msgInitial').innerText = lang.msgInitial;
        document.getElementById('msgSimulating').innerText = lang.msgSimulating;

        const sub = document.querySelector('.subtitle');
        sub.innerHTML = `${lang.subtitle}<br><small style="color:var(--accent-secondary)">${lang.source}</small>`;

        refreshDisplay();
    };

    const switchLanguage = (key) => {
        currentLang = key;
        localStorage.setItem('league_predictor_lang', key);
        btnKO.classList.toggle('active', key === 'ko');
        btnEN.classList.toggle('active', key === 'en');
        updateUIStrings();
    };

    const initTable = () => {
        renderTable({ relegation: {}, ucl: {}, uel: {} });
        updateInsight({ relegation: {}, ucl: {}, uel: {} });
    };

    // Listeners
    updateBtn.addEventListener('click', performUpdate);
    btnEPL?.addEventListener('click', () => switchLeague('EPL'));
    btnCHAMPIONSHIP?.addEventListener('click', () => switchLeague('CHAMPIONSHIP'));
    btnK1?.addEventListener('click', () => switchLeague('K1'));
    btnK2?.addEventListener('click', () => switchLeague('K2'));
    btnKO.addEventListener('click', () => switchLanguage('ko'));
    btnEN.addEventListener('click', () => switchLanguage('en'));

    // PWA
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        const isIframe = window !== window.top;
        if (!window.matchMedia('(display-mode: standalone)').matches && !isIframe) {
            installBtn.classList.remove('hidden');
        }
    });

    installBtn.addEventListener('click', async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') installBtn.classList.add('hidden');
        deferredPrompt = null;
    });

    // Go
    switchLanguage(currentLang);
    initTable();
});
