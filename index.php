<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>PWA App</title>
        <link rel="manifest" href="./manifest.webmanifest">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#FFF">
        <script>
            if ("serviceWorker" in navigator) {
                navigator.serviceWorker.register('./serviceWorker.js');
            }
        </script>
    </head>
    <body>
        <h1>Hello world</h1>
        <?php
            echo "<p>This is a PHP script.</p>";
        ?>
    </body>
</html>
