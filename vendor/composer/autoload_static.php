<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit079b40e013872274e74a229f6121a3bc
{
    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInit079b40e013872274e74a229f6121a3bc::$classMap;

        }, null, ClassLoader::class);
    }
}