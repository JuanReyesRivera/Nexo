(function(ke){"use strict";var $=document.createElement("style");$.textContent=`*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}html{height:100%}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;font-size:13px;color:#222;background:#f0f2f5;height:100%}:root{--azul: #1a4f8a;--azul-dark: #163f70;--azul-lite: #e8f0fa;--gris-bg: #f0f2f5;--gris-card: #fff;--gris-brd: #e8ecf0;--gris-txt: #666;--verde: #2E7D32;--rojo: #dc2626;--naranja: #E65100;--radius: 8px;--radius-lg: 12px}.auth-bg{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#0a1f40,#1a4f8a 55%,#2563a8);padding:20px}.auth-card{background:#fff;border-radius:18px;padding:30px 36px;width:100%;max-width:440px;box-shadow:0 20px 60px #00000059}.logo-block{text-align:center;margin-bottom:22px;padding-bottom:18px;border-bottom:1px solid #f0f0f0}.logo-block img{width:80px;height:auto;display:block;margin:0 auto 10px}.logo-name{font-size:26px;font-weight:700;color:var(--azul);letter-spacing:.1em}.logo-sub{font-size:11px;color:#5a7fa8;margin-top:4px;text-transform:uppercase;letter-spacing:.06em}.field{margin-bottom:12px}.lbl{font-size:11px;font-weight:600;color:var(--gris-txt);margin-bottom:4px;display:block;text-transform:uppercase;letter-spacing:.04em}input,select,textarea{width:100%;padding:9px 11px;border:1.5px solid #e8e8e8;border-radius:var(--radius);font-size:13px;font-family:inherit;outline:none;background:#fafafa;color:#222;transition:border-color .15s}input:focus,select:focus,textarea:focus{border-color:var(--azul);background:#fff}input[readonly]{background:#f5f5f5;color:#999}.btn{padding:6px 13px;border-radius:var(--radius);font-size:12px;font-weight:600;cursor:pointer;border:1px solid #dde0e5;background:#fff;color:#333;font-family:inherit;transition:all .12s}.btn:hover{background:#f5f7fa}.btn-primary{background:var(--azul);color:#fff;border-color:var(--azul)}.btn-primary:hover{background:var(--azul-dark)}.btn-success{background:var(--verde);color:#fff;border-color:var(--verde)}.btn-danger{background:var(--rojo);color:#fff;border-color:var(--rojo)}.btn-warning{background:var(--naranja);color:#fff;border-color:var(--naranja)}.btn-main{width:100%;padding:11px;border-radius:var(--radius);font-size:13px;font-weight:700;cursor:pointer;border:none;background:var(--azul);color:#fff;font-family:inherit;transition:background .15s}.btn-main:hover{background:var(--azul-dark)}.alert-err{background:#fef2f2;color:#dc2626;padding:8px 11px;border-radius:var(--radius);font-size:12px;margin-bottom:11px;display:none;border:1px solid #fecaca}.alert-ok{background:#f0fdf4;color:#16a34a;padding:8px 11px;border-radius:var(--radius);font-size:12px;margin-bottom:11px;display:none;border:1px solid #bbf7d0}.app-wrap{display:flex;height:100vh;overflow:hidden;background:var(--gris-bg)}.sidebar{width:220px;min-width:220px;background:#fff;border-right:1px solid var(--gris-brd);display:flex;flex-direction:column}.sb-head{padding:15px 14px 11px;border-bottom:1px solid #f0f0f0}.sb-brand{font-size:17px;font-weight:700;color:var(--azul);letter-spacing:.08em}.sb-sub{font-size:9px;color:#999;text-transform:uppercase;letter-spacing:.04em;margin-top:2px}.sb-head img{width:36px;height:auto;margin-bottom:6px}.sb-user{padding:10px 13px;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:9px}.avatar{width:32px;height:32px;border-radius:50%;color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0}.sb-nm{font-size:11px;font-weight:600}.sb-rl{font-size:10px;color:#999}.nav-area{padding:8px 6px;flex:1;overflow-y:auto}.nav-group{font-size:9px;font-weight:700;color:#ccc;text-transform:uppercase;letter-spacing:.08em;padding:9px 8px 3px}.nav-item{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:var(--radius);cursor:pointer;font-size:12px;color:#666;transition:all .12s;list-style:none}.nav-item:hover{background:#f0f4fa;color:var(--azul)}.nav-item.active{background:var(--azul-lite);color:var(--azul);font-weight:600}.nav-item i{font-size:15px;width:16px;text-align:center;flex-shrink:0}.nav-badge{margin-left:auto;background:var(--azul);color:#fff;font-size:9px;font-weight:700;padding:2px 6px;border-radius:10px}.nav-badge-warn{background:var(--naranja)}.sb-logout{padding:11px 13px;border-top:1px solid #f0f0f0;font-size:12px;color:var(--rojo);cursor:pointer;display:flex;align-items:center;gap:7px;font-weight:500;background:none;border-left:none;border-right:none;width:100%;font-family:inherit;text-align:left}.sb-logout:hover{background:#fef2f2}.main-area{flex:1;display:flex;flex-direction:column;min-width:0;overflow:hidden}.topbar{padding:11px 18px;background:#fff;border-bottom:1px solid var(--gris-brd);display:flex;align-items:center;gap:10px;box-shadow:0 2px 6px #0000000a}.tb-brand{font-size:15px;font-weight:700;color:var(--azul);letter-spacing:.07em}.tb-brand img{width:24px;height:auto;vertical-align:middle;margin-right:6px}.tb-sep{width:1px;height:18px;background:#e0e0e0;margin:0 2px}.tb-title{font-size:14px;font-weight:500;flex:1}.role-pill{font-size:11px;font-weight:600;padding:4px 11px;border-radius:10px}.rp-admin{background:#fff7ed;color:#c2410c}.rp-op{background:#eff6ff;color:#1d4ed8}.rp-col{background:#f0fdf4;color:#15803d}.content{overflow-y:auto;padding:18px;flex:1}.page{display:none}.page.active{display:block}.card{background:#fff;border:1px solid var(--gris-brd);border-radius:var(--radius-lg);padding:16px;margin-bottom:12px;box-shadow:0 2px 8px #0000000a}.card-title{font-size:13px;font-weight:600;margin-bottom:12px}.mc-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px;margin-bottom:18px}.mc{background:#f5f8fd;border-radius:var(--radius);padding:12px 14px;border:1px solid var(--gris-brd)}.mc-label{font-size:11px;color:#888;margin-bottom:5px}.mc-value{font-size:22px;font-weight:700}.two{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:14px;margin-bottom:12px}.table-wrap{background:#fff;border:1px solid var(--gris-brd);border-radius:var(--radius);overflow:hidden;margin-bottom:12px}table{width:100%;border-collapse:collapse;font-size:12px}th{background:#f8f9fb;padding:8px 11px;text-align:left;font-size:10px;font-weight:700;color:#999;text-transform:uppercase;border-bottom:1px solid var(--gris-brd)}td{padding:9px 11px;border-bottom:1px solid #f0f2f5;vertical-align:middle}tr:last-child td{border-bottom:none}tr.clickable:hover td{background:#f8fafd;cursor:pointer}.tag{padding:2px 8px;border-radius:8px;font-size:10px;font-weight:600;white-space:nowrap}.tag-green{background:#dcfce7;color:#166534}.tag-orange{background:#fff7ed;color:#9a3412}.tag-red{background:#fef2f2;color:#991b1b}.tag-blue{background:#eff6ff;color:#1e40af}.tag-gray{background:#f3f4f6;color:#374151}.role-tag{display:inline-flex;gap:4px;padding:2px 8px;border-radius:8px;font-size:10px;font-weight:600}.role-admin{background:#fff7ed;color:#c2410c}.role-op{background:#eff6ff;color:#1d4ed8}.role-col{background:#f0fdf4;color:#15803d}.toggle{width:36px;height:20px;border-radius:10px;cursor:pointer;position:relative;transition:background .2s;flex-shrink:0;border:none}.toggle.on{background:var(--azul)}.toggle.off{background:#d1d5db}.toggle:after{content:"";position:absolute;width:16px;height:16px;border-radius:50%;background:#fff;top:2px;transition:left .2s;box-shadow:0 1px 2px #0003}.toggle.on:after{left:18px}.toggle.off:after{left:2px}.perm-row{display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f0f2f5;font-size:12px}.perm-row:last-child{border-bottom:none}.modal-overlay{display:none;position:fixed;top:0;right:0;bottom:0;left:0;background:#00000080;z-index:200;align-items:center;justify-content:center}.modal-overlay.open{display:flex}.modal-box{background:#fff;border-radius:var(--radius-lg);padding:24px;width:100%;max-width:480px;max-height:90vh;overflow-y:auto;box-shadow:0 24px 60px #00000040}.modal-hdr{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}.modal-title{font-size:15px;font-weight:700}.modal-close{background:none;border:none;cursor:pointer;font-size:18px;color:#888;line-height:1}#toast{display:none;position:fixed;bottom:18px;right:18px;background:var(--azul);color:#fff;padding:11px 17px;border-radius:var(--radius);font-size:12px;z-index:9999;max-width:300px;line-height:1.5;font-weight:500;box-shadow:0 8px 24px #00000040}.pol-page-hdr{background:#fff;border:1px solid var(--gris-brd);border-radius:var(--radius-lg);padding:20px 24px;margin-bottom:14px;display:flex;align-items:center;gap:14px}.pol-page-icon{width:44px;height:44px;border-radius:var(--radius);background:var(--azul-lite);display:flex;align-items:center;justify-content:center;flex-shrink:0}.pol-page-icon i{font-size:22px;color:var(--azul)}.pol-content{background:#fff;border:1px solid var(--gris-brd);border-radius:var(--radius-lg);padding:24px;font-size:13px;line-height:1.7}.pol-content h2{font-size:14px;font-weight:600;color:var(--azul);margin:22px 0 8px;padding-bottom:5px;border-bottom:1px solid var(--gris-brd)}.pol-content h2:first-child{margin-top:0}.pol-content h3{font-size:13px;font-weight:600;margin:14px 0 6px}.pol-content p{margin-bottom:9px;color:#555}.pol-content ul,.pol-content ol{margin-left:18px;margin-bottom:9px}.pol-content li{margin-bottom:4px;color:#555;line-height:1.6}.pol-content table{width:100%;border-collapse:collapse;margin-bottom:12px;font-size:12px}.pol-content th{background:#f8f9fb;padding:6px 10px;text-align:left;font-weight:600;border:1px solid var(--gris-brd);color:#666;text-transform:uppercase;font-size:10px}.pol-content td{padding:7px 10px;border:1px solid var(--gris-brd);color:#555;vertical-align:top}.pol-content .callout{background:var(--azul-lite);border-left:3px solid var(--azul);padding:11px 14px;margin:14px 0;border-radius:0 var(--radius) var(--radius) 0}.pol-content .callout strong{color:var(--azul);display:block;margin-bottom:4px;font-size:12px}.pol-content .callout p{color:#555;font-size:12px;margin:0}.tabs{display:flex;border-bottom:1.5px solid #ebebeb;margin-bottom:16px}.tab-btn{flex:1;padding:8px 4px;text-align:center;font-size:12px;cursor:pointer;color:#aaa;border:none;border-bottom:2.5px solid transparent;margin-bottom:-1.5px;background:none;font-family:inherit}.tab-btn.active{color:var(--azul);border-bottom-color:var(--azul);font-weight:600}.policy-accept-block{background:#f5f8fd;border:1px solid #dde8f5;border-radius:var(--radius);padding:12px 14px;margin-bottom:14px}.chk-label{display:flex;align-items:flex-start;gap:7px;font-size:12px;color:#666;cursor:pointer;line-height:1.5;margin-bottom:8px}.chk-label:last-child{margin-bottom:0}.chk-label input{margin-top:2px;flex-shrink:0}.pol-link{color:var(--azul);cursor:pointer;font-weight:500;text-decoration:underline;background:none;border:none;font-family:inherit;font-size:12px}.rem-item{display:flex;align-items:center;gap:10px;padding:9px 12px;border-bottom:1px solid #f0f2f5}.rem-item:last-child{border-bottom:none}.fg{margin-bottom:11px}.fl{font-size:11px;font-weight:600;color:#666;margin-bottom:3px;display:block;text-transform:uppercase;letter-spacing:.04em}@media (max-width: 768px){.sidebar{width:180px;min-width:180px}.two{grid-template-columns:1fr}.mc-grid{grid-template-columns:repeat(2,1fr)}}@media (max-width: 600px){.sidebar{display:none}.auth-card{padding:22px 20px}}#app-screen{height:100vh;overflow:hidden}
/*$vite$:1*/`,document.head.appendChild($);const z=ke.createClient("https://oukudmeqdszscesxflvl.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91a3VkbWVxZHN6c2Nlc3hmbHZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5Mjk0MzIsImV4cCI6MjA2NTUwNTQzMn0.1BMX49dLzMJEUdrbHqivt3TBFDjmW3XWPKCTNvBJPyg",{auth:{autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0}});async function ze(n,a){const{data:e,error:t}=await z.auth.signInWithPassword({email:n,password:a});if(t)throw t;const{data:i}=await z.from("usuarios").select("*").eq("id",e.user.id).single();return await z.from("usuarios").update({ultimo_acceso:new Date().toISOString()}).eq("id",e.user.id),{user:e.user,perfil:i}}async function Ee({email:n,password:a,nombre:e,empresa:t,rol:i}){const{data:o,error:r}=await z.auth.signUp({email:n,password:a,options:{data:{nombre:e,rol:i}}});if(r)throw r;return o.user&&await z.from("usuarios").update({empresa:t,acepto_pp:!0,acepto_tu:!0,fecha_acepto:new Date().toISOString().split("T")[0]}).eq("id",o.user.id),o}async function je(){await z.auth.signOut()}async function Ie(){const{data:n,error:a}=await z.from("contratos").select("*").order("created_at",{ascending:!1});if(a)throw a;return n||[]}async function we(){const{data:n,error:a}=await z.from("solicitudes").select("*").order("created_at",{ascending:!1});if(a)throw a;return n||[]}const Z={ft:`<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>CONTRATO DE ADMINISTRACIÓN DE SERVICIOS DE FRANQUICIA
TRIBUTARIA SENCE</u></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>ENTRE LA</u></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>CORPORACIÓN DE CAPACITACIÓN DE LA
CONSTRUCCIÓN</u></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>Y</u></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En Santiago de Chile, a <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>, entre la
<strong>CORPORACIÓN DE CAPACITACIÓN DE LA CONSTRUCCIÓN</strong>, RUT
70.200.800-K, en adelante el “OTIC”, representado por don José Esteban
Garay Anex-Dit-Chenaud, Cédula Nacional de Identidad N° 15.362.979-K y
por don Sergio Andrés Torretti Armendáriz, Cédula Nacional de Identidad
N° 15.378.208-3, con domicilio en Santa Beatriz 170, piso 3, comuna de
Providencia, en adelante la “Corporación” u “OTIC CChC”, por una parte,
y por la otra, <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span>, RUT: <span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> representada
por <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>, Cédula Nacional de Identidad Nº
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> y <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>,
Cédula Nacional de Identidad Nº <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>; y
todos domiciliados para estos efectos en
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>, en adelante denominada también como
<strong>“<mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark>”</strong>; y ambas en su conjunto denominadas
las “partes”, han venido en celebrar el siguiente contrato:</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>PRIMERO</u>: Antecedentes.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La Corporación de Capacitación de la Construcción, es un “Organismo
Técnico Intermedio de Capacitación”, reconocido por el Servicio Nacional
de Capacitación y Empleo, cuyo objetivo es otorgar apoyo técnico a sus
empresas adheridas, principalmente a través de la promoción,
organización y supervisión de programas de capacitación. Entendiendo por
supervisión en materia de capacitación “ejercer la inspección superior
en el trabajo realizado por las empresas adheridas”. El OTIC servirá de
nexo entre las empresas adheridas y los organismos técnicos de
capacitación (OTEC), en el marco de la normativa de capacitación.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Por su parte, <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> es
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>SEGUNDO</u>: Objeto del Contrato.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Los servicios entregados por el OTIC en el presente instrumento
están, principalmente, definidos en la Normativa Vigente: Ley 19.518,
Decreto Ley nº 98 y Decreto Ley nº 122, informativos, circulares y
Manual de Franquicia Tributaria emitido por SENCE para regular el
funcionamiento de los OTIC.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El OTIC administrará las distintas cuentas que contemple la normativa
vigente, entregará respuesta oportuna a todos los procesos operacionales
tales como, comunicación, rectificación, supervisión de cursos y
liquidación, en relación a la capacitación de los trabajadores de
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark>.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>TERCERO</u>: Declaración, Precio y Forma de
pago.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> declara ser contribuyente de la
primera categoría de la Ley sobre impuesto a la renta, D.L. N° 824, por
lo que puede acceder al beneficio establecido en el Art. 36 de la Ley N°
19.518 que fija nuevo Estatuto de Capacitación y Empleo.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Con el objeto de utilizar el beneficio antes señalado,
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> le transferirá el monto de
<strong>$<mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark>,</strong> correspondiente al 1% de la planilla
anual de remuneraciones imponibles de cada una de sus empresas, de cada
año, al OTIC. Este aporte será imputado por el OTIC al pago del costo de
los cursos de capacitación o los procesos de evaluación y certificación
de competencias laborales que hayan solicitado y el costo de
administración pactado. Con todo, los aportes deberán enterarse de forma
trimestral según lo pactado en el respectivo plan de aporte y enterarse
su totalidad antes del 30 de diciembre de cada año.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El no cumplimiento o retraso injustificado de los aportes dará
derecho y facultará al OTIC CChC a dar cumplimiento solo el servicio
base contemplado en la propuesta técnica que se anexa en el presente
contrato.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>CUARTO</u>: Obligaciones de la Empresa.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Para la entrega de los servicios comprometidos por el OTIC,
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> se compromete a proporcionar
información necesaria, correcta y oportuna. Además, se compromete a
facilitar la ayuda posible para desarrollar las actividades
comprometidas con el OTIC.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Asimismo, <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> se compromete a entregar,
oportunamente y de forma correcta la siguiente información:</p>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" type="1">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Datos para la correcta y completa inscripción de los cursos
considerando especialmente los datos correspondientes a los
participantes, según reglamentación SENCE.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Informar por escrito las rectificaciones de las acciones
comunicadas a SENCE de forma oportuna y dentro los plazos autorizados en
las reglas de negocio de SENCE.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Enterar los aportes comprometidos al OTIC dentro del año
calendario correspondientes al 1% de la planilla anual de remuneraciones
imponibles.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Entregar la declaración jurada notarial del 1% solicitada por
SENCE.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Solicitar por escrito al OTIC cualquier gestión que cambie o
afecte algún o algunos de los servicios acordados, ya sea que estén en
acuerdo o en ejecución.</p></li>
</ol>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>QUINTO</u>: Obligaciones del OTIC respecto al Servicio de
Administración de Servicios de Franquicia Tributaria SENCE.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La Corporación de Capacitación de la Construcción, acreditará el
total del aporte anual de <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>como “Gasto
Directo de Capacitación”. El máximo que la Ley establece es el
<strong>1%</strong> de la planilla anual de remuneraciones
imponibles.</p>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" type="a">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>Administración de cuentas:</strong> Los aportes enterados
por <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>, durante el primer año serán
administrados<strong>, a lo menos</strong> bajo las siguientes cuatro
cuentas o partidas independientes:</p></li>
</ol>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>Año 1</u></strong></p>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" type="1">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Cuenta de capacitación.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Cuenta de certificación de competencias laborales.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Cuenta de Reparto</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Cuenta de administración.</p></li>
</ol>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" start="2" type="a">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Los remanentes de las cuentas de capacitación, reparto y
certificación de competencias laborales que se produzcan al final del
ejercicio anual deberán ser ejecutados al año siguiente al del aporte.
Para estos efectos, a partir del segundo año, el OTIC creará las
siguientes nuevas cuentas:</p></li>
</ol>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>Año 2</u></strong></p>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" type="1">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Cuenta de Excedentes de capacitación.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Cuenta de Excedentes de certificación de competencias
laborales.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Cuenta de Excedente de Reparto</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Cuenta de Becas por mandato.</p></li>
</ol>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Si al final del 2do ejercicio anual quedan remantes en las cuentas de
excedentes, estos serán destinados al programa de Becas Laborales
Obligadas. En esta etapa la empresa no podrá definir ni destinar estos
recursos, según lo establece la normativa vigente.</p>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" start="3" type="a">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>Responsabilidades del OTIC.</strong></p></li>
</ol>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" type="1">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Otorgar apoyo técnico a sus empresas adherentes en la evaluación
y certificación de competencias laborales contratadas para sus empresas
adherentes.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Acoger las propuestas de capacitación o de evaluación y
certificación de competencias laborales de sus empresas
adherentes.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Podrá organizar y elaborar programas de aprendizaje (artículo Nº
60 de la Ley Nº 19.518) de sus empresas adherentes.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Ejecutar las funciones operacionales ante el SENCE, los OTEC y
los Centros de Evaluación y Certificación de Competencias Laborales
(CCL) comunicando, rectificando y liquidando las actividades de
capacitación o de evaluación y certificación de competencias laborales
solicitadas por las empresas adherentes.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Pagar, en forma efectiva y dentro de plazo, a los OTEC o a los
Centros de Evaluación y Certificación de Competencias Laborales, los
costos de las actividades de capacitación o de evaluación y
certificación de competencias laborales intermediadas, <strong>siempre y
cuando se cumpla con las disposiciones indicadas en el artículo</strong>
<strong>Nº 29 del Reglamento General de la Ley Nº
19.518.</strong></p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Otorgar apoyo técnico a sus empresas adheridas, principalmente a
través de la promoción, organización y supervisión de programas de
capacitación. Se debe entender por supervisión, en materia de
capacitación, <strong>“ejercer la inspección superior en el trabajo
realizado por las empresas adheridas</strong>”, lo que implica examinar
y reconocer atentamente las actividades que se ejecutan en el marco de
la Ley 19.518 por las empresas.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Dar respuesta oportuna a todos los procesos operacionales tales
como, liquidación, comunicación, rectificación, cierre, etc., que
faciliten la correcta aplicación de las disposiciones legales vigentes,
<strong>acompañando la documentación pertinente, la que deberá ser
cierta en cuanto a las declaraciones que contiene.</strong></p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Certificar a sus empresas adherentes los montos que les fueron
aportados, y obtener de parte del SENCE la certificación de los montos
susceptibles de poder ser rebajados del pago de impuestos, con cargo a
la franquicia tributaria de capacitación.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Administrar las distintas cuentas contempladas en la normativa
vigente.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Conservar originales de los Certificados de Asistencia
correspondientes a las acciones de capacitación liquidadas ante el
SENCE, como asimismo facturas, certificados, formularios, declaraciones
juradas y cualquier otro documento justificatorio de las acciones
intermediadas o que estén destinadas a complementarlas como, por
ejemplo, rendición de viáticos y traslados.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Dar estricto cumplimiento al objetivo que les señala el
<strong>artículo 23 de la Ley Nº 19.518</strong>, esto es, otorgar apoyo
técnico a sus empresas adheridas, principalmente a través de la
promoción, organización y supervisión de programas de capacitación y de
asistencia técnica para el desarrollo de recursos humanos. En ningún
caso podrán impartir ni ejecutar directamente acciones de capacitación
laboral, sino <strong>que servirán de nexo</strong> entre las empresas
afiliadas y los organismos técnicos de capacitación –OTEC o Centros de
Evaluación y Certificación de Competencias Laborales-, y entre las
empresas afiliadas y el SENCE.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Cumplir con lo señalado en el art 10 del Decreto Supremo Nº 122
de 1998, del Ministerio del Trabajo y Previsión Social en el sentido que
se consideran costos de administración los gastos que deban efectuarse,
<strong>en el contexto de una normal y eficiente
administración</strong>, tales como arriendos de oficinas,
remuneraciones del personal y en general, aquellos que sean necesarios
para su regular funcionamiento administrativo, en el marco de las
finalidades que la Ley les reconoce. En consecuencia, el concepto de
gastos se debe ajustar a los tipos aceptados por la Ley. De este modo
que <strong>aquellos gastos que no lo son</strong>, no pueden ser
considerados como tales y debieran ser reintegrados a los excedentes
para ser utilizados en becas, que es la norma general en caso de
sobrantes. Asimismo, no se podrá imputar o destinar recursos
provenientes de la cuenta de gastos de administración, a las empresas
adherentes.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>Adicionalmente</strong>, los OTIC pueden prestar los
siguientes servicios a sus empresas adherentes:</p></li>
</ol>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" type="a">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Información sobre ofertas de capacitación o de evaluación y
certificación de competencias laborales, y vigencia de los organismos y
centros respectivos.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Detección de necesidades de capacitación.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Establecer indicadores de calidad de la oferta de
capacitación.</p></li>
</ol>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" start="14" type="1">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Rectificar ante el SENCE las actividades de sus empresas que han
sufrido algún cambio durante su ejecución, de acuerdo a las reglas de
negocio establecidas en el manual de franquicia tributara
SENCE.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Anular o eliminar ante el SENCE aquellas actividades, que por
alguna razón, <strong>no se realizaron o no quedaron afectas a ser
cargadas a las cuentas de las empresas</strong>.</p></li>
</ol>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>SEXTO</u>:</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La firma del presente instrumento acreditará a la Corporación de
Capacitación de la Construcción para representar
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> ante SENCE y los OTEC en las materias
relacionadas con la administración de los recursos destinados a
capacitación.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>SÉPTIMO</u>: Nombramiento de Coordinador o Interlocutor
Válido.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> deberá nombrar un coordinador o
interlocutor válido ante la Corporación de Capacitación de la
Construcción para efectos de desarrollar las tareas operativas en la
tramitación de la Franquicia Tributaria y demás servicios acordados en
el presente instrumento. El <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> será
responsable de la información que emite de sus trabajadores, en
particular de los tramos de franquicia (Art. 37, Ley 19.518) que serán
imputados por cada uno de ellos en las acciones de capacitación que
comunique y liquide el OTIC.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>OCTAVO</u>: Vigencia y Término del Contrato</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El presente contrato, entrará en vigencia a partir del
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> y tendrá, desde su inicio, una
duración de <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark>,</strong> es decir hasta el día
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>. Dicho período de duración del
contrato, se renovará automáticamente por períodos de igual duración si
ninguna de las partes manifiesta oposición o desacuerdo a este hecho, a
través de carta certificada con al menos 30 días corridos de
anticipación a la fecha de su renovación, sin perjuicio del derecho de
cada parte de poner término al presente contrato unilateralmente y sin
derecho a indemnización para la otra, debiendo hacerlo con un aviso
escrito de a lo menos 30 días de anticipación a la fecha de término
efectivo.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En caso de término anticipado de contrato, se considerará como último
aporte 1% el correspondiente al mes durante el cual se pone término al
contrato vigente, siempre y cuando no hayan cursos que estén por
liquidarse o ejecutarse, casos en los cuales, estos se deberán ser
cubiertos con un nuevo aporte adicional. En relación a dichos aportes,
el OTIC mantendrá sus responsabilidades descritas en la cláusula QUINTO
letra c).</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>NOVENO:</u> Confidencialidad.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Toda información que las partes adquieran mutuamente con motivo de la
ejecución del presente contrato, deberá ser tratada en forma
confidencial, quedándole estrictamente prohibido la promulgación o
utilización de tal información o conocimiento en cualquier otra
actividad que desarrolle o pueda llegar a desarrollar. La obligación de
confidencialidad y reserva de dicha información continuara aún luego de
la rescisión o vencimiento del presente contrato y alcanzará también a
sus respectivos representantes, funcionarios, empleados o similares que
pudieran tener acceso a la información.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El OTIC de la CChC se compromete a mantener los sistemas y
procedimientos necesarios para resguardar la información proveniente
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>, especialmente de sus planes y
programas de Capacitación, datos de sus funcionarios, tipo de
capacitación, cursos, estadísticas y todos aquellos movimientos que La
Empresa realice a través del OTIC.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La contravención, a lo indicado en esta cláusula dará a las partes
acción inmediata para poner término de ipso facto al presente contrato,
sin perjuicio de las demás sanciones civiles y penales que fueran
procedentes en conformidad a la ley.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO</u>: Protección de Datos Personales.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Las partes acuerdan que el OTIC dará tratamiento a los datos
personales de los trabajadores de <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">(en adelante, los “Titulares”) para la coordinación de las
capacitaciones con franquicia SENCE objeto de este Contrato. En relación
con dicho tratamiento, <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> le transferirá
al OTIC los datos personales requeridos, respecto de los cuales el OTIC
será considerado como encargado del tratamiento de datos, debiendo
cumplir con todas las obligaciones que le competen en tal carácter, de
acuerdo a la normativa de Protección de Datos aplicable.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En tal sentido, el OTIC se obliga a tratar los datos personales
transferidos por <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> para la exclusiva
finalidad de cumplir con las responsabilidades señaladas en la cláusula
QUINTO letra c), guardando absoluta confidencialidad de la información
asociada a los Titulares. Asimismo, en su rol de encargado, no podrá
procesar los datos para contactar en forma directa a los Titulares, y
sólo podrá transferir estos datos a la OTEC correspondiente, bajo las
mismas condiciones señaladas en esta cláusula. Además, el OTIC deberá
poner en práctica las medidas técnicas y organizativas que resulten
necesarias para proteger los Datos Personales contra su destrucción
accidental o ilícita, su pérdida o alteraciones accidentales, o su
divulgación o acceso no autorizados, y que garanticen el nivel de
seguridad apropiado a los riesgos que entraña el tratamiento y a la
naturaleza de los datos que han de protegerse.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Si un Titular ejerciera los derechos asociados a sus datos que
establece la ley, esta solicitud será derivada a
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>, dentro de dos días hábiles contados
desde su recepción.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En caso de cualquier incumplimiento del OTIC como encargado de datos,
respecto a las obligaciones establecidas en esta cláusula, el OTIC se
hará responsable de toda reclamación, denuncia o sanción derivada
directamente de dicho incumplimiento, por lo que el OTIC deberá
indemnizar a la Empresa de cualquier monto que este último tenga que
pagar por estos conceptos. Además, el OTIC deberá cubrir los gastos de
representación legal en los que incurra el Cliente para atender los
juicios o procedimientos administrativos que deriven de este tipo de
incumplimientos.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO PRIMERO</u>: Modificaciones del
Contrato.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Cualquier modificación al presente contrato, ya sea en todo o parte
cualquiera de las cláusulas, deberá hacerse de mutuo acuerdo entre las
partes, suscribiendo un addendum en el cual se establezcan los cambios
acordados.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO SEGUNDO</u>: Tasa de Administración.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Según lo establecido en la Ley 19.518 y el Decreto Supremo N° 122, el
OTIC deducirá de los aportes enterados por
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> la tasa de administración del
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark>%</strong> que se aplicará sobre el total de los
aportes realizados.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La tasa de administración contempla los servicios comprometidos por
el OTIC, establecidos en la Propuesta Técnica.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO TERCERO</u>:</strong> <strong>Anexos del
contrato.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Forman parte integrante e inseparable del presente contrato, para
todos los efectos legales a que haya lugar, los siguientes anexos:</p>
<ul style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>Anexo 1</u>:</strong> Propuesta Técnica OTIC
Corporación de Capacitación de la Construcción.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>Anexo 2</u>:</strong> Formulario(s) de Tasa de
Administración.</p></li>
</ul>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO CUARTO</u>: Cumplimiento de Normativa y Prevención
de Delitos.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Con ocasión de la entrada en vigencia de la Ley N.° 20.393, se ha
establecido la responsabilidad penal de las personas jurídicas en los
delitos de Lavado de Activos, Financiamiento del Terrorismo, Cohecho
Funcionario Público Nacional o Extranjero, Receptación, Negociación
Incompatible, Corrupción entre Particulares, Apropiación Indebida,
Administración Desleal, Contaminación de Aguas, Procesamiento de
Productos Marinos Vedados, Actividades Extractivas Ilegales,
Sobreexplotación de recursos hidrobiológicos, Infracción de medidas de
cuarentena o aislamiento decretadas por autoridad sanitaria, obtención
fraudulenta del subsidio de desempleo, infracción de normas de
extranjería, control de armas, explosivos y sustancias químicas, robo,
hurto o posesión ilegal de madera, delitos informáticos, uso no
autorizado del secreto profesional, violación del secreto comercial,
delitos medioambientales, delitos informáticos, fraude de remuneración y
los demás que se incorporen a futuro para el adecuado cumplimiento de la
ley y normativa aplicable a esta materia, los que se entenderán
incorporados a la presente clausula.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Para dar cumplimiento a lo establecido en dicha ley, las partes han
implementado un Modelo de Prevención de Delitos, a través del cual
promoverá la prevención de la comisión de los delitos sancionados.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Las partes declaran recíprocamente que, a la fecha actual, han dado
estricto cumplimiento a las normas de la Ley N° 20.393 sobre
responsabilidad penal de las personas jurídicas en los delitos que, que
no ha sido condenadas por tales delitos con anterioridad y que sus
representantes legales no han sido citados de acuerdo con lo señalado en
el artículo 22 de la Ley, comprometiéndose por el presente instrumento a
mantener tal cumplimiento durante toda la vigencia del contrato,
obligándose, asimismo, a no incurrir o desarrollar, en caso alguno, a
través de cualquiera de sus dueños, directores, administradores,
representantes, agentes o dependientes en general, ningún tipo de
actividad o conducta que pudiera afectar el cumplimiento de tales
normas.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Las partes tienen recíprocamente la obligación de denunciar e
informar, tan pronto como llegue a su conocimiento, al Encargado de
Prevención de Delitos correspondiente mediante canal de denuncias
establecido para estos efectosla ocurrencia de cualquier hecho o hechos,
que pudieren llegar constituir uno de los delitos mencionados en esta
cláusula o de cualquier hecho que pudiere conllevar la responsabilidad
penal de cualquiera de las partes o afectar su imagen.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Las partes declaran que, en el desarrollo del presente contrato y en
la ejecución de todos los servicios objeto del mismo, se obligan: (i) a
cumplir con todas las leyes y regulaciones aplicables al trabajo,
servicio, producto o equipo a entregar o a cualquiera otra prestación a
realizar en virtud de este contrato; (ii) a no cometer actos que puedan
ser constitutivos de delitos, y en especial a no cometer los delitos
de Lavado de Activos, Financiamiento del Terrorismo, Cohecho Funcionario
Público Nacional o Extranjero, Receptación, Negociación Incompatible,
Corrupción entre Particulares, Apropiación Indebida, Administración
Desleal, Contaminación de Aguas, Procesamiento de Productos Marinos
Vedados, Actividades Extractivas Ilegales, Sobreexplotación de recursos
hidrobiológicos, Infracción de medidas de cuarentena o aislamiento
decretadas por autoridad sanitaria, obtención fraudulenta del subsidio
de desempleo, infracción de normas de extranjería, control de armas,
explosivos y sustancias químicas, robo, hurto o posesión ilegal de
madera, delitos informáticos, uso no autorizado del secreto profesional,
violación del secreto comercial, delitos medioambientales, delitos
informáticos, fraude de remuneración, y los demás que en el futuro se
incorporen a la Ley 20.393 y por tanto a la presente cláusula, sobre
Responsabilidad Penal de las Personas Jurídicas, y a cumplir
debidamente, cada una de ellas, con su deber de dirección y
supervigilancia, adoptando e implementando un modelo de prevención de
delitos de acuerdo a lo establecido en dicha ley o, al menos, los
controles suficientes y eficaces para prevenir, evitar y detectar la
comisión de los referidos delitos por parte de sus trabajadores y
dependientes; y (iii) a informar, tan pronto como llegue a su
conocimiento, la ocurrencia de hechos que pudieren constituir uno de los
delitos mencionados en esta cláusula o de cualquier hecho que pudiere
conllevar la responsabilidad penal de cualquiera de las partes o afectar
su imagen.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Las partes, dejan expresa constancia que las obligaciones impuestas
en esta cláusula han sido una consideración esencial para celebrar el
presente contrato, por lo que se reservan el derecho a poner término
unilateral al mismo, en caso de cualquier incumplimiento de dichas
obligaciones, sin necesidad de juicio y mediante el solo envío de una
carta en tal sentido, sin perjuicio del derecho que las partes tienen de
demandar los perjuicios que dicho incumplimiento le cause.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO QUINTO</u>: Domicilio y Resolución de
Conflictos</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Para todos los efectos legales derivados de este contrato, sus anexos
y eventuales complementos las partes fijan domicilio en la ciudad de
Santiago y se someten a la jurisdicción y competencia de sus tribunales
ordinarios de justicia.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO SEXTO</u>:</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La personería de <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> y de
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>, para representar a la
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark>,</strong> consta de escritura pública de fecha
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>, otorgada en
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La personería de don José Esteban Garay Anex-Dit-Chenaud y don Sergio
Andrés Torretti Armendáriz para representar a la Corporación de
Capacitación de la Construcción consta de escritura pública de fecha 24
de abril de 2023, otorgada en la Notaría de Santiago de don Félix Jara
Cadot.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El presente instrumento se firma en TRES ejemplares, quedando uno de
ellos en poder de cada empresa integrante de
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> y el otro en poder de la CORPORACIÓN
DE LA CAPACITACIÓN DE LA CONSTRUCCIÓN.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:11px">
<colgroup>
<col style="width: 44%" />
<col style="width: 4%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left">José Esteban Garay Anex-Dit-Chenaud</th>
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left"></th>
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left">Sergio Andrés Torretti Armendáriz</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="padding:4px 8px;border:1px solid #dde8f5">Representante Legal</td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5">Representante Legal</td>
</tr>
<tr class="even">
<td style="padding:4px 8px;border:1px solid #dde8f5"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">CORPORACIÓN DE CAPACITACIÓN</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">DE LA CONSTRUCCIÓN</p></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">CORPORACIÓN DE CAPACITACIÓN</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">DE LA CONSTRUCCIÓN.</p></td>
</tr>
</tbody>
</table>
<table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:11px">
<colgroup>
<col style="width: 42%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 43%" />
<col style="width: 4%" />
</colgroup>
<thead>
<tr class="header">
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left"><strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong></th>
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left"></th>
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left"></th>
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left"><strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong></th>
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left"></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="padding:4px 8px;border:1px solid #dde8f5">Representante Legal</td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5">Representante Legal</td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
</tr>
<tr class="even">
<td style="padding:4px 8px;border:1px solid #dde8f5"><strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"><strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
</tr>
</tbody>
</table>
`,edc:`<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>CONTRATO DE ADMINISTRACIÓN DE SERVICIOS DE FRANQUICIA
TRIBUTARIA SENCE</u></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>ENTRE LA</u></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>CORPORACIÓN DE CAPACITACIÓN DE LA
CONSTRUCCIÓN</u></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>Y</u></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En Santiago de Chile, a <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>, entre la
<strong>CORPORACIÓN DE CAPACITACIÓN DE LA CONSTRUCCIÓN</strong>, RUT
70.200.800-K, en adelante el “OTIC”, representado por don José Esteban
Garay Anex-Dit-Chenaud, Cédula Nacional de Identidad N° 15.362.979-K y
por don Sergio Andrés Torretti Armendáriz, Cédula Nacional de Identidad
N° 15.378.208-3, con domicilio en Santa Beatriz 170, piso 3, comuna de
Providencia, en adelante la “Corporación” u “OTIC CChC”, por una parte,
y por la otra, <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span>, RUT: <span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> representada
por <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>, Cédula Nacional de Identidad Nº
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> y <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>,
Cédula Nacional de Identidad Nº <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>; y
todos domiciliados para estos efectos en
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>, en adelante denominada también como
<strong>“<mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark>”</strong>; y ambas en su conjunto denominadas
las “partes”, han venido en celebrar el siguiente contrato:</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>PRIMERO</u>: Antecedentes.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La Corporación de Capacitación de la Construcción, es un “Organismo
Técnico Intermedio de Capacitación”, reconocido por el Servicio Nacional
de Capacitación y Empleo, cuyo objetivo es otorgar apoyo técnico a sus
empresas adheridas, principalmente a través de la promoción,
organización y supervisión de programas de capacitación. Entendiendo por
supervisión en materia de capacitación “ejercer la inspección superior
en el trabajo realizado por las empresas adheridas”. El OTIC servirá de
nexo entre las empresas adheridas y los organismos técnicos de
capacitación (OTEC), en el marco de la normativa de capacitación.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Por su parte, <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> es
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>SEGUNDO</u>: Objeto del Contrato.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Los servicios entregados por el OTIC en el presente instrumento
están, principalmente, definidos en la Normativa Vigente: Ley 19.518,
Decreto Ley nº 98 y Decreto Ley nº 122, informativos, circulares y
Manual de Franquicia Tributaria emitido por SENCE para regular el
funcionamiento de los OTIC.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El OTIC administrará las distintas cuentas que contemple la normativa
vigente, entregará respuesta oportuna a todos los procesos operacionales
tales como, comunicación, rectificación, supervisión de cursos y
liquidación, en relación a la capacitación de los trabajadores de
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark>.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>TERCERO</u>: Declaración, Precio y Forma de
pago.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> declara ser contribuyente de la
primera categoría de la Ley sobre impuesto a la renta, D.L. N° 824, por
lo que puede acceder al beneficio establecido en el Art. 36 de la Ley N°
19.518 que fija nuevo Estatuto de Capacitación y Empleo.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Con el objeto de utilizar el beneficio antes señalado,
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> le transferirá el monto de
<strong>$<mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark>,</strong> correspondiente al 1% de la planilla
anual de remuneraciones imponibles de cada una de sus empresas, de cada
año, al OTIC. Este aporte será imputado por el OTIC al pago del costo de
los cursos de capacitación o los procesos de evaluación y certificación
de competencias laborales que hayan solicitado y el costo de
administración pactado. Con todo, los aportes deberán enterarse de forma
trimestral según lo pactado en el respectivo plan de aporte y enterarse
su totalidad antes del 30 de diciembre de cada año.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El no cumplimiento o retraso injustificado de los aportes dará
derecho y facultará al OTIC CChC a dar cumplimiento solo el servicio
base contemplado en la propuesta técnica que se anexa en el presente
contrato.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>CUARTO</u>: Obligaciones de la Empresa.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Para la entrega de los servicios comprometidos por el OTIC,
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> se compromete a proporcionar
información necesaria, correcta y oportuna. Además, se compromete a
facilitar la ayuda posible para desarrollar las actividades
comprometidas con el OTIC.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Asimismo, <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> se compromete a entregar,
oportunamente y de forma correcta la siguiente información:</p>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" type="1">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Datos para la correcta y completa inscripción de los cursos
considerando especialmente los datos correspondientes a los
participantes, según reglamentación SENCE.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Informar por escrito las rectificaciones de las acciones
comunicadas a SENCE de forma oportuna y dentro los plazos autorizados en
las reglas de negocio de SENCE.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Enterar los aportes comprometidos al OTIC dentro del año
calendario correspondientes al 1% de la planilla anual de remuneraciones
imponibles.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Entregar la declaración jurada notarial del 1% solicitada por
SENCE.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Solicitar por escrito al OTIC cualquier gestión que cambie o
afecte algún o algunos de los servicios acordados, ya sea que estén en
acuerdo o en ejecución.</p></li>
</ol>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>QUINTO</u>: Obligaciones del OTIC respecto al Servicio de
Administración de Servicios de Franquicia Tributaria SENCE.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La Corporación de Capacitación de la Construcción, acreditará el
total del aporte anual de <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>como “Gasto
Directo de Capacitación”. El máximo que la Ley establece es el
<strong>1%</strong> de la planilla anual de remuneraciones
imponibles.</p>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" type="a">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>Administración de cuentas:</strong> Los aportes enterados
por <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>, durante el primer año serán
administrados<strong>, a lo menos</strong> bajo las siguientes cuatro
cuentas o partidas independientes:</p></li>
</ol>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>Año 1</u></strong></p>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" type="1">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Cuenta de capacitación.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Cuenta de certificación de competencias laborales.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Cuenta de Reparto</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Cuenta de administración.</p></li>
</ol>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" start="2" type="a">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Los remanentes de las cuentas de capacitación, reparto y
certificación de competencias laborales que se produzcan al final del
ejercicio anual deberán ser ejecutados al año siguiente al del aporte.
Para estos efectos, a partir del segundo año, el OTIC creará las
siguientes nuevas cuentas:</p></li>
</ol>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>Año 2</u></strong></p>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" type="1">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Cuenta de Excedentes de capacitación.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Cuenta de Excedentes de certificación de competencias
laborales.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Cuenta de Excedente de Reparto</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Cuenta de Becas por mandato.</p></li>
</ol>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Si al final del 2do ejercicio anual quedan remantes en las cuentas de
excedentes, estos serán destinados al programa de Becas Laborales
Obligadas. En esta etapa la empresa no podrá definir ni destinar estos
recursos, según lo establece la normativa vigente.</p>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" start="3" type="a">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>Responsabilidades del OTIC.</strong></p></li>
</ol>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" type="1">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Otorgar apoyo técnico a sus empresas adherentes en la evaluación
y certificación de competencias laborales contratadas para sus empresas
adherentes.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Acoger las propuestas de capacitación o de evaluación y
certificación de competencias laborales de sus empresas
adherentes.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Podrá organizar y elaborar programas de aprendizaje (artículo Nº
60 de la Ley Nº 19.518) de sus empresas adherentes.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Ejecutar las funciones operacionales ante el SENCE, los OTEC y
los Centros de Evaluación y Certificación de Competencias Laborales
(CCL) comunicando, rectificando y liquidando las actividades de
capacitación o de evaluación y certificación de competencias laborales
solicitadas por las empresas adherentes.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Pagar, en forma efectiva y dentro de plazo, a los OTEC o a los
Centros de Evaluación y Certificación de Competencias Laborales, los
costos de las actividades de capacitación o de evaluación y
certificación de competencias laborales intermediadas, <strong>siempre y
cuando se cumpla con las disposiciones indicadas en el artículo</strong>
<strong>Nº 29 del Reglamento General de la Ley Nº
19.518.</strong></p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Otorgar apoyo técnico a sus empresas adheridas, principalmente a
través de la promoción, organización y supervisión de programas de
capacitación. Se debe entender por supervisión, en materia de
capacitación, <strong>“ejercer la inspección superior en el trabajo
realizado por las empresas adheridas</strong>”, lo que implica examinar
y reconocer atentamente las actividades que se ejecutan en el marco de
la Ley 19.518 por las empresas.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Dar respuesta oportuna a todos los procesos operacionales tales
como, liquidación, comunicación, rectificación, cierre, etc., que
faciliten la correcta aplicación de las disposiciones legales vigentes,
<strong>acompañando la documentación pertinente, la que deberá ser
cierta en cuanto a las declaraciones que contiene.</strong></p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Certificar a sus empresas adherentes los montos que les fueron
aportados, y obtener de parte del SENCE la certificación de los montos
susceptibles de poder ser rebajados del pago de impuestos, con cargo a
la franquicia tributaria de capacitación.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Administrar las distintas cuentas contempladas en la normativa
vigente.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Conservar originales de los Certificados de Asistencia
correspondientes a las acciones de capacitación liquidadas ante el
SENCE, como asimismo facturas, certificados, formularios, declaraciones
juradas y cualquier otro documento justificatorio de las acciones
intermediadas o que estén destinadas a complementarlas como, por
ejemplo, rendición de viáticos y traslados.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Dar estricto cumplimiento al objetivo que les señala el
<strong>artículo 23 de la Ley Nº 19.518</strong>, esto es, otorgar apoyo
técnico a sus empresas adheridas, principalmente a través de la
promoción, organización y supervisión de programas de capacitación y de
asistencia técnica para el desarrollo de recursos humanos. En ningún
caso podrán impartir ni ejecutar directamente acciones de capacitación
laboral, sino <strong>que servirán de nexo</strong> entre las empresas
afiliadas y los organismos técnicos de capacitación –OTEC o Centros de
Evaluación y Certificación de Competencias Laborales-, y entre las
empresas afiliadas y el SENCE.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Cumplir con lo señalado en el art 10 del Decreto Supremo Nº 122
de 1998, del Ministerio del Trabajo y Previsión Social en el sentido que
se consideran costos de administración los gastos que deban efectuarse,
<strong>en el contexto de una normal y eficiente
administración</strong>, tales como arriendos de oficinas,
remuneraciones del personal y en general, aquellos que sean necesarios
para su regular funcionamiento administrativo, en el marco de las
finalidades que la Ley les reconoce. En consecuencia, el concepto de
gastos se debe ajustar a los tipos aceptados por la Ley. De este modo
que <strong>aquellos gastos que no lo son</strong>, no pueden ser
considerados como tales y debieran ser reintegrados a los excedentes
para ser utilizados en becas, que es la norma general en caso de
sobrantes. Asimismo, no se podrá imputar o destinar recursos
provenientes de la cuenta de gastos de administración, a las empresas
adherentes.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>Adicionalmente</strong>, los OTIC pueden prestar los
siguientes servicios a sus empresas adherentes:</p></li>
</ol>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" type="a">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Información sobre ofertas de capacitación o de evaluación y
certificación de competencias laborales, y vigencia de los organismos y
centros respectivos.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Detección de necesidades de capacitación.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Establecer indicadores de calidad de la oferta de
capacitación.</p></li>
</ol>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" start="14" type="1">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Rectificar ante el SENCE las actividades de sus empresas que han
sufrido algún cambio durante su ejecución, de acuerdo a las reglas de
negocio establecidas en el manual de franquicia tributara
SENCE.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Anular o eliminar ante el SENCE aquellas actividades, que por
alguna razón, <strong>no se realizaron o no quedaron afectas a ser
cargadas a las cuentas de las empresas</strong>.</p></li>
</ol>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>SEXTO</u>:</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La firma del presente instrumento acreditará a la Corporación de
Capacitación de la Construcción para representar
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> ante SENCE y los OTEC en las materias
relacionadas con la administración de los recursos destinados a
capacitación.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>SÉPTIMO</u>: Nombramiento de Coordinador o Interlocutor
Válido.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> deberá nombrar un coordinador o
interlocutor válido ante la Corporación de Capacitación de la
Construcción para efectos de desarrollar las tareas operativas en la
tramitación de la Franquicia Tributaria y demás servicios acordados en
el presente instrumento. El <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> será
responsable de la información que emite de sus trabajadores, en
particular de los tramos de franquicia (Art. 37, Ley 19.518) que serán
imputados por cada uno de ellos en las acciones de capacitación que
comunique y liquide el OTIC.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>OCTAVO</u>: Ejecutivo Dedicado Capacitación
(EDC).</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El OTIC pondrá a disposición de la empresa
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> ejecutivo dedicado de capacitación
(<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>), para que desarrollen las funciones
que tengan estricta relación con los servicios que el OTIC entrega y que
establece la normativa vigente, al amparo del Dictamen N ° 17.052 de la
Contraloría General de la Republica, Ley 19.518 y del Decreto 122.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Conforme a las políticas de seguridad de la Información del OTIC
CChC, los notebook(s), laptop(s) y equipos de propiedad del OTIC CChC
que sean utilizados por el personal de dedicación exclusiva en las
dependencias <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> deberán siempre mantener
los resguardos de seguridad de la información configurada por la
Corporación de Capacitación de la Construcción, quedando prohibido a
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> el bloqueo o eliminación de la Cuenta
de Administrador Local de OTIC CChC; el bloqueo, eliminación o
encriptación  de los HDD (Hard Drive Disk); y debiéndose  mantener
activas las licencias de Office 365 y sus aplicativos configuradas
dentro de los equipos, en especial Outlook y OneDrive que constituyen
las herramientas principales del respaldo corporativo.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>NOVENO</u>: Vigencia y Término del Contrato</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El presente contrato, entrará en vigencia a partir del
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> y tendrá, desde su inicio, una
duración de <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark>,</strong> es decir hasta el día
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>. Dicho período de duración del
contrato, se renovará automáticamente por períodos de igual duración si
ninguna de las partes manifiesta oposición o desacuerdo a este hecho, a
través de carta certificada con al menos 30 días corridos de
anticipación a la fecha de su renovación, sin perjuicio del derecho de
cada parte de poner término al presente contrato unilateralmente y sin
derecho a indemnización para la otra, debiendo hacerlo con un aviso
escrito de a lo menos 30 días de anticipación a la fecha de término
efectivo.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En caso de término anticipado de contrato, se considerará como último
aporte 1% el correspondiente al mes durante el cual se pone término al
contrato vigente, siempre y cuando no hayan cursos que estén por
liquidarse o ejecutarse, casos en los cuales, estos se deberán ser
cubiertos con un nuevo aporte adicional. En relación a dichos aportes,
el OTIC mantendrá sus responsabilidades descritas en la cláusula QUINTO
letra c).</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO:</u> Confidencialidad.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Toda información que las partes adquieran mutuamente con motivo de la
ejecución del presente contrato, deberá ser tratada en forma
confidencial, quedándole estrictamente prohibido la promulgación o
utilización de tal información o conocimiento en cualquier otra
actividad que desarrolle o pueda llegar a desarrollar. La obligación de
confidencialidad y reserva de dicha información continuara aún luego de
la rescisión o vencimiento del presente contrato y alcanzará también a
sus respectivos representantes, funcionarios, empleados o similares que
pudieran tener acceso a la información.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El OTIC de la CChC se compromete a mantener los sistemas y
procedimientos necesarios para resguardar la información proveniente
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>, especialmente de sus planes y
programas de Capacitación, datos de sus funcionarios, tipo de
capacitación, cursos, estadísticas y todos aquellos movimientos que La
Empresa realice a través del OTIC.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La contravención, a lo indicado en esta cláusula dará a las partes
acción inmediata para poner término de ipso facto al presente contrato,
sin perjuicio de las demás sanciones civiles y penales que fueran
procedentes en conformidad a la ley.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO PRIMERO</u>: Protección de Datos.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Las partes acuerdan que el OTIC dará tratamiento a los datos
personales de los trabajadores de <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>(en
adelante, los “Titulares”) para la coordinación de las capacitaciones
con franquicia SENCE objeto de este Contrato. En relación con dicho
tratamiento, <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> le transferirá al OTIC
los datos personales requeridos, respecto de los cuales el OTIC será
considerado como encargado del tratamiento de datos, debiendo cumplir
con todas las obligaciones que le competen en tal carácter, de acuerdo a
la normativa de Protección de Datos aplicable.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En tal sentido, el OTIC se obliga a tratar los datos personales
transferidos por <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> para la exclusiva
finalidad de cumplir con las responsabilidades señaladas en la cláusula
QUINTO letra c), guardando absoluta confidencialidad de la información
asociada a los Titulares. Asimismo, en su rol de encargado, no podrá
procesar los datos para contactar en forma directa a los Titulares, y
sólo podrá transferir estos datos a la OTEC correspondiente, bajo las
mismas condiciones señaladas en esta cláusula. Además, el OTIC deberá
poner en práctica las medidas técnicas y organizativas que resulten
necesarias para proteger los Datos Personales contra su destrucción
accidental o ilícita, su pérdida o alteraciones accidentales, o su
divulgación o acceso no autorizados, y que garanticen el nivel de
seguridad apropiado a los riesgos que entraña el tratamiento y a la
naturaleza de los datos que han de protegerse.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Si un Titular ejerciera los derechos asociados a sus datos que
establece la ley, esta solicitud será derivada a
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>, dentro de dos días hábiles contados
desde su recepción.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En caso de cualquier incumplimiento del OTIC como encargado de datos,
respecto a las obligaciones establecidas en esta cláusula, el OTIC se
hará responsable de toda reclamación, denuncia o sanción derivada
directamente de dicho incumplimiento, por lo que el OTIC deberá
indemnizar a la Empresa de cualquier monto que este último tenga que
pagar por estos conceptos. Además, el OTIC deberá cubrir los gastos de
representación legal en los que incurra el Cliente para atender los
juicios o procedimientos administrativos que deriven de este tipo de
incumplimientos.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO SEGUNDO</u>: Modificaciones del
Contrato.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Cualquier modificación al presente contrato, ya sea en todo o parte
cualquiera de las cláusulas, deberá hacerse de mutuo acuerdo entre las
partes, suscribiendo un addendum en el cual se establezcan los cambios
acordados.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO TERCERO</u>: Tasa de Administración.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Según lo establecido en la Ley 19.518 y el Decreto Supremo N° 122, el
OTIC deducirá de los aportes enterados por
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> la tasa de administración del
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark>%</strong> que se aplicará sobre el total de los
aportes realizados.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La tasa de administración contempla los servicios comprometidos por
el OTIC, establecidos en la Propuesta Técnica.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMOCUARTO</u>:</strong> <strong>Anexos del
contrato.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Forman parte integrante e inseparable del presente contrato, para
todos los efectos legales a que haya lugar, los siguientes anexos:</p>
<ul style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>Anexo 1</u>:</strong> Propuesta Técnica OTIC
Corporación de Capacitación de la Construcción.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>Anexo 2</u>:</strong> Formulario(s) de Tasa de
Administración.</p></li>
</ul>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO QUINTO</u>: Cumplimiento de Normativa y Prevención
de Delitos.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Con ocasión de la entrada en vigencia de la Ley N.° 20.393, se ha
establecido la responsabilidad penal de las personas jurídicas en los
delitos de Lavado de Activos, Financiamiento del Terrorismo, Cohecho
Funcionario Público Nacional o Extranjero, Receptación, Negociación
Incompatible, Corrupción entre Particulares, Apropiación Indebida,
Administración Desleal, Contaminación de Aguas, Procesamiento de
Productos Marinos Vedados, Actividades Extractivas Ilegales,
Sobreexplotación de recursos hidrobiológicos, Infracción de medidas de
cuarentena o aislamiento decretadas por autoridad sanitaria, obtención
fraudulenta del subsidio de desempleo, infracción de normas de
extranjería, control de armas, explosivos y sustancias químicas, robo,
hurto o posesión ilegal de madera, delitos informáticos, uso no
autorizado del secreto profesional, violación del secreto comercial,
delitos medioambientales, delitos informáticos, fraude de remuneración y
los demás que se incorporen a futuro para el adecuado cumplimiento de la
ley y normativa aplicable a esta materia, los que se entenderán
incorporados a la presente clausula.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Para dar cumplimiento a lo establecido en dicha ley, las partes han
implementado un Modelo de Prevención de Delitos, a través del cual
promoverá la prevención de la comisión de los delitos sancionados.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Las partes declaran recíprocamente que, a la fecha actual, han dado
estricto cumplimiento a las normas de la Ley N° 20.393 sobre
responsabilidad penal de las personas jurídicas en los delitos que, que
no ha sido condenadas por tales delitos con anterioridad y que sus
representantes legales no han sido citados de acuerdo con lo señalado en
el artículo 22 de la Ley, comprometiéndose por el presente instrumento a
mantener tal cumplimiento durante toda la vigencia del contrato,
obligándose, asimismo, a no incurrir o desarrollar, en caso alguno, a
través de cualquiera de sus dueños, directores, administradores,
representantes, agentes o dependientes en general, ningún tipo de
actividad o conducta que pudiera afectar el cumplimiento de tales
normas.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Las partes tienen recíprocamente la obligación de denunciar e
informar, tan pronto como llegue a su conocimiento, al Encargado de
Prevención de Delitos correspondiente mediante canal de denuncias
establecido para estos efectosla ocurrencia de cualquier hecho o hechos,
que pudieren llegar constituir uno de los delitos mencionados en esta
cláusula o de cualquier hecho que pudiere conllevar la responsabilidad
penal de cualquiera de las partes o afectar su imagen.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Las partes declaran que, en el desarrollo del presente contrato y en
la ejecución de todos los servicios objeto del mismo, se obligan: (i) a
cumplir con todas las leyes y regulaciones aplicables al trabajo,
servicio, producto o equipo a entregar o a cualquiera otra prestación a
realizar en virtud de este contrato; (ii) a no cometer actos que puedan
ser constitutivos de delitos, y en especial a no cometer los delitos
de Lavado de Activos, Financiamiento del Terrorismo, Cohecho Funcionario
Público Nacional o Extranjero, Receptación, Negociación Incompatible,
Corrupción entre Particulares, Apropiación Indebida, Administración
Desleal, Contaminación de Aguas, Procesamiento de Productos Marinos
Vedados, Actividades Extractivas Ilegales, Sobreexplotación de recursos
hidrobiológicos, Infracción de medidas de cuarentena o aislamiento
decretadas por autoridad sanitaria, obtención fraudulenta del subsidio
de desempleo, infracción de normas de extranjería, control de armas,
explosivos y sustancias químicas, robo, hurto o posesión ilegal de
madera, delitos informáticos, uso no autorizado del secreto profesional,
violación del secreto comercial, delitos medioambientales, delitos
informáticos, fraude de remuneración, y los demás que en el futuro se
incorporen a la Ley 20.393 y por tanto a la presente cláusula, sobre
Responsabilidad Penal de las Personas Jurídicas, y a cumplir
debidamente, cada una de ellas, con su deber de dirección y
supervigilancia, adoptando e implementando un modelo de prevención de
delitos de acuerdo a lo establecido en dicha ley o, al menos, los
controles suficientes y eficaces para prevenir, evitar y detectar la
comisión de los referidos delitos por parte de sus trabajadores y
dependientes; y (iii) a informar, tan pronto como llegue a su
conocimiento, la ocurrencia de hechos que pudieren constituir uno de los
delitos mencionados en esta cláusula o de cualquier hecho que pudiere
conllevar la responsabilidad penal de cualquiera de las partes o afectar
su imagen.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Las partes, dejan expresa constancia que las obligaciones impuestas
en esta cláusula han sido una consideración esencial para celebrar el
presente contrato, por lo que se reservan el derecho a poner término
unilateral al mismo, en caso de cualquier incumplimiento de dichas
obligaciones, sin necesidad de juicio y mediante el solo envío de una
carta en tal sentido, sin perjuicio del derecho que las partes tienen de
demandar los perjuicios que dicho incumplimiento le cause.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO SEXTO</u>: Domicilio y Resolución de
Conflictos</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Para todos los efectos legales derivados de este contrato, sus anexos
y eventuales complementos las partes fijan domicilio en la ciudad de
Santiago y se someten a la jurisdicción y competencia de sus tribunales
ordinarios de justicia.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO SEPTIMO</u>:</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La personería de <strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> y de
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>, para representar a la
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark>,</strong> consta de escritura pública de fecha
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>, otorgada en
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong>.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La personería de don José Esteban Garay Anex-Dit-Chenaud y don Sergio
Andrés Torretti Armendáriz para representar a la Corporación de
Capacitación de la Construcción consta de escritura pública de fecha 24
de abril de 2023, otorgada en la Notaría de Santiago de don Félix Jara
Cadot.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El presente instrumento se firma en TRES ejemplares, quedando uno de
ellos en poder de cada empresa integrante de
<strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong> y el otro en poder de la CORPORACIÓN
DE LA CAPACITACIÓN DE LA CONSTRUCCIÓN.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:11px">
<colgroup>
<col style="width: 44%" />
<col style="width: 4%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left">José Esteban Garay Anex-Dit-Chenaud</th>
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left"></th>
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left">Sergio Andrés Torretti Armendáriz</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="padding:4px 8px;border:1px solid #dde8f5">Representante Legal</td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5">Representante Legal</td>
</tr>
<tr class="even">
<td style="padding:4px 8px;border:1px solid #dde8f5"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">CORPORACIÓN DE CAPACITACIÓN</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">DE LA CONSTRUCCIÓN</p></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">CORPORACIÓN DE CAPACITACIÓN</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">DE LA CONSTRUCCIÓN.</p></td>
</tr>
</tbody>
</table>
<table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:11px">
<colgroup>
<col style="width: 42%" />
<col style="width: 4%" />
<col style="width: 4%" />
<col style="width: 43%" />
<col style="width: 4%" />
</colgroup>
<thead>
<tr class="header">
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left"><strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong></th>
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left"></th>
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left"></th>
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left"><strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong></th>
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left"></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="padding:4px 8px;border:1px solid #dde8f5">Representante Legal</td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5">Representante Legal</td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
</tr>
<tr class="even">
<td style="padding:4px 8px;border:1px solid #dde8f5"><strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"><strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></strong></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
</tr>
</tbody>
</table>
`,add_ce:`<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><img src="media/image1.jpg" style="width:8.55463in;height:7.26944in"
alt="Imagen que contiene accesorio, paraguas, tarjeta de presentación Descripción generada automáticamente" /></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><img src="media/image2.png"
style="width:2.45946in;height:2.21645in" /></p>
<blockquote>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>ADDENDUM</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>SERVICIO DE ADMINISTRACIÓN COSTO EMPRESA</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>“_____________”</strong></p>
</blockquote>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>ADDENDUM</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>SERVICIO DE ADMINISTRACIÓN COSTO EMPRESA</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>CORPORACIÓN DE CAPACITACIÓN DE LA CONSTRUCCIÓN</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>Y</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">______________________________</mark></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En Santiago de Chile, a <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">____</mark> de <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">______</mark> del
año 2023, entre la <strong>CORPORACIÓN DE CAPACITACIÓN DE LA
CONSTRUCCIÓN</strong>, RUT 70.200.800-K, en adelante el “OTIC”,
representado por don José Esteban Garay Anex-Dit-Chenaud, Cédula
Nacional de Identidad N° 15.362.979-K y por don Sergio Andrés Torretti
Armendáriz, Cédula Nacional de Identidad N° 15.378.208-3, con domicilio
en Santa Beatriz 170, piso 3, comuna de Providencia, en adelante la
“Corporación” u “OTIC de la CChC”, por una parte, y por la otra, la
Empresa o Grupo de empresas <mark><strong>XXXXXXX</strong>,</mark> RUT:
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">XXXXXXX</mark>; <strong>, <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">XXXXXXXXX</mark></strong>
representadas por los señores don <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">___Nombre Completo___</mark>,
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">_____Profesión__</mark>_, Cédula Nacional de Identidad
Nº<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">___________</mark>, <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">___Nombre Completo__</mark>_,
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">_____Profesión__</mark>_, Cédula Nacional de Identidad
Nº<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">__________</mark>_; y todos domiciliados para estos efectos en
calle <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">________</mark> N°<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">____</mark>_, comuna de
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">____</mark>, en adelante la empresa <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">“____”</mark> o
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">“GRUPO EMPRESAS ____</mark>”; y ambas en su conjunto denominadas
las “partes”, han venido en celebrar el siguiente addendum de
contrato:</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>PRIMERO</u>:</strong> <strong>Antecedentes.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Mediante instrumento privado de fecha <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">____</mark> de
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">____</mark> de <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">_____</mark>, entre la CORPORACION DE
CAPACITACION DE LA CONSTRUCCION y la empresa <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">________</mark>, se
celebró un contrato de Administración de Servicios de Franquicia
Tributaria SENCE.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>SEGUNDO</u>:</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Por el presente instrumento, las partes comparecientes, convienen
modificar el contrato, previamente individualizado, adicionando el
servicio <strong>de Administración no Franquiciable o Administración
Costo Empresa (Cuenta 2),</strong> el cual se describe de la forma que a
continuación se señala:</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El OTIC CChC entregará el servicio adicional Administración no
Franquiciable o Administración Costo Empresa (Cuenta 2), el cuál
consiste en la gestión de apoyo técnico en programas de capacitación,
administrando las cuentas de capacitación de los cursos desarrollados
por una institución o empresa; a) cuando esta no tiene Franquicia SENCE
en los cursos que desarrolla; b) cuando en los cursos que imparte, deben
complementarse las capacitaciones de aquellos participantes que no son
franquiciadas en un 100% (solo el 50% o 15%); c) cuando hay cursos cuyo
valor hora supera el máximo del valor hora SENCE; y d) cuando se generan
costos por participantes que se anularon o no completaron el 75% de
asistencia a cursos SENCE. Asimismo, este servicio, de conformidad a lo
estipulado en la propuesta técnica, podrá consistir en el apoyo técnico
mediante la asistencia técnica del desarrollo de recursos humanos para
las empresas adherentes de la Corporación.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>I.- <u>Respecto este servicio el OTIC CChC
dispondrá:</u></strong></p>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" type="1">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">De una Cuenta de administración, la cual cuenta con mecanismos de
control de pagos, generación de informes y rendiciones.</p></li>
</ol>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">1.2 De una generación periódica de informes, control de procesos: El
sistema registra todos los movimientos de cuenta y estados de los
participantes.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">1.3 Instruirá a los OTEC y demás Proveedores para que ejecuten las
siguientes acciones:</p>
<ul style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Envíen las facturas de costo empresa a la casilla de correo
electrónico que se acuerde con cada una de las empresas
adherentes.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Para la correcta recepción de facturas costo Empresa: El OTIC
CChC deberá recepcionar, a más tardar, dentro de 5 días desde su fecha
de emisión las respectivas facturas. Los proveedores que envíen
documentación incompleta o con errores recibirán de vuelta los
documentos para ser corregidos dentro de un plazo no superior a 5 días
corridos desde su recepción. En cumplimiento a la LEY N° 21.131 de pagos
de 30 días, una vez recepcionada la factura conforme (sin observaciones)
y que esta se encuentre aprobada por la empresa, el OTIC CChC procederá
con el pago de conformidad a lo establecido a la normativa.</p></li>
</ul>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">1.4 Recepcionará facturas de los siguientes servicios
contratados:</p>
<ul style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Por complementos de capacitaciones por participantes sin 100% de
cobertura Franquiciable, tales como participantes 50% y 15% o cursos con
valores hora mayores al máximo de hora SENCE.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Por montos por participantes anulados o que no complementaron el
75% de asistencia a cursos SENCE.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Por cursos sin franquicia SENCE.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Por cursos efectuados en el extranjero para personal de la
empresa o grupo de empresas adheridas.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Por Boletas de relatores o consultores contratados por la
empresa<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">_______</mark><strong>.</strong></p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Por Servicios de empresas relacionadas con recursos humanos y
capacitación: consultorías, estudios y logística como lo son materiales
de apoyo, arriendo de salas, arriendo de equipos, alojamientos, pasajes
y otros necesarios para el adecuado funcionamiento de la
capacitación.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Por gastos incurridos en Magister(s) y/o Diplomado (s) no afectos
a franquicia tributaria SENCE.</p>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" start="5" type="1">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El OTIC CChC realizará la confección del estado de pago con
facturas recepcionadas y validadas para ser enviadas a la empresa para
su respectiva aprobación. Una vez aprobado el estado de pago, por la
empresa, se procederá a gestionar la nómina de pagos a proveedores con
la siguiente información:</p></li>
</ol></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Número de factura.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Fecha de emisión de la Factura por parte del proveedor.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Nombre del OTEC/Proveedor del Servicio.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Rut del OTEC/Proveedor del Servicio.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Monto del documento.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Fecha del envío del Estado de Pago por parte de OTIC
CChC</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Otros Antecedentes solicitados por la Empresa
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">____________</mark>.</p>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" start="5" type="1">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Mantendrá el control y registro actualizado de los documentos de
pago emitidos por los OTEC/proveedor de Servicios correspondientes al
servicio de Costo Empresa (cuenta 2), en su recepción como posterior
rendición.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El OTIC CChC notificará el pago a proveedores.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Una vez efectuados los pagos, el OTIC CChC enviará
<strong><u>rendición de gastos</u></strong> por el Servicio Costo
Empresa (cuenta 2) a la empresa, para el control y seguimientos de
documentos pagados.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Para la coordinación de cierre de año, El OTIC CChC informará a
la empresa, oportunamente los montos a provisionar para cancelar
actividades de capacitación que se realicen durante el último mes del
año.</p></li>
</ol></li>
</ul>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>Punto II .- OPCION 1: (lo más habitual)</u></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">II.- Pago por Rendición:</mark></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><mark>Dentro de los 30 días a contar de la fecha de rendición de las
facturas pagadas por el OTIC CChC, la empresa deberá realizar el
reembolso de los documentos emitidos por los proveedores (OTEC(s),
proveedores de servicios formativos o de entrenamiento y proveedores de
servicios complementarios de la acción formativa de capacitación) a la
empresa y señalados en la respectiva <strong><u>rendición de
gastos</u></strong>, ya pagada por el OTIC CChC.</mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">Los servicios que otorguen proveedores de servicios
complementarios de la acción formativa de capacitación no incluyen la
adquisición de activos para la empresa.</mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">El no cumplimiento del reembolso en el día 30 por parte de la
empresa dará derecho al OTIC CChC para retener los pagos futuros ya
validados por la empresa, que deban efectuarse con ocasión de la
prestación del presente servicio. Las multas e intereses que se generen
a propósito de los pagos no efectuados producto de esta retención serán
de exclusiva responsabilidad de la empresa.</mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>Punto II .- OPCION 2: (muy excepcional)</u></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><mark>II. <strong><u>Pago Directo:</u> (eventual solo en empresas que
operan, así como Komatsu y Agrosuper)</strong></mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">La empresa______ pagará directamente las facturas a los OTEC,
proveedores de servicios formativos o de entrenamiento y a los
proveedores de servicios complementarios de la acción formativa de
capacitación. De este modo después de revisar, verificar la información,
el OTIC CChC procederá al envío de la documentación a la
empresa.</mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">Los servicios que otorguen proveedores de servicios
complementarios de la acción formativa de capacitación no incluyen la
adquisición de activos para la empresa.</mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>III.- <u>Reporte Mensual</u>:</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Las partes acuerdan que la empresa<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">______</mark> entregará
reporte mensual del estado de pago de las facturas gestionadas a través
del OTIC CChC.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>IV- <u>Precio y Forma de Pago del Servicio Cuenta 2: (Procede
cuando se cobra como un servicio adicional)</u></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La empresa <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">________</mark> compromete un gasto equivalente a
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">$________. - (___completar monto en palabras___</mark> pesos)
exento de IVA para la ejecución del servicio adicional de Administración
no Franquiciable o Administración Costo Empresa (Cuenta 2), en
conformidad a oferta económica, presentada por la Corporación el día
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">___</mark>de <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">___</mark> del año<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">___</mark>, por el
periodo de XX años. <strong><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">(Dependiendo de los años de duración
del contrato).</mark></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El costo por la administración del servicio adicional de
Administración no Franquiciable o Administración Costo Empresa (Cuenta
2) será el siguiente</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:11px">
<colgroup>
<col style="width: 84%" />
<col style="width: 15%" />
</colgroup>
<thead>
<tr class="header">
<th colspan="2"><strong>Costo Administración</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="padding:4px 8px;border:1px solid #dde8f5">% por Administración (Cuenta2)</td>
<td style="padding:4px 8px;border:1px solid #dde8f5">%</td>
</tr>
<tr class="even">
<td style="padding:4px 8px;border:1px solid #dde8f5">Valor equivalente al % por Administración (Cuenta 2)</td>
<td style="padding:4px 8px;border:1px solid #dde8f5">$</td>
</tr>
</tbody>
</table>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El cobro del costo de administración del servicio adicional de
Administración no Franquiciable o Administración Costo Empresa (Cuenta
2), se efectuará a través de la emisión de factura mensual, por parte
del OTIC CChC.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En caso de término anticipado de contrato, se deberán reembolsar
todos gastos asociados al servicio adicional de Administración no
Franquiciable o Administración Costo Empresa (Cuenta 2), correspondiente
al mes durante el cual se pone término al contrato vigente. Asimismo, la
empresa <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">_______</mark> se compromete a pagar el costo de
administración correspondiente al mes de término de la fecha del
contrato.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>TERCERO</u></strong>:</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En todo lo no modificado por el presente addendum, “El Contrato de
Prestación de Servicios”, previamente individualizado, sigue plenamente
vigentes y vinculante para las partes.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>CUARTO</u>: Personerías.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La personería de don José Esteban Garay Anex-Dit-Chenaud y de don
Sergio Andrés Torretti Armendáriz para representar a la Corporación de
Capacitación de la Construcción consta de escritura pública de fecha 15
de diciembre de 2020, otorgada en la Notaría de Santiago de don Félix
Jara Cadot.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La personería de don <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">________</mark> para representar a la
empresa <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">________</mark> consta de escritura pública de fecha
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">_____</mark> del mes de <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">_____</mark> del año
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">____</mark>, otorgada en la notaría pública de Santiago de don
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">_______________</mark>.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El presente Acuerdo se firma en dos ejemplares de igual tenor y
fecha, quedando uno en poder de cada parte.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:11px">
<colgroup>
<col style="width: 45%" />
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 3%" />
<col style="width: 41%" />
</colgroup>
<thead>
<tr class="header">
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left">José Esteban Garay Anex-Dit-Chenaud</th>
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left"></th>
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left"></th>
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left"></th>
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left"></th>
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left">Sergio Andrés Torretti Armendariz</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="padding:4px 8px;border:1px solid #dde8f5"><strong>CORPORACIÓN DE CAPACITACIÓN DE LA CONSTRUCCIÓN</strong></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"><strong>CORPORACIÓN DE CAPACITACIÓN DE LA CONSTRUCCIÓN</strong></td>
</tr>
</tbody>
</table>
<table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:11px">
<colgroup>
<col style="width: 7%" />
<col style="width: 92%" />
</colgroup>
<thead>
<tr class="header">
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left"></th>
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left">XXXXXXXXXXXXXXX</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"><strong>XXXXXXXX</strong></td>
</tr>
</tbody>
</table>
`,add_ft:`<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>ADDENDUM N°<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">XX</mark></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">____________________________</mark></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>Y</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>CORPORACIÓN DE CAPACITACIÓN DE LA CONSTRUCCIÓN</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>(OTIC CChC)</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">________,</mark> a <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">___</mark> de
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">____________</mark> de 2023, comparecen: <strong>CORPORACIÓN DE
CAPACITACIÓN DE LA CONSTRUCCIÓN,</strong> RUT N° 70.200.800-K,
representada por don José Esteban Garay Anex-Dit-Chenaud, Cédula
Nacional de Identidad N° 15.362.979-K y por don Sergio Andrés Torretti
Armendáriz, Cédula Nacional de Identidad N° 15.378.208-3, ambos
domiciliados para estos efectos en, calle Santa Beatriz N° 170, piso 3,
comuna de Providencia, ciudad de Santiago, en adelante <strong>“La
Corporación “o "el OTIC CChC”</strong>, por una parte y por la otra, la
<strong><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">______________________,</mark></strong> RUT N°
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">XXXXXXXX</mark>, representada don
<mark><strong>________________</strong>,</mark> cédula de identidad Nº
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">XXXXXXXX</mark>, ambos domiciliados para estos efectos en calle
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">__________</mark> N° <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">___</mark>, comuna de
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">__________,</mark> en adelante indistintamente denominada
<mark>“<strong>________________”</strong></mark> <strong>o “La
Empresa”;</strong> y, ambas denominadas en conjunto <strong>“las
Partes”</strong>, han convenido en celebrar el siguiente Addendum de
modificación de contrato:</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>PRIMERO</u></strong></p>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" type="1">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Mediante contrato privado de fecha <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">XX</mark> de
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">_____</mark> de <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">XXXX</mark>, la empresa
<strong><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">________________</mark></strong> y <strong>el OTIC
CChC</strong> celebraron un contrato de prestación de servicios, en
virtud del cual la empresa <strong><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">_______________</mark></strong>
encargó a <strong>el</strong> <strong>OTIC CChC</strong> la ejecución
del servicio de <mark>Administración de Franquicia Tributaria
<strong>SENCE</strong> para acciones de capacitación y Servicio Costo
Empresa.</mark></p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Mediante instrumento privado de fecha <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">XX</mark> de
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">________</mark> de <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">XXXX</mark> (Addendum 1), la empresa
<strong><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">_____________</mark></strong> y <strong>el OTIC
CChC</strong> celebraron un primer addendum de modificación de contrato,
respecto de las cláusulas <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">“_____________”</mark> y
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">“_______________”</mark></p></li>
</ol>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>SEGUNDO</u></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Por el presente instrumento, las partes, convienen en modificar el
contrato original, previamente individualizado en sus cláusulas
<strong><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">________________</mark></strong> y
<mark><strong>_________________</strong>,</mark> quedando redactada para
todos los efectos contractuales en los términos que a continuación se
indica:</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>Debe decir:</u></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><em><mark><strong>“</strong>_________________
(COMPLETAR).”</mark></em></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>TERCERO</u>:</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En todo lo modificado por el presente instrumento, el contrato de
prestación <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">de Servicios de Administración de Franquicia Tributaria
y Servicio Costo Empresa</mark> entre la empresa
<strong><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">_______________</mark></strong> y <strong>el OTIC
CChC</strong>, sigue plenamente vigente y vinculante para las
partes.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>CUARTO:</u></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La personería de don <mark><strong>_______________</strong>,</mark>
para actuar en representación de la empresa
<strong><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">___________________________,</mark></strong> consta de la
escritura pública de fecha <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">XX</mark> de <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">________</mark> de
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">XXXX</mark>, otorgada en la Notaría de don
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">________________.</mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La personería de don <strong>José Esteban Garay
Anex-Dit-Chenaud</strong> y <strong>Sergio Andrés Torretti
Armendáriz</strong> para representar a la <strong>CORPORACIÓN DE
CAPACITACIÓN DE LA CONSTRUCCIÓN</strong> consta de escritura pública de
fecha 15 de diciembre de 2020, otorgada en la Notaría de Santiago de don
Félix Jara Cadot.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La presente modificación se extiende y firma en <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">dos</mark>
ejemplares del mismo valor, tenor y fecha, quedando uno en poder de cada
parte.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:11px">
<colgroup>
<col style="width: 44%" />
<col style="width: 4%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left">José Esteban Garay Anex-Dit-Chenaud</th>
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left"></th>
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left">Sergio Andrés Torretti Armendáriz</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="padding:4px 8px;border:1px solid #dde8f5">Representante Legal</td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5">Representante Legal</td>
</tr>
<tr class="even">
<td style="padding:4px 8px;border:1px solid #dde8f5"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">CORPORACIÓN DE CAPACITACIÓN</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">DE LA CONSTRUCCIÓN</p></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">CORPORACIÓN DE CAPACITACIÓN</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">DE LA CONSTRUCCIÓN.</p></td>
</tr>
</tbody>
</table>
<table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:11px">
<colgroup>
<col style="width: 90%" />
<col style="width: 9%" />
</colgroup>
<thead>
<tr class="header">
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left"><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">___________________</mark></th>
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left"></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="padding:4px 8px;border:1px solid #dde8f5">Representante Legal</td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
</tr>
<tr class="even">
<td style="padding:4px 8px;border:1px solid #dde8f5"><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">P.P. _______________</mark></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
</tr>
</tbody>
</table>
`,nda:`<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><img src="media/image1.jpg" style="width:8.55463in;height:7.26944in"
alt="Imagen que contiene accesorio, paraguas, tarjeta de presentación Descripción generada automáticamente" /></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><img src="media/image2.png"
style="width:2.45946in;height:2.21645in" /> <strong>ACUERDO DE
CONFIDENCIALIDAD</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">ACUERDO DE CONFIDENCIALIDAD<br />
<em>(Non-Disclosure Agreement</em> o NDA)</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">CORPORACIÓN DE CAPACITACIÓN DE LA CONSTRUCCIÓN</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Y</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En Santiago, a 23 de abril de 2026, comparece por una parte, la
<strong>CORPORACIÓN DE CAPACITACIÓN DE LA CONSTRUCCIÓN,</strong> Rol
Único Tributario N<strong>°</strong> 70.200.800-K, válidamente
representada por don <strong>José Esteban Garay
Anex-Dit-Chenaud</strong>, cédula nacional de identidad N° 15.362.979-K
y por don <strong>Sergio Andrés Torretti Armendáriz</strong>, cédula
nacional de identidad N° 15.378.208-3, todos domiciliados para estos
efectos en calle Santa Beatriz N°170, piso 3, comuna de Providencia,
ciudad de Santiago, a en adelante la “CORPORACIÓN” u “OTIC CChC” y por
otra parte, <strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span>,</strong> Rol Único Tributario N° <span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span>,
representada por <span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span>, cédula de identidad N° <span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span>, ambas domiciliadas
para estos efectos en calle <span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span>, comuna de <span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span>, en adelante
<strong>“<span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span>”</strong>, se ha convenido el siguiente Acuerdo de
Confidencialidad (NDA), en adelante el “<u>Acuerdo</u>”.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>PRIMERO</u>:</strong> <strong>Objeto.</strong>El objeto de
este Acuerdo es regular la entrega de información de parte de la
<strong>CORPORACIÓN DE CAPACITACIÓN DE LA CONSTRUCCIÓN</strong>, a
<strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong> con el fin de que ésta última realice un
levantamiento y diagnóstico para un eventual plan de adopción de
Inteligencia Artificial para la <strong>CORPORACIÓN</strong> y otras
relacionadas que expresamente esta última (en adelante el
“<u>Propósito</u>”).</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Para cumplir el objeto del Acuerdo, <strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong> podrá tener
acceso a las bases de datos con información de los clientes, vigentes y
no vigentes del OTIC, de sus trabajadores; de los OTEC; de los
Proveedores; de SENCE; y de los trabajadores del OTIC, documentación e
información confidencial y/o sujeta a derecho de propiedad de la
<strong>CORPORACIÓN</strong>, pudiendo ser ésta utilizada por los
representantes autorizados de <strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong> según los siguientes
términos y condiciones estipuladas en el presente Acuerdo.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Toda la información confidencial de la <strong>CORPORACIÓN</strong>
recibida por <strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong> será considerada propiedad de la
<strong>CORPORACIÓN</strong> y será resguardada por <strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong>
como Información Confidencial, y no será revelada a terceros salvo
autorización previa y por escrito de la
<strong>CORPORACIÓN</strong>.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Desde ya, son datos de máxima confidencialidad el Rut, nombre,
domicilio, teléfonos, correo electrónico y cualquier otro dato que sea
conocido por <strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong>, por cualquier vía.
<strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong> deberá tomar todas las medidas necesarias para
asegurar a la <strong>CORPORACIÓN</strong> que estos datos sólo sean
usados por el personal autorizado y sólo para el fin definido por la
<strong>CORPORACIÓN</strong>.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>SEGUNDO</u>: Información Confidencial.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Se considera “Información Confidencial”</p>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" type="a">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Todo tipo de información escrita o transmitida por medio
electrónicos, que la <strong>CORPORACIÓN</strong> entregue a
<strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong>, y que sea entregada expresamente con el carácter
de confidencial por escrito o que bajo todas las circunstancias
razonablemente merezcan trato confidencial y/o privilegiado y que sea
propia o que pertenezca directamente o indirectamente a la
<strong>CORPORACIÓN</strong> o respecto de la cual ésta, a su vez, tenga
obligación de confidencialidad respecto de otras personas.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Todo tipo de información verbal o transmitida por medios
audiovisuales, entregada en los mismos términos que en la letra a.
precedente, que se resuma por escrito y se suministre a la parte
receptora en un documento escrito tras la revelación verbal o
audiovisual, que sea propia o que pertenezca directamente o
indirectamente a la <strong>CORPORACIÓN</strong> o respecto de la cual
ésta, a su vez, tenga obligación de confidencialidad respecto de otras
personas.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Las tratativas de negocios, licencias de uso, información técnica
y financiera, software, programas de demostración, discos de
información, algoritmos, rutinas, sistemas computacionales, códigos,
tarjetas, técnicas, diseños, procedimientos, fórmulas, inventos,
reformas, conceptos, memorias, archivos, bases de datos, memorándums,
informes, documentación, pautas, minutas, modelos, descripciones,
cálculos, notas, datos, dibujos, planos, listas de precios y listas de
clientes, y cualesquiera otra información que sea propia o que
pertenezca directa o indirectamente a la <strong>CORPORACIÓN</strong> o
respecto de la cual ésta, a su vez, tenga obligación de confidencialidad
respecto de otras personas, entregada en los mismos términos que los
señalados en la letra a. de esta cláusula segunda.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Todo “Material de propiedad de OTIC CChC”. Las Partes entienden
por Material de propiedad de OTIC CChC, y sin que la siguiente
enumeración sea taxativa, cualquier información adquirida durante el
transcurso de su trabajo en OTIC CChC, incluida la información
relacionada con la cartera de proyectos y clientes de OTIC CChC, los
precios internos y/o posturas en licitaciones públicas o privadas, las
fórmulas de cálculo de dichos precios, nombres y contenidos de softwares
de apoyo para la obtención de dichos precios, estrategias de estudio de
proyectos, los nombres y precios de proveedores, los modelos de negocio,
los objetivos, metodología, estudios, y/o propuestas de planificación
estratégica de OTIC CChC. También se considera “Material de propiedad de
OTIC CChC”, cualquier información relativa a los gastos de OTIC CChC,
honorarios de terceros, el volumen de ventas actuales y proyectadas, las
operaciones actuales, la logística y los gastos relacionados con el
cumplimiento y los nombres y/o direcciones, direcciones de correo
electrónico, números de teléfono o cualquier otra información de
contacto de los contactos profesionales de OTIC CChC, ya sea a nivel
regional, nacional o internacional. El Material de Propiedad de OTIC
CChC también incluye cualquier otra información no pública relacionada
con los negocios de OTIC CChC.</p></li>
</ol>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>TERCERO</u>: <span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong> revelará la Información
Confidencial de la <strong>CORPORACIÓN</strong> solamente a los
empleados que necesiten esta información para cumplir el objeto de este
Acuerdo, en adelante los “Empleados Autorizados”, los cuales tratarán la
información como si fuese información confidencial de su propia empresa.
Estos Empleados Autorizados, deberán saber que la Información
Confidencial está sujeta a derechos de propiedad.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Respecto a la información divulgada bajo este Acuerdo,
<strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong> y los Empleados Autorizados, deberán:</p>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" type="a">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Mantener la Información confidencialmente, ejerciendo un grado de
cuidado, no inferior al cuidado prestado por la
<strong>CORPORACIÓN</strong> para proteger su propia Información
confidencial que no desea divulgar;</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Restringir la divulgación de la Información Confidencial
únicamente a aquellos directores, gerentes, empleados que necesiten
conocer esta Información y no divulgarla a cualquier otra
persona.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Avisar de las obligaciones con respecto a la Información
Confidencial que deben tener aquellas personas a quienes la Información
fue divulgada;</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Usar la Información Confidencial sólo en relación con temas
solicitados por la <strong>CORPORACIÓN</strong> y;</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">No usar la Información Confidencial en perjuicio de los intereses
de la <strong>CORPORACIÓN</strong>, ni en su propio beneficio o en el de
terceros.</p></li>
</ol>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong> será responsable de cualquiera infracción a los
términos de este Acuerdo por parte de sus directores, gerentes y
empleados. <strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong> garantiza que las personas mencionadas
precedentemente a quienes se haya proporcionado información confidencial
están sujetas a obligaciones de confidencialidad no menos onerosas que
los términos de confidencialidad de este acuerdo y se hace responsable
frente la <strong>CORPORACIÓN</strong> por el hecho de dichas
personas.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>CUARTO</u>: Propiedad de la Información
Confidencial.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La información entregada por la <strong>CORPORACIÓN</strong> que
tenga el carácter de confidencial es considerada para todos los efectos
propiedad de la <strong>CORPORACIÓN</strong>, y si es requerida por esta
última, <strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong> deberá devolver toda la información
recibida en forma tangible a la <strong>CORPORACIÓN</strong>, en un
plazo máximo de diez días hábiles contados desde la fecha del
requerimiento por parte de la <strong>CORPORACIÓN</strong>, debiendo
destruir los apuntes, copias, registros y demás anotaciones efectuadas
sobre la base de la información confidencial que se le hubiere
proporcionado, o destruirá tal Información según las indicaciones de la
<strong>CORPORACIÓN</strong>.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Si <strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong> pierde o divulga Información Confidencial de
la <strong>CORPORACIÓN</strong> sin su autorización, deberá notificar a
la <strong>CORPORACIÓN</strong> inmediatamente y hacer los esfuerzos
razonables para recuperar la información perdida o divulgada en forma
errónea.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>QUINTO</u>: Responsabilidad.</strong> <strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong>
será responsable de todos los daños y perjuicios que sufra la otra parte
por el incumplimiento de las obligaciones establecidas en el presente
Acuerdo, que sean directamente imputables a <strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong> y sus
trabajadores.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Las partes reconocen que cualquier incumplimiento de este acuerdo de
confidencialidad, de sus términos y /o condiciones por parte de
<strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong>, dará derecho a la <strong>CORPORACIÓN</strong> a
una compensación equivalente al daño o perjuicio causado producto del
incumplimiento directo por parte de <strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong>. Sin perjuicio
de las acciones judiciales y que en derecho correspondan.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>SEXTO</u>: <span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong> no deberá tener obligaciones para
preservar la naturaleza propia de cualquier Información que:</p>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" type="a">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Al momento de su divulgación ya fuese de dominio público o
llegare a serlo con posterioridad por razones no imputables a
<strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong>.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Es conocida de forma previa al momento de su entrega, sin
obligación de mantenerla como confidencial.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Sea desarrollada independientemente por la
<strong>CORPORACIÓN</strong> sin referencia a la información
confidencial.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Está expresamente liberada, por escrito y en forma previa, por la
<strong>CORPORACIÓN</strong> de las obligaciones de confidencialidad
impuesta por el presente Acuerdo.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Fuere requerida su divulgación o publicación por una autoridad
judicial. En tal caso dicha divulgación o publicación solamente podrá
efectuarse luego de notificar por escrito a la
<strong>CORPORACIÓN</strong> de las razones y naturaleza de la
divulgación o publicación requerida.</p></li>
</ol>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>SÉPTIM</u>O: Protección de Datos Personales.</strong> Las
partes acuerdan que <strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong> dará tratamiento a los datos
personales de los trabajadores de la <strong>CORPORACIÓN</strong> (en
adelante, los “Titulares”) para el objeto del presente Acuerdo. En
relación con dicho tratamiento, la <strong>CORPORACIÓN</strong> le
transferirá, en caso de ser necesario, a <strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong> los datos
personales requeridos, respecto de los cuales <strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong> será
considerado como encargado del tratamiento de datos, debiendo cumplir
con todas las obligaciones que le competen en tal carácter, de acuerdo a
la normativa de Protección de Datos aplicable.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En tal sentido, <strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong> se obliga a tratar los datos
personales transferidos por la <strong>CORPORACIÓN</strong> para la
exclusiva finalidad de cumplir con el objeto del presente Acuerdo
señalado en la cláusula PRIMERO, guardando absoluta confidencialidad de
la información asociada a los Titulares. Asimismo, en su rol de
encargado, no podrá procesar los datos para contactar en forma directa a
los Titulares. Además, <strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong> deberá poner en práctica las
medidas técnicas y organizativas que resulten necesarias para proteger
los Datos Personales contra su destrucción accidental o ilícita, su
pérdida o alteraciones accidentales, o su divulgación o acceso no
autorizados, y que garanticen el nivel de seguridad apropiado a los
riesgos que entraña el tratamiento y a la naturaleza de los datos que
han de protegerse.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Si un Titular ejerciera los derechos asociados a sus datos que
establece la ley, esta solicitud será derivada a la
<strong>CORPORACIÓN</strong>, dentro de dos días hábiles contados desde
su recepción.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En caso de cualquier incumplimiento de <strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong> como
encargado de datos, respecto a las obligaciones establecidas en esta
cláusula, <strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong> se hará responsable de toda reclamación,
denuncia o sanción derivada directamente de dicho incumplimiento, por lo
que <strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong> deberá indemnizar a la
<strong>CORPORACIÓN</strong> de cualquier monto que este último tenga
que pagar por estos conceptos. Además, <strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong> deberá
cubrir los gastos de representación legal en los que incurra la
<strong>CORPORACIÓN</strong> para atender los juicios o procedimientos
administrativos que deriven de este tipo de incumplimientos.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>OCTAVO</u>:</strong> <strong>Naturaleza del
Acuerdo.</strong> El presente Acuerdo no constituye contrato, relación
comercial o societaria; negocio; oferta o consentimiento alguno entre
las partes, ni ahora ni en el futuro.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>NOVENO</u>: Vigencia.</strong> Este Acuerdo tendrá una
duración indefinida, por lo que subsistirá aún por un plazo de <strong>5
años</strong> después de finalizar los servicios prestados por
<strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong>, y en tanto no se establezca por escrito el
recíproco relevo de dicha obligación.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO</u>: Ley aplicable.</strong> Las partes señalan
expresamente que el presente Acuerdo se regirá por las leyes de la
República de Chile, en todo lo que a derecho corresponda.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO PRIMERO</u>: Acuerdo íntegro y
modificaciones.</strong> Este Acuerdo constituye el completo
entendimiento entre las partes con respecto a la Información entregada.
Ninguna corrección o modificación de este Acuerdo será válida u obligará
a las partes a menos que sea hecha por escrito y ejecutada en
representación de cada parte por su representante legal.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO SEGUNDO</u>: Resolución de conflictos.</strong> Las
partes acuerdan que ante cualquier dificultad o controversia que se
produzca entre los contratantes respecto de la aplicación,
interpretación, duración, validez o ejecución de este contrato o
cualquier otro motivo en razón del presente Acuerdo, se comprometen a
hacer los esfuerzos razonables para resolverlos de forma amistosa.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Sin perjuicio de lo anterior, para todos los efectos derivados del
presente Acuerdo, las Partes fijan su domicilio en la ciudad y comuna de
Santiago y se someten, para la resolución de sus conflictos, a la
jurisdicción y competencia exclusiva de sus Tribunales Ordinarios de
Justicia.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>PERSONERÍAS.</strong> La personería de don José Esteban Garay
Anex-Dit-Chenaud y don Sergio Andrés Torretti Armendáriz para
representar a la Corporación de Capacitación de la Construcción consta
de escritura pública de fecha 04 de marzo de 2026, otorgada en la
Notaría de Santiago de doña María Patricia Donoso Gomien.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La personería de <span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span> , para representar a <span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span> , consta en <span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span>.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El presente Acuerdo se firma en dos ejemplares de igual tenor y
fecha, quedando uno en poder de cada parte.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:11px">
<colgroup>
<col style="width: 47%" />
<col style="width: 4%" />
<col style="width: 48%" />
</colgroup>
<thead>
<tr class="header">
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">José Esteban Garay Anex-Dit-Chenaud</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>CORPORACIÓN DE CAPACITACIÓN DE LA
CONSTRUCCIÓN</strong></p></th>
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left"></th>
<th style="background:#e8f0fa;color:#1a4f8a;padding:5px 8px;border:1px solid #c5d8f0;font-weight:600;text-align:left"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Sergio Andrés Torretti Armendáriz</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>CORPORACIÓN DE CAPACITACIÓN DE LA
CONSTRUCCIÓN</strong></p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
</tr>
<tr class="even">
<td style="padding:4px 8px;border:1px solid #dde8f5"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong></p></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong></p></td>
</tr>
</tbody>
</table>
`,sv:`<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>CONTRATO DE PRESTACIÓN DE SERVICIOS</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>ENTRE</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>CORPORACIÓN DE CAPACITACIÓN DE LA CONSTRUCCIÓN</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>Y</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">______________</mark></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En Santiago de Chile, a <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">__</mark> de <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">___________</mark>
del 2026 entre <strong>CORPORACIÓN DE CAPACITACIÓN DE LA
CONSTRUCCIÓN</strong> (OTIC CChC) , sociedad del giro de su
denominación, rol único tributario número 70.200.800-K representada por
don José Esteban Garay Anex-Dit-Chenaud, Cédula Nacional de Identidad N°
15.362.979-K y por don Sergio Andrés Torretti Armendáriz, Cédula
Nacional de Identidad N° 15.378.208-3, ambos domiciliados para estos
efectos en calle Santa Beatriz N° 170, piso 3, Providencia, Santiago, en
adelante también denominada “<strong>OTIC CChC</strong>” l o el
“<strong>Cliente</strong>”, por una parte; y, por la otra,
<strong><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">__________</mark></strong> rol único tributario número
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">_________-_</mark>, representadas por los señores don
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">___Nombre Completo___, _____Profesión___, Cédula Nacional de
Identidad Nº___________, ___Nombre Completo___, _____Profesión___,
Cédula Nacional de Identidad Nº___________</mark>; y todos domiciliados
para estos efectos en calle <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">________ N°_____, comuna de
____</mark>, en adelante “<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">__________</mark>” o
“<strong>Prestador</strong>”; y, en conjunto ambas denominadas las
“<u>Partes</u>”; se ha convenido el contrato de prestación de servicios
que consta del presente instrumento, en adelante también denominado el
“<u>Contrato</u>”, el que se regirá por las disposiciones contenidas en
él, y en subsidio, por las disposiciones legales vigentes que le sean
aplicables.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>PRIMERO</u>: Antecedentes.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>LA CORPORACIÓN DE CAPACITACIÓN DE LA CONSTRUCCIÓN</strong>,
es un “Organismo Técnico Intermedio de Capacitación”, reconocido por el
Servicio Nacional de Capacitación y Empleo, cuyo objetivo es otorgar
apoyo técnico a sus empresas adheridas, principalmente a través de la
promoción, organización y supervisión de programas de capacitación.
Entendiendo por supervisión en materia de capacitación “ejercer la
inspección superior en el trabajo realizado por las empresas adheridas”.
El OTIC servirá de nexo entre las empresas adheridas y los organismos
técnicos de capacitación (OTEC), en el marco de la normativa de
capacitación.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Por su parte<strong>, <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">“_________”</mark></strong> es…
(<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">COMPLETAR DESCRIPCIÓN)</mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>SEGUNDO</u></strong>: <strong>Objeto.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Por el presente instrumento la CORPORACIÓN DE CAPACITACIÓN DE LA
CONSTRUCCIÓN encomienda al Prestador, los servicios de <mark><u>(INDICAR
DE FORMA GENERAL LOS SERVICIOS)</u></mark> cuyo detalle está
desarrollado en la propuesta técnica presentada por
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">________</mark> con fecha <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">____</mark> de
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">________</mark> de 20<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">__,</mark> la cual se entenderá formar
parte integrante del presente Contrato.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><u><strong>I.- Descripción del Servicio
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">_________________:</mark></strong></u></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><u>(<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">COMPLETAR)</mark></u></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>TERCERO</u></strong>: <strong>Obligaciones</strong>.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador, se obliga a proporcionar el servicio comprometido a la
Corporación de Capacitación de la Construcción de manera correcta y
oportuna, conforme a los plazos y formas estipulados en el presente
Contrato y la propuesta técnica adjuntada.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Previa notificación a la Corporación y aceptación conforme de esta
última, el Prestador estará facultado para encomendar a un tercero todo
o parte de los servicios. Asimismo, el Prestador deberá garantizar la
calidad y cumplimiento de los servicios de quien contrate, conllevando
su responsabilidad en caso de incumplimientos de este último durante la
prestación de los servicios.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Por su parte la Corporación de Capacitación de la Construcción se
compromete a pagar el total del precio convenido por el servicio objeto
del presente contrato.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">En caso de incumplimiento grave de las obligaciones del
presente Contrato, esto es, la prestación deficiente del servicio
contratado al OTIC CChC, por parte de alguno de los profesionales
contratados por el Prestador para la correcta prestación del servicio.
El OTIC CChC podrá solicitar al Prestador su reemplazo inmediato, sin
costo alguno asociado, debiendo el Prestador hacerse responsable de todo
costo asociado para la reposición y del fiel y oportuno cumplimiento del
servicio contratado.</mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>CUARTO</u>: Niveles de Cumplimiento del Servicio
(SLA).</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El servicio contratado será prestado, por el personal del
Prestador<strong>,</strong> debiendo cumplirse de la forma descrita y
tipificada conforme al siguiente SLA (Service Level Agreement) que se
describe a continuación:</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><mark><strong>[</strong>INCORPORAR SLAs]</mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Las Partes, en este acto, convienen establecer la siguiente tabla de
multas para el caso de incumplimiento de los SLA acordados y de
responsabilidad del Prestador<strong>.</strong> Sin perjuicio de lo
anterior, este cronograma se encuentra sujeto a modificación en caso de
retrasos en etapas de validación y/o entrega de contenidos por parte de
la Corporación.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:11px">
<colgroup>
<col style="width: 51%" />
<col style="width: 48%" />
</colgroup>
<tbody>
<tr class="odd">
<td style="padding:4px 8px;border:1px solid #dde8f5"><em><strong>Cumplimiento</strong></em></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"><em><strong>Porcentaje descuento</strong></em></td>
</tr>
<tr class="even">
<td style="padding:4px 8px;border:1px solid #dde8f5"><em>5 a 6 días</em></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"><em>6%</em></td>
</tr>
<tr class="odd">
<td style="padding:4px 8px;border:1px solid #dde8f5"><em>Más de 6 días</em></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"><em>9%</em></td>
</tr>
</tbody>
</table>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El porcentaje de cumplimiento se mide como (1-(A/B))*100</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">A = Sumatoria días hábiles de retraso de los ítems solicitados los
servicios que nos presta <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">_________</mark>.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">B = Sumatoria días de SLA de los servicios solicitados en el mes en
curso.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En todo caso, el monto total de las multas no podrá superar el 20%
del precio total del contrato. En caso de que se supere, se aplicará lo
establecido en la cláusula Sexto siguiente.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>QUINTO</u>: Duración,</strong> <strong>Vigencia y Prórroga
de Contrato.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El presente Contrato tendrá una duración de <strong><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">___</mark>
meses</strong> y entrará en vigencia a partir del
<strong><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">___</mark> de <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">_______</mark> de 202<mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark>
hasta el día <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">___</mark> de <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">_______</mark> del
20<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">___</mark></strong><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">,</mark> plazo que podrá prorrogarse de
común acuerdo entre las partes, mediante carta certificada, manifestando
la intención de prórroga, dirigida al domicilio indicado en la
comparecencia por las partes, con a lo menos 05 días de anticipación a
la fecha de término del presente contrato.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>SEXTO</u>: Terminación Anticipada del
Contrato.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Sin perjuicio de lo indicado en la cláusula Quinto, la Corporación
podrá poner término anticipado al Contrato, en cualquier momento, de
forma inmediata y a su solo arbitrio, en caso que se produzca alguna de
las siguientes circunstancias:</p>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" type="a">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Caer el Prestador en insolvencia, liquidación o reorganización
concursal.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Si los servicios fueran objetivamente incompletos o no cumplieran
la calidad requerida, conforme lo establecido en el presente Contrato y
sus Anexos.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En caso que el Prestador incurra en cualquier incumplimiento de
lo dispuesto en el Contrato y sus Anexos.</p></li>
</ol>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Adicionalmente, la Corporación podrá dar término anticipado al
contrato unilateralmente, sin necesidad de expresión de causa, debiendo
comunicar la terminación al Prestador con a lo menos 30 días de
anticipación.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Bastará con que la Corporación envíe una comunicación escrita al
Prestador, declarando la existencia de una causal de terminación del
Contrato y manifestando su voluntad de término a contar de la fecha de
la comunicación o cualquier otra en el futuro que ésta determine. El
Contrato se entenderá terminado a partir de dicha fecha, sin necesidad
de declaración judicial ulterior y sin compensación alguna para la parte
que incurrió en la causal de terminación anticipada.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Asimismo, las Partes estarán obligadas a cumplir cabalmente las
obligaciones que se encontraren pendientes a su respecto a la fecha de
término del Contrato bajo esta cláusula Sexto. Adicionalmente, el
Prestador deberá entregar un informe final que contenga el estado actual
de los servicios prestados, los resultados que se hayan obtenido y los
asuntos o actividades pendientes a la fecha de término.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>SÉPTIMO</u>: Precio y Forma de Pago.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El precio del servicio contratado será de un valor total de
__________, el cual se pagará mediante Transferencia o Vale Vista del
Banco de Chile emitido por la Corporación a __________, RUT:
__________.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Previa Orden de Compra generada por el OTIC CChC, las facturas serán
emitidas por el Prestador<strong>.</strong> Sólo una vez que sean
recibidos, validados y aceptados conformes los hitos por parte del OTIC
CChC, mediante documento de aceptación formal de las acciones/
entregables contemplados, firmado por las partes, el OTIC CChC emitirá
la OC para que el Prestador emita la factura. </p>
<table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:11px">
<colgroup>
<col style="width: 54%" />
<col style="width: 45%" />
</colgroup>
<tbody>
<tr class="odd">
<td style="padding:4px 8px;border:1px solid #dde8f5"><em><strong>Servicios</strong></em></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"><em><strong>Monto</strong></em></td>
</tr>
<tr class="even">
<td style="padding:4px 8px;border:1px solid #dde8f5"><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">__________</mark></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">__________</mark></td>
</tr>
<tr class="odd">
<td style="padding:4px 8px;border:1px solid #dde8f5"><em><strong>Total</strong></em></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">__________</mark></td>
</tr>
</tbody>
</table>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>[NUMERO CLÁUSULA]</u>: Garantía de fiel y oportuno
cumplimiento del servicio.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Para el fiel y oportuno cumplimiento de los servicios en los términos
y plazos señalados en el presente Contrato, el Prestador, emitirá una
boleta de garantía a favor del Cliente por el monto <mark>de <strong>UF
<span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></strong>. De este modo, dentro de los 10 días hábiles siguientes a
la firma del Contrato, el Prestador deberá presentar a la Corporación,
una boleta garantía bancaria de fiel cumplimiento de la última etapa del
Contrato, expresada en Unidades de Fomento, por una suma equivalente al
pago del valor de la misma etapa, que figura como parte de los
servicios, la cual estará vigente hasta 90 días corridos meses posterior
a la fecha de finalización y entrega de esta última etapa.</mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">Las garantías deberán ser incondicionales e irrevocables,
emitidas por un banco chileno o por un banco extranjero establecido en
Chile y con oficinas en Santiago, cobrables y pagaderas en Santiago de
Chile, a la vista, a su sola presentación, las que deberán emitirse a
nombre de la Corporación de Capacitación de la Construcción.</mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">La boleta de garantía se hará efectiva en caso de acreditarse
fehacientemente un incumplimiento efectivo del Contrato y este no haya
sido solucionado conforme a lo establecido en los SLA que determinan el
nivel de cumplimiento del servicio que debe entregar a la Corporación de
Capacitación de la Construcción.</mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><mark>La glosa de la Boleta de Garantía Bancaria será la
siguiente<strong>: “Garantiza el Fiel Cumplimiento del Contrato de
Prestación del Servicio de __________”.</strong></mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">Para efectos de una eventual prórroga del Contrato, el
Prestador se obliga a renovar la boleta de garantía correspondiente con
una anticipación no inferior a 30 días de su vencimiento, extendiéndose
por el plazo que la Corporación de Capacitación de la Construcción
indique al efecto. El incumplimiento de esta obligación facultará a la
Corporación para poner término anticipado al Contrato y hacer efectiva
la garantía que tenga en su poder.</mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">La Garantía de Fiel Cumplimiento será restituida al término de
su vigencia, siempre que el Prestador hubiere dado cabal cumplimiento a
todas las obligaciones y actividades derivadas del servicio contratado,
además de no existir demandas pendientes interpuestas contra la
Corporación, que puedan dar origen a obligaciones de pago a esta última
producto del incumplimiento grave de los servicios, hitos y los SLA
convenidos.</mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>OCTAVO</u>:</strong> <strong>Confidencialidad</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Se considera “Información Confidencial”</p>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" type="a">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Todo tipo de información escrita o transmitida por medio
electrónicos, que la Corporación entregue al Prestador, y que sea
entregada expresamente con el carácter de confidencial por escrito o que
bajo todas las circunstancias razonablemente merezcan trato confidencial
y/o privilegiado y que sea propia o que pertenezca directamente o
indirectamente al Prestador o respecto de la cual ésta, a su vez, tenga
obligación de confidencialidad respecto de otras personas.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Todo tipo de información verbal o transmitida por medios
audiovisuales, entregada en los mismos términos que en la letra a. de
esta cláusula Octavo, que se resuma por escrito y se suministre a la
parte receptora en un documento escrito tras la revelación verbal o
audiovisual, que sea propia o que pertenezca directamente o
indirectamente a la Corporación o respecto de la cual ésta, a su vez,
tenga obligación de confidencialidad respecto de otras
personas.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Las tratativas de negocios, licencias de uso, información técnica
y financiera, software, programas de demostración, discos de
información, algoritmos, rutinas, sistemas computacionales, códigos,
tarjetas, técnicas, diseños, procedimientos, fórmulas, inventos,
reformas, conceptos, memorias, archivos, bases de datos, memorándums,
informes, documentación, pautas, minutas, modelos, descripciones,
cálculos, notas, datos, dibujos, planos, listas de precios y listas de
clientes, y cualesquiera otra información que sea propia o que
pertenezca directa o indirectamente a la Corporación o respecto de la
cual ésta, a su vez, tenga obligación de confidencialidad respecto de
otras personas, entregada en los mismos términos que los señalados en la
letra a. de esta cláusula segunda.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Todo “Material de propiedad de OTIC CChC”. Las Partes entienden
por Material de propiedad de OTIC CChC, y sin que la siguiente
enumeración sea taxativa, cualquier información adquirida durante el
transcurso de su trabajo en OTIC CChC, incluida la información
relacionada con la cartera de proyectos y clientes de OTIC CChC, los
precios internos y/o posturas en licitaciones públicas o privadas, las
fórmulas de cálculo de dichos precios, nombres y contenidos de softwares
de apoyo para la obtención de dichos precios, estrategias de estudio de
proyectos, los nombres y precios de Prestadores, los modelos de negocio,
los objetivos, metodología, estudios, y/o propuestas de planificación
estratégica de OTIC CChC. También se considera “Material de propiedad de
OTIC CChC”, cualquier información relativa a los gastos de OTIC CChC,
honorarios de terceros, el volumen de ventas actuales y proyectadas, las
operaciones actuales, la logística y los gastos relacionados con el
cumplimiento y los nombres y/o direcciones, direcciones de correo
electrónico, números de teléfono o cualquier otra información de
contacto de los contactos profesionales de OTIC CChC, ya sea a nivel
regional, nacional o internacional. El Material de Propiedad de OTIC
CChC también incluye cualquier otra información no pública relacionada
con los negocios de OTIC CChC.</p></li>
</ol>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador revelará la Información Confidencial de la Corporación
solamente a los empleados que necesiten esta información para cumplir el
objeto de este Contrato, en adelante los “Empleados Autorizados”, los
cuales tratarán la información como si fuese información confidencial de
su propia empresa. Estos Empleados Autorizados, deberán saber que la
Información Confidencial está sujeta a derechos de propiedad.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Respecto a la información divulgada bajo este Contrato, el Prestador
y los Empleados Autorizados, deberán:</p>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" type="a">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Mantener la Información confidencialmente, ejerciendo un grado de
cuidado, no inferior al cuidado prestado por la Corporación para
proteger su propia Información confidencial que no desea
divulgar;</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Restringir la divulgación de la Información Confidencial
únicamente a aquellos directores, gerentes, empleados que necesiten
conocer esta Información y no divulgarla a cualquier otra
persona.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Avisar de las obligaciones con respecto a la Información
Confidencial que deben tener aquellas personas a quienes la Información
fue divulgada;</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Usar la Información Confidencial sólo en relación con temas
solicitados por la Corporación y;</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">No usar la Información Confidencial en perjuicio de los intereses
de la Corporación, ni en su propio beneficio o en el de
terceros.</p></li>
</ol>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador será responsable de cualquiera infracción a los términos
de este acuerdo por parte de sus directores, gerentes y empleados. El
Prestador garantiza que las personas mencionadas precedentemente a
quienes se haya proporcionado información confidencial cumplirán la
totalidad de los términos de confidencialidad de este acuerdo y se hace
responsable frente la Corporación por el hecho de dichas personas.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La información entregada por la Corporación que tenga el carácter de
confidencial es considerada para todos los efectos propiedad de la
Corporación, y si es requerida, el Prestador deberá devolver toda la
información recibida en forma tangible a la Corporación, en un plazo
máximo de dos días hábiles contados desde la fecha del requerimiento por
parte del cliente, debiendo destruir los apuntes, copias, registros y
demás anotaciones efectuadas sobre la base de la información
confidencial que se le hubiere proporcionado, o destruirá tal
Información según las indicaciones de la Corporación.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Si el Prestador pierde o divulga Información Confidencial de la
Corporación sin su autorización, deberá notificar a la Corporación
inmediatamente y hacer los esfuerzos razonables para recuperar la
información perdida o divulgada en forma errónea.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador no deberá tener obligaciones para preservar la
naturaleza propia de cualquier Información que:</p>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" type="a">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Al momento de su divulgación ya fuese de dominio público o
llegare a serlo con posterioridad por razones no imputables al
Prestador.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Es conocida de forma previa al momento de su entrega, sin
obligación de mantenerla como confidencial.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Sea desarrollada independientemente por la Corporación sin
referencia a la información confidencial.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Está expresamente liberada, por escrito y en forma previa, por la
Corporación de las obligaciones de confidencialidad impuesta por el
presente acuerdo.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Fuere requerida su divulgación o publicación por una autoridad
judicial. En tal caso dicha divulgación o publicación solamente podrá
efectuarse luego de notificar por escrito a la Corporación de las
razones y naturaleza de la divulgación o publicación requerida.</p></li>
</ol>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Una vez terminado el Contrato, el Prestador se obliga a restituir a
la Corporación toda la información entregada por esta o a la que tuvo
acceso en virtud del contrato, en especial pero no de manera excluyente,
las bases de datos personales de sus colaboradores y clientes.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Las obligaciones establecidas en esta cláusula se mantendrán vigentes
incluso después de extinguido el presente Contrato y su incumplimiento
por parte de su personal hará responsable al Prestador de indemnizar los
perjuicios directos causados a la Corporación, sin perjuicio de las
demás acciones legales que correspondan.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La contravención, a lo indicado en esta cláusula dará a las partes
acción inmediata para poner término ipso facto al presente Contrato, sin
perjuicio de las demás sanciones civiles y penales que fueran
procedentes en conformidad a la ley.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>NOVENO</u>: Cumplimiento Prestadores (Ciberseguridad y
Seguridad de la Información)</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>Relativas al Cumplimiento de la ciberseguridad y uso de
equipos</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador y cualquiera de las personas relacionadas con él para la
ejecución de este Contrato, deben cumplir todas las medidas de seguridad
exigidas por la OTIC CChC respecto de los equipos de este (computadores
personales, portátiles y cualquier otro dispositivo), como también de
los programas asociados a estos y la información que contengan.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En caso de que alguna prestación de este Contrato tenga lugar en un
inmueble donde la Corporación o las personas relacionadas con ésta
desarrollen sus actividades, el Prestador cumplirá con el horario y
disposiciones de trabajo, medidas de seguridad y reglas sobre receso que
aplique a la corporación en tales recintos.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador será responsable de reportar de manera inmediata a la
Corporación cualquier incidente de ciberseguridad que involucre equipos
o información de la corporación, y cooperará plenamente en la
investigación y respuesta a tales incidentes.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Para efectos de aplicar esta cláusula, la Corporación entregará de
forma previa al Prestador la documentación que contenga las políticas,
normas, procedimientos o reglas exigibles.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>Relativas al Tratamiento de Datos Personales</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Si en virtud del presente Contrato, el Prestador requiere realizar
operaciones de tratamiento de datos personales por cuenta de la
corporación, deberá adherirse estrictamente a la Ley N°19.628, sobre
Protección de la Vida Privada. Esto incluye, pero no se limita a, la
implementación de medidas de seguridad adecuadas, la restricción del uso
y divulgación de la información, y el manejo responsable de los datos de
acuerdo con las instrucciones explícitas de la corporación. Todo
tratamiento de datos personales por mandato deberá ser previamente
formalizado a través de un contrato suscrito por las partes, que
estipule con claridad las condiciones y limitaciones específicas
respecto al tratamiento de los datos personales.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>Relativo a las Obligaciones de Cumplimiento del Personal del
Prestador</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El personal perteneciente al Prestador deberá cumplir con todas las
obligaciones legales vinculadas a sus tareas y descritas en el contrato
de prestación de servicio, y en forma especial, lo dispuesto en la Ley
17.336 sobre Propiedad Intelectual; la Ley 19.039 sobre Propiedad
Industrial, la Ley 21.459 sobre Delitos Informáticos; y la ley 19.628
sobre Protección de la Vida Privada.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador incluirá en los contratos de trabajo o de prestación de
servicios suscritos de las personas que ejecutarán el trabajo o
asesoría, las obligaciones de confidencialidad, propiedad intelectual y
cumplimiento legal que aquél asume en virtud del presente contrato.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador deberá entregar a la corporación una nómina del personal
que participará en las tareas que son objeto del presente contrato,
antes de comenzar su ejecución. El listado contendrá, a lo menos, los
siguientes datos: nombres y apellidos, RUT, cargo, dirección y teléfono
de contacto.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador se compromete a garantizar que el personal asignado al
contrato esté debidamente capacitado y cumpla con los requisitos de
cualificación necesarios para sus respectivas funciones. Asimismo, se
llevarán a cabo las verificaciones de antecedentes apropiadas antes de
su asignación y se asegurará su cumplimiento de los acuerdos de
confidencialidad y de las políticas de seguridad de la información de la
corporación.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En caso de cualquier cambio en el personal, el Prestador debe
comunicarlo previamente y por cualquier medio a los supervisores de la
corporación, sin perjuicio de informarlo por escrito a más tardar dentro
de las 24 horas siguientes de producido el hecho.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador prestará el servicio a través de su personal. Solo en
caso de una emergencia comprobable, podrá subcontratar con otra persona
competente que elija. No obstante, deberá comunicar por escrito este
hecho al OTIC CChC, de forma previa al inicio de actividades, quien se
reserva el derecho de rechazarlo.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>Relativas a la verificación del correcto cumplimiento del
servicio</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador deberá en todo momento permitir que la corporación,
directamente o a través de un tercero designado por éste, pueda efectuar
diversas auditorías respecto de los servicios que son objeto del
presente contrato, otorgando facilidades y colaboración para ello.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador se compromete a tomar acciones correctivas apropiadas,
sin demoras indebidas, en respuesta a los hallazgos y recomendaciones de
las auditorías y a mantener registros de dichas acciones que estarán
disponibles para revisión de la corporación.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Además, el Prestador deberá mantener disponible la información
financiera y contable, así como sus auditores y órganos fiscalizadores,
cuando lo requiera la corporación para revisar los procesos y
procedimientos utilizados por el Prestador para el correcto cumplimiento
del contrato.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Para efectos de realizar auditorías físicas se garantizará el acceso
a las oficinas del Prestador en días y horas hábiles.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>Relativa al Cumplimiento Legal de la Continuidad de
Servicio</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador se obliga a contar con un Plan de Contingencias, formal
y escrito, que le permita asegurar la Continuidad del Negocio,
garantizando la disponibilidad permanente de los servicios que presta a
la corporación en virtud del presente contrato, incluyendo casos de
fuerza mayor.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Plan de Contingencias deberá incluir respaldos digitales,
almacenados fuera de las instalaciones del Prestador en donde se
encuentra la información respaldada.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Las Partes determinarán previamente el tipo de información que deberá
ser respaldada de manera cifrada o encriptada, si correspondiera.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Plan de Contingencias deberá considerar la posibilidad de
recuperar el servicio y la información con la que se está trabajando,
para continuar su normal desarrollo ante una contingencia.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La existencia de este Plan podrá ser revisada o auditada por la
corporación, si así lo requiriese.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO</u>: Uso de Inteligencia Artificial y Protección de
Información Confidencial</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En el caso de que el Prestador utilice tecnología de inteligencia
artificial (en adelante “IA”) para la prestación de los servicios objeto
del presente Contrato, estará obligado a lo siguiente.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>Definiciones</strong></p>
<ul style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><u>Información Confidencial</u>: aquella definida en la cláusula
Noveno del presente contrato.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><u>Sistema de IA</u>: Cualquier software, modelo o plataforma que
utilice algoritmos de aprendizaje automático, procesamiento de lenguaje
natural, redes neuronales u otras tecnologías similares.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><u>Entrenamiento de IA</u>: Uso de datos para desarrollar,
mejorar o ajustar sistemas de IA.</p></li>
</ul>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>Obligaciones sobre Uso de IA y Datos</strong></p>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" type="i">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador deberá obtener la correspondiente autorización por
escrito sobre el concreto servicio y Prestador que le va a prestar el
servicio de IA. A estos efectos se presentará un informe en el que se
declare que la solución de IA que va a utilizar cumple con los
requerimientos de la Ley N°19.628 y normativa vigente en Chile y demás
normativa de aplicación en esta materia, así como los estándares de la
OCDE para la clasificación de los sistemas de IA de 2022 y cualquier
otro estándar que sean aplicables al servicio.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador debe explicar las técnicas y algoritmos que
utilizará la solución de IA, así como las posibles limitaciones o sesgos
inherentes a las técnicas y algoritmos.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador se compromete a no divulgar, compartir ni utilizar
la Información Confidencial para entrenar sistemas de IA propios o de
terceros.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Se permite el uso de IA únicamente para análisis interno
vinculado al objeto del contrato, sin que ello implique entrenamiento ni
almacenamiento persistente de la Información Confidencial.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador deberá implementar medidas técnicas y organizativas
adecuadas para proteger la Información Confidencial contra accesos no
autorizados, conforme a la Ley N°19.628 y normativa vigente en
Chile.</p></li>
</ol>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>Transparencia y Control</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador informará al Cliente, cuando éste lo solicite, sobre el
funcionamiento general de los Sistemas de IA utilizados, incluyendo su
finalidad y alcance. El Cliente podrá auditar el cumplimiento de estas
obligaciones durante la vigencia del contrato.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>Finalización del Acuerdo</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Al término del contrato, el Prestador deberá eliminar o aislar la
Información Confidencial de sus sistemas, incluyendo los entornos de IA.
El Prestador deberá documentar el proceso de eliminación y aislación de
los datos y deberá emitir una certificación que confirme dicha
eliminación y/o aislación de los datos.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>Auditoría y Cumplimiento</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador permitirá auditorías razonables y algorítmicas por parte
del Cliente para verificar el cumplimiento de esta cláusula,
especialmente en relación con el uso de IA y la protección de la
Información Confidencial.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>Responsabilidad</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador será responsable por cualquier incumplimiento de las
obligaciones establecidas en la presente cláusula, incluyendo incidentes
de seguridad, uso indebido de IA o vulneración de datos personales,
debiendo indemnizar al OTIC CChC por los daños directos ocasionados.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Adicionalmente, el Prestador se obligará a la responsabilidad
derivada del incumplimiento por parte de la solución IA sobre la
responsabilidad civil extracontractual derivada del uso de la
inteligencia artificial; así como la normativa en materia de propiedad
intelectual o industrial y de secretos empresariales, de la normativa de
protección de datos personales o de otros derechos fundamentales
(igualdad, etc.), así como cualquier otra responsabilidad que afecte a
la seguridad de la información de la organización o a otra normativa que
pudiese ser de aplicación</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO PRIMERO</u>: Ausencia de Relación
Laboral.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Las partes vienen en declarar que los trabajadores, funcionarios,
consultores y asesores del Prestador que ejecuten actividades
relacionadas con el objeto del presente Contrato, estarán y permanecerán
bajo su dependencia y subordinación, no existiendo vínculo alguno,
laboral o de cualquier otro tipo, entre el OTIC CChC y el Prestador.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">A mayor abundamiento, el Prestador será el único responsable del pago
oportuno de las remuneraciones, indemnizaciones, desahucios, beneficios
y, en general, de toda cantidad que, por cualquier concepto, deba pagar
a su personal.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador declara estar al día en el pago de sueldos, leyes
sociales, impuestos, seguros y demás obligaciones de carácter laboral y
previsional respecto de sus trabajadores y demás personas que trabajan
bajo su dependencia y subordinación.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">A mayor abundamiento, las partes declaran expresamente que no se
constituye entre ellas ninguna forma de asociación.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO SEGUNDO</u>: Obligaciones Laborales, Previsionales,
de Seguridad y Salud Ocupacional</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Las partes acuerdan que el Prestador se obliga en carácter de
obligación esencial del presente Contrato, a cumplir estrictamente la
legislación nacional en general y muy especialmente la legislación
laboral, de seguridad y salud ocupacional.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">A este respecto, para acreditar el cumplimiento de las obligaciones
laborales y previsionales, el Prestador deberá remitir al Área de
Recursos Humanos del OTIC CChC, en el caso de requerirlo (<a
href="mailto:pgutierrez@ccc.CL">pgutierrez@ccc.cl</a> / <a
href="mailto:rrhhdocumentos@ccc.cl">rrhhdocumentos@ccc.cl</a>), antes
del pago de las respectivas facturas, los comprobantes de pago de
remuneraciones y cotizaciones de sus trabajadores relacionados con este
Contrato (Formulario F-30), siendo obligación esencial del Prestador
pagar efectivamente dichas cotizaciones, sin estarle permitido la mera
declaración de las cotizaciones previsionales y de salud.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Sin el cumplimiento de esta obligación y sin que previamente se
acredite su cumplimiento por el Prestador en la forma indicada, la
Corporación no cursará en caso alguno los pagos acordados, pudiendo en
todo caso hacer uso de las facultades de retención y demás que le
concede el Código del Trabajo, específicamente en el artículo 183-C, sin
perjuicio de la facultad de hacer efectiva la terminación del Contrato y
cobrar las boletas de garantía existentes o hacer efectivas otras
cauciones constituidas, de haberlas.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador deberá estar en condiciones en todo momento de demostrar
el cumplimiento de la legislación. En todo caso, deberá hacerlo las
veces que sea requerido, entregando al Área de Recursos Humanos del OTIC
CChC (<a href="mailto:pgutierrez@ccc.CL">pgutierrez@ccc.cl</a> / <a
href="mailto:rrhhdocumentos@ccc.cl">rrhhdocumentos@ccc.cl</a>), los
siguientes documentos:</p>
<ol style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8" type="1">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Listado de todos los trabajadores, firmado por el representante
legal, que trabajarán en la prestación del servicio.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Certificado de Cumplimiento Laboral emitido por la Inspección del
Trabajo, o, cuando corresponda, por el Organismo Técnico idóneo
debidamente acreditado.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Contrato de Trabajo Individual inicial y cada vez que tenga
modificaciones.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Copias de liquidaciones de remuneraciones de los trabajadores del
Prestador, relacionados con el servicio objeto de este Contrato, cuando
se le requiera.</p></li>
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Fotocopias de los certificados de declaración y pago de
cotizaciones de salud y previsión social, y de la Administradora de
Fondos de Cesantía y cualquiera otra obligación de seguridad social a
que legalmente se encuentre obligado el Prestador con respecto los
trabajadores que prestaran el servicio contratado.</p></li>
</ol>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Los certificados deberán ser presentados, en conjunto con el resto de
la documentación cada vez que sean requerirlos por el OTIC CChC para su
administración, por las remuneraciones devengadas por los trabajadores
dependientes del Prestador, que hayan prestado servicios con motivo del
presente Contrato.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador tendrá que responder por la totalidad de los perjuicios,
daños y/o gastos ocasionados al OTIC CChC por los eventuales
incumplimientos contractuales, laborales, previsionales, de seguridad y
salud ocupacional, o de cualquiera otra naturaleza, del Prestador,
debiendo incluso reembolsar y/o indemnizar al OTIC CChC todos los gastos
y/o pagos, incluyendo los gastos judiciales y extrajudiciales, en que
esta deba incurrir producto de reclamos y/o demandas en que se vea
envuelta por reclamos interpuestos contra el Prestador, así como la
totalidad de los costas procesales y gastos de abogado que deba
solventar el OTIC CChC para llevar a cabo una defensa por estos
conceptos, principalmente por reclamos laborales donde se intente hacer
efectiva responsabilidad solidaria, subsidiaria o de otro tipo al OTIC
CChC.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El OTIC CChC estará facultado para descontar directamente de la
facturación del Prestador o de cualquier otro pago que deba efectuarle,
cualquier gasto en que haya debido incurrir por los conceptos aquí
señalados.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO TERCERO</u>: Cumplimiento de Normativa y Prevención
de Delitos.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>C</u></strong>on ocasión de la entrada en vigencia de la
Ley N.° 20.393, se ha establecido la responsabilidad penal de las
personas jurídicas en los delitos de Lavado de Activos, Financiamiento
del Terrorismo, Cohecho Funcionario Público Nacional o Extranjero,
Receptación, Negociación Incompatible, Corrupción entre Particulares,
Apropiación Indebida, Administración Desleal, Contaminación de Aguas,
Procesamiento de Productos Marinos Vedados, Actividades Extractivas
Ilegales, Sobreexplotación de recursos hidrobiológicos, Infracción de
medidas de cuarentena o aislamiento decretadas por autoridad sanitaria,
obtención fraudulenta del subsidio de desempleo, infracción de normas de
extranjería, control de armas, explosivos y sustancias químicas, robo,
hurto o posesión ilegal de madera, delitos informáticos, uso no
autorizado del secreto profesional, violación del secreto comercial,
delitos medioambientales, delitos informáticos, fraude de remuneración y
los demás que se incorporen a futuro para el adecuado cumplimiento de la
ley y normativa aplicable a esta materia, los que se entenderán
incorporados a la presente clausula.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Para dar cumplimiento a lo establecido en dicha ley, la Corporación
de Capacitación de la Construcción ha implementado un Modelo de
Prevención de Delitos, a través del cual promoverá la prevención de la
comisión de los delitos sancionados. El Modelo de Prevención de Delitos
se encuentra a disposición del público en general en la página web de la
Corporación de Capacitación de la Construcción.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Por su parte, el Prestador declara que a la fecha ha dado estricto
cumplimiento a las normas de la Ley N° 20.393 sobre responsabilidad
penal de las personas jurídicas, que no ha sido condenado por tales
delitos con anterioridad y que sus representantes legales no han sido
citados de acuerdo con lo señalado en el artículo 22 de la Ley 20.393,
comprometiéndose por el presente instrumento a mantener tal cumplimiento
durante toda la vigencia del Contrato, obligándose, asimismo, a no
incurrir o desarrollar, en caso alguno, a través de cualquiera de sus
dueños, directores, administradores, representantes, agentes o
dependientes en general, ningún tipo de actividad o conducta que pudiera
afectar el cumplimiento de tales normas.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador tiene la obligación de denunciar e informar, tan pronto
como llegue a su conocimiento, al Encargado de Prevención de Delitos de
la Corporación de Capacitación de la Construcción, mediante canal de
denuncias establecido para estos efectos, en la página web de la
Corporación de Capacitación de la Construcción, <a
href="http://www.ccc.cl">www.ccc.cl</a> , la ocurrencia de cualquier
hecho o hechos, que pudieren llegar constituir uno de los delitos
mencionados en esta cláusula o de cualquier hecho que pudiere conllevar
la responsabilidad penal de cualquiera de las partes o afectar su
imagen.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La Corporación de Capacitación de la Construcción no permite en caso
alguno, y prohíbe expresamente a sus Prestadores, prestadores y clientes
participar de manera directa o indirecta en cualquier conducta que pueda
constituir los delitos de Lavado de Activos, Financiamiento del
Terrorismo, Cohecho Funcionario Público Nacional o Extranjero,
Receptación, Negociación Incompatible, Corrupción entre Particulares,
Apropiación Indebida, Administración Desleal, Contaminación de Aguas,
Procesamiento de Productos Marinos Vedados, Actividades Extractivas
Ilegales, Sobreexplotación de recursos hidrobiológicos, Infracción de
medidas de cuarentena o aislamiento decretadas por autoridad sanitaria,
obtención fraudulenta del subsidio de desempleo, infracción de normas de
extranjería, control de armas, explosivos y sustancias químicas, robo,
hurto o posesión ilegal de madera, delitos informáticos, uso no
autorizado del secreto profesional, violación del secreto comercial,
delitos medioambientales, delitos informáticos, fraude de remuneración,
como también otros que se incorporen a futuro, ni recibir o entregar
cualquier especie de pago indebido que pueda ser utilizado en la
comisión de los delitos sancionados por la Ley N.° 20.393 antes
mencionados, ni aun cuando el resultado del delito fuere beneficioso
para la Corporación. El incumplimiento de las disposiciones presentadas
en esta cláusula será sancionado con la terminación del Contrato.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Las Partes declaran que, en el desarrollo del presente Contrato y en
la ejecución de todos los servicios objeto del mismo, se obligan: (i) a
cumplir con todas las leyes y regulaciones aplicables al trabajo,
servicio, producto o equipo a entregar o a cualquiera otra prestación a
realizar en virtud de este contrato; (ii) a no cometer actos que puedan
ser constitutivos de delitos, y en especial a no cometer los delitos
de Lavado de Activos, Financiamiento del Terrorismo, Cohecho Funcionario
Público Nacional o Extranjero, Receptación, Negociación Incompatible,
Corrupción entre Particulares, Apropiación Indebida, Administración
Desleal, Contaminación de Aguas, Procesamiento de Productos Marinos
Vedados, Actividades Extractivas Ilegales, Sobreexplotación de recursos
hidrobiológicos, Infracción de medidas de cuarentena o aislamiento
decretadas por autoridad sanitaria, obtención fraudulenta del subsidio
de desempleo, infracción de normas de extranjería, control de armas,
explosivos y sustancias químicas, robo, hurto o posesión ilegal de
madera, delitos informáticos, uso no autorizado del secreto profesional,
violación del secreto comercial, delitos medioambientales, delitos
informáticos, fraude de remuneración, y los demás que en el futuro se
incorporen a la Ley 20.393 sobre Responsabilidad Penal de las Personas
Jurídicas, y a cumplir debidamente, cada una de ellas, con su deber de
dirección y supervigilancia, adoptando e implementando un modelo de
prevención de delitos de acuerdo a lo establecido en dicha ley o, al
menos, los controles suficientes y eficaces para prevenir, evitar y
detectar la comisión de los referidos delitos por parte de sus
trabajadores y dependientes; y (iii) a informar, tan pronto como llegue
a su conocimiento, la ocurrencia de hechos que pudieren constituir
alguno de los delitos mencionados en esta cláusula o de cualquier hecho
que pudiere conllevar la responsabilidad penal de cualquiera de las
partes o afectar su imagen.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Las Partes, dejan expresa constancia que las obligaciones impuestas
en esta cláusula han sido una consideración esencial para celebrar el
presente Contrato, por lo que se reservan el derecho a poner término
unilateral al mismo, en caso de cualquier incumplimiento de dichas
obligaciones, sin necesidad de juicio y mediante el solo envío de una
carta en tal sentido, sin perjuicio del derecho que las partes tienen de
demandar los perjuicios que dicho incumplimiento le cause.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO SEXTO</u>: Caso Fortuito y Fuerza
Mayor.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Ambas partes acuerdan que el cumplimiento de las respectivas
obligaciones queda eximido y/o liberado en caso de imposibilidad
derivada de fuerza mayor o caso fortuito, conforme lo señalado en el
artículo 45 del Código Civil.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En caso de producirse una circunstancia de caso fortuito o fuerza
mayor, la parte que se viere enfrentada a éste deberá comunicarla a la
otra por escrito tan pronto como tenga conocimiento de la misma,
señalando una descripción de los hechos con el mayor grado de detalle
que pueda razonablemente darse, la forma en que se ve afectada, las
medidas que se hayan adoptado y deban adoptarse para superarlo a la
mayor brevedad, y el tiempo estimado en subsanarla o superarla.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En caso que la fuerza mayor o caso fortuito que enfrente una parte
supere el plazo de 30 días, la otra parte podrá poner término anticipado
al Contrato sin indemnización o compensación alguna para la primera.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO QUINTO</u>: Propiedad Intelectual e
Industrial.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Los derechos de propiedad intelectual e industrial sobre materiales,
soluciones y resultados que surjan como consecuencia de la concreta
adaptación de las metodologías en el desarrollo de la prestación de los
servicios de este contrato pertenecerán al OTIC CChC de forma única y
exclusiva.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador se compromete y acuerda mantener indemne al OTIC CChC de
cualquier reclamación realizada por terceros como consecuencia de la
infracción de estos derechos motivada por la prestación de los servicios
regulados en este contrato.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">No deberá interpretarse en ningún caso el contenido del contrato como
una cesión u otorgamiento de cualquier tipo de derecho de uso sobre los
Derechos de Propiedad Intelectual e Industrial previos de ninguna de las
partes.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO SEXTO</u>: Comunicaciones.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">En este acto las partes designan a las siguientes personas para las
comunicaciones que surjan entre ellas en virtud del presente
contrato:</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark> :</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Nombre: <mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Correo: <mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Domicilio: Luis Thayer Ojeda 0115, of. 901, Providencia.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>Corporación de Capacitación de la Construcción</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Nombre: <mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span>.</mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Correo: <mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Domicilio: calle Santa Beatriz 170, Providencia.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO SÉPTIMO</u>: Modificaciones del
Contrato</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Cualquier modificación al presente contrato, ya sea en todo o parte
de cualquiera de las cláusulas, deberá hacerse de mutuo acuerdo entre
las partes, suscribiendo un adendum en el cual se establezcan los
cambios acordados.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO OCTAVO</u>: Cesión del Contrato.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El Prestador no podrá enajenar, ni gravar, ni ceder en todo ni en
parte los derechos y obligaciones que emergen del presente Contrato, a
ningún título; salvo autorización previa y escrita de la Corporación de
Capacitación de la Construcción.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>DÉCIMO NOVENO</u>: Acuerdo completo y
suficiente</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El presente contrato y sus anexos futuros, debidamente firmados por
las partes, contienen el completo y total entendimiento entre las
partes, reemplazando y sustituyendo a todos los acuerdos previos, orales
o escritos, relativos a la misma materia.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Si una o más de las cláusulas del presente contrato fueren declaradas
inexistentes, nulas o ineficaces, ello no afectará la existencia,
validez y eficacia del contrato en general, el que seguirá plenamente
vigente a excepción de dicha o dichas cláusulas, salvo que estas últimas
hayan sido causa determinante para una o ambas partes para
contratar.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>VIGÉSIMO</u>: Prohibición.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Ninguna de las partes podrá contratar directa o indirectamente a los
empleados de las partes ni a otras personas que una de las partes emplee
o a través de las cuales preste servicios, sin el consentimiento previo
y escrito de la otra parte. Esta obligación se mantendrá vigente por 1
año luego de terminado el presente contrato.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><u>VIGÉSIMO PRIMERO</u>: Anexos del contrato.</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Forman parte integrante e inseparable del presente contrato, para
todos los efectos legales a que haya lugar, los siguientes anexos:</p>
<ul style="margin-left:20px;margin-bottom:8px;font-size:12px;line-height:1.8">
<li style="margin-bottom:4px"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">Anexo 1: _________, presentado por el Prestador con fecha
__________.</p></li>
</ul>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><mark><u>VIGÉSIMO SEGUNDO</u>: Domicilio y Resolución de
Conflictos.</mark></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">Para todos los efectos legales derivados de este contrato, las
partes fijan su domicilio en la ciudad de Santiago.</mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">Cualquier dificultad o controversia que se produzca entre los
contratantes respecto de la aplicación, interpretación, duración,
validez o ejecución de este Contrato o cualquier otro motivo será
sometida a los tribunales ordinarios de justicia ubicados en la comuna
referida precedentemente.</mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong><mark><u>VIGÉSIMO SEGUNDO</u>: Domicilio y Resolución de
Conflictos.</mark></strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">Para todos los efectos legales derivados de este contrato, las
partes fijan su domicilio en la ciudad de Santiago.</mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">Cualquier dificultad o controversia que se produzca entre las
partes con motivo del presente Contrato o sus Anexos, sus documentos
complementarios o modificatorios, si los hubiere, ya se refiera a su
aplicación, interpretación, cumplimiento, validez, duración, ejecución o
cualquier otro motivo relacionado con este Contrato, se resolverá
mediante arbitraje sometido a árbitro mixto conforme al Reglamento
Procesal de Arbitraje vigente del Centro de Arbitrajes y Mediación de
Santiago, de la Cámara de Comercio de Santiago A.G., cuyas disposiciones
las partes declaran conocer y aceptar.</mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">Las partes confieren mandato especial irrevocable a la Cámara
de Comercio de Santiago A.G. para que, a solicitud escrita de cualquiera
de ellas, designe a un árbitro arbitrador en cuanto al procedimiento y
de derecho en cuanto al fallo, de entre los integrantes del cuerpo
arbitral del Centro de Arbitrajes de esa Cámara. En contra de las
resoluciones del árbitro no procederá recurso alguno, con excepción de
la queja y la casación en la forma, y por lo que las partes renuncian
expresamente a ellos. El árbitro queda especialmente facultado para
resolver todo asunto relacionado con su competencia y/o
jurisdicción.</mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>PERSONERÍAS.</strong> La personería de don
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">_______________,</mark> para representar a <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">“______”,</mark>
consta en <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">_______________,</mark> reducida a escritura pública con
fecha <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">_____</mark> de <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">_____</mark> de <mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">____</mark> con
Repertorio Notarial N<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">°_______,</mark> otorgado en Notaría
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">________________</mark> de Santiago
<mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">______________________</mark> Notario público.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">La personería de don José Esteban Garay Anex-Dit-Chenaud y Sergio
Andrés Torretti Armendáriz para representar a la Corporación de
Capacitación de la Construcción consta de escritura pública de fecha 24
de abril de 2023, otorgada en la Notaría de Santiago de don Félix Jara
Cadot.</p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><mark style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 2px">La personería de don ________________ para representar a
____________, consta el certificado de estatuto actualizado del Registro
de Empresas y Sociedades de fecha XX de ________ 20XX, Código de
Verificación Electrónico (CVE) ____________.</mark></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8">El presente Contrato se suscribe mediante firma electrónica, quedando
dos ejemplares de igual tenor, validez y data, para de cada parte.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:11px">
<colgroup>
<col style="width: 44%" />
<col style="width: 4%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td style="padding:4px 8px;border:1px solid #dde8f5">José Esteban Garay Anex-Dit-Chenaud</td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5">Sergio Andrés Torretti Armendáriz</td>
</tr>
<tr class="even">
<td style="padding:4px 8px;border:1px solid #dde8f5">Representante Legal</td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5">Representante Legal</td>
</tr>
<tr class="odd">
<td style="padding:4px 8px;border:1px solid #dde8f5"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>CORPORACION DE CAPACITACION</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>DE LA CONSTRUCCION</strong></p></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"></td>
<td style="padding:4px 8px;border:1px solid #dde8f5"><p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>CORPORACION DE CAPACITACION</strong></p>
<p style="margin-bottom:8px;text-align:justify;font-size:12px;line-height:1.8"><strong>DE LA CONSTRUCCION</strong></p></td>
</tr>
</tbody>
</table>
<table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:11px">
<colgroup>
<col style="width: 100%" />
</colgroup>
<tbody>
<tr class="odd">
<td style="padding:4px 8px;border:1px solid #dde8f5"><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></td>
</tr>
<tr class="even">
<td style="padding:4px 8px;border:1px solid #dde8f5">Representante Legal</td>
</tr>
<tr class="odd">
<td style="padding:4px 8px;border:1px solid #dde8f5"><mark><span style="background:#fff3cd;color:#856404;border-radius:3px;padding:1px 4px;font-weight:600">[*]</span></mark></td>
</tr>
</tbody>
</table>
`};var ee={titulo:"Política de Privacidad y Protección de Datos Personales",html:`
<h2>1. Objeto y ámbito de aplicación</h2>
<p>La presente Política regula el tratamiento de datos personales realizado por la <strong>Corporación de Capacitación de la Construcción (OTIC CChC)</strong> a través de la plataforma interna NEXO ContractOS, en cumplimiento de la Ley N° 19.628 y los principios de la Ley N° 21.719 de Protección de Datos Personales.</p>
<div class="callout"><strong>Base legal</strong><p>Ejecución de una relación contractual (Art. 13 letra b, Ley 21.719). No se requiere consentimiento expreso para tratamientos necesarios para gestionar contratos.</p></div>
<h2>2. Responsable del tratamiento</h2>
<table><tr><th>Dato</th><th>Información</th></tr>
<tr><td>Razón social</td><td>Corporación de Capacitación de la Construcción</td></tr>
<tr><td>RUT</td><td>70.200.800-K</td></tr>
<tr><td>Domicilio</td><td>Santa Beatriz 170, piso 3, Providencia, Santiago</td></tr>
<tr><td>Representante legal</td><td>José Esteban Garay Anex-Dit-Chenaud (CI 15.362.979-K)</td></tr>
<tr><td>Contacto privacidad</td><td>privacidad@otic-cchc.cl</td></tr></table>
<h2>3. Datos que se tratan</h2>
<h3>Usuarios de la plataforma</h3>
<ul><li>Nombre completo y email corporativo</li><li>Empresa u organización</li><li>Rol asignado (Administrador, Operador, Colaborador)</li><li>Log de acceso y trazabilidad de acciones</li></ul>
<h3>Datos en contratos</h3>
<ul><li>Nombre y RUT de representantes legales</li><li>Firma electrónica de los firmantes</li><li>Datos de contacto de contrapartes</li><li>Información económica contractual</li></ul>
<h2>4. Finalidades</h2>
<ol><li>Gestión del ciclo de vida de contratos</li><li>Control de acceso y autenticación</li><li>Trazabilidad y auditoría interna</li><li>Notificaciones y alertas automáticas</li><li>Repositorio contractual</li><li>Reportería y estadísticas</li><li>Cumplimiento de obligaciones legales</li></ol>
<h2>5. Plazos de conservación</h2>
<table><tr><th>Datos</th><th>Plazo</th></tr>
<tr><td>Usuarios activos</td><td>Durante la vigencia de la relación con OTIC CChC</td></tr>
<tr><td>Usuarios inactivos</td><td>Máximo 2 años desde la baja</td></tr>
<tr><td>Contratos</td><td>Vigencia del contrato + 5 años</td></tr>
<tr><td>Log de auditoría</td><td>5 años desde el registro</td></tr></table>
<h2>6. Proveedores (encargados de tratamiento)</h2>
<table><tr><th>Proveedor</th><th>Servicio</th></tr>
<tr><td><strong>Vercel Inc.</strong></td><td>Hosting y despliegue (DPA suscrito)</td></tr>
<tr><td><strong>Supabase Inc.</strong></td><td>Base de datos y autenticación (DPA suscrito)</td></tr></table>
<h2>7. Derechos de los titulares</h2>
<p>Puedes ejercer derechos de <strong>Acceso, Rectificación, Cancelación, Oposición y Portabilidad</strong> escribiendo a <strong>privacidad@otic-cchc.cl</strong>. Respuesta en máximo 30 días corridos.</p>
<h2>8. Seguridad</h2>
<ul><li>Autenticación con credenciales individuales</li><li>Control de acceso por roles</li><li>Log de auditoría permanente</li><li>Cifrado HTTPS/TLS en tránsito</li><li>Cifrado AES-256 en reposo (Supabase)</li><li>Copias de seguridad automáticas</li></ul>
<h2>9. Brechas de seguridad</h2>
<p>Notificación a la Agencia de Protección de Datos en máximo <strong>72 horas</strong> desde detección. Notificación a titulares afectados en el plazo más breve posible.</p>
<h2>10. Vigencia</h2>
<p>Versión 1.0 · 14 de junio de 2026. Ley N° 21.719 entra en plena vigencia el 1 de diciembre de 2026.</p>
<h2>11. Contacto</h2>
<p><strong>privacidad@otic-cchc.cl</strong> · Santa Beatriz 170, piso 3, Providencia, Santiago</p>
`},ae={titulo:"Términos y Condiciones de Uso",html:`
<h2>1. Aceptación</h2>
<p>El acceso y uso de NEXO implica aceptación plena de estos Términos. NEXO es de uso exclusivamente interno para OTIC CChC, su equipo de Fiscalía y las empresas contraparte que participan en procesos contractuales.</p>
<h2>2. Objeto</h2>
<p>NEXO es un sistema CLM para gestionar contratos de franquicia tributaria SENCE, costo empresa, NDA, prestación de servicios y addendum.</p>
<h2>3. Roles y registro</h2>
<table><tr><th>Rol</th><th>Acceso</th></tr>
<tr><td><strong>Administrador</strong></td><td>Acceso total + configuración del sistema</td></tr>
<tr><td><strong>Operador</strong></td><td>Proceso contractual completo — Fiscalía y Gerencia</td></tr>
<tr><td><strong>Colaborador</strong></td><td>Solo sus solicitudes, firma y repositorio propio</td></tr></table>
<h2>4. Obligaciones</h2>
<h3>Usos permitidos</h3>
<ul><li>Usar NEXO exclusivamente para gestión contractual de OTIC CChC</li><li>Mantener confidencialidad de credenciales</li><li>Notificar accesos no autorizados al Administrador</li><li>Proporcionar información veraz y actualizada</li></ul>
<h3>Usos prohibidos</h3>
<ul><li>Acceder a información fuera del alcance de tu rol</li><li>Compartir documentos con terceros no autorizados</li><li>Eludir mecanismos de autenticación o seguridad</li><li>Cargar contenido malicioso o ilegal</li><li>Realizar ingeniería inversa del sistema</li></ul>
<h2>5. Confidencialidad</h2>
<p>Toda la información de NEXO es confidencial. La obligación se mantiene tras el término de la relación con OTIC CChC.</p>
<h2>6. Propiedad intelectual</h2>
<p>NEXO ContractOS es titularidad de OTIC CChC. El acceso se concede como licencia personal, intransferible, no exclusiva y revocable.</p>
<h2>7. Suspensión del acceso</h2>
<p>El acceso puede suspenderse por incumplimiento de estos Términos, uso indebido, término de la relación con OTIC CChC, o decisión fundada en seguridad.</p>
<h2>8. Ley aplicable</h2>
<p>Leyes de la República de Chile. Controversias: Tribunales Ordinarios de Justicia de Santiago.</p>
<h2>9. Contacto</h2>
<p><strong>nexo@otic-cchc.cl</strong> · Santa Beatriz 170, piso 3, Providencia, Santiago · v1.0 · 14 junio 2026</p>
`},d={solicitudes:[{id:"SOL-001",desc:"Capacitación Prevención de Riesgos",empresa:"ACHS Capacitaciones",rut:"70.880.360-3",tipo:"Cap. OTIC",monto:124e5,horas:120,fecha:"01 ene 2025",estado:"procesado",etapa:"Negociación",actor:"Empresa",contratoId:"CT-001",docs:{solicitud:!0,rut:!0,sence:!0,programa:!0,cotizacion:!0,bancario:!0},obs:""},{id:"SOL-002",desc:"Curso Obras Civiles Avanzado",empresa:"Constructora Arenas",rut:"76.555.123-K",tipo:"Proveedor",monto:875e4,horas:80,fecha:"15 feb 2025",estado:"procesado",etapa:"Borrador",actor:"Fiscalía",contratoId:"CT-002",docs:{solicitud:!0,rut:!0,sence:!1,programa:!0,cotizacion:!1,bancario:!0},obs:"Faltan: resolución SENCE y cotización"},{id:"SOL-003",desc:"Convenio Marco 2025",empresa:"INACAP",rut:"71.028.900-2",tipo:"Cap. OTIC",monto:221e5,horas:200,fecha:"01 ene 2025",estado:"procesado",etapa:"Firma pendiente",actor:"Todos",contratoId:"CT-003",docs:{solicitud:!0,rut:!0,sence:!0,programa:!0,cotizacion:!0,bancario:!0},obs:""},{id:"SOL-004",desc:"Prevención de Riesgos Sector",empresa:"CChC Valparaíso",rut:"70.915.000-5",tipo:"Convenio",monto:52e5,horas:60,fecha:"01 jun 2024",estado:"procesado",etapa:"Vencido",actor:"Fiscalía",contratoId:"CT-004",docs:{solicitud:!0,rut:!0,sence:!0,programa:!0,cotizacion:!0,bancario:!0},obs:""},{id:"SOL-005",desc:"Capacitación Obras Civiles",empresa:"Centro Técnico Construir",rut:"76.900.001-1",tipo:"Cap. OTIC",monto:62e5,horas:120,fecha:"12 jun 2025",estado:"pendiente",etapa:"Solicitud",actor:"Fiscalía",contratoId:null,docs:{solicitud:!0,rut:!0,sence:!1,programa:!0,cotizacion:!1,bancario:!0},obs:"Falta: Resolución SENCE y cotización"},{id:"SOL-006",desc:"Honorarios Relator Gestión",empresa:"Carlos Mendoza",rut:"15.234.567-8",tipo:"Honorarios",monto:32e5,horas:40,fecha:"11 jun 2025",estado:"pendiente",etapa:"Solicitud",actor:"Fiscalía",contratoId:null,docs:{solicitud:!0,rut:!1,sence:!1,programa:!1,cotizacion:!0,bancario:!1},obs:"Faltan varios documentos"}],contratos:[{id:"CT-001",solId:"SOL-001",n:"CT-2025-001",parte:"ACHS Capacitaciones",tipo:"Cap. OTIC",monto:124e5,ini:"01 ene 2025",fin:"31 jul 2025",etapa:"Negociación",actor:"Empresa",estado:"vigente",vbs:{gerencia:!1,fiscal:!1},firmas:{fiscalia:!1,otic:!1,empresa:!1},versiones:[{v:1,fecha:"06 ene 2025",autor:"Fiscalía"},{v:2,fecha:"12 ene 2025",autor:"Fiscalía"}],obs_neg:[{actor:"OTIC",texto:"Cláusula 3: plazo informes mensual",fecha:"08 ene 2025",resuelta:!0}],historial:[{fecha:"01 ene 2025",texto:"Solicitud SOL-001 recibida"},{fecha:"03 ene 2025",texto:"Documentos revisados — completos"},{fecha:"06 ene 2025",texto:"Borrador v1 elaborado por Fiscalía"},{fecha:"08 ene 2025",texto:"Obs. OTIC: plazo informes"},{fecha:"12 ene 2025",texto:"Borrador v2 actualizado, enviado a empresa"}]},{id:"CT-002",solId:"SOL-002",n:"CT-2025-002",parte:"Constructora Arenas",tipo:"Proveedor",monto:875e4,ini:"15 feb 2025",fin:"15 ago 2025",etapa:"Borrador",actor:"Fiscalía",estado:"proceso",vbs:{gerencia:!1,fiscal:!1},firmas:{fiscalia:!1,otic:!1,empresa:!1},versiones:[{v:1,fecha:"18 feb 2025",autor:"Fiscalía"}],obs_neg:[],historial:[{fecha:"15 feb 2025",texto:"Solicitud SOL-002 recibida"},{fecha:"17 feb 2025",texto:"Docs revisados — info incompleta notificada"},{fecha:"20 feb 2025",texto:"OTIC completó información"},{fecha:"18 feb 2025",texto:"Borrador v1 elaborado"}]},{id:"CT-003",solId:"SOL-003",n:"CT-2025-003",parte:"INACAP",tipo:"Cap. OTIC",monto:221e5,ini:"01 ene 2025",fin:"30 sep 2025",etapa:"Firma pendiente",actor:"Todos",estado:"vigente",vbs:{gerencia:!0,fiscal:!0},firmas:{fiscalia:!0,otic:!1,empresa:!1},versiones:[{v:1,fecha:"20 dic 2024",autor:"Fiscalía"},{v:2,fecha:"28 dic 2024",autor:"Fiscalía"}],obs_neg:[],historial:[{fecha:"15 dic 2024",texto:"Solicitud recibida"},{fecha:"20 dic 2024",texto:"Borrador v1 elaborado"},{fecha:"26 dic 2024",texto:"Empresa validó sin obs."},{fecha:"30 dic 2024",texto:"VB Gerencia y Fiscal otorgados"},{fecha:"02 ene 2025",texto:"Fiscalía firmó"}]},{id:"CT-004",solId:"SOL-004",n:"CT-2025-004",parte:"CChC Valparaíso",tipo:"Convenio",monto:52e5,ini:"01 jun 2024",fin:"01 jun 2025",etapa:"Vencido",actor:"Fiscalía",estado:"vencido",vbs:{gerencia:!0,fiscal:!0},firmas:{fiscalia:!0,otic:!0,empresa:!0},versiones:[{v:1,fecha:"05 may 2024",autor:"Fiscalía"}],obs_neg:[],historial:[{fecha:"01 jun 2024",texto:"Contrato firmado y vigente"},{fecha:"01 jun 2025",texto:"Contrato vencido — pendiente renovación"}]}],actividad:[{texto:"SOL-005 ingresada por OTIC — Centro Técnico Construir",fecha:"Hoy 09:14",actor:"o"},{texto:"Borrador v2 CT-2025-001 enviado a empresa",fecha:"Ayer 16:30",actor:"f"},{texto:"INACAP validó CT-2025-003 sin observaciones",fecha:"10 jun",actor:"e"},{texto:"VB Gerencia y Fiscal otorgados para CT-2025-003",fecha:"09 jun",actor:"f"}]},m={contratoId:null,revDocsSolId:null},I=!1,w=0,A=0,Ae={dashboard:"Dashboard",solicitudes:"1. Solicitudes",revision:"2. Revisión de documentos",editor:"3. Editor de borrador",negociacion:"4. Negociación",vb:"5. VB Gerencia y Fiscal",firma:"6. Firma",repositorio:"Repositorio",alertas:"Alertas y vencimientos",reportes:"Reportes",plantillas:"Plantillas","admin-usuarios":"Gestión de usuarios","admin-plantillas":"Gestión de plantillas","admin-recordatorios":"Recordatorios automáticos","admin-config":"Configuración del sistema",privacidad:"Política de privacidad",terminos:"Términos de uso",perfil:"Mi perfil","mis-solicitudes":"Mis solicitudes","mi-firma":"Pendiente de mi firma"};function v(n){document.querySelectorAll(".page").forEach(function(r){r.classList.remove("active")}),document.querySelectorAll(".nav-item").forEach(function(r){r.classList.remove("active")});var a=document.getElementById("page-"+n)||document.getElementById("pg-"+n);if(!a){a=document.createElement("div"),a.className="page",a.id="pg-"+n;var e=document.getElementById("main-content");e&&e.appendChild(a)}if(a&&a.classList.add("active"),!document.getElementById("admin-modal-overlay")){var t=document.createElement("div");t.id="admin-modal-overlay",t.style.cssText="display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:200;align-items:center;justify-content:center",t.innerHTML='<div style="background:#fff;border-radius:12px;padding:22px;width:100%;max-width:480px;max-height:90vh;overflow-y:auto;box-shadow:0 20px 50px rgba(0,0,0,.25)"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><div style="font-size:14px;font-weight:600" id="admin-modal-title"></div><button onclick="closeAdminModal()" style="background:none;border:none;cursor:pointer;font-size:18px;color:#888;line-height:1">✕</button></div><div id="admin-modal-body"></div></div>',t.onclick=function(r){r.target===t&&j()},document.body.appendChild(t)}document.querySelectorAll(".nav-item").forEach(function(r){r.dataset.p===n&&r.classList.add("active")});var i=document.getElementById("ptitle");i&&(i.textContent=Ae[n]||n);var o={dashboard:U,solicitudes:te,revision:V,editor:X,negociacion:D,vb:G,firma:H,repositorio:J,alertas:le,reportes:ce,plantillas:ge,"admin-usuarios":E,"admin-plantillas":N,"admin-recordatorios":Q,"admin-config":xe,privacidad:be,terminos:ye,perfil:he,"mis-solicitudes":ve,"mi-firma":Ce};o[n]&&o[n](),C()}function C(){var n=d.solicitudes.filter(function(p){return p.estado==="pendiente"}).length,a=d.solicitudes.filter(function(p){return p.estado==="pendiente"}).length,e=d.contratos.filter(function(p){return p.etapa==="Borrador"}).length,t=d.contratos.filter(function(p){return p.etapa==="Negociación"}).length,i=d.contratos.filter(function(p){return p.etapa==="VB pendiente"}).length,o=d.contratos.filter(function(p){return p.etapa==="Firma pendiente"}).length,r=M().length;function s(p,c){var u=document.getElementById(p);u&&(u.textContent=c,u.style.display=c>0?"inline-block":"none")}s("b-sol",n),s("b-rev",a),s("b-ed",e),s("b-neg",t),s("b-vb",i),s("b-firma",o),s("b-alerta",r)}function M(){var n=new Date("2025-06-12"),a=[];return d.contratos.forEach(function(e){if(e.etapa==="Vencido")a.push({tipo:"vencido",contrato:e});else if(e.fin&&e.fin!=="—"){var t=e.fin.split(" "),i={ene:0,feb:1,mar:2,abr:3,may:4,jun:5,jul:6,ago:7,sep:8,oct:9,nov:10,dic:11},o=new Date(parseInt(t[2]),i[t[1].toLowerCase()],parseInt(t[0])),r=Math.round((o-n)/(1e3*60*60*24));r<=30&&r>=0&&a.push({tipo:"vence",dias:r,contrato:e})}}),a}function l(n){var a=document.getElementById("toast");a.textContent=n,a.style.display="block",clearTimeout(a._to),a._to=setTimeout(function(){a.style.display="none"},3500)}function ne(){document.getElementById("modal-wrap").style.display="none"}(function(){var n=document.getElementById("modal-wrap");n&&n.addEventListener("click",function(a){a.target===n&&ne()})})();function Te(n){document.getElementById("doc-editor-el")&&document.getElementById("doc-editor-el").focus(),document.execCommand(n,!1,null)}function T(n){return"$"+Math.round(n).toLocaleString("es-CL")}function S(n){return d.solicitudes.find(function(a){return a.id===n})}function b(n){return d.contratos.find(function(a){return a.id===n})}function q(n){return{Solicitud:"sd",Borrador:"sd","Revisión docs":"sd",Negociación:"sr","VB pendiente":"sr","Firma pendiente":"sn",Firmado:"sf",Vencido:"sx",vigente:"sv",proceso:"sr",vencido:"sx"}[n]||"sd"}function L(n){return n==="Fiscalía"?'<span class="actor-f">Fiscalía</span>':n==="OTIC"?'<span class="actor-o">OTIC</span>':n==="Empresa"?'<span class="actor-e">Empresa</span>':'<span class="actor-f">Todos</span>'}function U(){var n=d.contratos.length,a=d.contratos.filter(function(r){return r.estado==="vigente"}).length,e=d.contratos.filter(function(r){return r.estado==="proceso"}).length,t=d.solicitudes.filter(function(r){return r.estado==="pendiente"}).length;document.getElementById("dash-metrics").innerHTML='<div class="mc"><div class="mc-lbl">Solicitudes pendientes</div><div class="mc-val" style="color:'+(t>0?"#E65100":"inherit")+'">'+t+'</div><div class="mc-sub '+(t>0?"dn":"neu")+'">Requieren revisión</div></div><div class="mc"><div class="mc-lbl">Contratos activos</div><div class="mc-val">'+n+'</div><div class="mc-sub neu">En el sistema</div></div><div class="mc"><div class="mc-lbl">Vigentes</div><div class="mc-val" style="color:#2E7D32">'+a+'</div><div class="mc-sub up">OK</div></div><div class="mc"><div class="mc-lbl">En proceso</div><div class="mc-val">'+e+'</div><div class="mc-sub neu">Distintas etapas</div></div>',document.getElementById("dash-tbody").innerHTML=d.contratos.map(function(r){return`<tr class="cr" onclick="abrirContrato('`+r.id+`')"><td><b>`+r.n+"</b></td><td>"+r.parte+"</td><td>"+r.tipo+'</td><td><span class="sb '+q(r.etapa)+'">'+r.etapa+"</span></td><td>"+L(r.actor)+'</td><td>—</td><td><span class="sb '+q(r.estado)+'">'+r.estado+"</span></td></tr>"}).join("");var i="",o=M();o.length===0&&d.solicitudes.filter(function(r){return r.estado==="pendiente"}).length===0&&(i='<div style="font-size:11px;color:var(--color-text-secondary);padding:8px 0">No hay acciones pendientes</div>'),d.solicitudes.filter(function(r){return r.estado==="pendiente"}).forEach(function(r){var s=Object.values(r.docs).filter(Boolean).length,p=Object.keys(r.docs).length;i+='<div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:0.5px solid var(--color-border-tertiary)"><div style="background:#FFF3E0;color:#E65100;width:24px;height:24px;border-radius:5px;display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="ti ti-forms" style="font-size:13px" aria-hidden="true"></i></div><div style="flex:1"><div style="font-size:11px;font-weight:500">'+r.id+" — "+r.empresa+'</div><div style="font-size:10px;color:var(--color-text-secondary)">'+s+"/"+p+" docs · "+r.desc+`</div></div><button class="btn btnp" style="font-size:10px" onclick="irARevision('`+r.id+`')">Revisar</button></div>`}),o.forEach(function(r){i+='<div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:0.5px solid var(--color-border-tertiary)"><div style="background:#FFEBEE;color:#C62828;width:24px;height:24px;border-radius:5px;display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="ti ti-alert-circle" style="font-size:13px" aria-hidden="true"></i></div><div style="flex:1"><div style="font-size:11px;font-weight:500">'+r.contrato.parte+" — "+(r.tipo==="vencido"?"VENCIDO":"vence en "+r.dias+" días")+'</div><div style="font-size:10px;color:var(--color-text-secondary)">'+r.contrato.n+`</div></div><button class="btn" style="font-size:10px" onclick="nav('alertas')">Ver</button></div>`}),document.getElementById("dash-acciones").innerHTML=i||'<div style="font-size:11px;color:var(--color-text-secondary)">Sin acciones urgentes</div>',document.getElementById("dash-actividad").innerHTML=d.actividad.map(function(r,s){var p=r.actor==="f"?'<span class="actor-f">Fiscalía</span>':r.actor==="o"?'<span class="actor-o">OTIC</span>':'<span class="actor-e">Empresa</span>';return'<li class="tli">'+(s<d.actividad.length-1?'<div class="tll"></div>':"")+'<div class="tld"></div><div><div class="tlt">'+p+" "+r.texto+'</div><div class="tldt">'+r.fecha+"</div></div></li>"}).join("")}function te(){var n=d.solicitudes.filter(function(t){return t.estado==="pendiente"}),a=d.solicitudes.filter(function(t){return t.estado==="procesado"}),e="";n.length===0?e='<div class="empty-state"><i class="ti ti-mood-happy" aria-hidden="true"></i>No hay solicitudes pendientes</div>':(e='<div style="font-size:12px;font-weight:500;margin-bottom:10px">Pendientes de revisión ('+n.length+")</div>",e+='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;margin-bottom:16px">',n.forEach(function(t){var i=Object.values(t.docs).filter(Boolean).length,o=Object.keys(t.docs).length,r=i===o;e+='<div class="card" style="border:1.5px solid '+(r?"#2E7D32":"#E65100")+'"><div style="display:flex;gap:6px;align-items:center;margin-bottom:8px"><span class="actor-o">OTIC</span><span style="font-size:10px;color:#E65100;font-weight:500">● Nueva</span></div><div style="font-size:13px;font-weight:500;margin-bottom:3px">'+t.desc+'</div><div style="font-size:11px;color:var(--color-text-secondary);margin-bottom:8px">'+t.empresa+" · "+t.fecha+'</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;font-size:11px;margin-bottom:10px"><div style="background:var(--color-background-secondary);padding:5px;border-radius:5px"><div style="color:var(--color-text-secondary)">Monto</div><div style="font-weight:500">'+T(t.monto)+'</div></div><div style="background:var(--color-background-secondary);padding:5px;border-radius:5px"><div style="color:var(--color-text-secondary)">Docs</div><div style="font-weight:500;color:'+(r?"#2E7D32":"#E65100")+'">'+i+"/"+o+"</div></div></div>"+(t.obs?'<div style="font-size:10px;background:#FFF3E0;color:#E65100;padding:6px;border-radius:5px;margin-bottom:8px"><i class="ti ti-alert-triangle" aria-hidden="true"></i> '+t.obs+"</div>":"")+`<div style="display:flex;gap:6px"><button class="btn btng" style="font-size:11px" onclick="irARevision('`+t.id+`')"><i class="ti ti-clipboard-check" aria-hidden="true"></i> Revisar docs</button><button class="btn" style="font-size:11px" onclick="pedirInfoEmail('`+t.id+`')"><i class="ti ti-mail" aria-hidden="true"></i> Pedir info</button></div></div>`}),e+="</div>"),document.getElementById("sol-pendientes").innerHTML=e,document.getElementById("sol-hist-tbody").innerHTML=a.map(function(t){var i=t.contratoId?b(t.contratoId):null;return`<tr class="cr" onclick="abrirContrato('`+(t.contratoId||"")+`')"><td>`+t.id+"</td><td>"+t.desc+"</td><td>"+t.empresa+"</td><td>"+t.fecha+'</td><td><span class="sb '+(i?q(i.etapa):"sv")+'">'+(i?i.etapa:"Procesado")+"</span></td><td>"+(i?`<a style="color:#1a4f8a;cursor:pointer;font-size:11px" onclick="abrirContrato('`+i.id+`');event.stopPropagation()">`+i.n+"</a>":"—")+"</td></tr>"}).join("")}function Oe(n){m.revDocsSolId=n,v("revision")}function V(){var n=d.solicitudes.filter(function(u){return u.estado==="pendiente"}),a=document.getElementById("rev-content");if(n.length===0){a.innerHTML='<div class="empty-state"><i class="ti ti-mood-happy" aria-hidden="true"></i><div style="font-size:13px;font-weight:500;margin-bottom:6px">No hay solicitudes pendientes de revisión</div><p style="font-size:12px">Todas las solicitudes han sido procesadas.</p></div>';return}var e=m.revDocsSolId||n[0].id,t=S(e)||n[0],i=[{key:"solicitud",label:"Solicitud formal firmada por OTIC"},{key:"rut",label:"RUT y razón social de la empresa"},{key:"sence",label:"Resolución SENCE del curso"},{key:"programa",label:"Programa de capacitación"},{key:"cotizacion",label:"Cotización del OTEC"},{key:"bancario",label:"Datos bancarios del OTEC"}],o=n.map(function(u){var h=Object.values(u.docs).filter(Boolean).length,x=Object.keys(u.docs).length;return'<option value="'+u.id+'"'+(u.id===e?" selected":"")+">"+u.id+" — "+u.empresa+" ("+h+"/"+x+" docs)</option>"}).join(""),r=i.map(function(u,h){var x=t.docs[u.key];return`<div style="display:flex;align-items:center;gap:8px;padding:8px;border-radius:6px;background:var(--color-background-secondary);cursor:pointer;margin-bottom:6px" onclick="toggleDoc('`+e+"','"+u.key+`')"><div style="width:20px;height:20px;border-radius:4px;border:1.5px solid `+(x?"#2E7D32":"#E65100")+";background:"+(x?"#E8F5E9":"transparent")+';display:flex;align-items:center;justify-content:center;flex-shrink:0">'+(x?'<i class="ti ti-check" style="font-size:12px;color:#2E7D32" aria-hidden="true"></i>':"")+'</div><span style="font-size:12px;flex:1;color:'+(x?"var(--color-text-primary)":"#E65100")+'">'+u.label+'</span><span style="font-size:11px;color:var(--color-text-secondary)">'+(x?"✓ OK":"Falta")+"</span></div>"}).join(""),s=Object.values(t.docs).every(Boolean),p=Object.values(t.docs).filter(Boolean).length,c=Object.keys(t.docs).length;a.innerHTML='<div class="context-bar"><i class="ti ti-clipboard-check" aria-hidden="true"></i><div style="flex:1"><span style="font-weight:500">Revisando solicitud: </span><select style="border:none;background:transparent;font-size:12px;font-weight:500;color:#1a4f8a;cursor:pointer" onchange="CURRENT.revDocsSolId=this.value;renderRevision()">'+o+'</select></div><span style="font-size:11px;color:var(--color-text-secondary)">'+p+"/"+c+' documentos</span></div><div class="card"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><div class="card-title" style="margin:0">Checklist documentos — '+t.id+'</div><span class="sb '+(s?"sv":"sr")+'">'+(s?"Completo":"Incompleto")+'</span></div><div style="font-size:11px;color:var(--color-text-secondary);margin-bottom:10px">Empresa: <b>'+t.empresa+"</b> · Tipo: "+t.tipo+" · "+T(t.monto)+"</div>"+r+(t.obs?'<div style="font-size:11px;background:#FFF3E0;color:#E65100;padding:8px;border-radius:6px;margin-top:6px;margin-bottom:10px"><i class="ti ti-alert-triangle" aria-hidden="true"></i> '+t.obs+"</div>":"")+'<div style="margin-top:12px;font-size:11px;color:var(--color-text-secondary)">Haz clic en cada ítem para marcar/desmarcar</div></div><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn '+(s?"btng":"btn")+'" '+(s?"":'disabled style="opacity:.5;cursor:not-allowed"')+` onclick="aprobarRevision('`+t.id+`')"><i class="ti ti-check" aria-hidden="true"></i> `+(s?"Completo — elaborar borrador":"Faltan documentos")+`</button><button class="btn btnw" onclick="pedirInfoEmail('`+t.id+`')"><i class="ti ti-mail" aria-hidden="true"></i> Solicitar documentos faltantes</button></div>`}function qe(n,a){var e=S(n);if(e){e.docs[a]=!e.docs[a];var t=Object.entries(e.docs).filter(function(i){return!i[1]}).map(function(i){var o={solicitud:"Solicitud formal",rut:"RUT empresa",sence:"Resolución SENCE",programa:"Programa",cotizacion:"Cotización OTEC",bancario:"Datos bancarios"};return o[i[0]]});e.obs=t.length>0?"Falta: "+t.join(", "):"",V(),C()}}function Ne(n){var a=S(n);if(!a||!Object.values(a.docs).every(Boolean)){l("Faltan documentos. Complétalos primero.");return}a.estado="procesado",a.etapa="Borrador";var e={id:"CT-NEW-"+Date.now(),solId:n,n:"CT-2025-00"+(d.contratos.length+1),parte:a.empresa,tipo:a.tipo,monto:a.monto,ini:new Date().toLocaleDateString("es-CL"),fin:"—",etapa:"Borrador",actor:"Fiscalía",estado:"proceso",vbs:{gerencia:!1,fiscal:!1},firmas:{fiscalia:!1,otic:!1,empresa:!1},versiones:[],obs_neg:[],historial:[{fecha:new Date().toLocaleDateString("es-CL"),texto:"Documentos completos. Borrador iniciado por Fiscalía"}]};d.contratos.push(e),a.contratoId=e.id,d.actividad.unshift({texto:"Revisión docs "+n+" aprobada — borrador iniciado para "+a.empresa,fecha:"Ahora",actor:"f"}),m.contratoId=e.id,m.revDocsSolId=null,l("Documentos completos. Abriendo editor de borrador para "+a.empresa+"..."),C(),setTimeout(function(){v("editor")},600)}var oe={"Cap. OTIC":'<h2>PRIMERA: PARTES</h2><p>En Santiago, a <span class="ctag" onclick="editVar(this)">[fecha]</span>, entre OTIC CChC, RUT 70.915.280-K, y <span class="ctag" onclick="editVar(this)">[OTEC]</span>, RUT <span class="ctag" onclick="editVar(this)">[RUT]</span>.</p><h2>SEGUNDA: OBJETO</h2><p>Prestación de servicios de capacitación vía SENCE por <span class="ctag" onclick="editVar(this)">[$monto]</span>.</p><table><thead><tr><th>Curso</th><th>Código SENCE</th><th>Horas</th><th>Valor</th></tr></thead><tbody><tr><td contenteditable="true">Nombre</td><td contenteditable="true">Código</td><td contenteditable="true">XX hrs</td><td contenteditable="true">$0</td></tr></tbody></table><h2>TERCERA: MONTO Y PAGO</h2><p>Pago dentro de <span class="ctag" onclick="editVar(this)">[N días]</span> hábiles de la liquidación SENCE.</p><h2>CUARTA: DURACIÓN</h2><p>Desde <span class="ctag" onclick="editVar(this)">[inicio]</span> hasta <span class="ctag" onclick="editVar(this)">[término]</span>.</p><h2>QUINTA: CONFIDENCIALIDAD</h2><p>Ambas partes guardarán confidencialidad por <span class="ctag" onclick="editVar(this)">[N años]</span> años.</p>',Proveedor:'<h2>PRIMERA: PARTES</h2><p>OTIC CChC y <span class="ctag" onclick="editVar(this)">[Proveedor]</span>, RUT <span class="ctag" onclick="editVar(this)">[RUT]</span>.</p><h2>SEGUNDA: OBJETO</h2><p>Suministro de <span class="ctag" onclick="editVar(this)">[bienes/servicios]</span> según Anexo Técnico adjunto.</p><h2>TERCERA: PRECIO</h2><p>Precio: <span class="ctag" onclick="editVar(this)">[$monto]</span>+IVA. Pago 30 días desde recepción conforme.</p><h2>CUARTA: PLAZO</h2><p>Entrega en <span class="ctag" onclick="editVar(this)">[N días]</span> días desde firma.</p>',Convenio:'<h2>PRIMERA: PARTES</h2><p>OTIC CChC y <span class="ctag" onclick="editVar(this)">[Organización]</span>, RUT <span class="ctag" onclick="editVar(this)">[RUT]</span>.</p><h2>SEGUNDA: OBJETO</h2><p>Establecer bases de colaboración en capacitación laboral para el sector construcción.</p><h2>TERCERA: VIGENCIA</h2><p>Duración de <span class="ctag" onclick="editVar(this)">[N años]</span> años, renovación automática salvo aviso 60 días antes.</p>',Honorarios:'<h2>PRIMERA: PARTES</h2><p>OTIC CChC y <span class="ctag" onclick="editVar(this)">[Relator]</span>, RUT <span class="ctag" onclick="editVar(this)">[RUT]</span>.</p><h2>SEGUNDA: SERVICIOS</h2><ul><li>Servicio: <span class="ctag" onclick="editVar(this)">[descripción]</span></li><li>Fecha: <span class="ctag" onclick="editVar(this)">[fecha]</span></li><li>Duración: <span class="ctag" onclick="editVar(this)">[N horas]</span></li></ul><h2>TERCERA: HONORARIOS</h2><p>Honorario: <span class="ctag" onclick="editVar(this)">[$monto]</span> contra boleta, 15 días hábiles post servicio.</p>'};function X(){var n=d.contratos.filter(function(r){return r.etapa==="Borrador"}),a=document.getElementById("ed-content");if(a){var e=m.contratoId?d.contratos.find(function(r){return r.id===m.contratoId}):n[0],t=m._tplClave||"ft",i=[{clave:"ft",label:"Franquicia Tributaria SENCE v2026"},{clave:"edc",label:"Franquicia Tributaria EDC v2026"},{clave:"ft_ce",label:"Franquicia + Costo Empresa v2026"},{clave:"add_ce",label:"Addendum Costo Empresa 2023"},{clave:"add_ft",label:"Addendum Franquicia + CE 2023"},{clave:"nda",label:"NDA Confidencialidad v2026"},{clave:"sv",label:"Contrato de Servicios v2026"}],o=Z[t]||Z.ft;e&&(o=o.replace(/<span[^>]*>\[\*\]<\/span>/g,function(r,s){return'<span class="ctag" contenteditable="true" style="min-width:60px;display:inline-block">[completar]</span>'})),a.innerHTML='<div style="display:flex;gap:14px;align-items:flex-start"><div style="width:210px;flex-shrink:0;display:flex;flex-direction:column;gap:10px"><div class="card" style="padding:12px"><div style="font-size:10px;font-weight:700;color:#888;text-transform:uppercase;margin-bottom:8px">Plantilla</div>'+i.map(function(r){var s=r.clave===t;return'<div style="padding:5px 8px;border-radius:5px;cursor:pointer;font-size:11px;margin-bottom:2px;background:'+(s?"#e8f0fa":"transparent")+";color:"+(s?"#1a4f8a":"#555")+";font-weight:"+(s?"600":"400")+`" onclick="window.loadTplEd('`+r.clave+`')">`+r.label+"</div>"}).join("")+"</div>"+(e?'<div class="card" style="padding:12px"><div style="font-size:10px;font-weight:700;color:#888;text-transform:uppercase;margin-bottom:8px">Variables</div>'+[{k:"Empresa",v:e.empresa||e.parte||"[Empresa]"},{k:"RUT",v:e.rut||"[RUT]"},{k:"Monto",v:e.monto?"$"+e.monto.toLocaleString("es-CL"):"[Monto]"},{k:"Horas",v:(e.horas||0)+" hrs"},{k:"Fecha",v:e.fecha||"[Fecha]"}].map(function(r){return'<div style="margin-bottom:8px"><div style="font-size:9px;font-weight:700;color:#999;text-transform:uppercase;margin-bottom:2px">'+r.k+'</div><div style="font-size:11px;font-weight:500;background:#f5f8fd;border-radius:4px;padding:3px 7px;border:1px solid #dde8f5">'+r.v+"</div></div>"}).join("")+"</div>":"")+`<div class="card" style="padding:12px"><div style="font-size:10px;font-weight:700;color:#888;text-transform:uppercase;margin-bottom:8px">Acciones</div><div style="display:flex;flex-direction:column;gap:6px"><button class="btn btn-primary" onclick="exportWordEd()" style="font-size:11px;display:flex;align-items:center;gap:5px;justify-content:center"><i class="ti ti-file-word" aria-hidden="true"></i> Exportar Word</button><button class="btn btn-danger" onclick="exportPDFEd()" style="font-size:11px;display:flex;align-items:center;gap:5px;justify-content:center"><i class="ti ti-file-type-pdf" aria-hidden="true"></i> Exportar PDF</button><button class="btn" onclick="guardarVersionEd()" style="font-size:11px;display:flex;align-items:center;gap:5px;justify-content:center"><i class="ti ti-device-floppy" aria-hidden="true"></i> Guardar versión</button><button class="btn btn-success" onclick="enviarNegociacionEd()" style="font-size:11px;display:flex;align-items:center;gap:5px;justify-content:center"><i class="ti ti-send" aria-hidden="true"></i> Enviar a Negociación</button></div></div></div><div style="flex:1;min-width:0"><div style="background:#f0f2f5;border:1px solid #dde;border-radius:8px 8px 0 0;padding:6px 10px;display:flex;align-items:center;gap:4px;flex-wrap:wrap"><button onclick="document.execCommand('bold')" title="Negrita" style="padding:3px 8px;border:1px solid #ccc;border-radius:4px;background:#fff;cursor:pointer;font-weight:700;font-size:12px">B</button><button onclick="document.execCommand('italic')" title="Cursiva" style="padding:3px 8px;border:1px solid #ccc;border-radius:4px;background:#fff;cursor:pointer;font-style:italic;font-size:12px">I</button><button onclick="document.execCommand('underline')" title="Subrayado" style="padding:3px 8px;border:1px solid #ccc;border-radius:4px;background:#fff;cursor:pointer;text-decoration:underline;font-size:12px">U</button><div style="width:1px;background:#ccc;height:18px;margin:0 4px"></div><button onclick="document.execCommand('justifyLeft')" title="Izquierda" class="et"><i class="ti ti-align-left" aria-hidden="true"></i></button><button onclick="document.execCommand('justifyCenter')" title="Centro" class="et"><i class="ti ti-align-center" aria-hidden="true"></i></button><button onclick="document.execCommand('justifyFull')" title="Justificado" class="et"><i class="ti ti-align-justified" aria-hidden="true"></i></button><div style="width:1px;background:#ccc;height:18px;margin:0 4px"></div><button onclick="insertTableEd()" class="et" style="font-size:11px"><i class="ti ti-table" aria-hidden="true"></i> Tabla</button><div style="margin-left:auto;font-size:10px;color:#888">Palabras: <span id="doc-wc">—</span></div></div><div style="background:#d0d4d9;padding:20px 30px;min-height:600px;border:1px solid #ccc;border-top:none;border-radius:0 0 8px 8px;overflow-y:auto"><div style="background:#fff;box-shadow:0 2px 16px rgba(0,0,0,.15);min-height:780px;max-width:680px;margin:0 auto;font-family:'Times New Roman',Georgia,serif"><div style="padding:20px 48px 0;border-bottom:3px solid #1a4f8a"><div style="display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:12px"><div><div style="font-size:12px;font-weight:700;color:#1a4f8a;letter-spacing:.02em">OTIC CCHC — CORPORACIÓN DE CAPACITACIÓN DE LA CONSTRUCCIÓN</div><div style="font-size:9px;color:#666;margin-top:2px">RUT 70.200.800-K · Santa Beatriz 170 Piso 3, Providencia, Santiago</div></div><div style="text-align:right;font-size:10px;color:#666">`+(e?'<div style="font-weight:700;color:#1a4f8a">N° '+e.id+"</div><div>"+e.fecha+"</div>":'<div style="color:#999">Nueva plantilla</div>')+`</div></div></div><div id="doc-editor-el" contenteditable="true" style="padding:24px 48px 40px;min-height:680px;outline:none;font-size:12px;line-height:1.8;color:#1a1a1a;font-family:'Times New Roman',Georgia,serif" onkeyup="setTimeout(function(){var w=document.getElementById('doc-wc');var e=document.getElementById('doc-editor-el');if(w&&e)w.textContent=(e.innerText||''). split(/\\s+/).filter(Boolean).length;},100)">`+o+'</div><div style="padding:6px 48px;border-top:1px solid #e0e8f0;display:flex;justify-content:space-between;font-size:8px;color:#999;background:#fafcff"><span>NEXO · OTIC CChC · Documento confidencial</span><span>'+(e?e.id:"Borrador")+"</span></div></div></div></div></div>",setTimeout(function(){var r=document.getElementById("doc-wc"),s=document.getElementById("doc-editor-el");r&&s&&(r.textContent=(s.innerText||"").split(/\s+/).filter(Boolean).length)},100)}}window.loadTplEd=function(n){m._tplClave=n,X()};function Pe(n){var a=prompt("Editar variable:",n.textContent);a!==null&&(n.textContent=a)}function Re(){var n=document.getElementById("doc-editor-el");n&&(n.focus(),document.execCommand("insertHTML",!1,"<h2>NUEVA CLÁUSULA</h2><p>Redacta aquí el contenido de la cláusula.</p>"))}function Se(){var n=document.getElementById("doc-editor-el");n&&(n.focus(),document.execCommand("insertHTML",!1,'<span class="ctag" onclick="editVar(this)">[Variable]</span>&nbsp;'))}function Le(){var n=document.getElementById("doc-editor-el");n&&(n.focus(),document.execCommand("insertHTML",!1,'<table><thead><tr><th contenteditable="true">Col 1</th><th contenteditable="true">Col 2</th><th contenteditable="true">Col 3</th></tr></thead><tbody><tr><td contenteditable="true">Dato</td><td contenteditable="true">Dato</td><td contenteditable="true">Dato</td></tr></tbody></table><p></p>'),l("Tabla insertada"))}function De(n){var a=document.getElementById("doc-editor-el");a&&(a.innerHTML=oe[n]||oe["Cap. OTIC"],l('Plantilla "'+n+'" cargada'))}function ie(n){var a=b(n);if(a){var e=new Date().toLocaleDateString("es-CL");a.versiones.push({v:a.versiones.length+1,fecha:e,autor:"Fiscalía"}),a.historial.push({fecha:e,texto:"Versión v"+a.versiones.length+" guardada por Fiscalía"}),l("Versión v"+a.versiones.length+" guardada");var t=document.getElementById("ver-label-ed");t&&(t.textContent="v"+a.versiones.length)}}function Be(n){var a=b(n);if(a){ie(n),a.etapa="Negociación",a.actor="OTIC",d.actividad.unshift({texto:"Borrador v"+a.versiones.length+" "+a.n+" enviado a negociación",fecha:"Ahora",actor:"f"});var e=encodeURIComponent("Borrador contrato para revisión — OTIC CChC"),t=encodeURIComponent("Estimado/a,Adjunto borrador "+a.n+" ("+a.parte+") para revisión.Por favor enviar observaciones en máximo 3 días hábiles.Fiscalía OTIC CChC");window.open("mailto:?subject="+e+"&body="+t),m.contratoId=n,C(),l("Borrador enviado a negociación. Email preparado."),setTimeout(function(){v("negociacion")},600)}}function Fe(n){var a=b(n)||{n:"Contrato"},e=document.getElementById("doc-title-el")?document.getElementById("doc-title-el").innerText:a.n,t=document.getElementById("doc-editor-el")?document.getElementById("doc-editor-el").innerText:"",i=document.createElement("script");i.src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",i.onload=function(){var o=new window.jspdf.jsPDF;o.setFillColor(26,79,138),o.rect(0,0,210,12,"F"),o.setFont("helvetica","bold"),o.setFontSize(9),o.setTextColor(255,255,255),o.text("OTIC CChC · RUT 70.915.280-K",10,8),o.text(a.n,200,8,{align:"right"}),o.setTextColor(26,79,138),o.setFontSize(12),o.setFont("helvetica","bold"),o.text(e,105,26,{align:"center",maxWidth:180}),o.setDrawColor(26,79,138),o.line(15,30,195,30),o.setFont("helvetica","normal"),o.setFontSize(10),o.setTextColor(30,30,30);var r=o.splitTextToSize(t,175),s=38;r.forEach(function(p){s>280&&(o.addPage(),s=15),o.text(p,15,s),s+=5}),o.setFontSize(8),o.setTextColor(150),o.text("Fiscalía OTIC CChC · "+new Date().toLocaleDateString("es-CL"),15,290),o.save(a.n+".pdf"),l("PDF descargado")},document.head.appendChild(i)}function Me(n){var a=b(n)||{n:"Contrato"},e=document.getElementById("doc-title-el")?document.getElementById("doc-title-el").innerText:a.n,t=document.getElementById("doc-editor-el")?document.getElementById("doc-editor-el").innerHTML:"",i='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word"><head><meta charset="utf-8"><style>body{font-family:Arial;font-size:12pt;margin:2.5cm 3cm}.hdr{border-bottom:3pt solid #1a4f8a;padding-bottom:8pt;margin-bottom:18pt}h2{font-size:11pt;font-weight:bold;color:#1a4f8a;text-transform:uppercase;border-bottom:.5pt solid #c5d8f0;padding-bottom:2pt;margin:16pt 0 5pt}p{text-align:justify;line-height:1.7;margin-bottom:8pt}table{width:100%;border-collapse:collapse;font-size:10pt}th{background:#e8f0fa;color:#1a4f8a;border:.5pt solid #c5d8f0;padding:5pt}td{border:.5pt solid #dde8f5;padding:5pt}</style></head><body><div class="hdr"><div style="font-size:14pt;font-weight:bold;color:#1a4f8a">OTIC CChC</div><div style="font-size:9pt;color:#5a7fa8">'+a.n+" · "+new Date().toLocaleDateString("es-CL")+'</div></div><h1 style="text-align:center;font-size:14pt;text-transform:uppercase">'+e+"</h1>"+t+"</body></html>",o=new Blob(["\uFEFF"+i],{type:"application/msword"}),r=URL.createObjectURL(o),s=document.createElement("a");s.href=r,s.download=a.n+".doc",s.click(),URL.revokeObjectURL(r),l("Word descargado")}function D(){var n=d.contratos.filter(function(e){return e.etapa==="Negociación"}),a=document.getElementById("neg-content");if(n.length===0){a.innerHTML=`<div class="empty-state"><i class="ti ti-arrows-exchange" aria-hidden="true"></i><div style="font-size:13px;font-weight:500;margin-bottom:6px">No hay contratos en negociación</div><p style="font-size:12px;margin-bottom:14px">Los contratos en borrador aparecerán aquí al enviarlos a negociación.</p><button class="btn btnp" onclick="nav('editor')">Ir al Editor</button></div>`;return}a.innerHTML=n.map(function(e){var t=e.obs_neg.filter(function(i){return!i.resuelta});return t.length>0,'<div class="card"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;flex-wrap:wrap;gap:8px"><div><div style="font-size:13px;font-weight:500">'+e.n+" — "+e.parte+'</div><div style="font-size:11px;color:var(--color-text-secondary);margin-top:2px">Borrador v'+e.versiones.length+" · "+T(e.monto)+'</div></div><div style="display:flex;gap:6px;align-items:center">'+L(e.actor)+'<span class="sb sr">En negociación</span></div></div><div style="display:flex;flex-direction:column;gap:6px;margin-bottom:12px"><div style="display:flex;align-items:center;gap:8px;padding:7px;border-radius:6px;background:var(--color-background-secondary)"><span class="actor-f">Fiscalía</span><i class="ti ti-check" style="color:#2E7D32" aria-hidden="true"></i><span style="font-size:11px;flex:1">Borrador v'+e.versiones.length+' elaborado y enviado</span></div><div style="display:flex;align-items:center;gap:8px;padding:7px;border-radius:6px;border:1.5px solid '+(e.actor==="OTIC"?"#E65100":"var(--color-border-tertiary)")+";background:"+(e.actor==="OTIC"?"#FFF3E0":"var(--color-background-secondary)")+'"><span class="actor-o">OTIC</span><i class="ti ti-'+(e.actor==="Empresa"||e.actor==="Fiscalía"?"check":"clock")+'" style="color:'+(e.actor==="OTIC"?"#E65100":"#2E7D32")+'" aria-hidden="true"></i><span style="font-size:11px;flex:1;color:'+(e.actor==="OTIC"?"#E65100":"inherit")+'">'+(e.actor==="OTIC"?"Pendiente revisión OTIC":"Revisado")+"</span>"+(e.actor==="OTIC"?`<button class="btn" style="font-size:10px" onclick="avanzarActor('`+e.id+`','otic_ok')">OTIC sin obs.</button>`:"")+'</div><div style="display:flex;align-items:center;gap:8px;padding:7px;border-radius:6px;border:1.5px solid '+(e.actor==="Empresa"?"#E65100":"var(--color-border-tertiary)")+";background:"+(e.actor==="Empresa"?"#FFF3E0":"var(--color-background-secondary)")+'"><span class="actor-e">Empresa</span><i class="ti ti-'+(e.actor==="Firma pendiente"?"check":"clock")+'" style="color:'+(e.actor==="Empresa"?"#E65100":"#2E7D32")+'" aria-hidden="true"></i><span style="font-size:11px;flex:1;color:'+(e.actor==="Empresa"?"#E65100":"inherit")+'">'+(e.actor==="Empresa"?"Pendiente validación empresa":"—")+"</span>"+(e.actor==="Empresa"?`<button class="btn" style="font-size:10px" onclick="avanzarActor('`+e.id+`','empresa_ok')">Sin obs.</button>`:"")+"</div></div>"+(t.length>0?'<div style="background:#FFF3E0;border-radius:6px;padding:10px;margin-bottom:10px;font-size:11px"><div style="font-weight:500;color:#E65100;margin-bottom:6px">'+t.length+" observaciones pendientes</div>"+t.map(function(i){return'<div style="padding:4px 0;border-bottom:0.5px solid rgba(0,0,0,.06)">'+L(i.actor)+" "+i.texto+' <span style="color:var(--color-text-secondary)">· '+i.fecha+"</span></div>"}).join("")+"</div>":"")+'<div style="margin-bottom:8px"><textarea class="fta" id="obs-input-'+e.id+`" placeholder="Registrar nueva observación (OTIC o empresa)..." style="min-height:50px"></textarea></div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="btn btng" onclick="aprobarNegociacion('`+e.id+`')"><i class="ti ti-check" aria-hidden="true"></i> Sin obs. — ir a VB</button><button class="btn" onclick="registrarObs('`+e.id+`')"><i class="ti ti-message" aria-hidden="true"></i> Registrar obs.</button><button class="btn" onclick="sendReminderMail('`+e.parte+`')"><i class="ti ti-mail" aria-hidden="true"></i> Recordar</button><button class="btn" onclick="CURRENT.contratoId='`+e.id+`';nav('editor')"><i class="ti ti-edit" aria-hidden="true"></i> Editar borrador</button></div></div>`}).join("")}function Ue(n,a){var e=b(n);if(e){if(a==="otic_ok")e.actor="Empresa",l("OTIC aprobó. Enviando a empresa para validación.");else if(a==="empresa_ok"){e.actor="VB",re(n);return}e.historial.push({fecha:new Date().toLocaleDateString("es-CL"),texto:"Avance en negociación: "+a}),D()}}function Ve(n){var a=b(n);if(a){var e=document.getElementById("obs-input-"+n),t=e?e.value.trim():"";if(!t){l("Escribe la observación primero");return}a.obs_neg.push({actor:a.actor,texto:t,fecha:new Date().toLocaleDateString("es-CL"),resuelta:!1}),a.historial.push({fecha:new Date().toLocaleDateString("es-CL"),texto:"Observación registrada: "+t.substring(0,40)}),d.actividad.unshift({texto:"Obs. registrada en "+a.n,fecha:"Ahora",actor:"f"}),l("Observación registrada. Actualiza el borrador en el Editor."),D()}}function re(n){var a=b(n);a&&(a.etapa="VB pendiente",a.actor="Fiscalía",a.historial.push({fecha:new Date().toLocaleDateString("es-CL"),texto:"Negociación cerrada. Pasando a VB Gerencia/Fiscal"}),d.actividad.unshift({texto:a.n+" sin observaciones — avanza a VB",fecha:"Ahora",actor:"f"}),m.contratoId=n,C(),l("Negociación cerrada. Abriendo módulo de VB..."),setTimeout(function(){v("vb")},600))}function Xe(n){var a=encodeURIComponent("Recordatorio: validación borrador pendiente — OTIC CChC"),e=encodeURIComponent("Estimado/a representante de "+n+",Le recordamos que tiene pendiente la validación del borrador de contrato.Por favor enviar respuesta en máximo 2 días hábiles.Fiscalía OTIC CChC");window.open("mailto:?subject="+a+"&body="+e),l("Email de recordatorio preparado para "+n)}function G(){var n=d.contratos.filter(function(e){return e.etapa==="VB pendiente"}),a=document.getElementById("vb-content");if(n.length===0){a.innerHTML='<div class="empty-state"><i class="ti ti-thumb-up" aria-hidden="true"></i><div style="font-size:13px;font-weight:500;margin-bottom:6px">No hay contratos esperando VB</div><p style="font-size:12px;margin-bottom:14px">Los contratos llegarán aquí desde la negociación cuando estén listos.</p></div>';return}a.innerHTML='<div class="two">'+n.map(function(e){var t=e.vbs.gerencia&&e.vbs.fiscal;return'<div class="card" style="border:1.5px solid '+(t?"#2E7D32":"#1a4f8a")+'"><div style="font-size:11px;font-weight:500;color:#1a4f8a;margin-bottom:8px">'+e.n+' — VB pendiente</div><div style="font-size:13px;font-weight:500;margin-bottom:10px">'+e.parte+'</div><div style="display:flex;flex-direction:column;gap:5px;margin-bottom:12px"><div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;padding:6px;background:var(--color-background-secondary);border-radius:5px">VB Gerencia<span class="sb '+(e.vbs.gerencia?"sv":"sr")+'">'+(e.vbs.gerencia?"Aprobado":"Pendiente")+'</span></div><div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;padding:6px;background:var(--color-background-secondary);border-radius:5px">VB Fiscal<span class="sb '+(e.vbs.fiscal?"sv":"sr")+'">'+(e.vbs.fiscal?"Aprobado":"Pendiente")+'</span></div></div><div style="display:flex;flex-direction:column;gap:5px">'+(e.vbs.gerencia?"":`<button class="btn btnp" onclick="otorgarVB('`+e.id+`','gerencia')" style="font-size:11px"><i class="ti ti-thumb-up" aria-hidden="true"></i> Registrar VB Gerencia</button>`)+(e.vbs.fiscal?"":`<button class="btn btnp" onclick="otorgarVB('`+e.id+`','fiscal')" style="font-size:11px"><i class="ti ti-thumb-up" aria-hidden="true"></i> Registrar VB Fiscal</button>`)+(t?`<button class="btn btng" onclick="generarReporteVB('`+e.id+`')" style="font-size:11px"><i class="ti ti-file-export" aria-hidden="true"></i> Generar reporte y convocar firma</button>`:"")+`<button class="btn" onclick="sendVBEmail('`+e.parte+`')" style="font-size:11px"><i class="ti ti-mail" aria-hidden="true"></i> Notificar por email</button></div></div>`}).join("")+"</div>"}function Ge(n,a){var e=b(n);e&&(e.vbs[a]=!0,e.historial.push({fecha:new Date().toLocaleDateString("es-CL"),texto:"VB "+a+" otorgado"}),l("VB "+a+" registrado"),e.vbs.gerencia&&e.vbs.fiscal&&l("Ambos VB obtenidos. Puedes generar el reporte para firma."),G(),C())}function se(n){var a=b(n);if(a){if(typeof XLSX>"u"){l("Cargando..."),setTimeout(function(){se(n)},600);return}a.etapa="Firma pendiente",a.actor="Todos",a.historial.push({fecha:new Date().toLocaleDateString("es-CL"),texto:"Reporte para firma generado. Coordinando con partes."}),d.actividad.unshift({texto:a.n+" — reporte para firma generado",fecha:"Ahora",actor:"f"});var e=XLSX.utils.aoa_to_sheet([["REPORTE PARA FIRMA — OTIC CChC"],[""],["Contrato",a.n],["Empresa",a.parte],["Monto",T(a.monto)],["VB Gerencia","APROBADO"],["VB Fiscal","APROBADO"],[""],["Firmantes"],["1. Fiscalía OTIC CChC","Pendiente"],["2. OTIC","Pendiente"],["3. "+a.parte,"Pendiente"]]);e["!cols"]=[{wch:24},{wch:30}];var t=XLSX.utils.book_new();XLSX.utils.book_append_sheet(t,e,"Reporte"),XLSX.writeFile(t,"reporte_firma_"+a.n+".xlsx"),m.contratoId=n,C(),l("Reporte descargado. Abriendo módulo de Firma..."),setTimeout(function(){v("firma")},600)}}function He(n){var a=encodeURIComponent("Solicitud VB contrato — OTIC CChC"),e=encodeURIComponent("Estimado/a,Solicito su Visto Bueno para el contrato de "+n+".Fiscalía OTIC CChC");window.open("mailto:?subject="+a+"&body="+e),l("Email preparado")}function H(){var n=d.contratos.filter(function(o){return o.etapa==="Firma pendiente"}),a=document.getElementById("firma-content");if(a){if(n.length===0){a.innerHTML='<div class="empty-state"><i class="ti ti-pen" aria-hidden="true"></i><div style="font-size:13px;font-weight:500;margin-bottom:6px">No hay contratos listos para firma</div><p style="font-size:12px;margin-bottom:14px">Los contratos llegarán aquí después de obtener los VB.</p></div>';return}var e=m.contratoId&&n.find(function(o){return o.id===m.contratoId})?m.contratoId:n[0].id,t=b(e);if(t){var i=n.map(function(o){return'<option value="'+o.id+'"'+(o.id===e?" selected":"")+">"+o.n+" — "+o.parte+"</option>"}).join("");a.innerHTML='<div class="context-bar" style="margin-bottom:14px"><i class="ti ti-pen" aria-hidden="true"></i><div style="flex:1"><span style="font-weight:500">Firmando: </span>'+(n.length>1?'<select style="border:none;background:transparent;font-size:12px;font-weight:500;color:#1a4f8a;cursor:pointer" onchange="CURRENT.contratoId=this.value;renderFirma()">'+i+"</select>":'<span style="font-weight:500;color:#1a4f8a">'+t.n+" — "+t.parte+"</span>")+'</div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:14px"><div class="card"><div class="card-title" style="margin-bottom:12px"><i class="ti ti-writing" aria-hidden="true"></i> Capturar firma</div><div class="fg"><label class="fl">Firmante</label><select class="fsel" id="sign-actor"><option value="fiscalia">José Esteban Garay — Fiscalía OTIC CChC</option><option value="otic">Sergio Torretti — Contraparte OTIC</option><option value="empresa">'+t.parte+` — Representante Empresa</option></select></div><div class="fg"><label class="fl">Nombre completo</label><input class="fi" id="sign-name" placeholder="Juan Rodríguez García"></div><div class="fg"><label class="fl">RUT</label><input class="fi" id="sign-rut" placeholder="12.345.678-9"></div><div class="fg"><label class="fl">Cargo</label><input class="fi" id="sign-role" placeholder="Representante Legal"></div><div style="display:flex;border-bottom:2px solid #e8ecf0;margin-bottom:10px"><button id="tab-draw" onclick="switchSignTab('draw')" style="flex:1;padding:7px;font-size:11px;font-weight:600;color:#1a4f8a;border:none;border-bottom:2px solid #1a4f8a;margin-bottom:-2px;background:none;cursor:pointer">✏️ Dibujar</button><button id="tab-upload" onclick="switchSignTab('upload')" style="flex:1;padding:7px;font-size:11px;font-weight:500;color:#888;border:none;border-bottom:2px solid transparent;margin-bottom:-2px;background:none;cursor:pointer">📁 Cargar imagen</button><button id="tab-type" onclick="switchSignTab('type')" style="flex:1;padding:7px;font-size:11px;font-weight:500;color:#888;border:none;border-bottom:2px solid transparent;margin-bottom:-2px;background:none;cursor:pointer">✍️ Tipografía</button></div><div id="sign-tab-draw"><div class="sign-area" style="height:100px;background:#fafcff;border-radius:8px;border:2px dashed #b3c8e8;position:relative"><canvas id="sc" style="display:block;cursor:crosshair;touch-action:none;width:100%;height:100px"></canvas><div id="sp" style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#aaa;pointer-events:none;gap:3px"><i class="ti ti-writing" style="font-size:22px" aria-hidden="true"></i><span style="font-size:10px">Dibuja tu firma aquí</span></div></div><div style="display:flex;gap:6px;margin-top:6px"><button class="btn" onclick="clearSign()" style="font-size:11px"><i class="ti ti-trash" aria-hidden="true"></i> Limpiar</button><button class="btn" onclick="changeSignColor('#1a4f8a')" style="font-size:11px;background:#1a4f8a;color:#fff;border-color:#1a4f8a">Azul</button><button class="btn" onclick="changeSignColor('#000')" style="font-size:11px">Negro</button><button class="btn" onclick="changeSignColor('#1a1a8a')" style="font-size:11px;background:#222;color:#fff;border-color:#222">Oscuro</button></div></div><div id="sign-tab-upload" style="display:none"><div style="border:2px dashed #b3c8e8;border-radius:8px;padding:16px;text-align:center;background:#fafcff;cursor:pointer" onclick="document.getElementById('sign-file-input').click()"><i class="ti ti-upload" style="font-size:24px;color:#1a4f8a;display:block;margin-bottom:6px" aria-hidden="true"></i><div style="font-size:12px;font-weight:500;color:#1a4f8a">Cargar imagen de firma</div><div style="font-size:10px;color:#888;margin-top:3px">PNG, JPG, GIF — fondo transparente recomendado</div></div><input type="file" id="sign-file-input" accept="image/*" style="display:none" onchange="loadSignImage(this)"><div id="sign-img-preview" style="margin-top:8px;display:none;text-align:center"><img id="sign-img" style="max-height:80px;border:1px solid #e0e8f0;border-radius:6px;background:#fff;padding:4px"><div style="margin-top:4px"><button class="btn" onclick="clearUploadedSign()" style="font-size:10px"><i class="ti ti-trash" aria-hidden="true"></i> Quitar</button></div></div></div><div id="sign-tab-type" style="display:none"><div style="margin-bottom:8px"><label class="fl">Nombre para generar firma</label><input class="fi" id="sign-type-name" placeholder="Tu nombre completo" oninput="previewTypedSign()"></div><div style="margin-bottom:6px"><label class="fl">Estilo tipográfico</label><div style="display:flex;gap:6px;flex-wrap:wrap"><button onclick="setSignFont('Dancing Script,cursive',this)" style="font-family:serif;font-size:18px;color:#1a4f8a;background:#e8f0fa;border:2px solid #1a4f8a;border-radius:6px;padding:2px 10px;cursor:pointer">Cursiva</button><button onclick="setSignFont('Georgia,serif',this)" style="font-family:Georgia,serif;font-size:16px;color:#333;background:#f5f5f5;border:1px solid #ddd;border-radius:6px;padding:2px 10px;cursor:pointer">Formal</button><button onclick="setSignFont('Arial,sans-serif',this)" style="font-family:Arial;font-size:16px;font-style:italic;color:#333;background:#f5f5f5;border:1px solid #ddd;border-radius:6px;padding:2px 10px;cursor:pointer"><em>Sans</em></button></div></div><canvas id="sc-type" width="300" height="80" style="width:100%;border:1px solid #e0e8f0;border-radius:6px;background:#fafcff"></canvas></div><div style="margin-top:12px"><button class="btn btn-primary" onclick="confirmSign('`+t.id+`')" style="width:100%;font-size:12px"><i class="ti ti-check" aria-hidden="true"></i> Registrar firma y descargar constancia</button><div style="margin-top:8px;font-size:10px;color:#888;background:#f5f8fd;padding:8px;border-radius:6px;border:1px solid #dde8f5;line-height:1.5"><i class="ti ti-info-circle" aria-hidden="true"></i> Esta firma registra la intención de las partes. Para validez legal completa se recomienda firma electrónica avanzada (FEA).</div></div></div><div style="display:flex;flex-direction:column;gap:12px"><div class="card"><div class="card-title"><i class="ti ti-users" aria-hidden="true"></i> Estado de firmas</div><div id="firma-status" style="display:flex;flex-direction:column;gap:6px;margin-bottom:12px">`+[["fiscalia","José Esteban Garay — Fiscalía","actor-f"],["otic","Sergio Torretti — Contraparte OTIC","actor-o"],["empresa",t.parte+" — Empresa","actor-e"]].map(function(o){var r=t.firmas&&t.firmas[o[0]];return'<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 10px;border-radius:6px;background:'+(r?"#f0fdf4":"#f8f9fb")+";border:1px solid "+(r?"#bbf7d0":"#e8ecf0")+'"><span class="'+o[2]+'" style="font-size:11px">'+o[1]+'</span><span class="tag '+(r?"tag-green":"tag-gray")+'">'+(r?"✓ Firmado":"Pendiente")+"</span></div>"}).join("")+'</div><div style="height:6px;background:#f0f2f5;border-radius:3px;overflow:hidden"><div style="height:6px;background:#16a34a;border-radius:3px;width:'+((t.firmas&&t.firmas.fiscalia?1:0)+(t.firmas&&t.firmas.otic?1:0)+(t.firmas&&t.firmas.empresa?1:0))/3*100+'%"></div></div><div style="font-size:10px;color:#888;margin-top:4px">'+((t.firmas&&t.firmas.fiscalia?1:0)+(t.firmas&&t.firmas.otic?1:0)+(t.firmas&&t.firmas.empresa?1:0))+' de 3 firmas registradas</div></div><div class="card"><div class="card-title"><i class="ti ti-clock" aria-hidden="true"></i> Historial</div><ul class="tl">'+(t.historial||[]).map(function(o,r){return'<li class="tli">'+(r<t.historial.length-1?'<div class="tll"></div>':"")+'<div class="tld"></div><div><div class="tlt">'+o.texto+'</div><div class="tldt">'+o.fecha+"</div></div></li>"}).join("")+'</ul></div><div class="card" style="background:#fff7ed;border-color:#fed7aa"><div style="font-size:11px;font-weight:600;color:#c2410c;margin-bottom:6px"><i class="ti ti-file-word" aria-hidden="true"></i> Insertar firma en documento Word</div><div style="font-size:11px;color:#7c2d12;line-height:1.6">Al registrar la firma, se descarga la constancia Excel con los datos y la imagen de firma para insertar en el documento Word final en las posiciones correspondientes.</div><button class="btn" onclick="exportWordEd()" style="margin-top:8px;font-size:11px;width:100%"><i class="ti ti-file-word" aria-hidden="true"></i> Descargar borrador Word</button></div></div></div>',setTimeout(Je,80)}}}window.switchSignTab=function(n){["draw","upload","type"].forEach(function(a){var e=document.getElementById("sign-tab-"+a),t=document.getElementById("tab-"+a);if(!(!e||!t)){var i=a===n;e.style.display=i?"block":"none",t.style.color=i?"#1a4f8a":"#888",t.style.fontWeight=i?"600":"500",t.style.borderBottomColor=i?"#1a4f8a":"transparent"}})},window.loadSignImage=function(n){if(!(!n.files||!n.files[0])){var a=new FileReader;a.onload=function(e){var t=document.getElementById("sign-img"),i=document.getElementById("sign-img-preview");t&&i&&(t.src=e.target.result,i.style.display="block",window._uploadedSign=e.target.result,l("Imagen de firma cargada"))},a.readAsDataURL(n.files[0])}},window.clearUploadedSign=function(){window._uploadedSign=null;var n=document.getElementById("sign-img-preview");n&&(n.style.display="none");var a=document.getElementById("sign-file-input");a&&(a.value="")};var de="Georgia,serif";window.setSignFont=function(n,a){de=n,document.querySelectorAll("#sign-tab-type button").forEach(function(e){e.style.borderWidth="1px",e.style.borderColor="#ddd",e.style.background="#f5f5f5"}),a&&(a.style.borderWidth="2px",a.style.borderColor="#1a4f8a",a.style.background="#e8f0fa"),previewTypedSign()},window.previewTypedSign=function(){var n=(document.getElementById("sign-type-name")||{}).value||"",a=document.getElementById("sc-type");if(a){var e=a.getContext("2d");e.clearRect(0,0,a.width,a.height),n&&(e.fillStyle="#1a4f8a",e.font="italic 28px "+de,e.textAlign="center",e.textBaseline="middle",e.fillText(n,a.width/2,a.height/2))}},window.changeSignColor=function(n){var a=document.getElementById("sc");a&&(window._signColor=n,a.getContext("2d").strokeStyle=n)};function Je(){var n=document.getElementById("sc");if(n){var a=n.getContext("2d");a.strokeStyle="#1a4f8a",a.lineWidth=2,a.lineCap="round",n.onmousedown=function(e){I=!0;var t=n.getBoundingClientRect(),i=n.width/t.width;w=(e.clientX-t.left)*i,A=(e.clientY-t.top)*i,document.getElementById("sp").style.display="none"},n.onmousemove=function(e){if(I){var t=n.getBoundingClientRect(),i=n.width/t.width,o=(e.clientX-t.left)*i,r=(e.clientY-t.top)*i;a.beginPath(),a.moveTo(w,A),a.lineTo(o,r),a.stroke(),w=o,A=r}},n.onmouseup=n.onmouseleave=function(){I=!1},n.ontouchstart=function(e){e.preventDefault(),I=!0;var t=n.getBoundingClientRect(),i=n.width/t.width,o=e.touches[0];w=(o.clientX-t.left)*i,A=(o.clientY-t.top)*i,document.getElementById("sp").style.display="none"},n.ontouchmove=function(e){if(e.preventDefault(),!!I){var t=n.getBoundingClientRect(),i=n.width/t.width,o=e.touches[0],r=(o.clientX-t.left)*i,s=(o.clientY-t.top)*i;a.beginPath(),a.moveTo(w,A),a.lineTo(r,s),a.stroke(),w=r,A=s}},n.ontouchend=function(){I=!1}}}function Ke(){var n=document.getElementById("sc");n&&(n.getContext("2d").clearRect(0,0,n.width,n.height),document.getElementById("sp").style.display="flex"),l("Firma limpiada")}function We(n){var a=(document.getElementById("sign-name")||{}).value||"",e=(document.getElementById("sign-rut")||{}).value||"",t=(document.getElementById("sign-actor")||{}).value||"fiscalia";if(!a.trim()){l("Ingresa el nombre del firmante");return}if(!e.trim()){l("Ingresa el RUT");return}var i=null,o="draw";if(document.getElementById("sign-tab-upload")&&document.getElementById("sign-tab-upload").style.display!=="none"&&(o="upload"),document.getElementById("sign-tab-type")&&document.getElementById("sign-tab-type").style.display!=="none"&&(o="type"),o==="draw"){var r=document.getElementById("sc");if(!r){l("Error: canvas no encontrado");return}var s=document.createElement("canvas");if(s.width=r.width,s.height=r.height,r.toDataURL()===s.toDataURL()){l("Dibuja tu firma antes de confirmar");return}i=r.toDataURL("image/png")}else if(o==="upload"){if(!window._uploadedSign){l("Carga una imagen de firma primero");return}i=window._uploadedSign}else if(o==="type"){var p=document.getElementById("sc-type");if(!p||(document.getElementById("sign-type-name")||{}).value===""){l("Escribe tu nombre para generar la firma tipográfica");return}previewTypedSign(),i=p.toDataURL("image/png")}var c=b(n);if(c){c.firmas||(c.firmas={}),c.firmas[t]={nombre:a,rut:e,cargo:(document.getElementById("sign-role")||{}).value||"—",fecha:new Date().toLocaleString("es-CL"),img:i},c.historial=c.historial||[],c.historial.push({fecha:new Date().toLocaleDateString("es-CL"),texto:"✓ Firma registrada: "+a+" ("+t+")"});var u="FRM-"+Math.random().toString(36).substr(2,8).toUpperCase();if(typeof XLSX<"u"){var h=XLSX.utils.book_new(),x=[["CONSTANCIA DE FIRMA ELECTRÓNICA SIMPLE — OTIC CChC"],[""],["Referencia",u],["Fecha",new Date().toLocaleString("es-CL")],[""],["DATOS DEL CONTRATO"],["Número",c.n||c.id],["Empresa",c.parte||c.empresa],["Tipo",c.tipo||"—"],["Etapa",c.etapa||"—"],[""],["DATOS DEL FIRMANTE"],["Nombre",a],["RUT",e],["Cargo",(document.getElementById("sign-role")||{}).value||"—"],["Actor firmante",t],["Método",o==="draw"?"Firma manuscrita digital":o==="upload"?"Imagen cargada":"Firma tipográfica"],[""],["ESTADO DE FIRMAS"],["Fiscalía",c.firmas.fiscalia?"✓ "+c.firmas.fiscalia.nombre:"Pendiente"],["Contraparte OTIC",c.firmas.otic?"✓ "+c.firmas.otic.nombre:"Pendiente"],["Empresa",c.firmas.empresa?"✓ "+c.firmas.empresa.nombre:"Pendiente"],[""],["NOTA LEGAL","Esta firma simple registra la intención de las partes. Para validez legal plena se recomienda firma electrónica avanzada (FEA) según Ley 19.799."]],P=XLSX.utils.aoa_to_sheet(x);P["!cols"]=[{wch:24},{wch:50}],XLSX.utils.book_append_sheet(h,P,"Constancia"),XLSX.writeFile(h,"constancia_firma_"+u+".xlsx")}var F=c.firmas.fiscalia&&c.firmas.otic&&c.firmas.empresa;if(F)c.etapa="Firmado",c.estado="vigente",c.actor="—",d.actividad.unshift({texto:"¡"+c.n+" firmado por TODAS las partes!",fecha:"Ahora",actor:"f"}),l("¡"+c.n+" completamente firmado! Ref: "+u+". Guardado en repositorio.");else{var Y=["fiscalia","otic","empresa"].filter(function(g){return!c.firmas[g]}).length;l("Firma registrada. Faltan "+Y+" firma(s). Ref: "+u)}C(),H()}}function J(){var n=(document.getElementById("repo-q").value||"").toLowerCase(),a=document.getElementById("repo-etapa").value,e=d.contratos.filter(function(t){return(!n||(t.n+t.parte).toLowerCase().includes(n))&&(!a||t.etapa===a)});document.getElementById("repo-count").textContent=e.length,document.getElementById("repo-tbody").innerHTML=e.map(function(t){return`<tr class="cr" onclick="abrirContrato('`+t.id+`')"><td><b>`+t.n+"</b></td><td>"+t.parte+"</td><td>"+t.tipo+"</td><td>"+T(t.monto)+"</td><td>"+t.fin+'</td><td><span class="sb '+q(t.etapa)+'">'+t.etapa+"</span></td><td>"+L(t.actor)+'</td><td><span class="sb '+q(t.estado)+'">'+t.estado+"</span></td></tr>"}).join("")}function Qe(n){var a=b(n);if(a){m.contratoId=n;var e={Borrador:"editor",Negociación:"negociacion","VB pendiente":"vb","Firma pendiente":"firma",Firmado:"repositorio",Vencido:"repositorio"},t=e[a.etapa]||"repositorio";v(t)}}function le(){var n=M(),a=document.getElementById("alertas-content"),e=d.solicitudes.filter(function(i){return i.estado==="pendiente"&&Object.values(i.docs).some(function(o){return!o})}),t='<div class="mc-grid"><div class="mc" style="border-left:3px solid #B71C1C;border-radius:0 8px 8px 0"><div class="mc-lbl">Vencidos</div><div class="mc-val" style="color:#B71C1C">'+n.filter(function(i){return i.tipo==="vencido"}).length+'</div></div><div class="mc" style="border-left:3px solid #E65100;border-radius:0 8px 8px 0"><div class="mc-lbl">Vencen 30 días</div><div class="mc-val" style="color:#E65100">'+n.filter(function(i){return i.tipo==="vence"}).length+'</div></div><div class="mc" style="border-left:3px solid #F57F17;border-radius:0 8px 8px 0"><div class="mc-lbl">Solicitudes incompletas</div><div class="mc-val" style="color:#F57F17">'+e.length+'</div></div><div class="mc" style="border-left:3px solid #1a4f8a;border-radius:0 8px 8px 0"><div class="mc-lbl">Contratos en proceso</div><div class="mc-val" style="color:#1a4f8a">'+d.contratos.filter(function(i){return i.estado==="proceso"}).length+'</div></div></div><div class="card"><div class="card-title">Alertas activas</div>';n.length===0&&e.length===0&&(t+='<div style="text-align:center;padding:20px;color:var(--color-text-secondary)">No hay alertas activas</div>'),n.forEach(function(i){t+='<div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:0.5px solid var(--color-border-tertiary)"><span class="sb '+(i.tipo==="vencido"?"sx":"sr")+'">'+(i.tipo==="vencido"?"VENCIDO":i.dias+" DÍAS")+'</span><div style="flex:1"><div style="font-size:12px;font-weight:500">'+i.contrato.parte+" — "+i.contrato.n+'</div><div style="font-size:10px;color:var(--color-text-secondary)">'+i.contrato.tipo+" · "+T(i.contrato.monto)+`</div></div><button class="btn btnp" style="font-size:10px" onclick="irARenovar('`+i.contrato.id+`')">Renovar</button></div>`}),e.forEach(function(i){t+='<div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:0.5px solid var(--color-border-tertiary)"><span class="sb sd">DOCS</span><div style="flex:1"><div style="font-size:12px;font-weight:500">'+i.id+" — "+i.empresa+'</div><div style="font-size:10px;color:var(--color-text-secondary)">'+i.obs+`</div></div><button class="btn" style="font-size:10px" onclick="irARevision('`+i.id+`')">Completar</button></div>`}),t+="</div>",a.innerHTML=t}function Ye(n){m.contratoId=null,l("Iniciando proceso de renovación — creando nueva solicitud..."),me()}function ce(){var n=d.contratos.length,a=d.contratos.filter(function(g){return g.estado==="vigente"}).length,e=d.contratos.filter(function(g){return g.estado==="proceso"}).length,t=d.contratos.filter(function(g){return g.estado==="vencido"}).length,i=d.contratos.reduce(function(g,k){return g+(k.monto||0)},0),o=d.solicitudes.filter(function(g){return g.estado==="pendiente"}).length;d.contratos.filter(function(g){return g.etapa==="Firmado"}).length;function r(g){return"$"+Math.round(g/1e6).toLocaleString("es-CL")+"M"}function s(g,k){return'<div style="height:6px;background:#f0f2f5;border-radius:3px;margin-top:4px"><div style="height:6px;width:'+Math.min(g,100)+"%;background:"+k+';border-radius:3px"></div></div>'}var p=document.getElementById("rep-metrics");p&&(p.innerHTML='<div class="mc"><div class="mc-label">Total contratos</div><div class="mc-value" style="color:#1a4f8a">'+n+"</div>"+s(100,"#1a4f8a")+'</div><div class="mc"><div class="mc-label">Vigentes</div><div class="mc-value" style="color:#16a34a">'+a+"</div>"+s(n?a/n*100:0,"#16a34a")+'</div><div class="mc"><div class="mc-label">En proceso</div><div class="mc-value" style="color:#2563eb">'+e+"</div>"+s(n?e/n*100:0,"#2563eb")+'</div><div class="mc"><div class="mc-label">Vencidos</div><div class="mc-value" style="color:#dc2626">'+t+"</div>"+s(n?t/n*100:0,"#dc2626")+'</div><div class="mc"><div class="mc-label">Monto total</div><div class="mc-value" style="color:#1a4f8a;font-size:16px">'+r(i)+'</div><div style="font-size:10px;color:#888;margin-top:4px">Cartera activa</div></div><div class="mc"><div class="mc-label">Sols. pendientes</div><div class="mc-value" style="color:#ea580c">'+o+"</div>"+s(100,"#ea580c")+"</div>");var c=["Solicitud","Revisión docs","Borrador","Negociación","VB pendiente","Firma pendiente","Firmado"],u=document.getElementById("rep-etapas");if(u){var h=c.map(function(g){var k=d.contratos.filter(function(sa){return sa.etapa===g}).length,R=n?Math.round(k/n*100):0,ra={Solicitud:"#6366f1","Revisión docs":"#0891b2",Borrador:"#0284c7",Negociación:"#d97706","VB pendiente":"#ea580c","Firma pendiente":"#9333ea",Firmado:"#16a34a"},_e=ra[g]||"#888";return'<tr><td style="font-size:12px;font-weight:500">'+g+'</td><td><div style="display:flex;align-items:center;gap:8px"><div style="flex:1;height:8px;background:#f0f2f5;border-radius:4px"><div style="height:8px;width:'+R+"%;background:"+_e+";border-radius:4px;min-width:"+(k?4:0)+'px"></div></div><span style="font-size:11px;color:#888;width:30px;text-align:right">'+R+'%</span></div></td><td style="text-align:center;font-size:12px;font-weight:600;color:'+_e+'">'+k+"</td></tr>"}).join("");u.innerHTML='<div class="card-title">Distribución por etapa</div><div class="table-wrap" style="margin:0"><table><thead><tr><th>Etapa</th><th>Distribución</th><th style="text-align:center">N°</th></tr></thead><tbody>'+h+"</tbody></table></div>"}var x={};d.contratos.forEach(function(g){x[g.tipo]=(x[g.tipo]||0)+1});var P=d.contratos.filter(function(g){if(!g.vencimiento)return!1;var k=new Date(g.vencimiento.split(" ").reverse().join("-")),R=(k-new Date)/864e5;return R>=0&&R<=60}),F=document.getElementById("rep-exports");if(F){var Y=Object.keys(x).map(function(g){return'<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #f0f2f5;font-size:12px"><span>'+g+"</span><strong>"+x[g]+"</strong></div>"}).join("");F.innerHTML='<div class="two"><div class="card"><div class="card-title">Por tipo de contrato</div>'+(Y||'<div style="color:#888;font-size:12px">Sin datos</div>')+'</div><div class="card"><div class="card-title">Vencimientos próximos (60 días)</div>'+(P.length?P.map(function(g){return'<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #f0f2f5;font-size:12px"><span>'+g.empresa+'</span><span class="tag tag-orange">'+g.vencimiento+"</span></div>"}).join(""):'<div style="color:#888;font-size:12px">No hay vencimientos próximos</div>')+'</div></div><div class="card"><div class="card-title" style="margin-bottom:10px">Exportar reportes</div><div style="display:flex;flex-wrap:wrap;gap:8px">'+[{label:"Contratos activos",ico:"ti-table"},{label:"Vencimientos",ico:"ti-calendar"},{label:"Por tipo",ico:"ti-chart-pie"},{label:"Solicitudes",ico:"ti-forms"},{label:"Ciclo de proceso",ico:"ti-arrows-exchange"},{label:"Auditoría",ico:"ti-shield-check"},{label:"Financiero",ico:"ti-currency-dollar"},{label:"Completo",ico:"ti-file-export"}].map(function(g){return`<button class="btn" onclick="exportReporte('`+g.label+`')" style="font-size:11px;display:flex;align-items:center;gap:5px"><i class="ti `+g.ico+'" aria-hidden="true"></i>'+g.label+"</button>"}).join("")+"</div></div>"}}function pe(n){if(typeof XLSX>"u"){l("Cargando..."),setTimeout(function(){pe(n)},600);return}var a,e;n==="proceso"?(e=["N°","Contraparte","Tipo","Etapa","Actor","Estado"],a=d.contratos.map(function(o){return[o.n,o.parte,o.tipo,o.etapa,o.actor,o.estado]})):n==="venc"?(e=["N°","Contraparte","Vencimiento","Estado"],a=d.contratos.map(function(o){return[o.n,o.parte,o.fin,o.estado]})):n==="fin"?(e=["N°","Contraparte","Tipo","Monto","Inicio","Vencimiento"],a=d.contratos.map(function(o){return[o.n,o.parte,o.tipo,o.monto,o.ini,o.fin]})):(e=["N°","Contraparte","Etapa","Actor","Estado"],a=d.contratos.map(function(o){return[o.n,o.parte,o.etapa,o.actor,o.estado]}));var t=XLSX.utils.aoa_to_sheet([e,...a]);t["!cols"]=e.map(function(){return{wch:16}});var i=XLSX.utils.book_new();XLSX.utils.book_append_sheet(i,t,"Reporte"),XLSX.writeFile(i,"reporte_"+n+"_"+new Date().toISOString().slice(0,10)+".xlsx"),l("Reporte descargado")}function ue(){if(typeof XLSX>"u"){l("Cargando..."),setTimeout(ue,600);return}var n=XLSX.utils.aoa_to_sheet([["N°","Contraparte","Tipo","Monto","Etapa","Actor","Estado"],...d.contratos.map(function(e){return[e.n,e.parte,e.tipo,e.monto,e.etapa,e.actor,e.estado]})]);n["!cols"]=[{wch:14},{wch:22},{wch:12},{wch:14},{wch:14},{wch:12},{wch:12}];var a=XLSX.utils.book_new();XLSX.utils.book_append_sheet(a,n,"Contratos"),XLSX.writeFile(a,"contratos_otic_"+new Date().toISOString().slice(0,10)+".xlsx"),l("Excel descargado")}function ge(){var n=document.getElementById("plantillas-grid");if(n){var a=[{id:"ft1",nombre:"Contrato Franquicia Tributaria SENCE v2026",tipo:"Franquicia Tributaria",version:"v2026",fecha:"2026",icon:"ti-file-certificate",color:"#1a4f8a",desc:"Contrato principal de administración de servicios de Franquicia Tributaria SENCE entre OTIC CChC y empresa adherida.",clave:"ft"},{id:"ft2",nombre:"Contrato Franquicia Tributaria EDC v2026",tipo:"Franquicia Tributaria EDC",version:"v2026",fecha:"2026",icon:"ti-file-certificate",color:"#1565C0",desc:"Variante EDC del contrato de Franquicia Tributaria SENCE con administración de cuenta empresas de capacitación.",clave:"edc"},{id:"ce1",nombre:"Addendum Administración Costo Empresa (Cuenta 2)",tipo:"Addendum",version:"v2023",fecha:"2023",icon:"ti-file-plus",color:"#2E7D32",desc:"Addendum que adiciona el servicio de Administración no Franquiciable o Administración Costo Empresa al contrato base.",clave:"add_ce"},{id:"ce2",nombre:"Addendum Franquicia Tributaria y Costo Empresa",tipo:"Addendum",version:"v2023",fecha:"2023",icon:"ti-file-plus",color:"#388E3C",desc:"Addendum de modificación para contratos que combinan Franquicia Tributaria SENCE y Servicio Costo Empresa.",clave:"add_ft_ce"},{id:"nda",nombre:"Acuerdo de Confidencialidad (NDA) v2026",tipo:"NDA",version:"v2026",fecha:"2026",icon:"ti-shield-lock",color:"#7B1FA2",desc:"Non-Disclosure Agreement (NDA) para resguardar información confidencial de OTIC CChC compartida con terceros.",clave:"nda"},{id:"sv",nombre:"Contrato de Prestación de Servicios v2026",tipo:"Servicios",version:"v2026",fecha:"2026",icon:"ti-briefcase",color:"#E65100",desc:"Contrato general de prestación de servicios entre OTIC CChC como cliente y un prestador externo.",clave:"sv"},{id:"ftce",nombre:"Contrato Franquicia Tributaria y Costo Empresa",tipo:"Franquicia + Costo Empresa",version:"v2026",fecha:"2026",icon:"ti-files",color:"#00695C",desc:"Contrato combinado que incluye Administración de Franquicia Tributaria SENCE y Administración Costo Empresa (Cuenta 1 y 2).",clave:"ft_ce"}];n.innerHTML=a.map(function(e){return`<div class="card" style="cursor:pointer;transition:box-shadow .15s;border:1.5px solid #e8ecf0" onmouseover="this.style.boxShadow='0 4px 16px rgba(0,0,0,.1)'" onmouseout="this.style.boxShadow='none'" onclick="abrirPlantilla('`+e.clave+`')"><div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:10px"><div style="width:38px;height:38px;border-radius:8px;background:`+e.color+'1a;display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="ti '+e.icon+'" style="font-size:18px;color:'+e.color+'" aria-hidden="true"></i></div><div style="flex:1;min-width:0"><div style="font-size:12px;font-weight:600;margin-bottom:2px;line-height:1.3">'+e.nombre+'</div><div style="display:flex;gap:5px;align-items:center"><span class="tag tag-blue" style="font-size:9px">'+e.tipo+'</span><span style="font-size:10px;color:#888">'+e.version+'</span></div></div></div><div style="font-size:11px;color:#666;line-height:1.5;margin-bottom:10px">'+e.desc+`</div><div style="display:flex;gap:6px"><button class="btn btn-primary" style="font-size:10px;flex:1" onclick="event.stopPropagation();abrirPlantilla('`+e.clave+`')"><i class="ti ti-edit" aria-hidden="true"></i> Usar plantilla</button><button class="btn" style="font-size:10px" onclick="event.stopPropagation();previsualizarPlantilla('`+e.clave+`')"><i class="ti ti-eye" aria-hidden="true"></i></button></div></div>`}).join("")}}function me(){document.getElementById("modal-title").textContent="Nueva solicitud de contrato",document.getElementById("modal-body").innerHTML='<p style="font-size:11px;color:var(--color-text-secondary);margin-bottom:14px">Completa los datos de la solicitud. Fiscalía la revisará y verificará los documentos antes de elaborar el borrador.</p><div class="fg"><label class="fl">Descripción del contrato</label><input class="fi" id="ns-desc" placeholder="Ej: Capacitación Prevención de Riesgos"></div><div class="fg"><label class="fl">Empresa / OTEC</label><input class="fi" id="ns-empresa" placeholder="Razón social"></div><div class="fg"><label class="fl">RUT empresa</label><input class="fi" id="ns-rut" placeholder="76.000.000-1"></div><div class="fg"><label class="fl">Tipo de contrato</label><select class="fsel" id="ns-tipo"><option>Cap. OTIC</option><option>Proveedor</option><option>Convenio</option><option>Honorarios</option></select></div><div class="fg"><label class="fl">Monto estimado (CLP)</label><input class="fi" id="ns-monto" type="number" placeholder="0"></div><div class="fg"><label class="fl">Horas de capacitación</label><input class="fi" id="ns-horas" type="number" placeholder="0"></div><div style="border:0.5px solid var(--color-border-tertiary);border-radius:8px;padding:12px;margin-bottom:12px"><div style="font-size:11px;font-weight:500;margin-bottom:8px">Documentos adjuntos</div><div style="display:flex;flex-direction:column;gap:5px;font-size:11px"><label style="display:flex;justify-content:space-between"><span>Solicitud formal firmada</span><input type="checkbox" id="nd-1" checked></label><label style="display:flex;justify-content:space-between"><span>RUT y razón social empresa</span><input type="checkbox" id="nd-2"></label><label style="display:flex;justify-content:space-between"><span>Resolución SENCE del curso</span><input type="checkbox" id="nd-3"></label><label style="display:flex;justify-content:space-between"><span>Programa de capacitación</span><input type="checkbox" id="nd-4"></label><label style="display:flex;justify-content:space-between"><span>Cotización del OTEC</span><input type="checkbox" id="nd-5"></label><label style="display:flex;justify-content:space-between"><span>Datos bancarios</span><input type="checkbox" id="nd-6"></label></div></div><button class="btn btng" onclick="guardarNuevaSolicitud()" style="width:100%"><i class="ti ti-check" aria-hidden="true"></i> Crear solicitud</button>',document.getElementById("modal-wrap").style.display="flex"}function $e(n){var a=S(n);if(a){var e=encodeURIComponent("Documentos faltantes — "+n+" — OTIC CChC"),t=encodeURIComponent("Estimado/a representante de "+a.empresa+",Para continuar con el proceso contractual se requieren los siguientes documentos:"+a.obs+"Por favor enviar a la brevedad.Fiscalía OTIC CChC");window.open("mailto:?subject="+e+"&body="+t),l("Email preparado para "+a.empresa)}}U(),J(),C(),window.openPol=function(n){var a=n==="pp"?ee:ae;document.getElementById("pol-modal-title").textContent=a.titulo,document.getElementById("pol-modal-body").innerHTML='<div class="pol-content">'+a.html+"</div>",document.getElementById("pol-overlay").style.display="block"},window.closePol=function(){document.getElementById("pol-overlay").style.display="none"},window.authTab=function(n,a){document.querySelectorAll(".tab-btn").forEach(function(t){t.classList.remove("active")}),a&&a.classList.add("active"),document.querySelectorAll(".auth-pane").forEach(function(t){t.style.display="none"});var e=document.getElementById("pn-"+n);e&&(e.style.display="block")},window.toggleEye=function(n,a){var e=document.getElementById(n);e.type=e.type==="password"?"text":"password",a.querySelector("i").className=e.type==="password"?"ti ti-eye":"ti ti-eye-off"};var _=[{id:"1",nombre:"Carlos Administrador",email:"admin@otic.cl",_pass:"admin123",empresa:"OTIC CChC",rol:"administrador",estado:"activo",av:"CA"},{id:"2",nombre:"María Fiscalía",email:"fiscal@otic.cl",_pass:"fiscal123",empresa:"OTIC CChC",rol:"operador",estado:"activo",av:"MF"},{id:"3",nombre:"Juan Gerencia",email:"gerencia@otic.cl",_pass:"ger123",empresa:"OTIC CChC",rol:"operador",estado:"activo",av:"JG"},{id:"4",nombre:"Ana Empresa",email:"empresa@otic.cl",_pass:"emp123",empresa:"Constructora Arenas",rol:"colaborador",estado:"activo",av:"AE"},{id:"5",nombre:"Luis Pendiente",email:"luis@empresa.cl",_pass:"luis123",empresa:"Empresa Nueva SA",rol:"colaborador",estado:"pendiente",av:"LP"}],f=null;function y(n,a){var e=document.getElementById(n);e&&(e.textContent=a,e.style.display="block")}function K(n){var a=document.getElementById(n);a&&(a.style.display="none")}window.doLogin=async function(){var n=(document.getElementById("lem").value||"").trim(),a=document.getElementById("lpw").value||"";if(K("lerr"),!n||!a){y("lerr","Completa todos los campos");return}var e=document.querySelector(".btn-main");e&&(e.disabled=!0,e.textContent="Ingresando...");try{var t=await ze(n,a),i=t.perfil;if(!i){y("lerr","Perfil no encontrado. Contacta al administrador.");return}if(i.estado==="pendiente"){y("lerr","Tu cuenta está pendiente de aprobación por el administrador.");return}if(i.estado==="inactivo"){y("lerr","Tu cuenta está desactivada. Contacta al administrador.");return}f=i,await Ze(),ea()}catch(r){var o=r.message||"Error al iniciar sesión";o.includes("Invalid login")&&(o="Email o contraseña incorrectos"),o.includes("Email not confirmed")&&(o="Confirma tu email antes de ingresar"),y("lerr",o)}finally{e&&(e.disabled=!1,e.textContent="Iniciar sesión")}};async function Ze(){try{var[n,a]=await Promise.all([Ie(),we()]);d.contratos=(n||[]).map(function(e){return{id:e.id,n:e.numero,empresa:e.empresa,parte:e.empresa,rut:e.rut_empresa,tipo:e.tipo,etapa:e.etapa,actor:e.actor||"Fiscalía",estado:e.estado,monto:e.monto||0,horas:e.horas||0,fecha:e.fecha_inicio,vencimiento:e.fecha_termino,firmas:e.firmas||{},vb:{fiscalia:e.vb_fiscalia,gerencia:e.vb_gerencia},historial:[{fecha:"Creado",texto:"Contrato registrado en NEXO"}],_fromDB:!0}}),d.solicitudes=(a||[]).map(function(e){return{id:e.id,desc:e.descripcion,empresa:e.empresa||"—",rut:e.rut||"—",tipo:e.tipo,monto:e.monto||0,horas:e.horas||0,estado:e.estado||"pendiente",etapa:e.etapa||"Solicitud",fecha:new Date(e.created_at).toLocaleDateString("es-CL"),docs:e.docs||{},obs:e.observaciones||"",contratoId:e.contrato_id,actor:"Fiscalía",_fromDB:!0}}),console.log("State loaded: "+d.contratos.length+" contratos, "+d.solicitudes.length+" solicitudes")}catch(e){console.warn("Error loading from Supabase, using demo data:",e.message)}}window.doReg=async function(){var n=(document.getElementById("rnm").value||"").trim(),a=(document.getElementById("rem").value||"").trim(),e=(document.getElementById("remp").value||"").trim(),t=document.getElementById("rrol").value,i=document.getElementById("rpw").value||"",o=document.getElementById("rpw2").value||"",r=document.getElementById("chk-pp").checked,s=document.getElementById("chk-tu").checked;if(K("rerr"),!n||!a||!e||!i){y("rerr","Completa todos los campos");return}if(i.length<8){y("rerr","La contraseña debe tener al menos 8 caracteres");return}if(i!==o){y("rerr","Las contraseñas no coinciden");return}if(!r){y("rerr","Debes aceptar la Política de Privacidad");return}if(!s){y("rerr","Debes aceptar los Términos de Uso");return}var p=document.querySelector("#pn-reg .btn-main");p&&(p.disabled=!0,p.textContent="Enviando...");try{await Ee({email:a,password:i,nombre:n,empresa:e,rol:t});var c=document.getElementById("rok");c&&(c.textContent="✓ Registro enviado. Revisa tu email para confirmar tu cuenta. El administrador revisará tu solicitud.",c.style.display="block"),["rnm","rem","remp","rpw","rpw2"].forEach(function(h){var x=document.getElementById(h);x&&(x.value="")}),document.getElementById("chk-pp").checked=!1,document.getElementById("chk-tu").checked=!1}catch(h){var u=h.message||"Error al registrarse";u.includes("already registered")&&(u="Este email ya está registrado"),u.includes("weak_password")&&(u="Contraseña muy débil, usa al menos 8 caracteres"),y("rerr",u)}finally{p&&(p.disabled=!1,p.textContent="Solicitar acceso")}},window.doRec=function(){var n=(document.getElementById("rece").value||"").trim(),a=document.getElementById("recok");if(!n){l("Ingresa tu email registrado");return}a&&(a.textContent="Si el email existe, recibirás las instrucciones.",a.style.display="block")},window.doLogout=async function(){try{await je()}catch(e){console.warn("signOut error:",e.message)}f=null,d.contratos=[],d.solicitudes=[],document.getElementById("app-screen").style.display="none",document.getElementById("auth-screen").style.display="block";var n=document.getElementById("lem");n&&(n.value="");var a=document.getElementById("lpw");a&&(a.value=""),K("lerr")};function ea(){document.getElementById("auth-screen").style.display="none",document.getElementById("app-screen").style.display="block";var n={administrador:"#c2410c",operador:"#1d4ed8",colaborador:"#15803d"},a=document.getElementById("nav-avatar");a.style.background=n[f.rol]||"#1a4f8a",a.textContent=f.av||f.nombre.split(" ").slice(0,2).map(function(i){return i[0].toUpperCase()}).join(""),document.getElementById("nav-name").textContent=f.nombre;var e={administrador:"Administrador",operador:"Operador — Fiscalía",colaborador:"Colaborador"};document.getElementById("nav-role").textContent=e[f.rol]||f.rol;var t={administrador:"rp-admin",operador:"rp-op",colaborador:"rp-col"};document.getElementById("topbar-role").innerHTML='<span class="role-pill '+t[f.rol]+'">'+e[f.rol]+"</span>",W(),v("dashboard")}function W(){var n=f,a=_.filter(function(o){return o.estado==="pendiente"}).length,e=d.solicitudes.filter(function(o){return o.estado==="pendiente"}).length,t="";t+='<div class="nav-group">Principal</div>',t+='<div class="nav-item" data-p="dashboard"><i class="ti ti-layout-dashboard" aria-hidden="true"></i>Dashboard</div>',n.rol!=="colaborador"?(t+='<div class="nav-group">Proceso contractual</div>',t+='<div class="nav-item" data-p="solicitudes"><i class="ti ti-forms" aria-hidden="true"></i>1. Solicitudes'+(e?'<span class="nav-badge nav-badge-warn">'+e+"</span>":"")+"</div>",t+='<div class="nav-item" data-p="revision"><i class="ti ti-clipboard-check" aria-hidden="true"></i>2. Revisión docs</div>',t+='<div class="nav-item" data-p="editor"><i class="ti ti-file-text" aria-hidden="true"></i>3. Editor borrador</div>',t+='<div class="nav-item" data-p="negociacion"><i class="ti ti-arrows-exchange" aria-hidden="true"></i>4. Negociación</div>',t+='<div class="nav-item" data-p="vb"><i class="ti ti-thumb-up" aria-hidden="true"></i>5. VB Gerencia/Fiscal</div>',t+='<div class="nav-item" data-p="firma"><i class="ti ti-pen" aria-hidden="true"></i>6. Firma</div>'):(t+='<div class="nav-group">Mis acciones</div>',t+='<div class="nav-item" data-p="mis-solicitudes"><i class="ti ti-forms" aria-hidden="true"></i>Mis solicitudes</div>',t+='<div class="nav-item" data-p="mi-firma"><i class="ti ti-pen" aria-hidden="true"></i>Pendiente firma</div>'),t+='<div class="nav-group">Repositorio</div>',t+='<div class="nav-item" data-p="repositorio"><i class="ti ti-folder" aria-hidden="true"></i>Repositorio</div>',n.rol!=="colaborador"&&(t+='<div class="nav-group">Análisis</div>',t+='<div class="nav-item" data-p="alertas"><i class="ti ti-bell" aria-hidden="true"></i>Alertas</div>',t+='<div class="nav-item" data-p="reportes"><i class="ti ti-chart-bar" aria-hidden="true"></i>Reportes</div>'),n.rol==="administrador"&&(t+='<div class="nav-group">Administración</div>',t+='<div class="nav-item" data-p="admin-usuarios"><i class="ti ti-users" aria-hidden="true"></i>Usuarios'+(a?'<span class="nav-badge nav-badge-warn">'+a+"</span>":"")+"</div>",t+='<div class="nav-item" data-p="admin-plantillas"><i class="ti ti-template" aria-hidden="true"></i>Plantillas</div>',t+='<div class="nav-item" data-p="admin-recordatorios"><i class="ti ti-bell" aria-hidden="true"></i>Recordatorios</div>',t+='<div class="nav-item" data-p="admin-config"><i class="ti ti-settings" aria-hidden="true"></i>Configuración</div>'),t+='<div class="nav-group">Mi cuenta</div>',t+='<div class="nav-item" data-p="perfil"><i class="ti ti-user" aria-hidden="true"></i>Mi perfil</div>';var i=document.getElementById("sidebar-nav");i.innerHTML=t,i.addEventListener("click",function(o){var r=o.target.closest(".nav-item");r&&r.dataset.p&&v(r.dataset.p)})}var O=[{id:"1",nombre:"Franquicia Tributaria V2026",tipo:"Franquicia Tributaria",version:"v3",ed:"12 jun 2025",autor:"María Fiscalía",estado:"activa"},{id:"2",nombre:"Franquicia Tributaria EDC V2026",tipo:"Franquicia Tributaria",version:"v2",ed:"10 jun 2025",autor:"María Fiscalía",estado:"activa"},{id:"3",nombre:"Franquicia + Costo Empresa V2026",tipo:"Franquicia + CE",version:"v2",ed:"08 jun 2025",autor:"Carlos Administrador",estado:"activa"},{id:"4",nombre:"Addendum Costo Empresa 2023",tipo:"Addendum",version:"v1",ed:"05 jun 2025",autor:"María Fiscalía",estado:"activa"},{id:"5",nombre:"NDA V2026",tipo:"Confidencialidad",version:"v2",ed:"01 jun 2025",autor:"Carlos Administrador",estado:"activa"},{id:"6",nombre:"Contrato de Servicios V2026",tipo:"Servicios",version:"v1",ed:"28 may 2025",autor:"María Fiscalía",estado:"borrador"}],B=[{id:"1",nombre:"Vencimiento — 30 días",disparador:"30 días antes del vencimiento",destinatario:"Operador responsable",activo:!0},{id:"2",nombre:"Vencimiento — 7 días",disparador:"7 días antes del vencimiento",destinatario:"Operador + Admin",activo:!0},{id:"3",nombre:"Empresa sin respuesta — 3 días",disparador:"3 días sin validar borrador",destinatario:"Fiscalía",activo:!0},{id:"4",nombre:"OTIC sin info — 5 días",disparador:"5 días sin completar solicitud",destinatario:"Fiscalía",activo:!1},{id:"5",nombre:"VB pendiente — 2 días",disparador:"2 días sin otorgar VB",destinatario:"Administrador",activo:!0}],fe=[{f:"12 jun 09:00",u:"admin@otic.cl",a:"Login",d:"Acceso exitoso"},{f:"12 jun 08:45",u:"fiscal@otic.cl",a:"Login",d:"Acceso exitoso"},{f:"12 jun 08:30",u:"admin@otic.cl",a:"Plantilla editada",d:"Franquicia Tributaria V2026 v3"},{f:"11 jun 17:20",u:"admin@otic.cl",a:"Usuario aprobado",d:"pedro@otic.cl"}];function E(){var n=document.getElementById("pg-admin-usuarios");n&&(n.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
        <div><div style="font-size:14px;font-weight:600">Gestión de usuarios</div><div style="font-size:11px;color:#888">Aprueba, crea y gestiona permisos</div></div>
        <button class="btn btn-primary" onclick="openAdminModal('nu')"><i class="ti ti-user-plus" aria-hidden="true"></i> Crear usuario</button>
      </div>
      <div id="admin-upend"></div>
      <div style="font-size:12px;font-weight:600;margin-bottom:8px">Usuarios activos</div>
      <div class="table-wrap"><table><thead><tr><th>Nombre</th><th>Email</th><th>Empresa</th><th>Rol</th><th>Estado</th><th>Acciones</th></tr></thead><tbody id="admin-utb"></tbody></table></div>`);var a=_.filter(function(s){return s.estado==="pendiente"}),e=_.filter(function(s){return s.estado!=="pendiente"}),t="";a.length&&(t='<div style="font-size:12px;font-weight:600;margin-bottom:8px;color:#ea580c"><i class="ti ti-alert-circle" aria-hidden="true"></i> Pendientes ('+a.length+")</div>",t+='<div class="table-wrap" style="margin-bottom:14px"><table><thead><tr><th>Nombre</th><th>Email</th><th>Empresa</th><th>Rol</th><th>Políticas</th><th>Acciones</th></tr></thead><tbody>',a.forEach(function(s){var p=s.acepto_pp&&s.acepto_tu?'<span class="tag tag-green">Aceptadas</span>':'<span class="tag tag-orange">Pendiente</span>';t+="<tr><td>"+s.nombre+"</td><td>"+s.email+"</td><td>"+(s.empresa||"—")+"</td>",t+='<td><span class="role-tag role-'+(s.rol==="administrador"?"admin":s.rol==="operador"?"op":"col")+'">'+s.rol+"</span></td>",t+="<td>"+p+"</td>",t+=`<td style="display:flex;gap:5px;padding:6px 11px"><button class="btn btn-success" style="font-size:10px" onclick="apUser('`+s.id+`')">Aprobar</button><button class="btn btn-danger" style="font-size:10px" onclick="rechUser('`+s.id+`')">Rechazar</button></td></tr>`}),t+="</tbody></table></div>");var i=document.getElementById("admin-upend");i&&(i.innerHTML=t);var o={administrador:"#c2410c",operador:"#1d4ed8",colaborador:"#15803d"},r=document.getElementById("admin-utb");r&&(r.innerHTML=e.map(function(s){return'<tr><td><div style="display:flex;align-items:center;gap:7px"><div style="width:24px;height:24px;border-radius:50%;background:'+(o[s.rol]||"#888")+';color:#fff;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700">'+(s.av||s.nombre[0])+"</div>"+s.nombre+"</div></td><td>"+s.email+"</td><td>"+(s.empresa||"—")+'</td><td><span class="role-tag role-'+(s.rol==="administrador"?"admin":s.rol==="operador"?"op":"col")+'">'+s.rol+'</span></td><td><span class="tag '+(s.estado==="activo"?"tag-green":"tag-red")+'">'+s.estado+'</span></td><td><div style="display:flex;gap:4px">'+(s.id!==f.id?'<button class="btn '+(s.estado==="activo"?"btn-warning":"btn-success")+`" style="font-size:10px" onclick="togSt('`+s.id+`')">`+(s.estado==="activo"?"Desact.":"Activar")+"</button>":"")+"</div></td></tr>"}).join(""))}window.apUser=function(n){var a=_.find(function(e){return e.id==n});a&&(a.estado="activo",fe.unshift({f:new Date().toLocaleString("es-CL"),u:f.email,a:"Usuario aprobado",d:a.email+" — "+a.rol}),l("Usuario "+a.nombre+" aprobado"),W(),E())},window.rechUser=function(n){if(confirm("¿Rechazar esta solicitud?")){var a=_.findIndex(function(e){return e.id==n});a>=0&&_.splice(a,1),l("Solicitud rechazada"),W(),E()}},window.togSt=function(n){var a=_.find(function(e){return e.id==n});a&&(a.estado=a.estado==="activo"?"inactivo":"activo",l("Usuario "+(a.estado==="activo"?"activado":"desactivado")+": "+a.nombre),E())};function N(){var n=document.getElementById("pg-admin-plantillas");n&&(n.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
        <div><div style="font-size:14px;font-weight:600">Gestión de plantillas</div><div style="font-size:11px;color:#888">Crea, edita y versiona los formatos oficiales</div></div>
        <button class="btn btn-primary" onclick="openAdminModal('np')"><i class="ti ti-plus" aria-hidden="true"></i> Nueva plantilla</button>
      </div>
      <div class="table-wrap"><table><thead><tr><th>Nombre</th><th>Tipo</th><th>Versión</th><th>Editado</th><th>Estado</th><th>Acciones</th></tr></thead><tbody id="admin-pltb"></tbody></table></div>`);var a=document.getElementById("admin-pltb");a&&(a.innerHTML=O.map(function(e){return'<tr><td style="font-weight:600">'+e.nombre+"</td><td>"+e.tipo+"</td><td>"+e.version+'</td><td style="font-size:11px;color:#888">'+e.ed+" · "+e.autor+'</td><td><span class="tag '+(e.estado==="activa"?"tag-green":"tag-blue")+'">'+e.estado+`</span></td><td><div style="display:flex;gap:4px"><button class="btn btn-primary" style="font-size:10px" onclick="editarPlantillaAdmin('`+e.id+`')"><i class="ti ti-edit" aria-hidden="true"></i> Editar</button><button class="btn" style="font-size:10px" onclick="dupAdminPl('`+e.id+`')"><i class="ti ti-copy" aria-hidden="true"></i></button><button class="btn btn-danger" style="font-size:10px" onclick="delAdminPl('`+e.id+`')"><i class="ti ti-trash" aria-hidden="true"></i></button></div></td></tr>`}).join(""))}window.editarPlantillaAdmin=function(n){var a={1:"ft",2:"edc",3:"ft_ce",4:"add_ce",5:"nda",6:"sv"},e=a[String(n)]||"ft";m.contratoId=null,m._tplClave=e,v("editor"),setTimeout(function(){window.loadTplEd&&window.loadTplEd(e)},200)},window.dupAdminPl=function(n){var a=O.find(function(e){return e.id==n});a&&(O.push({id:Date.now().toString(),nombre:"Copia de "+a.nombre,tipo:a.tipo,version:"v1",ed:new Date().toLocaleDateString("es-CL"),autor:f.nombre,estado:"borrador"}),l("Plantilla duplicada"),N())},window.delAdminPl=function(n){if(confirm("¿Eliminar esta plantilla?")){var a=O.findIndex(function(e){return e.id==n});a>=0&&O.splice(a,1),l("Plantilla eliminada"),N()}};function Q(){var n=document.getElementById("pg-admin-recordatorios");n&&(n.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
        <div><div style="font-size:14px;font-weight:600">Recordatorios automáticos</div></div>
        <button class="btn btn-primary" onclick="openAdminModal('nr')"><i class="ti ti-plus" aria-hidden="true"></i> Nuevo</button>
      </div>
      <div class="two">
        <div class="card"><div class="card-title">Configurados</div><div id="admin-reclist"></div></div>
        <div class="card"><div class="card-title">Estadísticas</div><div id="admin-recst"></div></div>
      </div>`);var a=document.getElementById("admin-reclist");if(a){a.innerHTML=B.map(function(i){return'<div style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-bottom:1px solid #f0f2f5"><button class="toggle '+(i.activo?"on":"off")+`" onclick="this.classList.toggle('on');this.classList.toggle('off')" aria-label="Toggle"></button><div style="flex:1"><div style="font-size:12px;font-weight:600">`+i.nombre+'</div><div style="font-size:10px;color:#888">'+i.disparador+" · "+i.destinatario+"</div></div></div>"}).join("");var e=B.filter(function(i){return i.activo}).length,t=document.getElementById("admin-recst");t&&(t.innerHTML='<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #f0f2f5;font-size:12px"><span style="color:#888">Activos</span><strong>'+e+'</strong></div><div style="display:flex;justify-content:space-between;padding:7px 0;font-size:12px"><span style="color:#888">Total</span><strong>'+B.length+"</strong></div>")}}function xe(){var n=document.getElementById("pg-admin-config");n&&(n.innerHTML=`<div class="two">
        <div class="card"><div class="card-title">Configuración NEXO</div>
          <div class="fg"><label class="fl">Nombre del sistema</label><input class="fi" value="NEXO — ContractOS OTIC CChC"></div>
          <div class="fg"><label class="fl">Email administrador</label><input class="fi" value="admin@otic-cchc.cl"></div>
          <div class="fg"><label class="fl">Organización</label><input class="fi" value="Corporación de Capacitación de la Construcción"></div>
          <div class="fg"><label class="fl">RUT</label><input class="fi" value="70.200.800-K"></div>
          <button class="btn btn-primary" onclick="toast('Configuración guardada')">Guardar cambios</button>
        </div>
        <div class="card"><div class="card-title">Seguridad</div><div id="admin-sec-toggles"></div></div>
      </div>
      <div class="card"><div class="card-title">Log de auditoría</div>
        <div class="table-wrap" style="margin:0"><table><thead><tr><th>Fecha</th><th>Usuario</th><th>Acción</th><th>Detalle</th></tr></thead><tbody id="admin-audb"></tbody></table></div>
      </div>`);var a=document.getElementById("admin-sec-toggles");a&&(a.innerHTML=["Contraseña segura (8+ caracteres)","Sesiones expiran en 8 h","Email al aprobar usuario","Log de auditoría","Auto-registro"].map(function(t){return'<div class="perm-row">'+t+`<button class="toggle on" onclick="this.classList.toggle('on');this.classList.toggle('off')" aria-label="Toggle"></button></div>`}).join(""));var e=document.getElementById("admin-audb");e&&(e.innerHTML=fe.map(function(t){return'<tr><td style="font-size:10px;color:#888">'+t.f+'</td><td style="font-size:11px">'+t.u+'</td><td style="font-size:11px"><strong>'+t.a+'</strong></td><td style="font-size:11px;color:#888">'+t.d+"</td></tr>"}).join(""))}function be(){var n=document.getElementById("pg-privacidad");n&&(n.innerHTML=`<div class="pol-page-hdr">
        <div class="pol-page-icon"><i class="ti ti-shield-check" aria-hidden="true"></i></div>
        <div>
          <div style="font-size:14px;font-weight:600">Política de Privacidad y Protección de Datos Personales</div>
          <div style="font-size:11px;color:#888;margin-top:3px">Versión 1.0 · 14 junio 2026 · Ley N° 21.719 · Uso interno OTIC CChC</div>
        </div>
      </div>
      <div class="card pol-content" id="pp-page-content"></div>`);var a=document.getElementById("pp-page-content");a&&(a.innerHTML=ee.html)}function ye(){var n=document.getElementById("pg-terminos");n&&(n.innerHTML=`<div class="pol-page-hdr">
        <div class="pol-page-icon"><i class="ti ti-file-description" aria-hidden="true"></i></div>
        <div>
          <div style="font-size:14px;font-weight:600">Términos y Condiciones de Uso</div>
          <div style="font-size:11px;color:#888;margin-top:3px">Versión 1.0 · 14 junio 2026 · Uso interno OTIC CChC</div>
        </div>
      </div>
      <div class="card pol-content" id="tu-page-content"></div>`);var a=document.getElementById("tu-page-content");a&&(a.innerHTML=ae.html)}function he(){var n=document.getElementById("pg-perfil");n&&(n.innerHTML=`<div style="max-width:460px">
        <div class="card" style="margin-bottom:12px"><div class="card-title">Mi perfil</div><div id="perfil-content"></div></div>
        <div class="card"><div class="card-title">Cambiar contraseña</div>
          <div class="fg"><label class="fl">Contraseña actual</label><input type="password" placeholder="••••••••"></div>
          <div class="fg"><label class="fl">Nueva contraseña</label><input id="np1" type="password" placeholder="Mín. 8 caracteres"></div>
          <div class="fg"><label class="fl">Confirmar</label><input id="np2" type="password" placeholder="Repite la contraseña"></div>
          <button class="btn btn-primary" onclick="cambiarPass()">Actualizar contraseña</button>
        </div>
      </div>`);var a=f,e=document.getElementById("perfil-content");!e||!a||(e.innerHTML='<div style="display:flex;align-items:center;gap:14px;margin-bottom:16px"><div style="width:50px;height:50px;border-radius:50%;background:#1d4ed8;color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700">'+(a.av||a.nombre[0])+'</div><div><div style="font-size:15px;font-weight:600">'+a.nombre+'</div><span class="role-tag role-'+(a.rol==="administrador"?"admin":a.rol==="operador"?"op":"col")+'">'+a.rol+'</span></div></div><div class="fg"><label class="fl">Nombre</label><input class="fi" value="'+a.nombre+'"></div><div class="fg"><label class="fl">Email</label><input class="fi" value="'+a.email+'" readonly></div><div class="fg"><label class="fl">Empresa</label><input class="fi" value="'+(a.empresa||"OTIC CChC")+`"></div><button class="btn btn-primary" onclick="toast('Perfil actualizado')">Guardar cambios</button><div style="margin-top:12px;padding:9px 12px;background:#f5f8fd;border-radius:8px;font-size:11px;color:#5a7fa8;border:1px solid #dde8f5">✓ Política de Privacidad v1.0 · ✓ Términos de Uso v1.0</div>`)}window.cambiarPass=function(){var n=document.getElementById("np1").value||"",a=document.getElementById("np2").value||"";if(!n||n.length<8){l("Mínimo 8 caracteres");return}if(n!==a){l("Las contraseñas no coinciden");return}l("Contraseña actualizada correctamente"),document.getElementById("np1").value="",document.getElementById("np2").value=""};function ve(){var n=document.getElementById("pg-mis-solicitudes");n&&(n.innerHTML=`<div class="card" style="border:1.5px dashed #1a4f8a;cursor:pointer;text-align:center;padding:20px" onclick="openAdminModal('ns')">
        <i class="ti ti-plus" style="font-size:24px;color:#1a4f8a;display:block;margin-bottom:6px" aria-hidden="true"></i>
        <div style="font-size:13px;font-weight:600;color:#1a4f8a">Nueva solicitud de contrato</div>
      </div>
      <div class="table-wrap" style="margin-top:12px"><table><thead><tr><th>ID</th><th>Descripción</th><th>Fecha</th><th>Estado</th></tr></thead><tbody id="col-mstb"></tbody></table></div>`);var a=document.getElementById("col-mstb");if(a){var e=d.solicitudes.filter(function(t){return t.empresa===f.empresa}).slice(0,5);e.length||(e=[{id:"SOL-003",desc:"Franquicia Tributaria 2025",fecha:"01 ene 2025",etapa:"Firmado"}]),a.innerHTML=e.map(function(t){return"<tr><td>"+t.id+"</td><td>"+t.desc+"</td><td>"+(t.fecha||t.f||"—")+'</td><td><span class="tag tag-blue">'+(t.etapa||t.estado||"Enviada")+"</span></td></tr>"}).join("")}}function Ce(){var n=document.getElementById("pg-mi-firma");n&&(n.innerHTML='<div id="col-mfcont"></div>');var a=document.getElementById("col-mfcont");a&&(a.innerHTML=`<div class="card" style="border:1.5px solid #1d4ed8"><div style="font-size:11px;font-weight:600;color:#1d4ed8;margin-bottom:6px">Pendiente de tu firma</div><div style="font-size:13px;font-weight:600;margin-bottom:4px">CT-2025-001 — ACHS Capacitaciones</div><div style="font-size:11px;color:#888;margin-bottom:10px">Franquicia Tributaria SENCE · VBs aprobados.</div><button class="btn btn-success" onclick="nav('firma')"><i class="ti ti-pen" aria-hidden="true"></i> Ir a módulo de firma</button></div>`)}window.nav=v,window.toast=l,window.closeModal=ne,window.abrirNuevaSolicitud=me,window.exportExcel=ue,window.abrirContrato=Qe,window.irARevision=Oe,window.irARenovar=Ye,window.aprobarRevision=Ne,window.toggleDoc=qe,window.pedirInfoEmail=$e,window.avanzarActor=Ue,window.registrarObs=Ve,window.aprobarNegociacion=re,window.sendReminderMail=Xe,window.otorgarVB=Ge,window.generarReporteVB=se,window.sendVBEmail=He,window.clearSign=Ke,window.confirmSign=We,window.exportWordEd=Me,window.exportPDFEd=Fe,window.enviarNegociacionEd=Be,window.guardarVersionEd=ie,window.loadTplEd=De,window.fmt=Te,window.insertClauseEd=Re,window.insertVarEd=Se,window.insertTableEd=Le,window.editVar=Pe,window.exportReporte=pe,window.renderRepo=J,window.renderRevision=V,window.renderEditor=X,window.renderFirma=H,window.renderNegociacion=D,window.renderVB=G,window.renderDashboard=U,window.renderSolicitudes=te,window.renderAlertas=le,window.renderReportes=ce,window.renderPlantillas=ge,window.renderAdminUsuarios=E,window.renderAdminPls=N,window.renderAdminRecs=Q,window.renderAdminConfig=xe,window.renderPerfil=he,window.renderColSolicitudes=ve,window.renderColFirma=Ce,window.renderPrivacidad=be,window.renderTerminos=ye;function aa(n,a){var e=document.getElementById("admin-modal-overlay"),t=document.getElementById("admin-modal-title"),i=document.getElementById("admin-modal-body");if(!(!e||!t||!i)){var o="",r="";if(n==="nu")o="Crear nuevo usuario",r='<div class="fg"><label class="fl">Nombre</label><input class="fi" id="nu-n"></div><div class="fg"><label class="fl">Email</label><input class="fi" id="nu-e" type="email"></div><div class="fg"><label class="fl">Empresa</label><input class="fi" id="nu-emp"></div><div class="fg"><label class="fl">Rol</label><select class="fsel" id="nu-r"><option>administrador</option><option>operador</option><option>colaborador</option></select></div><div class="fg"><label class="fl">Contrasena</label><input class="fi" id="nu-p" type="password" placeholder="Min. 8 caracteres"></div><div style="display:flex;gap:8px"><button class="btn btn-success" onclick="crearAdminUser()">Crear</button><button class="btn" onclick="closeAdminModal()">Cancelar</button></div>';else if(n==="np")o="Nueva plantilla",r='<div class="fg"><label class="fl">Nombre</label><input class="fi" id="np-n"></div><div class="fg"><label class="fl">Tipo</label><select class="fsel" id="np-t"><option>Franquicia Tributaria</option><option>Addendum</option><option>Confidencialidad</option><option>Servicios</option></select></div><div style="display:flex;gap:8px"><button class="btn btn-success" onclick="crearPlantilla()">Crear</button><button class="btn" onclick="closeAdminModal()">Cancelar</button></div>';else if(n==="nr")o="Nuevo recordatorio",r='<div class="fg"><label class="fl">Nombre</label><input class="fi" id="nr-n"></div><div class="fg"><label class="fl">Disparador</label><input class="fi" id="nr-t"></div><div class="fg"><label class="fl">Destinatario</label><select class="fsel" id="nr-d"><option>Operador responsable</option><option>Fiscalia</option><option>Administrador</option></select></div><div style="display:flex;gap:8px"><button class="btn btn-success" onclick="crearRecordatorio()">Crear</button><button class="btn" onclick="closeAdminModal()">Cancelar</button></div>';else if(n==="eu"&&a){o="Editar usuario";var s=["administrador","operador","colaborador"].map(function(u){return"<option"+(u===a.rol?" selected":"")+">"+u+"</option>"}).join(""),p=["activo","inactivo"].map(function(u){return"<option"+(u===a.estado?" selected":"")+">"+u+"</option>"}).join(""),c=a.nombre;r='<div class="fg"><label class="fl">Nombre</label><input class="fi" id="eu-n" value="'+c+'"></div><div class="fg"><label class="fl">Rol</label><select class="fsel" id="eu-r">'+s+'</select></div><div class="fg"><label class="fl">Estado</label><select class="fsel" id="eu-s">'+p+`</select></div><div style="display:flex;gap:8px"><button class="btn btn-success" onclick="saveAdminUser('`+(a.id||"")+`')">Guardar</button><button class="btn" onclick="closeAdminModal()">Cancelar</button></div>`}t.textContent=o,i.innerHTML=r,e.style.display="flex",e.onclick=function(u){u.target===e&&j()}}}function j(){var n=document.getElementById("admin-modal-overlay");n&&(n.style.display="none")}function na(){var n=(document.getElementById("nu-n").value||"").trim(),a=(document.getElementById("nu-e").value||"").trim(),e=(document.getElementById("nu-emp").value||"").trim(),t=document.getElementById("nu-r").value,i=document.getElementById("nu-p").value||"";if(!n||!a||!i){l("Completa todos los campos");return}if(i.length<8){l("Minimo 8 caracteres");return}var o=n.split(" ").slice(0,2).map(function(r){return r[0].toUpperCase()}).join("");_.push({id:Date.now().toString(),nombre:n,email:a,_pass:i,empresa:e,rol:t,estado:"activo",av:o}),l("Usuario "+n+" creado"),j(),E()}function ta(n){var a=_.find(function(e){return e.id==n});a&&(a.nombre=document.getElementById("eu-n").value,a.rol=document.getElementById("eu-r").value,a.estado=document.getElementById("eu-s").value,l("Usuario actualizado"),j(),E())}function oa(){var n=(document.getElementById("np-n").value||"").trim();if(!n){l("Ingresa un nombre");return}O.push({id:Date.now().toString(),nombre:n,tipo:document.getElementById("np-t").value,version:"v1",ed:new Date().toLocaleDateString("es-CL"),autor:f?f.nombre:"Admin",estado:"borrador"}),l("Plantilla creada"),j(),N()}function ia(){var n=(document.getElementById("nr-n").value||"").trim(),a=(document.getElementById("nr-t").value||"").trim();if(!n||!a){l("Completa nombre y disparador");return}B.push({id:Date.now().toString(),nombre:n,disparador:a,destinatario:document.getElementById("nr-d").value,activo:!0}),l("Recordatorio creado"),j(),Q()}window.openAdminModal=aa,window.closeAdminModal=j,window.crearAdminUser=na,window.saveAdminUser=ta,window.crearPlantilla=oa,window.crearRecordatorio=ia})(supabaseJs_2);
