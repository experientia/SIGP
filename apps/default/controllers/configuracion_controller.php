<?php
require_once('utilities/constantes.php');
class ConfiguracionController extends ApplicationController {

	protected   $auth;
	protected function initialize(){
		$this->setTemplateAfter("menu");
		$this->auth=Auth::getActiveIdentity();
	}
	public function indexAction(){

	}
	public function gestionarDecanatoAction(){

	}
	public function gestionarUniversidadAction(){

	}
	public function gestionarCoordinacionAction(){

	}
	public function gestionarCarreraAction(){

	}
	public function gestionarDepartamentosAction(){

	}
	public function gestionarTiposPasantiaAction(){

	}
	public function gestionarEstadosAction(){

	}

	public function guardarAction(){
		$resp=array();
		$resp['success']= false;
		$resp['errorMsj']= '';
		$this->setResponse('ajax');
		$catUsuario=$this->auth['categoriaUsuario_id'];
		if ($catUsuario==CAT_USUARIO_COORDINADOR){
			$decanato=Session::getData('decanato_id');
			$pClave = $this->getParametro('pClave', 'string', '');
			$pMaxRecSolicTutor = $this->getParametro('pMaxRecSolicTutor', 'numerico', -1);
			$pMaxSolicOferta = $this->getParametro('pMaxSolicOferta', 'numerico', -1);
			$pMaxSolicTutor = $this->getParametro('pMaxSolicTutor', 'numerico', -1);
			$pRadioInscrip = $this->getParametro('pRadioInscrip', 'string', '');
			$pRadioCalif = $this->getParametro('pRadioCalif', 'string', '');
			$pRadioActCalif = $this->getParametro('pRadioActCalif', 'string', '');
			$pMaxMensajes = $this->getParametro('pMaxMensajes', 'numerico', -1);
			if ($pClave!='' and $pMaxRecSolicTutor!=-1 and $pMaxSolicOferta!=-1 and $pMaxSolicTutor!=-1 and $pRadioInscrip!='' and $pRadioCalif!='' and $pMaxMensajes!=-1 and $pRadioActCalif!=''){
				$username=$this->auth['nombreUsuario'];
				$usuario= new Usuario();
				$successCredenciales= $usuario->validarCredenciales($username,$pClave);
				if ($successCredenciales){
					$configuracion= new Configuracion();
					$aux= $configuracion->guardarConfiguracion($decanato,$pMaxRecSolicTutor,$pMaxSolicOferta,$pMaxSolicTutor,$pRadioInscrip,$pRadioCalif,$pMaxMensajes,$pRadioActCalif);
					if (!$aux['success']){
						$resp['errorMsj']=$aux['errores'];
					}else{
						$resp['success']= true;
					}
				}else{
					$resp['errorMsj']= 'Contrase�a no v�lida.';
				}
			}else{
				$resp['errorMsj']= 'Par�metros incompletos.';
			}
		}else{
			$resp['errorMsj']= 'Ud. no posee la permisologia para realizar esta operaci&oacute;n.';
		}
		$resp['errorMsj']=utf8_encode($resp['errorMsj']);
		$this->renderText(json_encode($resp));
	}

	public function getConfiguracionAction() {
		$resp=array();
		$resp['success']= false;
		$resp['errorMsj']= '';
		$resp['resultado']= array();
		$this->setResponse('ajax');
		$catUsuario=$this->auth['categoriaUsuario_id'];
		if ($catUsuario==CAT_USUARIO_COORDINADOR){
			//$decanato= DECANATO_CIENCIAS;
			$decanato=Session::getData('decanato_id');
			$config = new Configuracion();
			$resp['resultado']=$config->getConfiguracionbyDecanato($decanato);
			if ($resp['resultado']){
				$resp['success']= true;
			}else{
				$resp['errorMsj']= 'No se pueden obtener los datos';
			}
		}else{
			$resp['errorMsj']= 'Ud. no posee la permisologia para realizar esta operaci&oacute;n.';
		}
		$resp['errorMsj']=utf8_encode($resp['errorMsj']);
		$this->renderText(json_encode($resp));
	}

