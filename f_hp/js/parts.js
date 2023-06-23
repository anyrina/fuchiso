'use strict'; 
{
    const $header_parys = document.getElementById('menu');
    $header_parys.insertAdjacentHTML('afterbegin' , `
    <!-- ハンバーガーメニュー部分 -->
    <div class="nav">

        <!-- ハンバーガーメニューの表示・非表示を切り替えるチェックボックス -->
        <input id="drawer_input" class="drawer_hidden" type="checkbox">
    
        <!-- ハンバーガーアイコン -->
        <label for="drawer_input" id="drawer_open" class="drawer_open"><p>MENU</p></label>
    
        <!-- メニュー -->
        <nav id="nav_content" class="nav_content">
        <ul class="nav_list">
            <li class="nav_item"><a href="./index.html">▶トップページ</a></li>
            <li class="nav_item"><a href="./news.html">▶ニュース</a></li>
            <li class="nav_item"><a href="./concept.html">▶コンセプト</a></li>
            <li class="nav_item"><a href="./shop_info.html">▶店舗情報</a></li>
            <li class="nav_item"><a href="./event.html">▶ブログ</a></li>
            <li class="nav_item"><a href="./access.html">▶アクセス</a></li>
            </ul>
        </nav>
    </div>
`)};

{
    const $footer_parys = document.getElementById('footer');
    $footer_parys.insertAdjacentHTML('afterbegin' , `

    <footer>
    <div class="footer_flex">
        <div class="footer_links">
            <a href="../html/index.html"><img src="../images/logo.png" alt=""></a>
            <div class="sns_links">
                <a class="instagram sns" href="https://www.instagram.com/fuchiso87/"><img class="icon" src="../images/instagram.png" alt="instagram"><p class="icon_name">instagram ▷</p></a>
                <a class="line sns" href="https://lin.ee/buPdqMM"><img class="icon" src="../images/line.png" alt="LINE"><p class="icon_name">LINE ▷</p></a>
            </div>
        </div>

        <div class="shop_info">
            <table>
                <tr><th>営業時間</th> <td>10:00 〜 17:00</td></tr>
                <tr><th>店休</th> <td>不定休</td></tr>
                <tr><th>所在地</th> <td>〒039-0106<br>青森県三戸郡南部町相藤ケ森213-1</td></tr>
                <tr><th>電話番号</th> <td>0000-00-0000</td></tr>
            </table>
        </div>
    </div>
    <div id="copy">
        <p>Copyright&copy;2023 / Gokudanzouen / All Rights Reserved.</p>
    </div>
</footer>
`)};