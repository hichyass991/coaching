export interface TestimonialMetric {
  labelAr: string;
  labelEn: string;
  before: string;
  after: string;
  growth?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  avatar: string;
  roleAr: string;
  roleEn: string;
  locationAr: string;
  locationEn: string;
  marketCategory: 'all' | 'cod-morocco' | 'gcc' | 'dropshipping';
  categoryLabelAr: string;
  categoryLabelEn: string;
  storeNicheAr: string;
  storeNicheEn: string;
  rating: number;
  highlightAr: string;
  highlightEn: string;
  quoteAr: string;
  quoteEn: string;
  challengeAr: string;
  challengeEn: string;
  solutionAr: string;
  solutionEn: string;
  keyMetrics: TestimonialMetric[];
  verifiedDate: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'yassine-casablanca',
    name: 'ياسين بنعلي / Yassine Benali',
    avatar: 'YB',
    roleAr: 'مؤسس متجر تجميل وعناية نسائية',
    roleEn: 'Founder, D2C Beauty & Skincare',
    locationAr: 'الدار البيضاء، المغرب',
    locationEn: 'Casablanca, Morocco',
    marketCategory: 'cod-morocco',
    categoryLabelAr: 'COD المغرب',
    categoryLabelEn: 'Morocco COD',
    storeNicheAr: 'منتجات التجميل والعناية (Skincare)',
    storeNicheEn: 'Cosmetics & Personal Care',
    rating: 5,
    highlightAr: 'من نسبة روتور 44% إلى تسليم 84% مع أرباح صافية تضاعفت 4 مرات',
    highlightEn: 'Reduced RTO from 44% to 16% and quadrupled monthly net profits',
    quoteAr: 'قبل ما ندخل لكوتشينغ AirNest، كنت كنحرق ميزانية كبيرة فإعلانات فيسبوك وتيك توك بدون ما نعرف الأرقام الحقيقية. المبيعات كانت كتبان كثيرة ولكن الروتور كان كيقتلني وما كيبقى والو فالصافي. الفريق علمني كيفاش ندير سكريبت تأكيد دقيق فالمغرب وربطنا مع موزعين حقيقيين، والأهم بنينا عروض باقات ضاعفت سلة الشراء.',
    quoteEn: 'Before AirNest coaching, I was burning heavy ad spend on Facebook and TikTok without tracking actual unit margins. Orders looked high on Shopify, but high return rates (RTO) wiped out profits. The team restructured our WhatsApp confirmation flow, connected us with vetted local couriers, and built bundled offers that doubled our AOV.',
    challengeAr: 'خسائر مستمرة بسبب ارتفاع نسبة الإرجاع (44% RTO) وحسابات إعلانية غير مستقرة.',
    challengeEn: 'High return rates (44% RTO) and volatile ad accounts eroding net margins.',
    solutionAr: 'إعادة صياغة سكريبت التأكيد السريع عبر الواتساب في أقل من 10 دقائق، وإطلاق إعلانات TikTok Spark Ads مع زوايا UGC واقعية.',
    solutionEn: 'Implemented 10-minute rapid WhatsApp confirmation protocols and launched authentic UGC TikTok Spark Ads campaigns.',
    keyMetrics: [
      { labelAr: 'معدل التسليم (Delivery Rate)', labelEn: 'Delivery Rate', before: '54%', after: '84%', growth: '+30%' },
      { labelAr: 'الربح الصافي الشهري', labelEn: 'Net Monthly Profit', before: '18,500 DH', after: '78,000 DH', growth: '+321%' },
      { labelAr: 'عائد الإعلانات (ROAS)', labelEn: 'Media Buying ROAS', before: '1.7x', after: '3.9x', growth: '+129%' }
    ],
    verifiedDate: 'يونيو 2026 / June 2026'
  },
  {
    id: 'sara-marrakech',
    name: 'سارة العمراني / Sara El Amrani',
    avatar: 'SA',
    roleAr: 'رائدة أعمال ومتجر مستلزمات المنزل والمطبخ',
    roleEn: 'Co-Founder, Modern Home Living',
    locationAr: 'مراكش، المغرب',
    locationEn: 'Marrakech, Morocco',
    marketCategory: 'cod-morocco',
    categoryLabelAr: 'COD المغرب',
    categoryLabelEn: 'Morocco COD',
    storeNicheAr: 'أدوات منزلية ذكية (Home Gadgets)',
    storeNicheEn: 'Home Living & Kitchen Tech',
    rating: 5,
    highlightAr: 'رفع متوسط قيمة السلة (AOV) من 180 إلى 390 درهم مع شحن مجاني مربح',
    highlightEn: 'Scaled Average Order Value (AOV) from 180 DH to 390 DH profitably',
    quoteAr: 'المشكل الأكبر عندي كان المنافسة الشرسة وحرق الأسعار من طرف المتاجر الأخرى. فالمواكبة الفردية مع AirNest، بدلنا التفكير من مجرد بيع قطعة واحدة إلى بناء عروض باقات ذكية (Bundles & Upsells) فصفحة الدفع. النتيجة كانت فورية: العميل ولا كيشري بـ 390 درهم وهامش الربح الصافي قفز لأكثر من 38%.',
    quoteEn: 'My biggest bottleneck was aggressive price undercutting from competitors. During AirNest 1-on-1 mentorship, we moved away from selling single low-ticket items to engineered high-converting checkout bundles and post-purchase upsells. Our customer cart size shot to 390 DH with a solid 38% net margin.',
    challengeAr: 'بيع منتجات مكررة بدون عروض تميزية، وسلة مشتريات منخفضة (180 DH) لا تغطي مصاريف الإعلانات.',
    challengeEn: 'Low ticket items (180 DH cart) struggling to cover rising Meta CPMs and double-way courier fees.',
    solutionAr: 'تطبيق استراتيجية الـ Tiered Pricing وعروض الباقات الحصرية مع هدايا قيمة مجانية تحفز العميل على مضاعفة الكمية.',
    solutionEn: 'Designed tiered checkout pricing and free gift thresholds that incentivized multi-unit orders seamlessly.',
    keyMetrics: [
      { labelAr: 'متوسط قيمة السلة (AOV)', labelEn: 'Average Order Value', before: '180 DH', after: '390 DH', growth: '+116%' },
      { labelAr: 'الطلبيات المسلمة شهرياً', labelEn: 'Monthly Deliveries', before: '320 طلب', after: '1,420 طلب', growth: '+343%' },
      { labelAr: 'هامش الربح الصافي', labelEn: 'Net Profit Margin', before: '14%', after: '38.5%', growth: '+24.5%' }
    ],
    verifiedDate: 'يوليو 2026 / July 2026'
  },
  {
    id: 'kareem-gcc',
    name: 'كريم المنصور / Kareem Al-Mansoor',
    avatar: 'KM',
    roleAr: 'مؤسس علامة إلكترونيات وإكسسوارات السيارات',
    roleEn: 'Managing Director, Gulf Auto Gear',
    locationAr: 'الرياض ودبي، أسواق الخليج (GCC)',
    locationEn: 'Riyadh & Dubai (GCC Markets)',
    marketCategory: 'gcc',
    categoryLabelAr: 'أسواق الخليج',
    categoryLabelEn: 'GCC Expansion',
    storeNicheAr: 'إكسسوارات سيارات فاخرة (Car Tech)',
    storeNicheEn: 'Automotive Accessories & Tech',
    rating: 5,
    highlightAr: 'توسع ناجح في السعودية والإمارات وتخفيض تكلفة الاكتساب من $24 إلى $8.50',
    highlightEn: 'Expanded into KSA & UAE, slashing Customer Acquisition Cost from $24 to $8.50',
    quoteAr: 'السوق الخليجي فيه قوة شرائية هائلة، ولكن إذا لم تكن تفهم طبيعة إعلانات سناب شات وتيك توك والتوصيل المحلي السريع، ستخسر رأس مالك بسرعة. الكوتشينغ مع AirNest رتب لي مستودعاً محلياً للتوصيل خلال 24 ساعة، ودربنا فريق خدمة العملاء على اللهجة الخليجية، مما جعل نسبة استلام الطلبات تصل إلى 88%.',
    quoteEn: 'The GCC market has immense purchasing power, but without mastery of Snapchat/TikTok creatives and next-day local fulfillment, ad budgets vanish. AirNest coaching helped us set up verified local warehousing in Riyadh/Dubai and trained customer agents in native dialects, driving our delivered rate to 88%.',
    challengeAr: 'تكلفة نقرة واكتساب مرتفعة جداً في الخليج وتأخر شركات الشحن الدولية الذي سبب إلغاءات كثيرة.',
    challengeEn: 'High CAC on GCC ad networks and delayed cross-border shipping causing massive customer cancellation rates.',
    solutionAr: 'تخزين البضائع محلياً في الرياض ودبي مع شركات شحن ببروتوكول تسليم 24 ساعة، وتفعيل إعلانات UGC بمؤثرين محليين.',
    solutionEn: 'Switched to local forward-deployed inventory in Riyadh and paired with native UGC creator video creatives.',
    keyMetrics: [
      { labelAr: 'تكلفة الاكتساب (CPA)', labelEn: 'Cost Per Acquisition', before: '$24.20', after: '$8.50', growth: '-65%' },
      { labelAr: 'حجم المبيعات الشهري', labelEn: 'Monthly GMV', before: '$12,000', after: '$46,500', growth: '+287%' },
      { labelAr: 'نسبة الاستلام في الخليج', labelEn: 'Delivery Rate (GCC)', before: '61%', after: '88%', growth: '+27%' }
    ],
    verifiedDate: 'مايو 2026 / May 2026'
  },
  {
    id: 'hamza-tangier',
    name: 'حمزة التازي / Hamza Tazi',
    avatar: 'HT',
    roleAr: 'مؤسس متجر المصنوعات الجلدية والأحذية',
    roleEn: 'Founder, Heritage Leather & Footwear',
    locationAr: 'طنجة، المغرب',
    locationEn: 'Tangier, Morocco',
    marketCategory: 'cod-morocco',
    categoryLabelAr: 'COD المغرب',
    categoryLabelEn: 'Morocco COD',
    storeNicheAr: 'أحذية ومصنوعات جلدية أصلية',
    storeNicheEn: 'Artisanal Leather Footwear',
    rating: 5,
    highlightAr: 'بناء فريق كول سنتر محترف خفض وقت تأكيد الطلبيات لأقل من 15 دقيقة',
    highlightEn: 'Trained in-house call center, bringing order confirmation speed down to under 15 mins',
    quoteAr: 'السر الحقيقي اللي تعلمتو فالمواكبة هو أن الدفع عند الاستلام لعبة لوجستيك وإدارة وقت. قبل، الطلبية كانت كتدوز 24 ساعة عاد كنتاصلو بالكليان وكيكون بدل رأيو. دابا بنينا نظام اتوماتيكي كيدوز الطلب للكول سنتر فالحين، ونسبة التأكيد طلعت من 58% لـ 92% مع تتبع يومي مع الشاحن.',
    quoteEn: 'The most decisive framework I acquired during the mentorship was that COD is strictly a logistics speed operation. Previously, orders sat 24+ hours before confirmation, by which time buyer enthusiasm cooled. We deployed an automated fast-dispatch system with under 15-minute call times, jumping confirmation to 92%.',
    challengeAr: 'بطء شديد في التواصل مع الزبناء مما يؤدي إلى رفض الاستلام وتراكم المرتجعات غير المبررة.',
    challengeEn: 'Slow manual confirmation cycles allowing buyer remorse to fester and driving cancellation rates.',
    solutionAr: 'تطبيق بروتوكول الـ Rapid CRM وتعيين فريق تأكيد وتنسيق خاص مع توجيه الشحنات حسب التغطية الجغرافية الأفضل.',
    solutionEn: 'Standardized automated webhook routing to phone operators with geo-routed dispatch for optimal delivery routes.',
    keyMetrics: [
      { labelAr: 'نسبة تأكيد الطلبيات', labelEn: 'Order Confirmation Rate', before: '58%', after: '92%', growth: '+34%' },
      { labelAr: 'معدل الروتور (Return Rate)', labelEn: 'Return Rate (RTO)', before: '38%', after: '12%', growth: '-26%' },
      { labelAr: 'رقم المعاملات الشهري', labelEn: 'Monthly Revenue', before: '95,000 DH', after: '320,000 DH', growth: '+236%' }
    ],
    verifiedDate: 'أغسطس 2026 / August 2026'
  },
  {
    id: 'mehdi-agadir',
    name: 'المهدي الوزاني / Mehdi Ouazzani',
    avatar: 'MO',
    roleAr: 'ممارس دروب شيبينغ عالمي وبراند خاص',
    roleEn: 'Global Dropshipper & Brand Builder',
    locationAr: 'أكادير / أسواق الولايات المتحدة وأوروبا',
    locationEn: 'Agadir (US & EU Markets)',
    marketCategory: 'dropshipping',
    categoryLabelAr: 'الدروب شيبينغ الدولي',
    categoryLabelEn: 'Global Dropshipping',
    storeNicheAr: 'معدات اللياقة الذكية (Fitness Tech)',
    storeNicheEn: 'Ergonomic Fitness Equipment',
    rating: 5,
    highlightAr: 'تخطي حظر بوابات الدفع والربط مع وكيل شحن خاص يوصل في 6 أيام لأمريكا',
    highlightEn: 'Overcame payment gateway freezes and secured a private fulfillment agent (6-day US delivery)',
    quoteAr: 'الدروب شيبينغ التقليدي مع علي إكسبريس مات. كنت كنعاني من أوقات شحن تفوق 20 يوماً ومشاكل مستمرة مع Stripe وPayPal. كوتشينغ AirNest فتح لي الباب لتأسيس كيان تجاري قانوني والحصول على وكيل خاص من مدينة Yiwu. تحسنت تجربة العميل واختفت النزاعات كلياً، مما سمح لي بمضاعفة الإنفاق الإعلاني باطمئنان.',
    quoteEn: 'Standard AliExpress dropshipping is obsolete. I struggled with 20+ day shipping delays and account holds on Stripe. AirNest coaching guided us through proper legal corporate structuring and connected us with an elite private fulfillment agent in Yiwu. Delivery dropped to 6-8 days, disputes dropped to zero, and we scaled ad spend with full confidence.',
    challengeAr: 'تأخيرات شحن قاسية من الموردين ونزاعات مستمرة في بوابات الدفع تهدد استمرارية المتجر.',
    challengeEn: 'Sluggish 20+ day fulfillment and continuous payment disputes resulting in high chargeback risks.',
    solutionAr: 'الانتقال إلى وكيل شحن صيني خاص بعقود شحن سريعة (YunExpress/CJP) وفحص جودة حقيقي قبل الشحن.',
    solutionEn: 'Transitioned to private line air couriers with pre-shipment barcode QC, reducing delivery times by 65%.',
    keyMetrics: [
      { labelAr: 'مدة الشحن للعميل', labelEn: 'Fulfillment Time', before: '19-24 يوم', after: '6-8 أيام', growth: '-68%' },
      { labelAr: 'نسبة النزاعات (Dispute Rate)', labelEn: 'Chargeback Rate', before: '3.4%', after: '0.2%', growth: '-94%' },
      { labelAr: 'الربح الشهري الصافي', labelEn: 'Net Monthly Earnings', before: '$3,800', after: '$16,400', growth: '+331%' }
    ],
    verifiedDate: 'يوليو 2026 / July 2026'
  },
  {
    id: 'fatima-fes',
    name: 'فاطمة الزهراء الشاوي / Fatima-Zahra Chaoui',
    avatar: 'FC',
    roleAr: 'مؤسسة علامة تجارية للعناية بالزيوت الطبيعية',
    roleEn: 'Founder, Pure Moroccan Botanicals',
    locationAr: 'فاس، المغرب',
    locationEn: 'Fez, Morocco',
    marketCategory: 'cod-morocco',
    categoryLabelAr: 'COD المغرب',
    categoryLabelEn: 'Morocco COD',
    storeNicheAr: 'مستحضرات عضوية وعلاجية (Organic Care)',
    storeNicheEn: 'Organic Botanical Skincare',
    rating: 5,
    highlightAr: 'تحويل متجر تجارة إلكترونية عادي إلى علامة تجارية تملك معدل إعادة شراء 28%',
    highlightEn: 'Transformed transactional store into a brand with 28% repeat purchase retention',
    quoteAr: 'المشكل فالتجارة الإلكترونية أنك كتشري الزبون مرة واحدة وكتنساه، وتكلفة الإشهار كتبقى تاكل الأرباح. مع توجيهات AirNest، اشتغلنا على تغليف فاخر مع كارت شكر وهدية تجريبية، وطبقنا نظام رسائل SMS وواتساب لمتابعة رضا العميل بعد 7 أيام. اليوم 28% من مبيعاتنا كتجي من زبناء سابقين بدون أي درهم إعلاني إضافي!',
    quoteEn: 'Most sellers acquire a customer once and forget them, watching rising ad costs erode their business. With AirNest mentoring, we elevated our unboxing experience with premium branded boxes, handwritten thank-you notes, and a 7-day post-delivery WhatsApp follow-up. Today, 28% of our orders come from repeat buyers with zero extra ad spend!',
    challengeAr: 'الاعتماد الكلي على الإعلانات المدفوعة وغياب ولاء العملاء مع إعادة شراء تقارب الصفر.',
    challengeEn: 'Total dependency on paid customer acquisition with zero organic repeat customer retention.',
    solutionAr: 'بناء مسار ولاء العملاء (Post-purchase retention) عبر الواتساب وتقديم عينات حصرية وتغليف براند مخصص.',
    solutionEn: 'Designed VIP customer lifecycle flows, unboxing surprises, and re-order incentive discounts via WhatsApp.',
    keyMetrics: [
      { labelAr: 'نسبة إعادة الشراء (Retention)', labelEn: 'Repeat Purchase Rate', before: '4.2%', after: '28.4%', growth: '+576%' },
      { labelAr: 'هامش الربح الصافي الإجمالي', labelEn: 'Overall Net Margin', before: '19%', after: '41.2%', growth: '+116%' },
      { labelAr: 'مجموع الطلبيات الناجحة', labelEn: 'Total Verified Orders', before: '480 طلب', after: '4,100+ طلب', growth: '+754%' }
    ],
    verifiedDate: 'أغسطس 2026 / August 2026'
  }
];

export const TESTIMONIALS_AGGREGATE_STATS = {
  coachedStores: '85+',
  avgDeliveryRate: '83.2%',
  avgProfitIncrease: '+42%',
  satisfactionScore: '4.95 / 5',
};
