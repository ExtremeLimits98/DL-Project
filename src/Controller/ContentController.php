<?php

namespace App\Controller;

use Pimcore\Model\Document;
use Symfony\Bridge\Twig\Attribute\Template;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
class ContentController extends  BaseController
{
    #[Template('content/default.html.twig')]
    public function defaultAction(Request $request)
    {
        $browser_language = strtolower(explode(",", $_SERVER['HTTP_ACCEPT_LANGUAGE'])[0]);
        if (isset($browser_language) && !$request->getSession()->get('language-redirected') && $request->getRequestUri() == '/sr_SR') {
            $redirect_service = \Pimcore::getContainer()->get('app.locale_redirect');
            $redirect_to = $redirect_service->redirect($browser_language);
            if ($redirect_to) {
                # set session
                $request->getSession()->set('language-redirected', true);

                # redirect if document exists
                if (Document::getByPath('/' . $redirect_to) && Document::getByPath('/' . $redirect_to)->isPublished()) {
                    return $this->redirect('/' . $redirect_to);
                }

                # default one
                return $this->redirect('/sr_SR');
            }
        }

        return [];
    }
}


