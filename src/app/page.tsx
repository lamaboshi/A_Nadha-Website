'use client';
import { useState } from 'react';
import { BellRing, ArrowLeft, QrCode, Smartphone, ClipboardList, Star, BadgePercent, ChartNoAxesCombined, Palette, Check, Menu, X, ChevronDown, Coffee, Wifi, ShieldCheck } from 'lucide-react';

const features = [
  {icon:BellRing,title:'البيجر الذكي',desc:'رقم الطلب على موبايل الزبون، ونداء عند الجاهزية.'},
  {icon:QrCode,title:'المنيو الرقمي',desc:'أصناف وصور وأسعار عبر QR أو التطبيق.'},
  {icon:ClipboardList,title:'تجهيز الطلب',desc:'الزبون بيحضّر طلبه، والكاشير بيدخله على نظام المحاسبة.'},
  {icon:Star,title:'التقييمات',desc:'اسمع آراء زبائنك وطوّر التجربة.'},
  {icon:BadgePercent,title:'العروض',desc:'عرّف الزبائن على عروض المطعم بطريقة لطيفة.'},
  {icon:ChartNoAxesCombined,title:'التقارير',desc:'مؤشرات استخدام وأوقات انتظار بحسب الخدمات.'}
];
const questions = [
  ['هل لازم أغيّر برنامج المحاسبة؟','لا، النظام بيكمل برنامج المحاسبة الموجود عندك.'],
  ['هل لازم أشترك بكل الخدمات؟','لا، بتختار الخدمات المناسبة لمطعمك.'],
  ['هل لازم الزبون ينزّل تطبيق؟','المنيو بيفتح عبر QR، أما تنبيهات البيجر فهي مصممة لتطبيق Android مع الأذونات اللازمة.'],
  ['هل بيشتغل بدون إنترنت؟','بعض الوظائف مصممة للعمل عبر شبكة المطعم المحلية، بحسب الاتصال والصلاحيات.']
];
export default function Home(){
 const [menu,setMenu]=useState(false);
 const [faq,setFaq]=useState<number|null>(0);
 return <main>
 <div className="announcement">● منصة جديدة لتجربة مطاعم أذكى · صُمّمت لتكبر مع مطعمك</div>
 <header className="site-header"><div className="container nav-wrap">
 <a href="#" className="brand"><span className="brand-mark"><BellRing/></span><span className="brand-words"><strong>عَ نَدْهَة</strong><small>A_NADHA</small></span></a>
 <nav className={'nav-links '+(menu?'open':'')}><a href="#features" onClick={()=>setMenu(false)}>الخدمات</a><a href="#how" onClick={()=>setMenu(false)}>كيف بتشتغل؟</a><a href="#branding" onClick={()=>setMenu(false)}>هوية مطعمك</a><a href="#faq" onClick={()=>setMenu(false)}>الأسئلة الشائعة</a></nav>
 <a href="#contact" className="btn btn-dark nav-cta">اطلب عرض تجريبي <ArrowLeft size={16}/></a>
 <button className="mobile-toggle" aria-label="القائمة" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
 </div></header>
 <section className="hero"><div className="container hero-grid"><div className="hero-copy">
 <span className="eyebrow">✦ تجربة أذكى، بدون تعقيد</span>
 <h1>طلبك جاهز؟<br/><span>خلّي النداء</span><br/>علينا.</h1>
 <p>ودّع أجهزة الانتظار التقليدية. مع <strong>عَ نَدْهَة</strong>، موبايل الزبون بيصير بيجر ذكي، ومطعمك بيقدّم تجربة أسهل من أول طلب لآخر نداء.</p>
 <div className="hero-actions"><a className="btn btn-orange" href="#contact">خلّينا نحكي عن مطعمك <ArrowLeft size={18}/></a><a className="btn btn-outline" href="#how">شوف كيف بتشتغل</a></div>
 <div className="hero-points"><span><Check size={16}/> بدون تغيير المحاسبة</span><span><Check size={16}/> خدمات حسب حاجتك</span></div>
 </div><div className="hero-art"><div className="orbit orbit-one"/><div className="orbit orbit-two"/>
 <div className="floating-note note-top"><span className="note-icon"><QrCode/></span><span><b>خطوة بسيطة</b><small>امسح QR وابدأ</small></span></div>
 <div className="phone"><div className="phone-notch"/><div className="phone-screen"><div className="phone-top"><span>9:41</span><span>●●●</span></div><div className="phone-restaurant"><span className="mini-logo"><Coffee/></span><span>مقهى الحارة<small>أهلاً وسهلاً فيك!</small></span></div><div className="phone-bell"><BellRing size={38}/></div><div className="phone-status">طلبك قيد التحضير</div><div className="phone-number"># 0248</div><div className="phone-caption">منناديلك أول ما يصير جاهز ☕</div><div className="phone-progress"><span/></div><div className="phone-bottom">خليك مرتاح، نحنا منتذكرك</div></div></div>
 <div className="floating-note note-bottom"><span className="note-icon orange"><BellRing/></span><span><b>جاهز للاستلام!</b><small>وصلك النداء</small></span></div><div className="art-caption">تصوّر توضيحي لتجربة الزبون</div>
 </div></div><div className="hero-bottom container"><span>منصة واحدة. خدمات على قياس مطعمك.</span><span className="line"/></div></section>
 <section className="section features-section" id="features"><div className="container"><div className="section-head"><div><span className="kicker">شو منقدّم؟</span><h2>كل شي بيسهّل التجربة.<br/><em>ولا شي زيادة.</em></h2></div><p>اختار الخدمات اللي بتفيد مطعمك، وكبّر استخدامك وقت ما تحتاج.</p></div><div className="feature-grid">{features.map((f,i)=>{const Icon=f.icon;return <article className={'feature-card feature-'+i} key={f.title}><div className="feature-icon"><Icon/></div><h3>{f.title}</h3><p>{f.desc}</p><span className="feature-index">0{i+1}</span></article>})}</div></div></section>
 <section className="section how-section" id="how"><div className="container"><div className="center-head"><span className="kicker">بسيطة من أولها</span><h2>ثلاث خطوات،<br/><em>وخلصت الحكاية.</em></h2><p>من غير ما نغيّر نظام شغلك المعتاد.</p></div><div className="steps">{[['01','الزبون بيمسح QR','بيفتح المنيو أو يبدأ جلسة انتظار.'],['02','الكاشير بيربط الطلب','بيدخل رقم الفاتورة من برنامج المحاسبة.'],['03','صار الطلب جاهز؟','كبسة نداء، وبيوصل تنبيه حسب الاتصال والأذونات.']].map(s=><div className="step" key={s[0]}><div className="step-number">{s[0]}</div><h3>{s[1]}</h3><p>{s[2]}</p></div>)}</div><div className="how-note"><ShieldCheck/> عَ نَدْهَة مو برنامج محاسبة ولا نظام دفع، بل تجربة بتكمل شغلك الحالي.</div></div></section>
 <section className="section brand-section" id="branding"><div className="container brand-grid"><div className="brand-copy"><span className="kicker light">مطعمك، هويتك</span><h2>اسمك على التطبيق.<br/><em>مو اسمنا.</em></h2><p>تطبيق Android مستقل باسم مطعمك وأيقونته وشعاره وألوانه الخاصة.</p><div className="brand-checks"><span><Check/> اسم المطعم على الموبايل</span><span><Check/> أيقونة وألوان خاصة</span><span><Check/> تجربة انتظار بهوية مطعمك</span></div><a className="btn btn-white" href="#contact">احكي معنا عن تطبيقك <ArrowLeft/></a></div><div className="brand-visual"><div className="brand-glow"/><div className="app-icon-demo app-icon-a"><Coffee size={45}/><span>مقهى الحارة</span></div><div className="app-icon-demo app-icon-b"><BellRing size={45}/><span>بيت القهوة</span></div><span className="brand-visual-label"><Palette/> تطبيق مختلف لكل مطعم</span></div></div></section>
 <section className="section why-section"><div className="container"><div className="section-head"><div><span className="kicker">لأن التفاصيل بتفرق</span><h2>الزبون بيرتاح.<br/><em>وشغلك بيضل ماشي.</em></h2></div></div><div className="benefits"><div><span className="benefit-icon"><Smartphone/></span><h3>موبايله بدل جهاز إضافي</h3><p>تجربة انتظار بدون جهاز بيجر تقليدي.</p></div><div><span className="benefit-icon"><Wifi/></span><h3>مصمّم للاتصال المحلي</h3><p>تشغيل الوظائف المتوافقة عبر شبكة المطعم.</p></div><div><span className="benefit-icon"><BellRing/></span><h3>تواصل أوضح</h3><p>من تأكيد ربط الطلب إلى نداء الاستلام.</p></div></div></div></section>
 <section className="section faq-section" id="faq"><div className="container faq-grid"><div><span className="kicker">أسئلة بتخطر على بالك</span><h2>عندك سؤال؟<br/><em>غالباً هون جوابه.</em></h2><p className="faq-intro">وإذا عندك حالة خاصة، فينا نناقشها سوا.</p></div><div className="faq-items">{questions.map(([q,a],i)=><div className={'faq-item '+(faq===i?'active':'')} key={q}><button onClick={()=>setFaq(faq===i?null:i)} aria-expanded={faq===i}><span>{q}</span><ChevronDown/></button>{faq===i&&<p>{a}</p>}</div>)}</div></div></section>
 <section className="contact-section" id="contact"><div className="container"><div className="contact-panel"><div className="contact-spark">✦</div><span className="kicker">خلّينا نبلّش</span><h2>جاهز تخلي الانتظار<br/><em>أذكى بمطعمك؟</em></h2><p>احكيلنا عن مطعمك والخدمات اللي بتهمّك.</p><button className="btn btn-dark" onClick={()=>alert('قناة التواصل الرسمية قيد التجهيز.')}>اطلب عرض تجريبي <ArrowLeft/></button><small>قناة استقبال الطلبات قيد التجهيز.</small></div></div></section>
 <footer className="footer"><div className="container footer-inner"><a className="brand" href="#"><span className="brand-mark"><BellRing/></span><span className="brand-words"><strong>عَ نَدْهَة</strong><small>A_NADHA</small></span></a><p>نداء أذكى. تجربة ألطف.</p><span>© {new Date().getFullYear()} A_Nadha</span></div></footer>
 </main>
}
