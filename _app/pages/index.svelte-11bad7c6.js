import{L as Ft,C as Pe,S as mt,i as ft,s as vt,M as _t,N as Gt,O as Xt,k as zt,j as u,e as i,t as S,v as ze,F as Zt,P as el,d as a,l as h,c as n,a as d,g as P,w as Ye,b as t,Q as tl,J as e,f as U,x as Qe,p as xe,n as Ke,A as Je,R as C,T as we,U as de,K as bt,V as Yt,W as ll}from"../chunks/vendor-e80681f4.js";const gt=Pe("my-project"),wt=Pe("twentytwentyone-child"),at=Pe("nginx"),Dt=Pe("7.4"),ot=Pe("maria-10.3"),yt=Pe(""),Et=Pe(""),It=Pe(""),sl=Ft(ot,s=>s.includes("maria")?"mariadb_version":"mysql_version"),rl=Ft(ot,s=>s.substring(s.indexOf("-")+1));function al(s){let r,l,b,R,L,c,V,g,T,E,I,O,v,f,m,ae,x,N,z,Y,oe,W,w,De,$,ce,Te,K,y,ue,ee,Le,he,F,te,pe,Oe,q,me,le,Ve,fe,J,se,ve,ke,M,_e,X,Z;return E=new _t({props:{language:Gt,code:s[1]}}),m=new _t({props:{code:s[0]}}),Y=new _t({props:{language:Gt,code:s[2]}}),{c(){r=new Xt,l=zt(),b=u(),R=i("h2"),L=S("Code Generator:"),c=u(),V=i("h3"),g=S("1. .ddev/config.yaml"),T=u(),ze(E.$$.fragment),I=u(),O=i("h3"),v=S("2. .gitignore"),f=u(),ze(m.$$.fragment),ae=u(),x=i("h3"),N=S("3. .ddev/providers/wp-production.yaml"),z=u(),ze(Y.$$.fragment),oe=S(`
Source:
`),W=i("a"),w=S("https://github.com/mandrasch/ddev-wp-groundstation/blob/main/.ddev/providers/wp-production.yaml"),De=u(),$=i("div"),ce=i("h2"),Te=S("Afterwards:"),K=u(),y=i("ol"),ue=i("li"),ee=S("Create a new project folder (or create empty GitHub project)"),Le=u(),he=i("li"),F=S("Copy the generated file contents to the new project folder"),te=u(),pe=i("li"),Oe=S("Download your child theme into wp-content/themes/your-child-theme to manage it via git-tracked"),q=u(),me=i("li"),le=S('Run "ddev start"'),Ve=u(),fe=i("li"),J=S('Run "ddev auth ssh"'),se=u(),ve=i("li"),ke=S('Pull your live site to the local project: "ddev pull wp-production"'),M=u(),_e=i("li"),X=S("Optional: Git commit & setup child theme via WPPusher (or other methods)"),this.h()},l(o){const k=Zt('[data-svelte="svelte-15l2qc9"]',document.head);r=el(k),l=zt(),k.forEach(a),b=h(o),R=n(o,"H2",{});var A=d(R);L=P(A,"Code Generator:"),A.forEach(a),c=h(o),V=n(o,"H3",{});var be=d(V);g=P(be,"1. .ddev/config.yaml"),be.forEach(a),T=h(o),Ye(E.$$.fragment,o),I=h(o),O=n(o,"H3",{});var re=d(O);v=P(re,"2. .gitignore"),re.forEach(a),f=h(o),Ye(m.$$.fragment,o),ae=h(o),x=n(o,"H3",{});var ie=d(x);N=P(ie,"3. .ddev/providers/wp-production.yaml"),ie.forEach(a),z=h(o),Ye(Y.$$.fragment,o),oe=P(o,`
Source:
`),W=n(o,"A",{href:!0});var We=d(W);w=P(We,"https://github.com/mandrasch/ddev-wp-groundstation/blob/main/.ddev/providers/wp-production.yaml"),We.forEach(a),De=h(o),$=n(o,"DIV",{class:!0});var ye=d($);ce=n(ye,"H2",{});var G=d(ce);Te=P(G,"Afterwards:"),G.forEach(a),K=h(ye),y=n(ye,"OL",{});var H=d(y);ue=n(H,"LI",{});var ne=d(ue);ee=P(ne,"Create a new project folder (or create empty GitHub project)"),ne.forEach(a),Le=h(H),he=n(H,"LI",{});var Q=d(he);F=P(Q,"Copy the generated file contents to the new project folder"),Q.forEach(a),te=h(H),pe=n(H,"LI",{});var ge=d(pe);Oe=P(ge,"Download your child theme into wp-content/themes/your-child-theme to manage it via git-tracked"),ge.forEach(a),q=h(H),me=n(H,"LI",{});var He=d(me);le=P(He,'Run "ddev start"'),He.forEach(a),Ve=h(H),fe=n(H,"LI",{});var $e=d(fe);J=P($e,'Run "ddev auth ssh"'),$e.forEach(a),se=h(H),ve=n(H,"LI",{});var Ee=d(ve);ke=P(Ee,'Pull your live site to the local project: "ddev pull wp-production"'),Ee.forEach(a),M=h(H),_e=n(H,"LI",{});var Ae=d(_e);X=P(Ae,"Optional: Git commit & setup child theme via WPPusher (or other methods)"),Ae.forEach(a),H.forEach(a),ye.forEach(a),this.h()},h(){r.a=l,t(W,"href","https://github.com/mandrasch/ddev-wp-groundstation/blob/main/.ddev/providers/wp-production.yaml"),t($,"class","row")},m(o,k){r.m(tl,document.head),e(document.head,l),U(o,b,k),U(o,R,k),e(R,L),U(o,c,k),U(o,V,k),e(V,g),U(o,T,k),Qe(E,o,k),U(o,I,k),U(o,O,k),e(O,v),U(o,f,k),Qe(m,o,k),U(o,ae,k),U(o,x,k),e(x,N),U(o,z,k),Qe(Y,o,k),U(o,oe,k),U(o,W,k),e(W,w),U(o,De,k),U(o,$,k),e($,ce),e(ce,Te),e($,K),e($,y),e(y,ue),e(ue,ee),e(y,Le),e(y,he),e(he,F),e(y,te),e(y,pe),e(pe,Oe),e(y,q),e(y,me),e(me,le),e(y,Ve),e(y,fe),e(fe,J),e(y,se),e(y,ve),e(ve,ke),e(y,M),e(y,_e),e(_e,X),Z=!0},p(o,[k]){const A={};k&2&&(A.code=o[1]),E.$set(A);const be={};k&1&&(be.code=o[0]),m.$set(be)},i(o){Z||(xe(E.$$.fragment,o),xe(m.$$.fragment,o),xe(Y.$$.fragment,o),Z=!0)},o(o){Ke(E.$$.fragment,o),Ke(m.$$.fragment,o),Ke(Y.$$.fragment,o),Z=!1},d(o){a(l),o&&r.d(),o&&a(b),o&&a(R),o&&a(c),o&&a(V),o&&a(T),Je(E,o),o&&a(I),o&&a(O),o&&a(f),Je(m,o),o&&a(ae),o&&a(x),o&&a(z),Je(Y,o),o&&a(oe),o&&a(W),o&&a(De),o&&a($)}}}function ol(s,r,l){let b,R,L,c,V,g,T,E,I,O,v;C(s,wt,m=>l(3,L=m)),C(s,It,m=>l(4,c=m)),C(s,yt,m=>l(5,V=m)),C(s,Et,m=>l(6,g=m)),C(s,rl,m=>l(7,T=m)),C(s,sl,m=>l(8,E=m)),C(s,at,m=>l(9,I=m)),C(s,Dt,m=>l(10,O=m)),C(s,gt,m=>l(11,v=m));const f=`# Pull a live site into DDEV

# This pulls a live wordpress site via SSH, 
# WP-CLI (or mysqldump) and rsync into DDEV.

# Usage:
# 1. Add environment as web_environment to config.yaml
# 2. Run 'ddev pull wp-production'

# More general information regarding the DDEV pull feature:
# https://ddev.readthedocs.io/en/stable/users/providers/provider-introduction/

# !! MAKE SURE YOU GOT DDEV VERSION >= 1.18.2 !!
# https://github.com/drud/ddev/releases
# (Otherwise overriding files_import_command won't work)

environment_variables:
  sshUser: \${PRODUCTION_SSH_USER}
  sshHost: \${PRODUCTION_SSH_HOST}
  sshWpDir: \${PRODUCTION_SSH_WP_DIR}
  # These values are loaded via .ddev/config.yaml, you need 
  # to add the following to .ddev/config.yaml and run 'ddev restart':
  # 
  # web_environment:
  # - PRODUCTION_SSH_USER=ssh12345678
  # - PRODUCTION_SSH_HOST=ngcobalt12345678.manitu.net
  # - PRODUCTION_SSH_WP_DIR=/home/sites/site12345678/web/nature-blog.mandrasch.eu
  # 
  # See: https://ddev.readthedocs.io/en/stable/users/extend/customization-extendibility/#providing-custom-environment-variables-to-a-container

# 1. Add ssh keys to the user agent
auth_command:
  command: |
    ssh-add -l >/dev/null || ( echo "Please 'ddev auth ssh' before running this command." && exit 1 )

# 2. Pull a fresh database dump via SSH
# 
# (The database url replace-search will be done later in
# files_import_command,because we need wp-config.php for it)
# 
# If WP-CLI is available on server: 
# Use 'wp db export' command, it'll use wp-config.php DB settings 
#
# If WP-CLI is not available, try with mysqldump:
# Use mysqldump and get db connection from wp-config.php via bash,
# thanks to https://tomjn.com/2014/03/01/wordpress-bash-magic/
# Important: Use backslash for mysqldump values, thanks to 
# https://stackoverflow.com/a/13826220
# 
db_pull_command:
  command: |
    # set -x   # You can enable bash debugging output by uncommenting
    set -eu -o pipefail
    pushd "/var/www/html/\${DDEV_DOCROOT}" >/dev/null
    echo "Connect to SSH and check if WP-CLI is available ..."
    # TODO: is there a more robust way? Any unexpected output will cause an error?
    WP_CLI_AVAILABLE="$(ssh \${sshUser}@\${sshHost} "cd \${sshWpDir} && if [[ -x 'command -v wp' ]]; then echo "1"; else echo "0"; fi")"
    if [ "$WP_CLI_AVAILABLE" = "1" ]; then echo "WP-CLI is available remotely"; else echo "WP-CLI not available remotely, we'll try mysqldump instead"; fi
    #
    # Database dump via WP-CLI 'wp db export':
    # 
    if [ "$WP_CLI_AVAILABLE" = "1" ]; then ssh \${sshUser}@\${sshHost} "cd \${sshWpDir} && wp db export | gzip -9 -c" > .ddev/.downloads/db.sql.gz; fi
    #
    # Database dump via mysqldump (if WP-CLI not available):
    #
    if [ "$WP_CLI_AVAILABLE" = "0" ]; then ssh \${sshUser}@\${sshHost} "cd \${sshWpDir} && mysqldump --user=$(cat wp-config.php | grep DB_USER | cut -d ' -f 4) --password=$(cat wp-config.php | grep DB_PASSWORD | cut -d ' -f 4) --host=$(cat wp-config.php | grep DB_HOST | cut -d ' -f 4) $(cat wp-config.php | grep DB_NAME | cut -d ' -f 4) | gzip -9 -c" > .ddev/.downloads/db.sql.gz; fi
    # 
  service: web

# 3. Rsync all the files (except git-tracked ones)
# 
# We rsync files from remote to local docroot which are _not_ tracked via git
# (This allows us to track a child theme in git and doesnt't overwrite it. It is
# achieved with --include-from='.gitignore' --exclude='*')
files_pull_command:
  command: |
    # set -x   # You can enable bash debugging output by uncommenting
    set -eu -o pipefail
    ls /var/www/html/.ddev >/dev/null # This just refreshes stale NFS if possible
    pushd /var/www/html/\${DDEV_DOCROOT} >/dev/null
    # Add trailing slash for sshWpDir if missing, 
    # thanks to https://gist.github.com/luciomartinez/c322327605d40f86ee0c
    [[ "\${sshWpDir}" != */ ]] && sshWpDir="\${sshWpDir}/"
    # Sync files from remote (\${sshUser}@\${sshHost}:\${sshWpDir}) to local docroot (.)
    rsync -azh --progress --stats --include-from='.gitignore' --exclude='*' \${sshUser}@\${sshHost}:\${sshWpDir} .
  service: web

# 4. Set database connection + migrate URLs in DB
# 
# We use this step to run some important WP-CLI commands locally
# a) Replace db connection settings in wp-config.php
# b) Replace live site url (determined from backup)
# with DDEV_PRIMARY_URL (<your-project>.ddev.site) in local databse
# TODO: c) re-generate permalinks? other steps needed?
files_import_command:
  command: |
    # set -x  # You can enable bash debugging output by uncommenting
    set -eu -o pipefail
    pushd "/var/www/html/\${DDEV_DOCROOT}" >/dev/null
    echo "Adjusting wp-config db connection settings for DDEV ..."
    wp config set DB_NAME "db" && wp config set DB_USER "db" && wp config set DB_PASSWORD "db" && wp config set DB_HOST "db"
    # Important use wp search-replace for URL replacement
    echo "Replacing the old URL ($(wp option get siteurl)) in database with DDEV local url (\${DDEV_PRIMARY_URL})..."
    wp search-replace $(wp option get siteurl) "\${DDEV_PRIMARY_URL}"
    # echo "Deleting config path for WP Super Cache (if installed) ..."
    # wp config delete WPCACHEHOME
    echo "All set, have fun! Run 'ddev launch' to open your site."
  service: web
`;return s.$$.update=()=>{s.$$.dirty&4080&&l(1,b=`name: ${v}
type: wordpress
docroot: ""
php_version: "${O}"
webserver_type: ${I}
router_http_port: "80"
router_https_port: "443"
xdebug_enabled: false
additional_hostnames: []
additional_fqdns: []
${E}: "${T}"
nfs_mount_enabled: false
mutagen_enabled: false
use_dns_when_possible: true
composer_version: "2"
web_environment:
- PRODUCTION_SSH_USER=${g}
- PRODUCTION_SSH_HOST=${V}
- PRODUCTION_SSH_WP_DIR=${c}`),s.$$.dirty&8&&l(0,R=`
# Ignore all ...
*

# ... but track specific files / folders: 

!.gitignore
!/README.md
!/LICENSE

# DDEV config
!/.ddev
/.ddev/*
!/.ddev/config.yaml
!/.ddev/providers
/.ddev/providers/*
!/.ddev/providers/wp-production.yaml

# child theme:
!/wp-content
/wp-content/*
!/wp-content/themes
/wp-content/themes/*
!/wp-content/themes/${L}
`)},[R,b,f,L,c,V,g,T,E,I,O,v]}class il extends mt{constructor(r){super();ft(this,r,ol,al,vt,{})}}function Qt(s,r,l){const b=s.slice();return b[20]=r[l].displayText,b[21]=r[l].value,b[23]=l,b}function xt(s,r,l){const b=s.slice();return b[24]=r[l],b[23]=l,b}function Kt(s){let r,l,b,R,L,c,V=s[24]+"",g,T,E,I,O;return{c(){r=i("div"),l=i("input"),L=u(),c=i("label"),g=S(V),E=u(),this.h()},l(v){r=n(v,"DIV",{class:!0});var f=d(r);l=n(f,"INPUT",{class:!0,id:!0,type:!0,name:!0}),L=h(f),c=n(f,"LABEL",{class:!0,for:!0});var m=d(c);g=P(m,V),m.forEach(a),E=h(f),f.forEach(a),this.h()},h(){t(l,"class","form-check-input"),t(l,"id",b=s[24]),t(l,"type","radio"),t(l,"name","phpVersion"),l.__value=R=s[24],l.value=l.__value,s[12][0].push(l),t(c,"class","form-check-label"),t(c,"for",T=s[24]),t(r,"class","form-check form-check-inline")},m(v,f){U(v,r,f),e(r,l),l.checked=l.__value===s[1],e(r,L),e(r,c),e(c,g),e(r,E),I||(O=we(l,"change",s[11]),I=!0)},p(v,f){f&2&&(l.checked=l.__value===v[1])},d(v){v&&a(r),s[12][0].splice(s[12][0].indexOf(l),1),I=!1,O()}}}function Jt(s){let r,l,b,R,L,c,V=s[20]+"",g,T,E,I,O;return{c(){r=i("div"),l=i("input"),L=u(),c=i("label"),g=S(V),E=u(),this.h()},l(v){r=n(v,"DIV",{class:!0});var f=d(r);l=n(f,"INPUT",{class:!0,id:!0,type:!0,name:!0}),L=h(f),c=n(f,"LABEL",{class:!0,for:!0});var m=d(c);g=P(m,V),m.forEach(a),E=h(f),f.forEach(a),this.h()},h(){t(l,"class","form-check-input"),t(l,"id",b="dbVersion"+s[23]),t(l,"type","radio"),t(l,"name","dbVersion"),l.__value=R=s[21],l.value=l.__value,s[12][1].push(l),t(c,"class","form-check-label"),t(c,"for",T="dbVersion"+s[23]),t(r,"class","form-check")},m(v,f){U(v,r,f),e(r,l),l.checked=l.__value===s[2],e(r,L),e(r,c),e(c,g),e(r,E),I||(O=we(l,"change",s[13]),I=!0)},p(v,f){f&4&&(l.checked=l.__value===v[2])},d(v){v&&a(r),s[12][1].splice(s[12][1].indexOf(l),1),I=!1,O()}}}function nl(s){let r,l,b,R,L,c,V,g,T,E,I,O,v,f,m,ae,x,N,z,Y,oe,W,w,De,$,ce,Te,K,y,ue,ee,Le,he,F,te,pe,Oe,q,me,le,Ve,fe,J,se,ve,ke,M,_e,X,Z,o,k,A,be,re,ie,We,ye,G,H,ne,Q,ge,He,$e,Ee,Ae,it,Ce,nt,dt,Re,Ne,ct,ut,Be,Ie,ht,pt,St,je=s[8],B=[];for(let p=0;p<je.length;p+=1)B[p]=Kt(xt(s,je,p));let qe=s[9],j=[];for(let p=0;p<qe.length;p+=1)j[p]=Jt(Qt(s,qe,p));return{c(){r=i("form"),l=i("div"),b=i("label"),R=S("Project name"),L=u(),c=i("input"),V=u(),g=i("div"),T=i("label"),E=S("PHP version"),I=u();for(let p=0;p<B.length;p+=1)B[p].c();O=u(),v=i("div"),f=i("label"),m=S("Database version"),ae=u();for(let p=0;p<j.length;p+=1)j[p].c();x=u(),N=i("div"),z=i("label"),Y=S("Web server"),oe=u(),W=i("div"),w=i("input"),De=u(),$=i("label"),ce=S("nginx"),Te=u(),K=i("div"),y=i("input"),ue=u(),ee=i("label"),Le=S("apache2"),he=u(),F=i("div"),te=i("label"),pe=S("Child theme folder (in wp-content/themes/)"),Oe=u(),q=i("input"),me=u(),le=i("div"),Ve=S("Child theme folder (in wp-content/themes/) is required."),fe=u(),J=i("div"),se=i("label"),ve=S("SSH host"),ke=u(),M=i("input"),_e=u(),X=i("div"),Z=i("label"),o=S("SSH username"),k=u(),A=i("input"),be=u(),re=i("div"),ie=i("label"),We=S("Path to WordPress on server"),ye=u(),G=i("input"),H=u(),ne=i("div"),Q=i("div"),ge=i("div"),He=S("Form submission successful!"),$e=u(),Ee=i("p"),Ae=S("To activate this form, sign up at"),it=u(),Ce=i("a"),nt=S("https://startbootstrap.com/solution/contact-forms"),dt=u(),Re=i("div"),Ne=i("div"),ct=S("Error sending message!"),ut=u(),Be=i("div"),Ie=i("button"),ht=S("Submit"),this.h()},l(p){r=n(p,"FORM",{id:!0});var D=d(r);l=n(D,"DIV",{class:!0});var _=d(l);b=n(_,"LABEL",{class:!0,for:!0});var Se=d(b);R=P(Se,"Project name"),Se.forEach(a),L=h(_),c=n(_,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),_.forEach(a),V=h(D),g=n(D,"DIV",{class:!0});var Xe=d(g);T=n(Xe,"LABEL",{class:!0});var Pt=d(T);E=P(Pt,"PHP version"),Pt.forEach(a),I=h(Xe);for(let Ue=0;Ue<B.length;Ue+=1)B[Ue].l(Xe);Xe.forEach(a),O=h(D),v=n(D,"DIV",{class:!0});var Ze=d(v);f=n(Ze,"LABEL",{class:!0,for:!0});var Tt=d(f);m=P(Tt,"Database version"),Tt.forEach(a),ae=h(Ze);for(let Ue=0;Ue<j.length;Ue+=1)j[Ue].l(Ze);Ze.forEach(a),x=h(D),N=n(D,"DIV",{class:!0});var Me=d(N);z=n(Me,"LABEL",{class:!0});var Lt=d(z);Y=P(Lt,"Web server"),Lt.forEach(a),oe=h(Me),W=n(Me,"DIV",{class:!0});var et=d(W);w=n(et,"INPUT",{class:!0,id:!0,type:!0,name:!0}),De=h(et),$=n(et,"LABEL",{class:!0,for:!0});var Ot=d($);ce=P(Ot,"nginx"),Ot.forEach(a),et.forEach(a),Te=h(Me),K=n(Me,"DIV",{class:!0});var tt=d(K);y=n(tt,"INPUT",{class:!0,id:!0,type:!0,name:!0}),ue=h(tt),ee=n(tt,"LABEL",{class:!0,for:!0});var Vt=d(ee);Le=P(Vt,"apache2"),Vt.forEach(a),tt.forEach(a),Me.forEach(a),he=h(D),F=n(D,"DIV",{class:!0});var Fe=d(F);te=n(Fe,"LABEL",{class:!0,for:!0});var kt=d(te);pe=P(kt,"Child theme folder (in wp-content/themes/)"),kt.forEach(a),Oe=h(Fe),q=n(Fe,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),me=h(Fe),le=n(Fe,"DIV",{class:!0,"data-sb-feedback":!0});var Rt=d(le);Ve=P(Rt,"Child theme folder (in wp-content/themes/) is required."),Rt.forEach(a),Fe.forEach(a),fe=h(D),J=n(D,"DIV",{class:!0});var lt=d(J);se=n(lt,"LABEL",{class:!0,for:!0});var Ut=d(se);ve=P(Ut,"SSH host"),Ut.forEach(a),ke=h(lt),M=n(lt,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),lt.forEach(a),_e=h(D),X=n(D,"DIV",{class:!0});var st=d(X);Z=n(st,"LABEL",{class:!0,for:!0});var Wt=d(Z);o=P(Wt,"SSH username"),Wt.forEach(a),k=h(st),A=n(st,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),st.forEach(a),be=h(D),re=n(D,"DIV",{class:!0});var rt=d(re);ie=n(rt,"LABEL",{class:!0,for:!0});var Ht=d(ie);We=P(Ht,"Path to WordPress on server"),Ht.forEach(a),ye=h(rt),G=n(rt,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),rt.forEach(a),H=h(D),ne=n(D,"DIV",{class:!0,id:!0});var $t=d(ne);Q=n($t,"DIV",{class:!0});var Ge=d(Q);ge=n(Ge,"DIV",{class:!0});var At=d(ge);He=P(At,"Form submission successful!"),At.forEach(a),$e=h(Ge),Ee=n(Ge,"P",{});var Ct=d(Ee);Ae=P(Ct,"To activate this form, sign up at"),Ct.forEach(a),it=h(Ge),Ce=n(Ge,"A",{href:!0});var Nt=d(Ce);nt=P(Nt,"https://startbootstrap.com/solution/contact-forms"),Nt.forEach(a),Ge.forEach(a),$t.forEach(a),dt=h(D),Re=n(D,"DIV",{class:!0,id:!0});var Bt=d(Re);Ne=n(Bt,"DIV",{class:!0});var jt=d(Ne);ct=P(jt,"Error sending message!"),jt.forEach(a),Bt.forEach(a),ut=h(D),Be=n(D,"DIV",{class:!0});var qt=d(Be);Ie=n(qt,"BUTTON",{class:!0,id:!0,type:!0});var Mt=d(Ie);ht=P(Mt,"Submit"),Mt.forEach(a),qt.forEach(a),D.forEach(a),this.h()},h(){t(b,"class","form-label"),t(b,"for","projectName"),t(c,"class","form-control"),t(c,"id","projectName"),t(c,"type","text"),t(c,"placeholder","Project name"),t(l,"class","mb-3"),t(T,"class","form-label d-block"),t(g,"class","mb-3"),t(f,"class","form-label"),t(f,"for","database"),t(v,"class","mb-3"),t(z,"class","form-label d-block"),t(w,"class","form-check-input"),t(w,"id","nginx"),t(w,"type","radio"),t(w,"name","webServerType"),w.__value="nginx",w.value=w.__value,s[12][2].push(w),t($,"class","form-check-label"),t($,"for","nginx"),t(W,"class","form-check form-check-inline"),t(y,"class","form-check-input"),t(y,"id","apache2"),t(y,"type","radio"),y.__value="apache2",y.value=y.__value,t(y,"name","webServerType"),s[12][2].push(y),t(ee,"class","form-check-label"),t(ee,"for","apache2"),t(K,"class","form-check form-check-inline"),t(N,"class","mb-3"),t(te,"class","form-label"),t(te,"for","childThemeFolderName"),t(q,"class","form-control"),t(q,"id","childThemeFolderName"),t(q,"type","text"),t(q,"placeholder","twentytwentyone-child"),t(le,"class","invalid-feedback"),t(le,"data-sb-feedback","childThemeFolderInWpContentThemes:required"),t(F,"class","mb-3"),t(se,"class","form-label"),t(se,"for","sshHost"),t(M,"class","form-control"),t(M,"id","sshHost"),t(M,"type","text"),t(M,"placeholder","example.org"),t(J,"class","mb-3"),t(Z,"class","form-label"),t(Z,"for","sshUsername"),t(A,"class","form-control"),t(A,"id","sshUsername"),t(A,"type","text"),t(A,"placeholder","user123"),t(X,"class","mb-3"),t(ie,"class","form-label"),t(ie,"for","pathToWordPressOnServer"),t(G,"class","form-control"),t(G,"id","pathToWordPressOnServer"),t(G,"type","text"),t(G,"placeholder","/sites/my-website.eu/"),t(re,"class","mb-3"),t(ge,"class","fw-bolder"),t(Ce,"href","https://startbootstrap.com/solution/contact-forms"),t(Q,"class","text-center mb-3"),t(ne,"class","d-none"),t(ne,"id","submitSuccessMessage"),t(Ne,"class","text-center text-danger mb-3"),t(Re,"class","d-none"),t(Re,"id","submitErrorMessage"),t(Ie,"class","btn btn-primary btn-lg disabled"),t(Ie,"id","submitButton"),t(Ie,"type","submit"),t(Be,"class","d-grid"),t(r,"id","contactForm")},m(p,D){U(p,r,D),e(r,l),e(l,b),e(b,R),e(l,L),e(l,c),de(c,s[0]),e(r,V),e(r,g),e(g,T),e(T,E),e(g,I);for(let _=0;_<B.length;_+=1)B[_].m(g,null);e(r,O),e(r,v),e(v,f),e(f,m),e(v,ae);for(let _=0;_<j.length;_+=1)j[_].m(v,null);e(r,x),e(r,N),e(N,z),e(z,Y),e(N,oe),e(N,W),e(W,w),w.checked=w.__value===s[3],e(W,De),e(W,$),e($,ce),e(N,Te),e(N,K),e(K,y),y.checked=y.__value===s[3],e(K,ue),e(K,ee),e(ee,Le),e(r,he),e(r,F),e(F,te),e(te,pe),e(F,Oe),e(F,q),de(q,s[4]),e(F,me),e(F,le),e(le,Ve),e(r,fe),e(r,J),e(J,se),e(se,ve),e(J,ke),e(J,M),de(M,s[5]),e(r,_e),e(r,X),e(X,Z),e(Z,o),e(X,k),e(X,A),de(A,s[6]),e(r,be),e(r,re),e(re,ie),e(ie,We),e(re,ye),e(re,G),de(G,s[7]),e(r,H),e(r,ne),e(ne,Q),e(Q,ge),e(ge,He),e(Q,$e),e(Q,Ee),e(Ee,Ae),e(Q,it),e(Q,Ce),e(Ce,nt),e(r,dt),e(r,Re),e(Re,Ne),e(Ne,ct),e(r,ut),e(r,Be),e(Be,Ie),e(Ie,ht),pt||(St=[we(c,"input",s[10]),we(w,"change",s[14]),we(y,"change",s[15]),we(q,"input",s[16]),we(M,"input",s[17]),we(A,"input",s[18]),we(G,"input",s[19])],pt=!0)},p(p,[D]){if(D&1&&c.value!==p[0]&&de(c,p[0]),D&258){je=p[8];let _;for(_=0;_<je.length;_+=1){const Se=xt(p,je,_);B[_]?B[_].p(Se,D):(B[_]=Kt(Se),B[_].c(),B[_].m(g,null))}for(;_<B.length;_+=1)B[_].d(1);B.length=je.length}if(D&516){qe=p[9];let _;for(_=0;_<qe.length;_+=1){const Se=Qt(p,qe,_);j[_]?j[_].p(Se,D):(j[_]=Jt(Se),j[_].c(),j[_].m(v,null))}for(;_<j.length;_+=1)j[_].d(1);j.length=qe.length}D&8&&(w.checked=w.__value===p[3]),D&8&&(y.checked=y.__value===p[3]),D&16&&q.value!==p[4]&&de(q,p[4]),D&32&&M.value!==p[5]&&de(M,p[5]),D&64&&A.value!==p[6]&&de(A,p[6]),D&128&&G.value!==p[7]&&de(G,p[7])},i:bt,o:bt,d(p){p&&a(r),Yt(B,p),Yt(j,p),s[12][2].splice(s[12][2].indexOf(w),1),s[12][2].splice(s[12][2].indexOf(y),1),pt=!1,ll(St)}}}function dl(s,r,l){let b,R,L,c,V,g,T,E;C(s,gt,w=>l(0,b=w)),C(s,Dt,w=>l(1,R=w)),C(s,ot,w=>l(2,L=w)),C(s,at,w=>l(3,c=w)),C(s,wt,w=>l(4,V=w)),C(s,yt,w=>l(5,g=w)),C(s,Et,w=>l(6,T=w)),C(s,It,w=>l(7,E=w));let I=["8.0","7.4","7.3","7.2","7.1","7.0","5.6"],O=[{value:"maria-10.3",displayText:"MariaDB 10.3 (default)"},{value:"maria-10.4",displayText:"MariaDB 10.4"},{value:"maria-10.5",displayText:"MariaDB 10.5"},{value:"maria-10.6",displayText:"MariaDB 10.6"},{value:"mysql-5.5",displayText:"MySQL 5.5"},{value:"mysql-5.6",displayText:"MySQL 5.6"},{value:"mysql-5.7",displayText:"MySQL 5.7"},{value:"mysql-8.0",displayText:"MySQL 8.0"}];const v=[[],[],[]];function f(){b=this.value,gt.set(b)}function m(){R=this.__value,Dt.set(R)}function ae(){L=this.__value,ot.set(L)}function x(){c=this.__value,at.set(c)}function N(){c=this.__value,at.set(c)}function z(){V=this.value,wt.set(V)}function Y(){g=this.value,yt.set(g)}function oe(){T=this.value,Et.set(T)}function W(){E=this.value,It.set(E)}return[b,R,L,c,V,g,T,E,I,O,f,m,v,ae,x,N,z,Y,oe,W]}class cl extends mt{constructor(r){super();ft(this,r,dl,nl,vt,{})}}function ul(s){let r,l,b,R,L,c,V,g,T,E;return c=new cl({}),T=new il({}),{c(){r=i("div"),l=i("h1"),b=S("DDEV WP Boilerplate Generator"),R=u(),L=i("div"),ze(c.$$.fragment),V=u(),g=i("div"),ze(T.$$.fragment),this.h()},l(I){r=n(I,"DIV",{class:!0});var O=d(r);l=n(O,"H1",{});var v=d(l);b=P(v,"DDEV WP Boilerplate Generator"),v.forEach(a),R=h(O),L=n(O,"DIV",{class:!0});var f=d(L);Ye(c.$$.fragment,f),f.forEach(a),V=h(O),g=n(O,"DIV",{class:!0});var m=d(g);Ye(T.$$.fragment,m),m.forEach(a),O.forEach(a),this.h()},h(){t(L,"class","container px-5 my-5"),t(g,"class","container px-5 my-5"),t(r,"class","container px-5 my-5")},m(I,O){U(I,r,O),e(r,l),e(l,b),e(r,R),e(r,L),Qe(c,L,null),e(r,V),e(r,g),Qe(T,g,null),E=!0},p:bt,i(I){E||(xe(c.$$.fragment,I),xe(T.$$.fragment,I),E=!0)},o(I){Ke(c.$$.fragment,I),Ke(T.$$.fragment,I),E=!1},d(I){I&&a(r),Je(c),Je(T)}}}class pl extends mt{constructor(r){super();ft(this,r,null,ul,vt,{})}}export{pl as default};
