<?php
class CarreraController extends ApplicationController {


	protected   $auth;
	protected function initialize(){
		$this->setTemplateAfter("menu");
		$this->auth=Auth::getActiveIdentity();
	}
	public function indexAction(){}

	public function getCarrerasAction(){
		$this->setResponse('ajax');
		$carrera = new Carrera();
		$this->renderText(json_encode($carrera->getCarreras()));
	}
	//-----------------------------------------------------------------------------------------
	public function getCarrerasFullAction(){
		$this->setResponse('ajax');
		$carrera = new Carrera();
		$vId = $this->getRequestParam('idDecanato');
		$this->renderText(json_encode($carrera->getCarrerasFull($vId)));
	}
	//-----------------------------------------------------------------------------------------
	public function getCarrerasbyDecanatoAction(){
		$this->setResponse('ajax');
		$id = $this->getRequestParam('idDecanato');
		$carrera = new Carrera();
		$this->renderText(json_encode($carrera->getCarrerasbyDecanato($id)));
	}
	//-----------------------------------------------------------------------------------------
	public function getSemestresAction(){
		$id = $this->getRequestParam('idCarrera');
		$this->setResponse('ajax');
		$carrera = new Carrera();
		$this->renderText(json_encode($carrera->getSemestres($id)));

	}
	//-----------------------------------------------------------------------------------------
	public function getCarrerasbyDecanatoLightAction(){
		$id=Session::getData('decanato_id');
		$this->setResponse('ajax');
		$carrera = new Carrera();
		$this->renderText(json_encode($carrera->getCarrerasbyDecanato($id)));
	}
	//-----------------------------------------------------------------------------------------
	public function getDuracionAction(){
		$this->setResponse('ajax');
		$carrera = new Carrera();
		$this->renderText(json_encode($carrera->getDuracionCarrera()));
	}
	//-----------------------------------------------------------------------------------------
	public function getRegimenAction(){
		$this->setResponse('ajax');
		$carrera = new Carrera();
		$this->renderText(json_encode($carrera->getRegimenCarrera()));
	}
	//-----------------------------------------------------------------------------------------
	public function getPlanAction(){
		$this->setResponse('ajax');
		$carrera = new Carrera();
		$this->renderText(json_encode($carrera->getPlanCarrera()));
	}
	//-----------------------------------------------------------------------------------------
	public function buscarAction(){
		$this->setResponse('ajax');
		$carrera = new Carrera();
		$id = $this->getRequestParam('id');
		$this->renderText(json_encode($carrera->buscar($id)));
	}
	//-----------------------------------------------------------------------------------------
}
?>
