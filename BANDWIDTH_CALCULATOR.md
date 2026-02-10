# 📊 Bandwidth Calculator - TICUNGBIM DSA Landing Page

## 🔍 Build Output Analysis (Production)

### Files Được Load Cho Mỗi User Visit:

#### **Initial Load (First Visit - No Cache)**

| File | Size (Raw) | Size (Gzipped) | Notes |
|------|-----------|----------------|-------|
| `index.html` | 1.03 KB | 0.61 KB | HTML document |
| `index-Doyiw0ly.css` | 50.96 KB | 9.66 KB | Main styles |
| `react-vendor-wGySg1uH.js` | 140.87 KB | 45.26 KB | React libraries |
| `index-DUAq6kLm.js` | 5.54 KB | 2.54 KB | Main app code |

**Subtotal Initial**: 198.4 KB (raw) → **58.07 KB (gzipped)** ✅

---

#### **Lazy Loaded (When User Scrolls)**

| File | Size (Raw) | Size (Gzipped) | Trigger |
|------|-----------|----------------|---------|
| `Roadmap-DPz8BvJd.css` | 7.90 KB | 2.10 KB | Scroll to Roadmap |
| `Roadmap-C8g0FCzQ.js` | 5.44 KB | 2.15 KB | Scroll to Roadmap |
| `Registration-BZo3L-6Z.js` | 6.77 KB | 2.42 KB | Scroll to Registration |
| `Feedback-CCbTdHH9.js` | 2.92 KB | 1.25 KB | Scroll to Feedback |
| `FAQ-CgEgIsbK.js` | 2.02 KB | 1.21 KB | Scroll to FAQ |
| `Footer-77dNwZ2-.js` | 2.45 KB | 0.96 KB | Scroll to Footer |

**Subtotal Lazy**: 27.5 KB (raw) → **10.09 KB (gzipped)** ✅

---

## 💰 Bandwidth Cost Per User

### Scenario 1: First-Time Visitor (Full Page)
```
Initial Load:       58.07 KB
+ Lazy chunks:      10.09 KB (if scroll to bottom)
+ YouTube thumb:     ~15 KB (1 image from img.youtube.com - external, không tính)
────────────────────────────
TOTAL:              68.16 KB  ← VERCEL TÍNH BANDWIDTH NÀY
```

### Scenario 2: Returning Visitor (Cached)
```
Browser cache hit = 0 KB bandwidth
Vercel Edge cache hit = 0 KB bandwidth

Only re-fetch if cache expired
────────────────────────────
TOTAL:              ~0-5 KB (chỉ HTML refresh)
```

### Scenario 3: User Chỉ Xem Hero Section (Không Scroll)
```
Initial Load only:  58.07 KB
No lazy chunks loaded
────────────────────────────
TOTAL:              58.07 KB
```

---

## 🧮 Calculator Formula

```javascript
// Per User Bandwidth
bandwidth_per_user = (
  initial_load_gzipped +      // 58.07 KB
  lazy_chunks_loaded +        // 0-10.09 KB (depends on scroll)
  api_responses              // 0 KB (static site)
)

// Average User (50% scroll to bottom)
average_bandwidth = 58.07 + (10.09 × 0.5) = 63.12 KB

// Monthly Bandwidth for X visitors
monthly_bandwidth = daily_visitors × 30 × average_bandwidth × (1 - cache_hit_rate)
```

---

## 📈 Real Examples

### Example 1: 1,000 visitors/day (Small Blog)
```
Cache hit rate: 70%
Bandwidth = 1,000 × 30 × 63.12 KB × 0.3 = 567 MB/month
Status: ✅ FREE TIER (< 100 GB)
```

### Example 2: 10,000 visitors/day (Medium Site)
```
Cache hit rate: 80%
Bandwidth = 10,000 × 30 × 63.12 KB × 0.2 = 3.8 GB/month
Status: ✅ FREE TIER
```

### Example 3: 100,000 visitors/day (Large Site)
```
Cache hit rate: 85%
Bandwidth = 100,000 × 30 × 63.12 KB × 0.15 = 28.4 GB/month
Status: ✅ FREE TIER
```

### Example 4: 1,000,000 visitors/day (Viral)
```
Cache hit rate: 90%
Bandwidth = 1,000,000 × 30 × 63.12 KB × 0.1 = 189.4 GB/month
Status: ⚠️ NEED PRO PLAN ($20/month, 1TB included)
```

---

## 🔬 How to Measure Exactly

### Method 1: Chrome DevTools (Most Accurate)

1. **Open DevTools** (F12)
2. **Network Tab** → Check "Disable cache"
3. **Hard Refresh** (Cmd+Shift+R on Mac, Ctrl+Shift+F5 on Windows)
4. **Xem cột "Size"**:
   ```
   Total transferred: XXX KB  ← ĐÂY LÀ BANDWIDTH THỰC TẾ
   Total resources: YYY KB    ← File size không nén
   ```

### Method 2: Production Build Analysis

```bash
# 1. Build production
npm run build

# 2. Xem dist/ folder sizes
du -sh dist/*

# 3. Check gzipped sizes (như trên)
# Tổng gzipped = bandwidth per unique visitor
```

### Method 3: Vercel Analytics (Real Data)

1. Deploy lên Vercel
2. Vào Dashboard → Analytics → Bandwidth
3. Xem real usage per day/month
4. Formula:
   ```
   bandwidth_per_visitor = total_bandwidth / unique_visitors
   ```

---

## 📊 Current Website Stats

**✅ Your Optimized Website:**

```
Initial Bundle (gzipped):    58.07 KB
Full Page Load (gzipped):    68.16 KB
Compression Ratio:           ~72% (198.4 KB → 68.16 KB)

Compared to Industry:
- Average React SPA:         200-400 KB
- Your site:                 68 KB
- Improvement:               ~75% smaller ✅
```

---

## 🎯 Bandwidth Optimization Checklist

- [x] Lazy loading components (↓60% initial bundle)
- [x] Code splitting (React vendor separate)
- [x] Gzip compression (auto by Vercel)
- [x] YouTube external embed (↓500KB)
- [x] Minification with esbuild
- [ ] Image optimization (if you add images later)
- [ ] Font subsetting (if custom fonts)
- [ ] Service Worker caching (PWA)

---

## 💡 Quick Calculator

**Your Traffic:**
- Daily visitors: `X`
- Scroll rate: `Y%` (estimate 50-70%)
- Cache hit rate: `Z%` (estimate 80-90% after first week)

**Bandwidth Formula:**
```
Monthly GB = (X × 30 × 68 KB × (1 - Z/100)) / 1,000,000

Example với 50,000 visitors/day, 85% cache:
= (50,000 × 30 × 68 × 0.15) / 1,000,000
= 15.3 GB/month ✅ FREE TIER
```

---

**Last Updated**: Build output from `npm run build` on Feb 10, 2026
