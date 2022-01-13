import{L as zt,C as gt,S as Ot,i as $t,s as Ht,M as ts,k as Tt,j as v,F as ss,N as ls,d as r,l as m,O as rs,G as e,f as xe,m as as,n as pt,o as os,p as ft,P as ue,Q as Pt,R as Rt,e as o,t as d,v as bt,c as n,a as i,g as h,w as yt,b as t,x as wt,A as Et,T as ct,U as dt,K as xt,V as Wt,W as ns,h as is}from"../chunks/vendor-11a33a56.js";const Ct=gt("my-wp-site"),kt=gt("twentytwentyone-child"),Vt=gt("nginx-fpm"),At=gt("7.4"),It=gt("maria-10.3"),Ut=gt(""),Nt=gt(""),jt=gt(""),cs=zt(It,a=>a.includes("maria")?"mariadb_version":"mysql_version"),ds=zt(It,a=>a.substring(a.indexOf("-")+1));function hs(a){let l,s,u,I,g,p,L,k,w,E,b,D,y,_,U,T,We,N,Q,me,z,Ce,x,V,re,ae,oe,_e,R,ne,Se,ge,G,q,M,be,Z,Ge,Qe,W,ee,Ae,ke,C,ye,Ve,Ke,Le,K,F,B,J,te,pe,we,Ee,ie,ce,se,Te,de,fe,Pe,Je,j,Ue,De,Oe,le,Xe,he,Ze,et;return E=new Pt({props:{language:Rt,code:a[2]}}),q=new Pt({props:{code:a[1]}}),Pe=new Pt({props:{language:Rt,code:a[3]}}),{c(){l=o("div"),s=o("div"),u=o("h5"),I=d(".ddev/config.yaml"),g=v(),p=o("h6"),L=d("DDEV project configuration"),k=v(),w=o("p"),bt(E.$$.fragment),b=v(),D=o("details"),y=o("summary"),_=d("Why is this file needed?"),U=v(),T=o("p"),We=d("This is the DDEV configuration of your project folder. The "),N=o("i"),Q=d("web_environment"),me=d(`-values
						are our custom variables. These will then be used in the provider pull script, see
						below. The awesome thing is that this config can be shared via git: This means it can be
						used in team projects as well and everyone uses the same webserver configuration. Check
						out the DDEV documentation for more information:
						`),z=o("a"),Ce=d("config.yaml-docs"),x=d("."),V=v(),re=o("div"),ae=o("div"),oe=o("h5"),_e=d(".gitignore"),R=v(),ne=o("h6"),Se=d("Ignore pattern for tracking only the child theme"),ge=v(),G=o("p"),bt(q.$$.fragment),M=v(),be=o("details"),Z=o("summary"),Ge=d("Why is this needed?"),Qe=v(),W=o("p"),ee=d("This is needed to track the child theme via git. On synchronization ("),Ae=o("i"),ke=d("ddev pull wp-production"),C=d(`) the whole website is downloaded to the local project folder - but we don't want to
						override the child theme, because maybe we changed some styles already and just want to
						test them with the newest site content. The sync uses rsync with the option
						`),ye=o("i"),Ve=d("--include-from='.gitignore' --exclude='*'"),Ke=d(`, therefore it syncs everything except
						the child theme folder.)`),Le=v(),K=o("div"),F=o("div"),B=o("h5"),J=d(".ddev/providers/wp-production.yaml"),te=v(),pe=o("h6"),we=d("The actual pull script, runs via 'ddev pull wp-production'"),Ee=v(),ie=o("p"),ce=o("small"),se=d("Requirement: "),Te=o("a"),de=d("DDEV >= 1.18.2"),fe=v(),bt(Pe.$$.fragment),Je=v(),j=o("details"),Ue=o("summary"),De=d("Why is this file needed?"),Oe=v(),le=o("p"),Xe=d(`This is our pull script which takes care of pulling the live web site to your local DDEV
						project. See DDEV docs for more information:`),he=o("a"),Ze=d("Hosting Provider Integration"),this.h()},l(S){l=n(S,"DIV",{class:!0});var O=i(l);s=n(O,"DIV",{class:!0});var X=i(s);u=n(X,"H5",{class:!0});var $=i(u);I=h($,".ddev/config.yaml"),$.forEach(r),g=m(X),p=n(X,"H6",{class:!0});var Ne=i(p);L=h(Ne,"DDEV project configuration"),Ne.forEach(r),k=m(X),w=n(X,"P",{class:!0});var A=i(w);yt(E.$$.fragment,A),b=m(A),D=n(A,"DETAILS",{class:!0});var f=i(D);y=n(f,"SUMMARY",{});var P=i(y);_=h(P,"Why is this file needed?"),P.forEach(r),U=m(f),T=n(f,"P",{class:!0});var c=i(T);We=h(c,"This is the DDEV configuration of your project folder. The "),N=n(c,"I",{});var H=i(N);Q=h(H,"web_environment"),H.forEach(r),me=h(c,`-values
						are our custom variables. These will then be used in the provider pull script, see
						below. The awesome thing is that this config can be shared via git: This means it can be
						used in team projects as well and everyone uses the same webserver configuration. Check
						out the DDEV documentation for more information:
						`),z=n(c,"A",{href:!0,target:!0});var Y=i(z);Ce=h(Y,"config.yaml-docs"),Y.forEach(r),x=h(c,"."),c.forEach(r),f.forEach(r),A.forEach(r),X.forEach(r),O.forEach(r),V=m(S),re=n(S,"DIV",{class:!0});var lt=i(re);ae=n(lt,"DIV",{class:!0});var je=i(ae);oe=n(je,"H5",{class:!0});var rt=i(oe);_e=h(rt,".gitignore"),rt.forEach(r),R=m(je),ne=n(je,"H6",{class:!0});var ht=i(ne);Se=h(ht,"Ignore pattern for tracking only the child theme"),ht.forEach(r),ge=m(je),G=n(je,"P",{class:!0});var $e=i(G);yt(q.$$.fragment,$e),M=m($e),be=n($e,"DETAILS",{class:!0});var at=i(be);Z=n(at,"SUMMARY",{});var Me=i(Z);Ge=h(Me,"Why is this needed?"),Me.forEach(r),Qe=m(at),W=n(at,"P",{class:!0});var Be=i(W);ee=h(Be,"This is needed to track the child theme via git. On synchronization ("),Ae=n(Be,"I",{});var qe=i(Ae);ke=h(qe,"ddev pull wp-production"),qe.forEach(r),C=h(Be,`) the whole website is downloaded to the local project folder - but we don't want to
						override the child theme, because maybe we changed some styles already and just want to
						test them with the newest site content. The sync uses rsync with the option
						`),ye=n(Be,"I",{});var ot=i(ye);Ve=h(ot,"--include-from='.gitignore' --exclude='*'"),ot.forEach(r),Ke=h(Be,`, therefore it syncs everything except
						the child theme folder.)`),Be.forEach(r),at.forEach(r),$e.forEach(r),je.forEach(r),lt.forEach(r),Le=m(S),K=n(S,"DIV",{class:!0});var nt=i(K);F=n(nt,"DIV",{class:!0});var Fe=i(F);B=n(Fe,"H5",{class:!0});var Ye=i(B);J=h(Ye,".ddev/providers/wp-production.yaml"),Ye.forEach(r),te=m(Fe),pe=n(Fe,"H6",{class:!0});var it=i(pe);we=h(it,"The actual pull script, runs via 'ddev pull wp-production'"),it.forEach(r),Ee=m(Fe),ie=n(Fe,"P",{class:!0});var Ie=i(ie);ce=n(Ie,"SMALL",{});var ut=i(ce);se=h(ut,"Requirement: "),Te=n(ut,"A",{href:!0,target:!0});var vt=i(Te);de=h(vt,"DDEV >= 1.18.2"),vt.forEach(r),ut.forEach(r),fe=m(Ie),yt(Pe.$$.fragment,Ie),Je=m(Ie),j=n(Ie,"DETAILS",{class:!0});var ze=i(j);Ue=n(ze,"SUMMARY",{});var He=i(Ue);De=h(He,"Why is this file needed?"),He.forEach(r),Oe=m(ze),le=n(ze,"P",{class:!0});var tt=i(le);Xe=h(tt,`This is our pull script which takes care of pulling the live web site to your local DDEV
						project. See DDEV docs for more information:`),he=n(tt,"A",{href:!0,target:!0});var mt=i(he);Ze=h(mt,"Hosting Provider Integration"),mt.forEach(r),tt.forEach(r),ze.forEach(r),Ie.forEach(r),Fe.forEach(r),nt.forEach(r),this.h()},h(){t(u,"class","card-title"),t(p,"class","card-subtitle mb-2 text-muted"),t(z,"href","https://ddev.readthedocs.io/en/stable/users/extend/config_yaml/"),t(z,"target","_blank"),t(T,"class","svelte-2rtgml"),t(D,"class","svelte-2rtgml"),t(w,"class","card-text"),t(s,"class","card-body"),t(l,"class","card card-small svelte-2rtgml"),t(oe,"class","card-title"),t(ne,"class","card-subtitle mb-2 text-muted"),t(W,"class","svelte-2rtgml"),t(be,"class","svelte-2rtgml"),t(G,"class","card-text"),t(ae,"class","card-body"),t(re,"class","card card-small svelte-2rtgml"),t(B,"class","card-title"),t(pe,"class","card-subtitle mb-2 text-muted"),t(Te,"href","https://github.com/drud/ddev/releases/tag/v1.18.2"),t(Te,"target","_blank"),t(he,"href","https://ddev.readthedocs.io/en/stable/users/providers/provider-introduction/"),t(he,"target","_blank"),t(le,"class","svelte-2rtgml"),t(j,"class","svelte-2rtgml"),t(ie,"class","card-text"),t(F,"class","card-body"),t(K,"class","card svelte-2rtgml")},m(S,O){xe(S,l,O),e(l,s),e(s,u),e(u,I),e(s,g),e(s,p),e(p,L),e(s,k),e(s,w),wt(E,w,null),e(w,b),e(w,D),e(D,y),e(y,_),e(D,U),e(D,T),e(T,We),e(T,N),e(N,Q),e(T,me),e(T,z),e(z,Ce),e(T,x),xe(S,V,O),xe(S,re,O),e(re,ae),e(ae,oe),e(oe,_e),e(ae,R),e(ae,ne),e(ne,Se),e(ae,ge),e(ae,G),wt(q,G,null),e(G,M),e(G,be),e(be,Z),e(Z,Ge),e(be,Qe),e(be,W),e(W,ee),e(W,Ae),e(Ae,ke),e(W,C),e(W,ye),e(ye,Ve),e(W,Ke),xe(S,Le,O),xe(S,K,O),e(K,F),e(F,B),e(B,J),e(F,te),e(F,pe),e(pe,we),e(F,Ee),e(F,ie),e(ie,ce),e(ce,se),e(ce,Te),e(Te,de),e(ie,fe),wt(Pe,ie,null),e(ie,Je),e(ie,j),e(j,Ue),e(Ue,De),e(j,Oe),e(j,le),e(le,Xe),e(le,he),e(he,Ze),et=!0},p(S,O){const X={};O&4&&(X.code=S[2]),E.$set(X);const $={};O&2&&($.code=S[1]),q.$set($)},i(S){et||(ft(E.$$.fragment,S),ft(q.$$.fragment,S),ft(Pe.$$.fragment,S),et=!0)},o(S){pt(E.$$.fragment,S),pt(q.$$.fragment,S),pt(Pe.$$.fragment,S),et=!1},d(S){S&&r(l),Et(E),S&&r(V),S&&r(re),Et(q),S&&r(Le),S&&r(K),Et(Pe)}}}function us(a){let l,s;return l=new Pt({props:{language:Rt,code:a[2]}}),{c(){bt(l.$$.fragment)},l(u){yt(l.$$.fragment,u)},m(u,I){wt(l,u,I),s=!0},p(u,I){const g={};I&4&&(g.code=u[2]),l.$set(g)},i(u){s||(ft(l.$$.fragment,u),s=!0)},o(u){pt(l.$$.fragment,u),s=!1},d(u){Et(l,u)}}}function ps(a){let l,s,u,I,g,p,L;const k=[us,hs],w=[];function E(b,D){return b[0]?0:1}return I=E(a),g=w[I]=k[I](a),{c(){l=new ts,s=Tt(),u=v(),g.c(),p=Tt(),this.h()},l(b){const D=ss('[data-svelte="svelte-15l2qc9"]',document.head);l=ls(D),s=Tt(),D.forEach(r),u=m(b),g.l(b),p=Tt(),this.h()},h(){l.a=s},m(b,D){l.m(rs,document.head),e(document.head,s),xe(b,u,D),w[I].m(b,D),xe(b,p,D),L=!0},p(b,[D]){let y=I;I=E(b),I===y?w[I].p(b,D):(as(),pt(w[y],1,1,()=>{w[y]=null}),os(),g=w[I],g?g.p(b,D):(g=w[I]=k[I](b),g.c()),ft(g,1),g.m(p.parentNode,p))},i(b){L||(ft(g),L=!0)},o(b){pt(g),L=!1},d(b){r(s),b&&l.d(),b&&r(u),w[I].d(b),b&&r(p)}}}function fs(a,l,s){let u,I,g,p,L,k,w,E,b,D,y;ue(a,kt,T=>s(4,g=T)),ue(a,jt,T=>s(5,p=T)),ue(a,Nt,T=>s(6,L=T)),ue(a,Ut,T=>s(7,k=T)),ue(a,ds,T=>s(8,w=T)),ue(a,cs,T=>s(9,E=T)),ue(a,Vt,T=>s(10,b=T)),ue(a,At,T=>s(11,D=T)),ue(a,Ct,T=>s(12,y=T));let{showOnlyConfigYaml:_}=l;const U=`# Pull a live site into DDEV

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
  childThemeFolder: \${CHILD_THEME_FOLDER_NAME}
  
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
    # TODO: use reverse .gitignore file to include, but include-from does not work with /path/-, only used for patterns
    # Sync files from remote (\${sshUser}@\${sshHost}:\${sshWpDir}) to local docroot (.)
    # not working, because it uses pattern, but .gitignore uses paths --> rsync -azh --progress --stats --include-from='.gitignore' --exclude='*' \${sshUser}@\${sshHost}:\${sshWpDir} .
    # not working as well rsync -azhvv --progress --stats --filter='merge,+ .gitignore' \${sshUser}@\${sshHost}:\${sshWpDir} .
    # current implementation:
    rsync -azh --progress --stats --exclude="wp-content/themes/\${childThemeFolder}" --exclude=".git/" --exclude=".ddev/" \${sshUser}@\${sshHost}:\${sshWpDir} .
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
`;return a.$$set=T=>{"showOnlyConfigYaml"in T&&s(0,_=T.showOnlyConfigYaml)},a.$$.update=()=>{a.$$.dirty&8176&&s(2,u=`name: ${y}
type: wordpress
docroot: ""
php_version: "${D}"
webserver_type: ${b}
router_http_port: "80"
router_https_port: "443"
xdebug_enabled: false
additional_hostnames: []
additional_fqdns: []
${E}: "${w}"
nfs_mount_enabled: false
mutagen_enabled: false
use_dns_when_possible: true
composer_version: "2"
web_environment:
- PRODUCTION_SSH_HOST=${k}
- PRODUCTION_SSH_USER=${L}
- PRODUCTION_SSH_WP_DIR=${p}
- CHILD_THEME_FOLDER_NAME=${g}`),a.$$.dirty&16&&s(1,I=`
# Ignore all ...
/*

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

# Child theme:
!/wp-content
/wp-content/*
!/wp-content/themes
/wp-content/themes/*
!/wp-content/themes/${g}
`)},[_,I,u,U,g,p,L,k,w,E,b,D,y]}class Gt extends Ot{constructor(l){super();$t(this,l,fs,ps,Ht,{showOnlyConfigYaml:0})}}function Qt(a,l,s){const u=a.slice();return u[21]=l[s].displayText,u[22]=l[s].value,u[24]=s,u}function Kt(a,l,s){const u=a.slice();return u[21]=l[s].displayText,u[22]=l[s].value,u[24]=s,u}function Jt(a,l,s){const u=a.slice();return u[26]=l[s],u[24]=s,u}function Xt(a){let l,s,u,I,g,p,L=a[26]+"",k,w,E,b,D;return{c(){l=o("div"),s=o("input"),g=v(),p=o("label"),k=d(L),E=v(),this.h()},l(y){l=n(y,"DIV",{class:!0});var _=i(l);s=n(_,"INPUT",{class:!0,id:!0,type:!0,name:!0}),g=m(_),p=n(_,"LABEL",{class:!0,for:!0});var U=i(p);k=h(U,L),U.forEach(r),E=m(_),_.forEach(r),this.h()},h(){t(s,"class","form-check-input svelte-12n678h"),t(s,"id",u=a[26]),t(s,"type","radio"),t(s,"name","phpVersion"),s.__value=I=a[26],s.value=s.__value,a[12][0].push(s),t(p,"class","form-check-label svelte-12n678h"),t(p,"for",w=a[26]),t(l,"class","form-check form-check-inline")},m(y,_){xe(y,l,_),e(l,s),s.checked=s.__value===a[1],e(l,g),e(l,p),e(p,k),e(l,E),b||(D=ct(s,"change",a[11]),b=!0)},p(y,_){_&2&&(s.checked=s.__value===y[1])},d(y){y&&r(l),a[12][0].splice(a[12][0].indexOf(s),1),b=!1,D()}}}function Zt(a){let l,s,u,I,g,p,L=a[21]+"",k,w,E,b,D;return{c(){l=o("div"),s=o("input"),g=v(),p=o("label"),k=d(L),E=v(),this.h()},l(y){l=n(y,"DIV",{class:!0});var _=i(l);s=n(_,"INPUT",{class:!0,id:!0,type:!0,name:!0}),g=m(_),p=n(_,"LABEL",{class:!0,for:!0});var U=i(p);k=h(U,L),U.forEach(r),E=m(_),_.forEach(r),this.h()},h(){t(s,"class","form-check-input svelte-12n678h"),t(s,"id",u="radioDbVersion-"+a[22]),t(s,"type","radio"),t(s,"name","dbVersion"),s.__value=I=a[22],s.value=s.__value,a[12][1].push(s),t(p,"class","form-check-label svelte-12n678h"),t(p,"for",w="radioDbVersion-"+a[22]),t(l,"class","form-check")},m(y,_){xe(y,l,_),e(l,s),s.checked=s.__value===a[2],e(l,g),e(l,p),e(p,k),e(l,E),b||(D=ct(s,"change",a[13]),b=!0)},p(y,_){_&4&&(s.checked=s.__value===y[2])},d(y){y&&r(l),a[12][1].splice(a[12][1].indexOf(s),1),b=!1,D()}}}function es(a){let l,s,u,I,g,p,L=a[21]+"",k,w,E,b,D;return{c(){l=o("div"),s=o("input"),g=v(),p=o("label"),k=d(L),E=v(),this.h()},l(y){l=n(y,"DIV",{class:!0});var _=i(l);s=n(_,"INPUT",{class:!0,id:!0,type:!0,name:!0}),g=m(_),p=n(_,"LABEL",{class:!0,for:!0});var U=i(p);k=h(U,L),U.forEach(r),E=m(_),_.forEach(r),this.h()},h(){t(s,"class","form-check-input svelte-12n678h"),t(s,"id",u="radioDbVersion-"+a[22]),t(s,"type","radio"),t(s,"name","dbVersion"),s.__value=I=a[22],s.value=s.__value,a[12][1].push(s),t(p,"class","form-check-label svelte-12n678h"),t(p,"for",w="radioDbVersion-"+a[22]),t(l,"class","form-check")},m(y,_){xe(y,l,_),e(l,s),s.checked=s.__value===a[2],e(l,g),e(l,p),e(p,k),e(l,E),b||(D=ct(s,"change",a[14]),b=!0)},p(y,_){_&4&&(s.checked=s.__value===y[2])},d(y){y&&r(l),a[12][1].splice(a[12][1].indexOf(s),1),b=!1,D()}}}function vs(a){let l,s,u,I,g,p,L,k,w,E,b,D,y,_,U,T,We,N,Q,me,z,Ce,x,V,re,ae,oe,_e,R,ne,Se,ge,G,q,M,be,Z,Ge,Qe,W,ee,Ae,ke,C,ye,Ve,Ke,Le,K,F,B,J,te,pe,we,Ee,ie,ce,se,Te,de,fe,Pe,Je,j,Ue,De,Oe,le,Xe,he,Ze,et,S=a[8],O=[];for(let f=0;f<S.length;f+=1)O[f]=Xt(Jt(a,S,f));let X=Lt(a[9],"maria"),$=[];for(let f=0;f<X.length;f+=1)$[f]=Zt(Kt(a,X,f));let Ne=Lt(a[9],"mysql"),A=[];for(let f=0;f<Ne.length;f+=1)A[f]=es(Qt(a,Ne,f));return{c(){l=o("form"),s=o("div"),u=o("label"),I=d("Project name"),g=v(),p=o("input"),L=v(),k=o("div"),w=o("fieldset"),E=o("legend"),b=d("PHP version"),D=v();for(let f=0;f<O.length;f+=1)O[f].c();y=v(),_=o("fieldset"),U=o("legend"),T=d("Database version"),We=v(),N=o("div"),Q=o("div");for(let f=0;f<$.length;f+=1)$[f].c();me=v(),z=o("div");for(let f=0;f<A.length;f+=1)A[f].c();Ce=v(),x=o("div"),V=o("fieldset"),re=o("legend"),ae=d("Web Server"),oe=v(),_e=o("div"),R=o("input"),ne=v(),Se=o("label"),ge=d("nginx (default)"),G=v(),q=o("div"),M=o("input"),be=v(),Z=o("label"),Ge=d("apache2"),Qe=v(),W=o("div"),ee=o("label"),Ae=d("Child theme folder (in wp-content/themes/)"),ke=v(),C=o("input"),ye=v(),Ve=o("div"),Ke=d("If you don't use a child theme currently, just leave this setting. Can be changed later."),Le=v(),K=o("div"),F=o("label"),B=d("SSH host"),J=v(),te=o("input"),pe=v(),we=o("div"),Ee=o("label"),ie=d("SSH username"),ce=v(),se=o("input"),Te=v(),de=o("div"),fe=o("label"),Pe=d("Path to WordPress on server"),Je=v(),j=o("input"),Ue=v(),De=o("div"),Oe=d("Get it from "),le=o("a"),Xe=d("Site Health"),he=d(`
			\xBB Info \xBB Directories & sizes \xBB WordPress directory location`),this.h()},l(f){l=n(f,"FORM",{});var P=i(l);s=n(P,"DIV",{class:!0});var c=i(s);u=n(c,"LABEL",{class:!0,for:!0});var H=i(u);I=h(H,"Project name"),H.forEach(r),g=m(c),p=n(c,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),c.forEach(r),L=m(P),k=n(P,"DIV",{class:!0});var Y=i(k);w=n(Y,"FIELDSET",{class:!0});var lt=i(w);E=n(lt,"LEGEND",{class:!0});var je=i(E);b=h(je,"PHP version"),je.forEach(r),D=m(lt);for(let Re=0;Re<O.length;Re+=1)O[Re].l(lt);lt.forEach(r),Y.forEach(r),y=m(P),_=n(P,"FIELDSET",{class:!0});var rt=i(_);U=n(rt,"LEGEND",{class:!0});var ht=i(U);T=h(ht,"Database version"),ht.forEach(r),We=m(rt),N=n(rt,"DIV",{class:!0});var $e=i(N);Q=n($e,"DIV",{class:!0});var at=i(Q);for(let Re=0;Re<$.length;Re+=1)$[Re].l(at);at.forEach(r),me=m($e),z=n($e,"DIV",{class:!0});var Me=i(z);for(let Re=0;Re<A.length;Re+=1)A[Re].l(Me);Me.forEach(r),$e.forEach(r),rt.forEach(r),Ce=m(P),x=n(P,"DIV",{class:!0});var Be=i(x);V=n(Be,"FIELDSET",{class:!0});var qe=i(V);re=n(qe,"LEGEND",{class:!0});var ot=i(re);ae=h(ot,"Web Server"),ot.forEach(r),oe=m(qe),_e=n(qe,"DIV",{class:!0});var nt=i(_e);R=n(nt,"INPUT",{class:!0,id:!0,type:!0,name:!0}),ne=m(nt),Se=n(nt,"LABEL",{class:!0,for:!0});var Fe=i(Se);ge=h(Fe,"nginx (default)"),Fe.forEach(r),nt.forEach(r),G=m(qe),q=n(qe,"DIV",{class:!0});var Ye=i(q);M=n(Ye,"INPUT",{class:!0,id:!0,type:!0,name:!0}),be=m(Ye),Z=n(Ye,"LABEL",{class:!0,for:!0});var it=i(Z);Ge=h(it,"apache2"),it.forEach(r),Ye.forEach(r),qe.forEach(r),Be.forEach(r),Qe=m(P),W=n(P,"DIV",{class:!0});var Ie=i(W);ee=n(Ie,"LABEL",{class:!0,for:!0});var ut=i(ee);Ae=h(ut,"Child theme folder (in wp-content/themes/)"),ut.forEach(r),ke=m(Ie),C=n(Ie,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),ye=m(Ie),Ve=n(Ie,"DIV",{class:!0});var vt=i(Ve);Ke=h(vt,"If you don't use a child theme currently, just leave this setting. Can be changed later."),vt.forEach(r),Ie.forEach(r),Le=m(P),K=n(P,"DIV",{class:!0});var ze=i(K);F=n(ze,"LABEL",{class:!0,for:!0});var He=i(F);B=h(He,"SSH host"),He.forEach(r),J=m(ze),te=n(ze,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),ze.forEach(r),pe=m(P),we=n(P,"DIV",{class:!0});var tt=i(we);Ee=n(tt,"LABEL",{class:!0,for:!0});var mt=i(Ee);ie=h(mt,"SSH username"),mt.forEach(r),ce=m(tt),se=n(tt,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),tt.forEach(r),Te=m(P),de=n(P,"DIV",{class:!0});var ve=i(de);fe=n(ve,"LABEL",{class:!0,for:!0});var st=i(fe);Pe=h(st,"Path to WordPress on server"),st.forEach(r),Je=m(ve),j=n(ve,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),Ue=m(ve),De=n(ve,"DIV",{class:!0});var _t=i(De);Oe=h(_t,"Get it from "),le=n(_t,"A",{href:!0,target:!0});var Dt=i(le);Xe=h(Dt,"Site Health"),Dt.forEach(r),he=h(_t,`
			\xBB Info \xBB Directories & sizes \xBB WordPress directory location`),_t.forEach(r),ve.forEach(r),P.forEach(r),this.h()},h(){t(u,"class","form-label svelte-12n678h"),t(u,"for","projectName"),t(p,"class","form-control"),t(p,"id","projectName"),t(p,"type","text"),t(p,"placeholder","Project name"),t(s,"class","mb-3"),t(E,"class","svelte-12n678h"),t(w,"class","svelte-12n678h"),t(k,"class","mb-3"),t(U,"class","svelte-12n678h"),t(Q,"class","col"),t(z,"class","col"),t(N,"class","row"),t(_,"class","svelte-12n678h"),t(re,"class","svelte-12n678h"),t(R,"class","form-check-input svelte-12n678h"),t(R,"id","nginx"),t(R,"type","radio"),t(R,"name","webServerType"),R.__value="nginx-fpm",R.value=R.__value,a[12][2].push(R),t(Se,"class","form-check-label svelte-12n678h"),t(Se,"for","nginx"),t(_e,"class","form-check form-check-inline"),t(M,"class","form-check-input svelte-12n678h"),t(M,"id","apache2"),t(M,"type","radio"),M.__value="apache-fpm",M.value=M.__value,t(M,"name","webServerType"),a[12][2].push(M),t(Z,"class","form-check-label svelte-12n678h"),t(Z,"for","apache2"),t(q,"class","form-check form-check-inline"),t(V,"class","svelte-12n678h"),t(x,"class","mb-3"),t(ee,"class","form-label svelte-12n678h"),t(ee,"for","childThemeFolderName"),t(C,"class","form-control"),t(C,"id","childThemeFolderName"),t(C,"type","text"),t(C,"placeholder","twentytwentyone-child"),t(Ve,"class","form-text"),t(W,"class","mb-3"),t(F,"class","form-label svelte-12n678h"),t(F,"for","sshHost"),t(te,"class","form-control"),t(te,"id","sshHost"),t(te,"type","text"),t(te,"placeholder","example.org"),t(K,"class","mb-3"),t(Ee,"class","form-label svelte-12n678h"),t(Ee,"for","sshUsername"),t(se,"class","form-control"),t(se,"id","sshUsername"),t(se,"type","text"),t(se,"placeholder","user123"),t(we,"class","mb-3"),t(fe,"class","form-label svelte-12n678h"),t(fe,"for","pathToWordPressOnServer"),t(j,"class","form-control"),t(j,"id","pathToWordPressOnServer"),t(j,"type","text"),t(j,"placeholder","/sites/my-website.eu/"),t(le,"href","https://yoast.com/wordpress-site-health/"),t(le,"target","_blank"),t(De,"class","form-text"),t(de,"class","mb-3")},m(f,P){xe(f,l,P),e(l,s),e(s,u),e(u,I),e(s,g),e(s,p),dt(p,a[0]),e(l,L),e(l,k),e(k,w),e(w,E),e(E,b),e(w,D);for(let c=0;c<O.length;c+=1)O[c].m(w,null);e(l,y),e(l,_),e(_,U),e(U,T),e(_,We),e(_,N),e(N,Q);for(let c=0;c<$.length;c+=1)$[c].m(Q,null);e(N,me),e(N,z);for(let c=0;c<A.length;c+=1)A[c].m(z,null);e(l,Ce),e(l,x),e(x,V),e(V,re),e(re,ae),e(V,oe),e(V,_e),e(_e,R),R.checked=R.__value===a[3],e(_e,ne),e(_e,Se),e(Se,ge),e(V,G),e(V,q),e(q,M),M.checked=M.__value===a[3],e(q,be),e(q,Z),e(Z,Ge),e(l,Qe),e(l,W),e(W,ee),e(ee,Ae),e(W,ke),e(W,C),dt(C,a[4]),e(W,ye),e(W,Ve),e(Ve,Ke),e(l,Le),e(l,K),e(K,F),e(F,B),e(K,J),e(K,te),dt(te,a[5]),e(l,pe),e(l,we),e(we,Ee),e(Ee,ie),e(we,ce),e(we,se),dt(se,a[6]),e(l,Te),e(l,de),e(de,fe),e(fe,Pe),e(de,Je),e(de,j),dt(j,a[7]),e(de,Ue),e(de,De),e(De,Oe),e(De,le),e(le,Xe),e(De,he),Ze||(et=[ct(p,"input",a[10]),ct(R,"change",a[15]),ct(M,"change",a[16]),ct(C,"input",a[17]),ct(te,"input",a[18]),ct(se,"input",a[19]),ct(j,"input",a[20])],Ze=!0)},p(f,[P]){if(P&1&&p.value!==f[0]&&dt(p,f[0]),P&258){S=f[8];let c;for(c=0;c<S.length;c+=1){const H=Jt(f,S,c);O[c]?O[c].p(H,P):(O[c]=Xt(H),O[c].c(),O[c].m(w,null))}for(;c<O.length;c+=1)O[c].d(1);O.length=S.length}if(P&516){X=Lt(f[9],"maria");let c;for(c=0;c<X.length;c+=1){const H=Kt(f,X,c);$[c]?$[c].p(H,P):($[c]=Zt(H),$[c].c(),$[c].m(Q,null))}for(;c<$.length;c+=1)$[c].d(1);$.length=X.length}if(P&516){Ne=Lt(f[9],"mysql");let c;for(c=0;c<Ne.length;c+=1){const H=Qt(f,Ne,c);A[c]?A[c].p(H,P):(A[c]=es(H),A[c].c(),A[c].m(z,null))}for(;c<A.length;c+=1)A[c].d(1);A.length=Ne.length}P&8&&(R.checked=R.__value===f[3]),P&8&&(M.checked=M.__value===f[3]),P&16&&C.value!==f[4]&&dt(C,f[4]),P&32&&te.value!==f[5]&&dt(te,f[5]),P&64&&se.value!==f[6]&&dt(se,f[6]),P&128&&j.value!==f[7]&&dt(j,f[7])},i:xt,o:xt,d(f){f&&r(l),Wt(O,f),Wt($,f),Wt(A,f),a[12][2].splice(a[12][2].indexOf(R),1),a[12][2].splice(a[12][2].indexOf(M),1),Ze=!1,ns(et)}}}function Lt(a,l){return l?a.filter(s=>s.value.includes(l)):a}function ms(a,l,s){let u,I,g,p,L,k,w,E;ue(a,Ct,V=>s(0,u=V)),ue(a,At,V=>s(1,I=V)),ue(a,It,V=>s(2,g=V)),ue(a,Vt,V=>s(3,p=V)),ue(a,kt,V=>s(4,L=V)),ue(a,Ut,V=>s(5,k=V)),ue(a,Nt,V=>s(6,w=V)),ue(a,jt,V=>s(7,E=V));let b=["8.0","7.4","7.3","7.2","7.1","7.0","5.6"],D=[{value:"maria-10.3",displayText:"MariaDB 10.3 (default)"},{value:"maria-10.4",displayText:"MariaDB 10.4"},{value:"maria-10.5",displayText:"MariaDB 10.5"},{value:"maria-10.6",displayText:"MariaDB 10.6"},{value:"mysql-5.5",displayText:"MySQL 5.5"},{value:"mysql-5.6",displayText:"MySQL 5.6"},{value:"mysql-5.7",displayText:"MySQL 5.7"},{value:"mysql-8.0",displayText:"MySQL 8.0"}];const y=[[],[],[]];function _(){u=this.value,Ct.set(u)}function U(){I=this.__value,At.set(I)}function T(){g=this.__value,It.set(g)}function We(){g=this.__value,It.set(g)}function N(){p=this.__value,Vt.set(p)}function Q(){p=this.__value,Vt.set(p)}function me(){L=this.value,kt.set(L)}function z(){k=this.value,Ut.set(k)}function Ce(){w=this.value,Nt.set(w)}function x(){E=this.value,jt.set(E)}return[u,I,g,p,L,k,w,E,b,D,_,U,y,T,We,N,Q,me,z,Ce,x]}class _s extends Ot{constructor(l){super();$t(this,l,ms,vs,Ht,{})}}function gs(a){let l,s,u,I,g,p,L,k,w,E,b,D,y,_,U,T,We,N,Q,me,z,Ce,x,V,re,ae,oe,_e,R,ne,Se,ge,G,q,M,be,Z,Ge,Qe,W,ee,Ae,ke,C,ye,Ve,Ke,Le,K,F,B,J,te,pe,we,Ee,ie,ce,se,Te,de,fe,Pe,Je,j,Ue,De,Oe,le,Xe,he,Ze,et,S,O,X,$,Ne,A,f,P,c;return oe=new Gt({props:{showOnlyConfigYaml:!0}}),ne=new _s({}),ee=new Gt({props:{showOnlyConfigYaml:!1}}),{c(){l=o("div"),s=o("div"),u=d(`This generator is work in progress, please use it with caution. There are still some bugs to
		fix. Stay tuned! :-)`),I=v(),g=o("h1"),p=o("i"),L=d("ddev pull wp"),k=d("-Generator"),w=v(),E=o("p"),b=d(`This generators enables you to pull a live WordPress site into your local DDEV project. It
		requires connecting to your webspace via SSH (password-less via SSH keys) and it needs WP-CLI or
		mysqldump available on your webspace.`),D=o("i"),y=d("(If your webspace doesn't meet these requirements, check out "),_=o("a"),U=d("ddev pull backwpupfile"),T=d(")."),We=v(),N=o("div"),Q=o("div"),me=o("h2"),z=d("1. Create your configuration"),Ce=v(),x=o("div"),V=o("div"),re=d(".ddev/config.yaml"),ae=v(),bt(oe.$$.fragment),_e=v(),R=o("div"),bt(ne.$$.fragment),Se=v(),ge=o("div"),G=o("div"),q=o("h2"),M=d("2. Create your project folder"),be=v(),Z=o("p"),Ge=d("Create a new project folder and insert these files:"),Qe=v(),W=o("div"),bt(ee.$$.fragment),Ae=v(),ke=o("div"),C=o("div"),ye=o("h2"),Ve=d("3. Start DDEV project & pull all the files"),Ke=v(),Le=o("p"),K=d("Screencast: coming soon"),F=v(),B=o("ol"),J=o("li"),te=d("Download the current state of your child theme into "),pe=o("i"),we=d("wp-content/themes/"),Ee=d(a[0]),ie=d(`. If you want to download it from WP dashboard, you can use the
					`),ce=o("a"),se=d("Download Plugins and Themes from Dashboard plugin"),Te=d("."),de=o("br"),fe=o("small"),Pe=d(`(If you already manage your child theme via git or you don't have a child theme
						currently, you can skip this step.)`),Je=v(),j=o("li"),Ue=d('Run "ddev start"'),De=v(),Oe=o("li"),le=d('Run "ddev auth ssh"'),Xe=v(),he=o("li"),Ze=d('Run "ddev pull wp-production" to pull your live site to the local project'),et=v(),S=o("li"),O=d('Run "ddev launch" to open your local site in the browser'),X=v(),$=o("p"),Ne=d(`Optional: Setup your child theme via WPPusher (or other methods) on your live site, see
				"Step 7" `),A=o("a"),f=d("here"),P=d("."),this.h()},l(H){l=n(H,"DIV",{class:!0});var Y=i(l);s=n(Y,"DIV",{class:!0,role:!0});var lt=i(s);u=h(lt,`This generator is work in progress, please use it with caution. There are still some bugs to
		fix. Stay tuned! :-)`),lt.forEach(r),I=m(Y),g=n(Y,"H1",{});var je=i(g);p=n(je,"I",{});var rt=i(p);L=h(rt,"ddev pull wp"),rt.forEach(r),k=h(je,"-Generator"),je.forEach(r),w=m(Y),E=n(Y,"P",{});var ht=i(E);b=h(ht,`This generators enables you to pull a live WordPress site into your local DDEV project. It
		requires connecting to your webspace via SSH (password-less via SSH keys) and it needs WP-CLI or
		mysqldump available on your webspace.`),D=n(ht,"I",{});var $e=i(D);y=h($e,"(If your webspace doesn't meet these requirements, check out "),_=n($e,"A",{href:!0,target:!0});var at=i(_);U=h(at,"ddev pull backwpupfile"),at.forEach(r),T=h($e,")."),$e.forEach(r),ht.forEach(r),We=m(Y),N=n(Y,"DIV",{class:!0});var Me=i(N);Q=n(Me,"DIV",{class:!0});var Be=i(Q);me=n(Be,"H2",{class:!0});var qe=i(me);z=h(qe,"1. Create your configuration"),qe.forEach(r),Be.forEach(r),Ce=m(Me),x=n(Me,"DIV",{class:!0});var ot=i(x);V=n(ot,"DIV",{class:!0});var nt=i(V);re=h(nt,".ddev/config.yaml"),nt.forEach(r),ae=m(ot),yt(oe.$$.fragment,ot),ot.forEach(r),_e=m(Me),R=n(Me,"DIV",{class:!0});var Fe=i(R);yt(ne.$$.fragment,Fe),Fe.forEach(r),Me.forEach(r),Se=m(Y),ge=n(Y,"DIV",{class:!0});var Ye=i(ge);G=n(Ye,"DIV",{class:!0});var it=i(G);q=n(it,"H2",{class:!0});var Ie=i(q);M=h(Ie,"2. Create your project folder"),Ie.forEach(r),be=m(it),Z=n(it,"P",{});var ut=i(Z);Ge=h(ut,"Create a new project folder and insert these files:"),ut.forEach(r),it.forEach(r),Qe=m(Ye),W=n(Ye,"DIV",{class:!0});var vt=i(W);yt(ee.$$.fragment,vt),vt.forEach(r),Ye.forEach(r),Ae=m(Y),ke=n(Y,"DIV",{class:!0});var ze=i(ke);C=n(ze,"DIV",{class:!0});var He=i(C);ye=n(He,"H2",{class:!0});var tt=i(ye);Ve=h(tt,"3. Start DDEV project & pull all the files"),tt.forEach(r),Ke=m(He),Le=n(He,"P",{});var mt=i(Le);K=h(mt,"Screencast: coming soon"),mt.forEach(r),F=m(He),B=n(He,"OL",{class:!0});var ve=i(B);J=n(ve,"LI",{class:!0});var st=i(J);te=h(st,"Download the current state of your child theme into "),pe=n(st,"I",{});var _t=i(pe);we=h(_t,"wp-content/themes/"),Ee=h(_t,a[0]),_t.forEach(r),ie=h(st,`. If you want to download it from WP dashboard, you can use the
					`),ce=n(st,"A",{href:!0,target:!0});var Dt=i(ce);se=h(Dt,"Download Plugins and Themes from Dashboard plugin"),Dt.forEach(r),Te=h(st,"."),de=n(st,"BR",{}),fe=n(st,"SMALL",{});var Re=i(fe);Pe=h(Re,`(If you already manage your child theme via git or you don't have a child theme
						currently, you can skip this step.)`),Re.forEach(r),st.forEach(r),Je=m(ve),j=n(ve,"LI",{class:!0});var Mt=i(j);Ue=h(Mt,'Run "ddev start"'),Mt.forEach(r),De=m(ve),Oe=n(ve,"LI",{class:!0});var Bt=i(Oe);le=h(Bt,'Run "ddev auth ssh"'),Bt.forEach(r),Xe=m(ve),he=n(ve,"LI",{class:!0});var qt=i(he);Ze=h(qt,'Run "ddev pull wp-production" to pull your live site to the local project'),qt.forEach(r),et=m(ve),S=n(ve,"LI",{class:!0});var Ft=i(S);O=h(Ft,'Run "ddev launch" to open your local site in the browser'),Ft.forEach(r),ve.forEach(r),X=m(He),$=n(He,"P",{class:!0});var St=i($);Ne=h(St,`Optional: Setup your child theme via WPPusher (or other methods) on your live site, see
				"Step 7" `),A=n(St,"A",{href:!0});var Yt=i(A);f=h(Yt,"here"),Yt.forEach(r),P=h(St,"."),St.forEach(r),He.forEach(r),ze.forEach(r),Y.forEach(r),this.h()},h(){t(s,"class","alert alert-warning"),t(s,"role","alert"),t(_,"href","https://github.com/mandrasch/ddev-pull-backwpupfile"),t(_,"target","_blank"),t(me,"class","svelte-e708f3"),t(Q,"class","col-12 px-4 mb-3"),t(V,"class","mb-2"),t(x,"class","col-lg-6 px-4"),t(R,"class","col-lg-6 px-4"),t(N,"class","row"),t(q,"class","svelte-e708f3"),t(G,"class","col-12 px-4 mb-3"),t(W,"class","col-12 px-4"),t(ge,"class","row"),t(ye,"class","mb-3 svelte-e708f3"),t(ce,"href","https://wordpress.org/plugins/download-plugins-dashboard/"),t(ce,"target","_blank"),t(J,"class","list-group-item"),t(j,"class","list-group-item"),t(Oe,"class","list-group-item"),t(he,"class","list-group-item"),t(S,"class","list-group-item"),t(B,"class","list-group list-group-numbered"),t(A,"href","https://github.com/mandrasch/ddev-wp-groundstation"),t($,"class","mt-3"),t(C,"class","col-12"),t(ke,"class","row"),t(l,"class","container px-5 my-5 svelte-e708f3")},m(H,Y){xe(H,l,Y),e(l,s),e(s,u),e(l,I),e(l,g),e(g,p),e(p,L),e(g,k),e(l,w),e(l,E),e(E,b),e(E,D),e(D,y),e(D,_),e(_,U),e(D,T),e(l,We),e(l,N),e(N,Q),e(Q,me),e(me,z),e(N,Ce),e(N,x),e(x,V),e(V,re),e(x,ae),wt(oe,x,null),e(N,_e),e(N,R),wt(ne,R,null),e(l,Se),e(l,ge),e(ge,G),e(G,q),e(q,M),e(G,be),e(G,Z),e(Z,Ge),e(ge,Qe),e(ge,W),wt(ee,W,null),e(l,Ae),e(l,ke),e(ke,C),e(C,ye),e(ye,Ve),e(C,Ke),e(C,Le),e(Le,K),e(C,F),e(C,B),e(B,J),e(J,te),e(J,pe),e(pe,we),e(pe,Ee),e(J,ie),e(J,ce),e(ce,se),e(J,Te),e(J,de),e(J,fe),e(fe,Pe),e(B,Je),e(B,j),e(j,Ue),e(B,De),e(B,Oe),e(Oe,le),e(B,Xe),e(B,he),e(he,Ze),e(B,et),e(B,S),e(S,O),e(C,X),e(C,$),e($,Ne),e($,A),e(A,f),e($,P),c=!0},p(H,[Y]){(!c||Y&1)&&is(Ee,H[0])},i(H){c||(ft(oe.$$.fragment,H),ft(ne.$$.fragment,H),ft(ee.$$.fragment,H),c=!0)},o(H){pt(oe.$$.fragment,H),pt(ne.$$.fragment,H),pt(ee.$$.fragment,H),c=!1},d(H){H&&r(l),Et(oe),Et(ne),Et(ee)}}}function bs(a,l,s){let u;return ue(a,kt,I=>s(0,u=I)),[u]}class ws extends Ot{constructor(l){super();$t(this,l,bs,gs,Ht,{})}}export{ws as default};