	public function datosAction(){

	}
	public function respaldarAction(){
		$config = new Configuracion();
		header('Content-Description: File Transfer');
		header('Content-Type: application/zip');
		header('Content-Disposition: attachment; filename=backup.sql.gz');
		header('Content-Transfer-Encoding: binary');
		header('Expires: 0');
		header('Cache-Control: must-revalidate');
		header('Pragma: public');
		ob_clean();
		flush();
		$config->backupTables();
	}
	//-----------------------------------------------------------------------------------------
	public function registrarDecanatoAction(){
		$this->setResponse('ajax');
		$decanato = new Decanato();
		$resp = array();

		$vUniverdad = $this->getRequestParam('universidad');
		$vCiudad = $this->getRequestParam('ciudad');
		$vDireccion = utf8_decode($this->getRequestParam('txtDireccion'));
		$vEstado = $this->getRequestParam('estado');
		$vNombre = utf8_decode($this->getRequestParam('txtNombre'));
		$vTelefono = $this->getRequestParam('txtTelefono');
		//$vLogo= $this->getRequestParam('logo');

		$resp['success']= false;
		$catUsuario = $this->auth['categoriaUsuario_id'];
		$resp['usuario'] = $catUsuario;
		if ($catUsuario == CAT_USUARIO_ADMINISTRADOR){
			$resp['success'] = $decanato->registrar($vUniverdad, $vCiudad, $vDireccion, $vEstado, $vNombre, $vTelefono);
			$resp['errorMsj']= 'Registrando Decanato';
		} else{
			$resp['errorMsj']= 'Ud. no posee la permisologia para realizar esta operaci&oacute;n.';
		}

		$this->renderText(json_encode($resp));
	}
	//-----------------------------------------------------------------------------------------
	public function actualizarDecanatoAction(){
		$this->setResponse('ajax');
		$decanato = new Decanato();
		$resp = array();
		$vId = $this->getRequestParam('txtId');
		$vUniverdad = $this->getRequestParam('universidad');
		$vCiudad = $this->getRequestParam('ciudad');
		$vDireccion = utf8_decode($this->getRequestParam('txtDireccion'));
		$vEstado = $this->getRequestParam('estado');
		$vNombre = utf8_decode($this->getRequestParam('txtNombre'));
		$vTelefono = $this->getRequestParam('txtTelefono');
		//$vLogo= $this->getRequestParam('logo');

		$resp['success']= false;
		$catUsuario = $this->auth['categoriaUsuario_id'];
		if ($catUsuario == CAT_USUARIO_ADMINISTRADOR){
			$resp['success'] = $decanato->actualizar($vId, $vUniverdad, $vCiudad, $vDireccion, $vEstado, $vNombre, $vTelefono);
			$resp['errorMsj']= 'Actualizando Decanato';
		} else{
			$resp['errorMsj']= 'Ud. no posee la permisologia para realizar esta operaci&oacute;n.';
		}

		$this->renderText(json_encode($resp));
	}

