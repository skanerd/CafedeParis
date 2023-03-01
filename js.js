// typing 効果 // 

const content_a = `カフェ・ド・パリで愛されているブレンドの多くは、
ラテンアメリカ産のコーヒーがベースとなっています。
その理由は、安定した味と品質。
カフェ・ド・パリはこの地域のコーヒーを最も多く購入しています。
例えばこの地域には環境ごとに異なる多種多様な気候、土壌、伝統的加工方法があります。
コスタリカは火山が多いことで知られていますが、
それが栽培されるコーヒーの味にも影響するのです。
さて、ラテンアメリカ産のコーヒーはどのような味わいだと思いますか。
口にするとナッツやカカオ、そしてほのかなスパイスのような香りに出会えるかもしれません。`;
const content_b = `本場イタリアの味から日本人好みのおいしさまで、
50種類を超えるバリエーションに加え、冷製パスタやスープパスタなど季節ごとの特別メニューも提供。
この優れた商品開発力が、幅広い層のお客様からご支持いただいている理由です。
おいしいパスタには理由があります。
ジョリーパスタでは「パスタのおいしさ」を科学的に分析し、
最もおいしい状態のものをお客様にご提供させていただいております。
そのためジョリーパスタでは、徹底的に計算された厨房環境で、
注文ごとにパスタを茹で、ピッツァの生地を伸ばし、人の手で一つ一つ丁寧に仕上げています。`;

const text_a = document.querySelector(".text_a");
const text_b = document.querySelector(".text_b");

let a = 0;
let b = 0;

function typing_a(){
    if (a < content_a.length) {
    let txt = content_a.charAt(a);
    text_a.innerHTML += txt;
    a++;
    }
}
setInterval(typing_a, 50);

function typing_b(){
    if (b < content_b.length) {
    let txt = content_b.charAt(b);
    text_b.innerHTML += txt;
    b++;
    }
}
setInterval(typing_b, 50);
