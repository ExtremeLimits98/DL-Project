<?php


namespace App\Document\Areabrick;
abstract class AbstractAreabrick extends \Pimcore\Extension\Document\Areabrick\AbstractTemplateAreabrick
{
    /**
     * @inheritDoc
     */
    public function getTemplateLocation(): string
    {
        return static::TEMPLATE_LOCATION_GLOBAL;
    }

    public function getTemplateSuffix(): string
    {
        return static::TEMPLATE_SUFFIX_TWIG;
    }
}
