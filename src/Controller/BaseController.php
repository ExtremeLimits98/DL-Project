<?php

namespace App\Controller;

use Pimcore\Controller\FrontendController;
use Pimcore\Model\DataObject;
use Pimcore\Tool;
use Symfony\Component\HttpFoundation\Request;

class BaseController extends FrontendController
{
    /**
     * @param Request $request
     * @param DataObject $object
     *
     * @return bool
     */
    protected function verifyPreviewRequest(Request $request, DataObject $object): bool
    {
        if (Tool::isElementRequestByAdmin($request, $object)) {
            return true;
        }

        return false;
    }

    /**
     * @param Request $request
     *
     * @return array
     */
    protected function getAllParameters(Request $request): array
    {
        return array_merge($request->request->all(), $request->query->all());
    }
}
