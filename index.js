<!DOCTYPE html>
<html><!-- from index.html -->
    <head><!-- from head -->
        <!-- metadata -->
        <meta charset="utf-8">
        <title>TokyoCallCenterApp</title>

        <!-- import -->
        <script src="index.js" type="module"></script>
        <link rel="stylesheet" href="css/style.css">

        <!-- google font -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Kosugi+Maru&family=M+PLUS+1p&family=Mochiy+Pop+P+One&display=swap" rel="stylesheet">

    </head><!-- upto head -->
    
    <body><!-- from body -->
        <header>
            <div class="header">
                <p>TOKYO CALL CENTER</p>
                <nav>
                    <ul>
                        <li></li>
                    </ul>
                </nav>
            </div>
        </header>
        
        <main>
            <div class="hero-container">
                <section>
                    <div class="hero-contents">
                        <h1 class="hero-text">練習問題</h1>
                        <p class="hero-list-title">操作方法</p>
                        <ul>
                            <li>座席番号を入力</li>
                            <li>出題数を選択</li>
                            <li>問題を解くをクリック</li>
                            <li>解答にチェックを入れて答えを確認する</li>
                            <li>次の問題をクリック</li>
                            <li>選択出題数の問題が出題されて終了</li>
                        </ul>
                        <div class="hero-forms">
                            <input type="text" id="seat-num" placeholder="座席番号を入力" class="hero-form input-form">
                            <select id="question_count" class="hero-form select-form">
                                <option value="" disabled selected style="display:none;">出題数を選択</option>
                                <option value="10">10</option>
                            </select>
                            <button type="button" id="stat-btn" class="hero-form stat-btn">問題を解く</button>
                        </div>
                    </div>
                </section>
            </div>
        </main>

        <footer>
            <div class="footer">
                <p>Version 1.0.0 -- Released on September 23, 2023</p>
            </div>
        </footer>
    </body><!-- upto body -->
</html><!-- upto index.html -->
