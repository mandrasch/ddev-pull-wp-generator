import{L as Qt,C as gt,S as Et,i as Dt,s as wt,M as Kt,N as Jt,O as rs,k as Xt,j as u,e as r,t as f,v as Ke,F as os,P as is,d as l,l as h,c as o,a as n,g as v,w as Je,Q as ns,J as e,f as H,x as Xe,p as Ze,n as et,A as tt,R as Se,b as t,T as yt,U as Zt,K as It,V as es}from"../chunks/vendor-8428adaf.js";const St=gt("my-project"),Pt=gt("7.4"),st=gt("maria-10.3"),ds=Qt(st,d=>d.includes("maria")?"mariadb_version":"mysql_version"),cs=Qt(st,d=>d.substring(d.indexOf("-")+1));function us(d){let s,a,m,P,w,c,L,g,b,T,I,y,E,_,R,me,ce,k,G,J,fe,q,$,le,F,ve,ae,B,x,re,z,_e,oe,C,Y,ie,be,j,ne,Q,ge,de,U,M;return T=new Kt({props:{language:Jt,code:d[0]}}),k=new Kt({props:{language:Jt,code:d[1]}}),{c(){s=new rs,a=Xt(),m=u(),P=r("h2"),w=f("Code Generator:"),c=u(),L=r("h3"),g=f("1. .ddev/config.yaml"),b=u(),Ke(T.$$.fragment),I=u(),y=r("h3"),E=f("2. .gitignore"),_=f(`

TODO: GENERATE CHILD THEME PATTERN FOR GITIGNORE

`),R=r("h3"),me=f("3. .ddev/providers/wp-production.yaml"),ce=u(),Ke(k.$$.fragment),G=f(`
https://github.com/mandrasch/ddev-wp-groundstation/blob/main/.ddev/providers/wp-production.yaml

`),J=r("h2"),fe=f("Afterwards:"),q=u(),$=r("ol"),le=r("li"),F=f("Create a new project folder (or create empty GitHub project)"),ve=u(),ae=r("li"),B=f("Copy the generated file contents to the new project folder"),x=u(),re=r("li"),z=f("Download your child theme into wp-content/themes/your-child-theme to manage it via git-tracked"),_e=u(),oe=r("li"),C=f('Run "ddev start"'),Y=u(),ie=r("li"),be=f('Run "ddev auth ssh"'),j=u(),ne=r("li"),Q=f('Pull your live site to the local project: "ddev pull wp-production"'),ge=u(),de=r("li"),U=f("Optional: Git commit & setup child theme via WPPusher (or other methods)"),this.h()},l(i){const O=os('[data-svelte="svelte-15l2qc9"]',document.head);s=is(O),a=Xt(),O.forEach(l),m=h(i),P=o(i,"H2",{});var N=n(P);w=v(N,"Code Generator:"),N.forEach(l),c=h(i),L=o(i,"H3",{});var Pe=n(L);g=v(Pe,"1. .ddev/config.yaml"),Pe.forEach(l),b=h(i),Je(T.$$.fragment,i),I=h(i),y=o(i,"H3",{});var X=n(y);E=v(X,"2. .gitignore"),X.forEach(l),_=v(i,`

TODO: GENERATE CHILD THEME PATTERN FOR GITIGNORE

`),R=o(i,"H3",{});var Te=n(R);me=v(Te,"3. .ddev/providers/wp-production.yaml"),Te.forEach(l),ce=h(i),Je(k.$$.fragment,i),G=v(i,`
https://github.com/mandrasch/ddev-wp-groundstation/blob/main/.ddev/providers/wp-production.yaml

`),J=o(i,"H2",{});var Le=n(J);fe=v(Le,"Afterwards:"),Le.forEach(l),q=h(i),$=o(i,"OL",{});var V=n($);le=o(V,"LI",{});var Z=n(le);F=v(Z,"Create a new project folder (or create empty GitHub project)"),Z.forEach(l),ve=h(V),ae=o(V,"LI",{});var $e=n(ae);B=v($e,"Copy the generated file contents to the new project folder"),$e.forEach(l),x=h(V),re=o(V,"LI",{});var Oe=n(re);z=v(Oe,"Download your child theme into wp-content/themes/your-child-theme to manage it via git-tracked"),Oe.forEach(l),_e=h(V),oe=o(V,"LI",{});var K=n(oe);C=v(K,'Run "ddev start"'),K.forEach(l),Y=h(V),ie=o(V,"LI",{});var Ve=n(ie);be=v(Ve,'Run "ddev auth ssh"'),Ve.forEach(l),j=h(V),ne=o(V,"LI",{});var ee=n(ne);Q=v(ee,'Pull your live site to the local project: "ddev pull wp-production"'),ee.forEach(l),ge=h(V),de=o(V,"LI",{});var Re=n(de);U=v(Re,"Optional: Git commit & setup child theme via WPPusher (or other methods)"),Re.forEach(l),V.forEach(l),this.h()},h(){s.a=a},m(i,O){s.m(ns,document.head),e(document.head,a),H(i,m,O),H(i,P,O),e(P,w),H(i,c,O),H(i,L,O),e(L,g),H(i,b,O),Xe(T,i,O),H(i,I,O),H(i,y,O),e(y,E),H(i,_,O),H(i,R,O),e(R,me),H(i,ce,O),Xe(k,i,O),H(i,G,O),H(i,J,O),e(J,fe),H(i,q,O),H(i,$,O),e($,le),e(le,F),e($,ve),e($,ae),e(ae,B),e($,x),e($,re),e(re,z),e($,_e),e($,oe),e(oe,C),e($,Y),e($,ie),e(ie,be),e($,j),e($,ne),e(ne,Q),e($,ge),e($,de),e(de,U),M=!0},p(i,[O]){const N={};O&1&&(N.code=i[0]),T.$set(N)},i(i){M||(Ze(T.$$.fragment,i),Ze(k.$$.fragment,i),M=!0)},o(i){et(T.$$.fragment,i),et(k.$$.fragment,i),M=!1},d(i){l(a),i&&s.d(),i&&l(m),i&&l(P),i&&l(c),i&&l(L),i&&l(b),tt(T,i),i&&l(I),i&&l(y),i&&l(_),i&&l(R),i&&l(ce),tt(k,i),i&&l(G),i&&l(J),i&&l(q),i&&l($)}}}function hs(d,s,a){let m,P,w,c,L;Se(d,cs,b=>a(2,P=b)),Se(d,ds,b=>a(3,w=b)),Se(d,Pt,b=>a(4,c=b)),Se(d,St,b=>a(5,L=b));const g=`# Pull a live site into DDEV

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
`;return d.$$.update=()=>{d.$$.dirty&60&&a(0,m=`    name: ${L}
    type: wordpress
    docroot: ""
    php_version: "${c}"
    webserver_type: nginx-fpm
    router_http_port: "80"
    router_https_port: "443"
    xdebug_enabled: false
    additional_hostnames: []
    additional_fqdns: []
    ${w}: "${P}"
    nfs_mount_enabled: false
    mutagen_enabled: false
    use_dns_when_possible: true
    composer_version: "2"
    web_environment:
    - PRODUCTION_SSH_USER=
    - PRODUCTION_SSH_HOST=
    - PRODUCTION_SSH_WP_DIR=`)},[m,g,P,w,c,L]}class ps extends Et{constructor(s){super();Dt(this,s,hs,us,wt,{})}}function ts(d,s,a){const m=d.slice();return m[9]=s[a].displayText,m[10]=s[a].value,m[12]=a,m}function ss(d,s,a){const m=d.slice();return m[13]=s[a],m[12]=a,m}function ls(d){let s,a,m,P,w,c,L=d[13]+"",g,b,T,I,y;return{c(){s=r("div"),a=r("input"),w=u(),c=r("label"),g=f(L),T=u(),this.h()},l(E){s=o(E,"DIV",{class:!0});var _=n(s);a=o(_,"INPUT",{class:!0,id:!0,type:!0,name:!0}),w=h(_),c=o(_,"LABEL",{class:!0,for:!0});var R=n(c);g=v(R,L),R.forEach(l),T=h(_),_.forEach(l),this.h()},h(){t(a,"class","form-check-input"),t(a,"id",m=d[13]),t(a,"type","radio"),t(a,"name","phpVersion"),a.__value=P=d[13],a.value=a.__value,d[7][0].push(a),t(c,"class","form-check-label"),t(c,"for",b=d[13]),t(s,"class","form-check form-check-inline")},m(E,_){H(E,s,_),e(s,a),a.checked=a.__value===d[1],e(s,w),e(s,c),e(c,g),e(s,T),I||(y=yt(a,"change",d[6]),I=!0)},p(E,_){_&2&&(a.checked=a.__value===E[1])},d(E){E&&l(s),d[7][0].splice(d[7][0].indexOf(a),1),I=!1,y()}}}function as(d){let s,a,m,P,w,c,L=d[9]+"",g,b,T,I,y;return{c(){s=r("div"),a=r("input"),w=u(),c=r("label"),g=f(L),T=u(),this.h()},l(E){s=o(E,"DIV",{class:!0});var _=n(s);a=o(_,"INPUT",{class:!0,id:!0,type:!0,name:!0}),w=h(_),c=o(_,"LABEL",{class:!0,for:!0});var R=n(c);g=v(R,L),R.forEach(l),T=h(_),_.forEach(l),this.h()},h(){t(a,"class","form-check-input"),t(a,"id",m="dbVersion"+d[12]),t(a,"type","radio"),t(a,"name","dbVersion"),a.__value=P=d[10],a.value=a.__value,d[7][1].push(a),t(c,"class","form-check-label"),t(c,"for",b="dbVersion"+d[12]),t(s,"class","form-check form-check-inline")},m(E,_){H(E,s,_),e(s,a),a.checked=a.__value===d[2],e(s,w),e(s,c),e(c,g),e(s,T),I||(y=yt(a,"change",d[8]),I=!0)},p(E,_){_&4&&(a.checked=a.__value===E[2])},d(E){E&&l(s),d[7][1].splice(d[7][1].indexOf(a),1),I=!1,y()}}}function ms(d){let s,a,m,P,w,c,L,g,b,T,I,y,E,_,R,me,ce,k,G,J,fe,q,$,le,F,ve,ae,B,x,re,z,_e,oe,C,Y,ie,be,j,ne,Q,ge,de,U,M,i,O,N,Pe,X,Te,Le,V,Z,$e,Oe,K,Ve,ee,Re,lt,te,Ee,at,rt,ue,ot,De,it,nt,we,se,ke,dt,ct,Ge,ut,ht,He,pt,mt,ye,We,ft,vt,Ae,he,_t,bt,Tt,Ce=d[3],W=[];for(let D=0;D<Ce.length;D+=1)W[D]=ls(ss(d,Ce,D));let Ue=d[4],A=[];for(let D=0;D<Ue.length;D+=1)A[D]=as(ts(d,Ue,D));return{c(){s=r("form"),a=r("div"),m=r("label"),P=f("Project name"),w=u(),c=r("input"),L=u(),g=r("div"),b=r("label"),T=f("PHP version"),I=u();for(let D=0;D<W.length;D+=1)W[D].c();y=u(),E=r("div"),_=r("label"),R=f("Database version"),me=u();for(let D=0;D<A.length;D+=1)A[D].c();ce=u(),k=r("div"),G=r("label"),J=f("Web server"),fe=u(),q=r("div"),$=r("input"),le=u(),F=r("label"),ve=f("nginx"),ae=u(),B=r("div"),x=r("input"),re=u(),z=r("label"),_e=f("Apache2"),oe=u(),C=r("div"),Y=r("label"),ie=f("Child theme folder (in wp-content/themes/)"),be=u(),j=r("input"),ne=u(),Q=r("div"),ge=f("Child theme folder (in wp-content/themes/) is required."),de=u(),U=r("div"),M=r("label"),i=f("SSH host"),O=u(),N=r("input"),Pe=u(),X=r("div"),Te=f("SSH host is required."),Le=u(),V=r("div"),Z=r("label"),$e=f("SSH username"),Oe=u(),K=r("input"),Ve=u(),ee=r("div"),Re=f("SSH username is required."),lt=u(),te=r("div"),Ee=r("label"),at=f("Path to WordPress on server"),rt=u(),ue=r("input"),ot=u(),De=r("div"),it=f("Path to WordPress on server is required."),nt=u(),we=r("div"),se=r("div"),ke=r("div"),dt=f("Form submission successful!"),ct=u(),Ge=r("p"),ut=f("To activate this form, sign up at"),ht=u(),He=r("a"),pt=f("https://startbootstrap.com/solution/contact-forms"),mt=u(),ye=r("div"),We=r("div"),ft=f("Error sending message!"),vt=u(),Ae=r("div"),he=r("button"),_t=f("Submit"),this.h()},l(D){s=o(D,"FORM",{id:!0});var S=n(s);a=o(S,"DIV",{class:!0});var p=n(a);m=o(p,"LABEL",{class:!0,for:!0});var pe=n(m);P=v(pe,"Project name"),pe.forEach(l),w=h(p),c=o(p,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),p.forEach(l),L=h(S),g=o(S,"DIV",{class:!0});var Fe=n(g);b=o(Fe,"LABEL",{class:!0});var Lt=n(b);T=v(Lt,"PHP version"),Lt.forEach(l),I=h(Fe);for(let Ie=0;Ie<W.length;Ie+=1)W[Ie].l(Fe);Fe.forEach(l),y=h(S),E=o(S,"DIV",{class:!0});var ze=n(E);_=o(ze,"LABEL",{class:!0,for:!0});var $t=n(_);R=v($t,"Database version"),$t.forEach(l),me=h(ze);for(let Ie=0;Ie<A.length;Ie+=1)A[Ie].l(ze);ze.forEach(l),ce=h(S),k=o(S,"DIV",{class:!0});var Ne=n(k);G=o(Ne,"LABEL",{class:!0});var Ot=n(G);J=v(Ot,"Web server"),Ot.forEach(l),fe=h(Ne),q=o(Ne,"DIV",{class:!0});var Ye=n(q);$=o(Ye,"INPUT",{class:!0,id:!0,type:!0,name:!0}),le=h(Ye),F=o(Ye,"LABEL",{class:!0,for:!0});var Vt=n(F);ve=v(Vt,"nginx"),Vt.forEach(l),Ye.forEach(l),ae=h(Ne),B=o(Ne,"DIV",{class:!0});var Qe=n(B);x=o(Qe,"INPUT",{class:!0,id:!0,type:!0,name:!0,"data-sb-validations":!0}),re=h(Qe),z=o(Qe,"LABEL",{class:!0,for:!0});var Rt=n(z);_e=v(Rt,"Apache2"),Rt.forEach(l),Qe.forEach(l),Ne.forEach(l),oe=h(S),C=o(S,"DIV",{class:!0});var qe=n(C);Y=o(qe,"LABEL",{class:!0,for:!0});var kt=n(Y);ie=v(kt,"Child theme folder (in wp-content/themes/)"),kt.forEach(l),be=h(qe),j=o(qe,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0,"data-sb-validations":!0}),ne=h(qe),Q=o(qe,"DIV",{class:!0,"data-sb-feedback":!0});var Ht=n(Q);ge=v(Ht,"Child theme folder (in wp-content/themes/) is required."),Ht.forEach(l),qe.forEach(l),de=h(S),U=o(S,"DIV",{class:!0});var Be=n(U);M=o(Be,"LABEL",{class:!0,for:!0});var Wt=n(M);i=v(Wt,"SSH host"),Wt.forEach(l),O=h(Be),N=o(Be,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0,"data-sb-validations":!0}),Pe=h(Be),X=o(Be,"DIV",{class:!0,"data-sb-feedback":!0});var At=n(X);Te=v(At,"SSH host is required."),At.forEach(l),Be.forEach(l),Le=h(S),V=o(S,"DIV",{class:!0});var xe=n(V);Z=o(xe,"LABEL",{class:!0,for:!0});var Ct=n(Z);$e=v(Ct,"SSH username"),Ct.forEach(l),Oe=h(xe),K=o(xe,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0,"data-sb-validations":!0}),Ve=h(xe),ee=o(xe,"DIV",{class:!0,"data-sb-feedback":!0});var Ut=n(ee);Re=v(Ut,"SSH username is required."),Ut.forEach(l),xe.forEach(l),lt=h(S),te=o(S,"DIV",{class:!0});var je=n(te);Ee=o(je,"LABEL",{class:!0,for:!0});var Nt=n(Ee);at=v(Nt,"Path to WordPress on server"),Nt.forEach(l),rt=h(je),ue=o(je,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0,"data-sb-validations":!0}),ot=h(je),De=o(je,"DIV",{class:!0,"data-sb-feedback":!0});var qt=n(De);it=v(qt,"Path to WordPress on server is required."),qt.forEach(l),je.forEach(l),nt=h(S),we=o(S,"DIV",{class:!0,id:!0});var Bt=n(we);se=o(Bt,"DIV",{class:!0});var Me=n(se);ke=o(Me,"DIV",{class:!0});var xt=n(ke);dt=v(xt,"Form submission successful!"),xt.forEach(l),ct=h(Me),Ge=o(Me,"P",{});var jt=n(Ge);ut=v(jt,"To activate this form, sign up at"),jt.forEach(l),ht=h(Me),He=o(Me,"A",{href:!0});var Mt=n(He);pt=v(Mt,"https://startbootstrap.com/solution/contact-forms"),Mt.forEach(l),Me.forEach(l),Bt.forEach(l),mt=h(S),ye=o(S,"DIV",{class:!0,id:!0});var Gt=n(ye);We=o(Gt,"DIV",{class:!0});var Ft=n(We);ft=v(Ft,"Error sending message!"),Ft.forEach(l),Gt.forEach(l),vt=h(S),Ae=o(S,"DIV",{class:!0});var zt=n(Ae);he=o(zt,"BUTTON",{class:!0,id:!0,type:!0});var Yt=n(he);_t=v(Yt,"Submit"),Yt.forEach(l),zt.forEach(l),S.forEach(l),this.h()},h(){t(m,"class","form-label"),t(m,"for","projectName"),t(c,"class","form-control"),t(c,"id","projectName"),t(c,"type","text"),t(c,"placeholder","Project name"),t(a,"class","mb-3"),t(b,"class","form-label d-block"),t(g,"class","mb-3"),t(_,"class","form-label"),t(_,"for","database"),t(E,"class","mb-3"),t(G,"class","form-label d-block"),t($,"class","form-check-input"),t($,"id","nginx"),t($,"type","radio"),t($,"name","webServer"),t(F,"class","form-check-label"),t(F,"for","nginx"),t(q,"class","form-check form-check-inline"),t(x,"class","form-check-input"),t(x,"id","apache2"),t(x,"type","radio"),t(x,"name","webServer"),t(x,"data-sb-validations",""),t(z,"class","form-check-label"),t(z,"for","apache2"),t(B,"class","form-check form-check-inline"),t(k,"class","mb-3"),t(Y,"class","form-label"),t(Y,"for","childThemeFolderInWpContentThemes"),t(j,"class","form-control"),t(j,"id","childThemeFolderInWpContentThemes"),t(j,"type","text"),t(j,"placeholder","Child theme folder (in wp-content/themes/)"),t(j,"data-sb-validations","required"),t(Q,"class","invalid-feedback"),t(Q,"data-sb-feedback","childThemeFolderInWpContentThemes:required"),t(C,"class","mb-3"),t(M,"class","form-label"),t(M,"for","sshHost"),t(N,"class","form-control"),t(N,"id","sshHost"),t(N,"type","text"),t(N,"placeholder","SSH host"),t(N,"data-sb-validations","required"),t(X,"class","invalid-feedback"),t(X,"data-sb-feedback","sshHost:required"),t(U,"class","mb-3"),t(Z,"class","form-label"),t(Z,"for","sshUsername"),t(K,"class","form-control"),t(K,"id","sshUsername"),t(K,"type","text"),t(K,"placeholder","SSH username"),t(K,"data-sb-validations","required"),t(ee,"class","invalid-feedback"),t(ee,"data-sb-feedback","sshUsername:required"),t(V,"class","mb-3"),t(Ee,"class","form-label"),t(Ee,"for","pathToWordPressOnServer"),t(ue,"class","form-control"),t(ue,"id","pathToWordPressOnServer"),t(ue,"type","text"),t(ue,"placeholder","Path to WordPress on server"),t(ue,"data-sb-validations","required"),t(De,"class","invalid-feedback"),t(De,"data-sb-feedback","pathToWordPressOnServer:required"),t(te,"class","mb-3"),t(ke,"class","fw-bolder"),t(He,"href","https://startbootstrap.com/solution/contact-forms"),t(se,"class","text-center mb-3"),t(we,"class","d-none"),t(we,"id","submitSuccessMessage"),t(We,"class","text-center text-danger mb-3"),t(ye,"class","d-none"),t(ye,"id","submitErrorMessage"),t(he,"class","btn btn-primary btn-lg disabled"),t(he,"id","submitButton"),t(he,"type","submit"),t(Ae,"class","d-grid"),t(s,"id","contactForm")},m(D,S){H(D,s,S),e(s,a),e(a,m),e(m,P),e(a,w),e(a,c),Zt(c,d[0]),e(s,L),e(s,g),e(g,b),e(b,T),e(g,I);for(let p=0;p<W.length;p+=1)W[p].m(g,null);e(s,y),e(s,E),e(E,_),e(_,R),e(E,me);for(let p=0;p<A.length;p+=1)A[p].m(E,null);e(s,ce),e(s,k),e(k,G),e(G,J),e(k,fe),e(k,q),e(q,$),e(q,le),e(q,F),e(F,ve),e(k,ae),e(k,B),e(B,x),e(B,re),e(B,z),e(z,_e),e(s,oe),e(s,C),e(C,Y),e(Y,ie),e(C,be),e(C,j),e(C,ne),e(C,Q),e(Q,ge),e(s,de),e(s,U),e(U,M),e(M,i),e(U,O),e(U,N),e(U,Pe),e(U,X),e(X,Te),e(s,Le),e(s,V),e(V,Z),e(Z,$e),e(V,Oe),e(V,K),e(V,Ve),e(V,ee),e(ee,Re),e(s,lt),e(s,te),e(te,Ee),e(Ee,at),e(te,rt),e(te,ue),e(te,ot),e(te,De),e(De,it),e(s,nt),e(s,we),e(we,se),e(se,ke),e(ke,dt),e(se,ct),e(se,Ge),e(Ge,ut),e(se,ht),e(se,He),e(He,pt),e(s,mt),e(s,ye),e(ye,We),e(We,ft),e(s,vt),e(s,Ae),e(Ae,he),e(he,_t),bt||(Tt=yt(c,"input",d[5]),bt=!0)},p(D,[S]){if(S&1&&c.value!==D[0]&&Zt(c,D[0]),S&10){Ce=D[3];let p;for(p=0;p<Ce.length;p+=1){const pe=ss(D,Ce,p);W[p]?W[p].p(pe,S):(W[p]=ls(pe),W[p].c(),W[p].m(g,null))}for(;p<W.length;p+=1)W[p].d(1);W.length=Ce.length}if(S&20){Ue=D[4];let p;for(p=0;p<Ue.length;p+=1){const pe=ts(D,Ue,p);A[p]?A[p].p(pe,S):(A[p]=as(pe),A[p].c(),A[p].m(E,null))}for(;p<A.length;p+=1)A[p].d(1);A.length=Ue.length}},i:It,o:It,d(D){D&&l(s),es(W,D),es(A,D),bt=!1,Tt()}}}function fs(d,s,a){let m,P,w;Se(d,St,y=>a(0,m=y)),Se(d,Pt,y=>a(1,P=y)),Se(d,st,y=>a(2,w=y));let c=["5.6","7.0","7.1","7.2","7.3","7.4","8.0"],L=[{value:"maria-10.3",displayText:"MariaDB 10.3"},{value:"maria-10.4",displayText:"MariaDB 10.4"},{value:"maria-10.5",displayText:"MariaDB 10.5"},{value:"maria-10.6",displayText:"MariaDB 10.6"},{value:"mysql-5.5",displayText:"MySQL 5.5"},{value:"mysql-5.6",displayText:"MySQL 5.6"},{value:"mysql-5.7",displayText:"MySQL 5.7"},{value:"mysql-8.0",displayText:"MySQL 8.0"}];const g=[[],[]];function b(){m=this.value,St.set(m)}function T(){P=this.__value,Pt.set(P)}function I(){w=this.__value,st.set(w)}return[m,P,w,c,L,b,T,g,I]}class vs extends Et{constructor(s){super();Dt(this,s,fs,ms,wt,{})}}function _s(d){let s,a,m,P,w,c,L,g,b,T;return c=new vs({}),b=new ps({}),{c(){s=r("div"),a=r("h1"),m=f("DDEV WP Boilerplate Generator"),P=u(),w=r("div"),Ke(c.$$.fragment),L=u(),g=r("div"),Ke(b.$$.fragment),this.h()},l(I){s=o(I,"DIV",{class:!0});var y=n(s);a=o(y,"H1",{});var E=n(a);m=v(E,"DDEV WP Boilerplate Generator"),E.forEach(l),P=h(y),w=o(y,"DIV",{class:!0});var _=n(w);Je(c.$$.fragment,_),_.forEach(l),L=h(y),g=o(y,"DIV",{class:!0});var R=n(g);Je(b.$$.fragment,R),R.forEach(l),y.forEach(l),this.h()},h(){t(w,"class","container px-5 my-5"),t(g,"class","container px-5 my-5"),t(s,"class","container px-5 my-5")},m(I,y){H(I,s,y),e(s,a),e(a,m),e(s,P),e(s,w),Xe(c,w,null),e(s,L),e(s,g),Xe(b,g,null),T=!0},p:It,i(I){T||(Ze(c.$$.fragment,I),Ze(b.$$.fragment,I),T=!0)},o(I){et(c.$$.fragment,I),et(b.$$.fragment,I),T=!1},d(I){I&&l(s),tt(c),tt(b)}}}class gs extends Et{constructor(s){super();Dt(this,s,null,_s,wt,{})}}export{gs as default};