	//-----------------------------------------------------------------------------------------
	public function eliminarDecanatoAction(){
		$this->setResponse('ajax');
		$decanato = new Decanato();
		$resp = array();
		$vId = $this->getRequestParam('txtId');

		$resp['success']= false;
		$catUsuario = $this->auth['categoriaUsuario_id'];

		if ($catUsuario == CAT_USUARIO_ADMINISTRADOR){
			$resp['id']= $vId;
			$resp['success'] = $decanato->eliminar($vId);
			$resp['errorMsj']= 'Eliminado Decanato';
		} else{
			$resp['errorMsj']= 'Ud. no posee la permisologia para realizar esta operaci&oacute;n.';
		}

		$this->renderText(json_encode($resp));
	}
	//-----------------------------------------------------------------------------------------
	public function registrarUniversidadAction(){
		$this->setResponse('ajax');
		$universidad = new Universidad();
		$resp = array();
		$vCiudad = $this->getRequestParam('ciudad');
		$vDireccion = utf8_decode($this->getRequestParam('txtDireccion'));
		$vEstado = $this->getRequestParam('estado');
		$vNombre = utf8_decode($this->getRequestParam('txtNombre'));
		$vTelefono = $this->getRequestParam('txtTelefono');
		//$vLogo= $this->getRequestParam('logo');

		$resp['success']= false;
		$catUsuario = $this->auth['categoriaUsuario_id'];
		$resp['usuario'] = $catUsuario;
		if ($catUsuario == CAT_USUARIO_ADMINISTRADOR){
			$resp['success'] = $universidad->registrar($vCiudad, $vDireccion, $vEstado, $vNombre, $vTelefono);
			$resp['errorMsj']= 'Registrando Universidad';
		} else{
			$resp['errorMsj']= 'Ud. no posee la permisologia para realizar esta operaci&oacute;n.';
		}

		$this->renderText(json_encode($resp));
	}
	//-----------------------------------------------------------------------------------------
	public function actualizarUniversidadAction(){
		$this->setResponse('ajax');
		$universidad = new Universidad();
		$resp = array();
		$vId = $this->getRequestParam('txtId');
		$vCiudad = $this->getRequestParam('ciudad');
		$vDireccion = utf8_decode($this->getRequestParam('txtDireccion'));
		$vEstado = $this->getRequestParam('estado');
		$vNombre = utf8_decode($this->getRequestParam('txtNombre'));
		$vTelefono = $this->getRequestParam('txtTelefono');
		//$vLogo= $this->getRequestParam('logo');

		$resp['success']= false;
		$catUsuario = $this->auth['categoriaUsuario_id'];
		if ($catUsuario == CAT_USUARIO_ADMINISTRADOR){
			$resp['success'] = $universidad->actualizar($vId, $vCiudad, $vDireccion, $vEstado, $vNombre, $vTelefono);
			$resp['errorMsj']= 'Actualizando Decanato';
		} else{
			$resp['errorMsj']= 'Ud. no posee la permisologia para realizar esta operaci&oacute;n.';
		}

		$this->renderText(json_encode($resp));
	}
	//-----------------------------------------------------------------------------------------
	public function actualizarCoordinacionAction(){
		$this->setResponse('ajax');
		$coordinacion = new Coordinacion();
		$resp = array();
		$vId = $this->getRequestParam('txtId');
		$vEmpleado = $this->getRequestParam('empleado');
		$vDireccion = utf8_decode($this->getRequestParam('txtDireccion'));
		$vDecanato = $this->getRequestParam('decanato');
		$vDescripcion = utf8_decode($this->getRequestParam('txtNombre'));
		$vTelefono = $this->getRequestParam('txtTelefono');
		$vEmail= $this->getRequestParam('txtEmail');

		$resp['success']= false;
		$catUsuario = $this->auth['categoriaUsuario_id'];
		if ($catUsuario == CAT_USUARIO_ADMINISTRADOR){
			$resp['success'] = $coordinacion->actualizarCoordinacion($vId, $vDescripcion, $vDireccion, $vDecanato, $vEmpleado, $vTelefono, $vEmail);
			$resp['errorMsj']= 'Actualizando Coordinacion';
		} else{
			$resp['errorMsj']= 'Ud. no posee la permisologia para realizar esta operaci&oacute;n.';
		}

		$this->renderText(json_encode($resp));
	}
	//-----------------------------------------------------------------------------------------
	public function registrarCoordinacionAction(){
		$this->setResponse('ajax');
		$coordinacion = new Coordinacion();
		$resp = array();
		$vEmpleado = $this->getRequestParam('empleado');
		$vDireccion = utf8_decode($this->getRequestParam('txtDireccion'));
		$vDecanato = $this->getRequestParam('decanato');
		$vDescripcion = utf8_decode($this->getRequestParam('txtNombre'));
		$vTelefono = $this->getRequestParam('txtTelefono');
		$vEmail= $this->getRequestParam('txtEmail');

		$resp['success']= false;
		$catUsuario = $this->auth['categoriaUsuario_id'];
		if ($catUsuario == CAT_USUARIO_ADMINISTRADOR){
			$resp['success'] = $coordinacion->registrar($vDescripcion, $vDireccion, $vDecanato, $vEmpleado, $vTelefono, $vEmail);
			$resp['errorMsj']= 'Registrando Coordinacion';
		} else{
			$resp['errorMsj']= 'Ud. no posee la permisologia para realizar esta operaci&oacute;n.';
		}

		$this->renderText(json_encode($resp));
	}
	//-----------------------------------------------------------------------------------------
	public function eliminarCoordinacionAction(){
		$this->setResponse('ajax');
		$coordinacion = new Coordinacion();
		$resp = array();
		$vId = $this->getRequestParam('txtId');

		$resp['success']= false;
		$catUsuario = $this->auth['categoriaUsuario_id'];

		if ($catUsuario == CAT_USUARIO_ADMINISTRADOR){
			$resp['id']= $vId;
			$resp['success'] = $coordinacion->eliminar($vId);
			$resp['errorMsj']= 'Eliminado Decanato';
		} else{
			$resp['errorMsj']= 'Ud. no posee la permisologia para realizar esta operaci&oacute;n.';
		}

		$this->renderText(json_encode($resp));
	}
	//-----------------------------------------------------------------------------------------
	public function eliminarCarreraAction(){
		$this->setResponse('ajax');
		$carrera = new Carrera();
		$resp = array();
		$vId = $this->getRequestParam('txtId');

		$resp['success']= false;
		$catUsuario = $this->auth['categoriaUsuario_id'];

		if ($catUsuario == CAT_USUARIO_ADMINISTRADOR){
			$resp['id']= $vId;
			$resp['success'] = $carrera->eliminar($vId);
			$resp['errorMsj']= 'Eliminada Carrera';
		} else{
			$resp['errorMsj']= 'Ud. no posee la permisologia para realizar esta operaci&oacute;n.';
		}

		$this->renderText(json_encode($resp));
	}
	//-----------------------------------------------------------------------------------------
	public function registrarCarreraAction(){
		$this->setResponse('ajax');
		$carrera = new Carrera();
		$resp = array();
		$vDecanatoId = $this->getRequestParam('decanato');
		$vNombre = utf8_decode($this->getRequestParam('txtNombre'));
		$vRegimen = $this->getRequestParam('regimen');
		$vDuracion = utf8_decode($this->getRequestParam('duracion'));
		$vPlan = $this->getRequestParam('plan');

		$resp['success']= false;
		$catUsuario = $this->auth['categoriaUsuario_id'];
		if ($catUsuario == CAT_USUARIO_ADMINISTRADOR){
			$resp['success'] = $carrera->registrar($vDecanatoId, $vNombre, $vRegimen, $vDuracion, $vPlan);
			$resp['errorMsj']= 'Registrando Carrera';
		} else{
			$resp['errorMsj']= 'Ud. no posee la permisologia para realizar esta operaci&oacute;n.';
		}

		$this->renderText(json_encode($resp));
	}
	//-----------------------------------------------------------------------------------------
	public function actualizarCarreraAction(){
		$this->setResponse('ajax');
		$carrera = new Carrera();
		$resp = array();
		$vId = $this->getRequestParam('txtId');
		$vDecanatoId = $this->getRequestParam('decanato');
		$vNombre = utf8_decode($this->getRequestParam('txtNombre'));
		$vRegimen = $this->getRequestParam('regimen');
		$vDuracion = utf8_decode($this->getRequestParam('duracion'));
		$vPlan = $this->getRequestParam('plan');

		$resp['success']= false;
		$catUsuario = $this->auth['categoriaUsuario_id'];
		if ($catUsuario == CAT_USUARIO_ADMINISTRADOR){
			$resp['success'] = $carrera->actualizar($vId, $vDecanatoId, $vNombre, $vRegimen, $vDuracion, $vPlan);
			$resp['errorMsj']= 'Actualizando Carrera';
		} else{
			$resp['errorMsj']= 'Ud. no posee la permisologia para realizar esta operaci&oacute;n.';
		}

		$this->renderText(json_encode($resp));
	}
	//-----------------------------------------------------------------------------------------
	public function eliminarDepartamentoAction(){
		$this->setResponse('ajax');
		$departamento = new Departamento();
		$resp = array();
		$vId = $this->getRequestParam('txtId');

		$resp['success']= false;
		$catUsuario = $this->auth['categoriaUsuario_id'];

		if ($catUsuario == CAT_USUARIO_ADMINISTRADOR){
			$resp['id']= $vId;
			$resp['success'] = $departamento->eliminar($vId);
			$resp['errorMsj']= 'Eliminado Departamento';
		} else{
			$resp['errorMsj']= 'Ud. no posee la permisologia para realizar esta operaci&oacute;n.';
		}

		$this->renderText(json_encode($resp));
	}
	//-----------------------------------------------------------------------------------------
	public function registrarDepartamentoAction(){
		$this->setResponse('ajax');
		$departamento = new Departamento();
		$resp = array();
		$vDecanatoId = $this->getRequestParam('decanato');
		$vDescripcion = utf8_decode($this->getRequestParam('txtDescripcion'));

		$resp['success']= false;
		$catUsuario = $this->auth['categoriaUsuario_id'];
		if ($catUsuario == CAT_USUARIO_ADMINISTRADOR){
			$resp['success'] = $departamento->registrar($vDecanatoId, $vDescripcion);
			$resp['errorMsj']= 'Registrando Departamento';
		} else{
			$resp['errorMsj']= 'Ud. no posee la permisologia para realizar esta operaci&oacute;n.';
		}

		$this->renderText(json_encode($resp));
	}
	//-----------------------------------------------------------------------------------------
	public function actualizarDepartamentoAction(){
		$this->setResponse('ajax');
		$departamento = new Departamento();
		$resp = array();
		$vId = $this->getRequestParam('txtId');
		$vDecanatoId = $this->getRequestParam('decanato');
		$vDescripcion = utf8_decode($this->getRequestParam('txtDescripcion'));

		$resp['success']= false;
		$catUsuario = $this->auth['categoriaUsuario_id'];
		if ($catUsuario == CAT_USUARIO_ADMINISTRADOR){
			$resp['success'] = $departamento->actualizar($vId, $vDecanatoId, $vDescripcion);
			$resp['errorMsj']= 'Actualizando Departamento';
		} else{
			$resp['errorMsj']= 'Ud. no posee la permisologia para realizar esta operaci&oacute;n.';
		}

		$this->renderText(json_encode($resp));
	}
	//-----------------------------------------------------------------------------------------
	public function eliminarTipoPasantiaAction(){
		$this->setResponse('ajax');
		$tipo = new TipoPasantia();
		$resp = array();
		$vId = $this->getRequestParam('txtId');

		$resp['success']= false;
		$catUsuario = $this->auth['categoriaUsuario_id'];

		if ($catUsuario == CAT_USUARIO_ADMINISTRADOR){
			$resp['id']= $vId;
			$resp['success'] = $tipo->eliminar($vId);
			$resp['errorMsj']= 'Eliminado Tipo de Pasantia';
		} else{
			$resp['errorMsj']= 'Ud. no posee la permisologia para realizar esta operaci&oacute;n.';
		}

		$this->renderText(json_encode($resp));
	}
	//-----------------------------------------------------------------------------------------
	public function registrarTipoPasantiaAction(){
		$this->setResponse('ajax');
		$tipo = new TipoPasantia();
		$resp = array();
		$vDescripcion = utf8_decode($this->getRequestParam('txtDescripcion'));

		$resp['success']= false;
		$catUsuario = $this->auth['categoriaUsuario_id'];
		if ($catUsuario == CAT_USUARIO_ADMINISTRADOR){
			$resp['success'] = $tipo->registrar($vDescripcion);
			$resp['errorMsj']= 'Registrando Tipo de Pasantia';
		} else{
			$resp['errorMsj']= 'Ud. no posee la permisologia para realizar esta operaci&oacute;n.';
		}

		$this->renderText(json_encode($resp));
	}
	//-----------------------------------------------------------------------------------------
	public function actualizarTipoPasantiaAction(){
		$this->setResponse('ajax');
		$tipo = new TipoPasantia();
		$resp = array();
		$vId = $this->getRequestParam('txtId');
		$vDescripcion = utf8_decode($this->getRequestParam('txtDescripcion'));

		$resp['success']= false;
		$catUsuario = $this->auth['categoriaUsuario_id'];
		if ($catUsuario == CAT_USUARIO_ADMINISTRADOR){
			$resp['success'] = $tipo->actualizar($vId, $vDescripcion);
			$resp['errorMsj']= 'Actualizando Tipo de Pasantia';
		} else{
			$resp['errorMsj']= 'Ud. no posee la permisologia para realizar esta operaci&oacute;n.';
		}

		$this->renderText(json_encode($resp));
	}
//-----------------------------------------------------------------------------------------
	public function eliminarEstadoAction(){
		$this->setResponse('ajax');
		$estado = new Estado();
		$resp = array();
		$vId = $this->getRequestParam('txtId');

		$resp['success']= false;
		$catUsuario = $this->auth['categoriaUsuario_id'];

		if ($catUsuario == CAT_USUARIO_ADMINISTRADOR){
			$resp['id']= $vId;
			$resp['success'] = $estado->eliminar($vId);
			$resp['errorMsj']= 'Eliminado Estado de Venezuela';
		} else{
			$resp['errorMsj']= 'Ud. no posee la permisologia para realizar esta operaci&oacute;n.';
		}

		$this->renderText(json_encode($resp));
	}
	//-----------------------------------------------------------------------------------------
	public function registrarEstadoAction(){
		$this->setResponse('ajax');
		$estado = new Estado();
		$resp = array();
		$vNombre = utf8_decode($this->getRequestParam('txtDescripcion'));

		$resp['success']= false;
		$catUsuario = $this->auth['categoriaUsuario_id'];
		if ($catUsuario == CAT_USUARIO_ADMINISTRADOR){
			$resp['success'] = $estado->registrar($vNombre);
			$resp['errorMsj']= 'Registrando Estado de Venezuela';
		} else{
			$resp['errorMsj']= 'Ud. no posee la permisologia para realizar esta operaci&oacute;n.';
		}

		$this->renderText(json_encode($resp));
	}
	//-----------------------------------------------------------------------------------------
	public function actualizarEstadoAction(){
		$this->setResponse('ajax');
		$estado = new Estado();
		$resp = array();
		$vId = $this->getRequestParam('txtId');
		$vNombre = utf8_decode($this->getRequestParam('txtDescripcion'));

		$resp['success']= false;
		$catUsuario = $this->auth['categoriaUsuario_id'];
		if ($catUsuario == CAT_USUARIO_ADMINISTRADOR){
			$resp['success'] = $estado->actualizar($vId, $vNombre);
			$resp['errorMsj']= 'Actualizando Estado de Venezuela';
		} else{
			$resp['errorMsj']= 'Ud. no posee la permisologia para realizar esta operaci&oacute;n.';
		}

		$this->renderText(json_encode($resp));
	}
	//-----------------------------------------------------------------------------------------
}
?>
