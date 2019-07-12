<?php

// Cannot be called directly.
abstract class Thing
{
    public function __get($key)
    {
        return FALSE;
    }

    public function __set($key, $value = NULL)
    {
        $this->$key = $value;
    }
}

class Page extends Thing
{
    public function __toString()
    {
        $r = '<!doctype html>';
        //$r .= '<html dir="ltr" lang="en" manifest="manifest.appcache">';
        $r .= '<html dir="ltr" lang="en">';
        $r .= '<head>';
        $r .= '<meta charset="utf-8">';
        $r .= '<meta name="apple-mobile-web-app-capable" content="yes">';
        $r .= '<meta name="description" content="By Alexander Christiaan Jacob, 2011.">';
        $r .= '<meta property="fb:admins" content="509248955">';
        $r .= '<meta property="og:description" content="By Alexander Christiaan Jacob, 2011.">';
        $r .= '<meta property="og:image" content="http://compositionn.com/icon.png?f=7">';
        $r .= '<meta property="og:title" content="Composition n">';
        $r .= '<meta property="og:type" content="website">';
        $r .= '<meta property="og:url" content="http://compositionn.com/">';
        $r .= '<title>Composition n</title>';
        $r .= '<link rel="apple-touch-icon-precomposed" href="apple-touch-icon-precomposed.png">';
        $r .= '<link rel="author" href="http://acjs.net/ego/">';
        $r .= '<link rel="canonical" href="http://compositionn.com/">';
        $r .= '<link rel="shortcut icon" href="favicon.ico">';
        $r .= '<style>';
        $r .= '<!--';
        $r .= '*{border:0;margin:0;outline:0;padding:0}';
        $r .= 'body,canvas,html{background:#fff;height:100%;overflow:hidden;width:100%}';
        //$r .= 'h1{font-family:\'Helvetica Neue\',Helvetica,Arial,sans-serif;font-size:2em;line-height:.75}';
        //$r .= 'html{overflow-y:scroll;padding:1.5em 2em}';
        //$r .= 'var{font-family:\'Times New Roman\',Times,serif;font-style:italic}';
        $r .= '-->';
        $r .= '</style>';
        $r .= '<script src="script.js"></script>';
        $r .= <<<HTML
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-6227584-32']);
  _gaq.push(['_setDomainName', 'compositionn.com']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
HTML;
        $r .= '</head>';
        $r .= '<body>';
        //$r .= '<h1>Composition <var>n</var></h1>';
        $r .= '<canvas id="content" role="main">Requires <code>html:canvas</code> support.</canvas>';
        $r .= '</body>';
        $r .= '</html>';

        return $r;
    }

    public function save()
    {
        file_put_contents('index.html', $this);
    }
}
