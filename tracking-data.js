window.TRACKING_DATA = {
  "version": 1,
  "baseline": 495,
  "technicalEndpoint": "GET /",
  "groups": [
    {
      "name": "Autenticación",
      "subgroups": [
        {
          "name": "Login",
          "endpoints": [
            {
              "method": "POST",
              "path": "/api/auth/login",
              "id": "ep-1"
            }
          ]
        },
        {
          "name": "Refresh",
          "endpoints": [
            {
              "method": "POST",
              "path": "/api/auth/refresh",
              "id": "ep-2"
            }
          ]
        },
        {
          "name": "Logout",
          "endpoints": [
            {
              "method": "POST",
              "path": "/api/auth/logout",
              "id": "ep-3"
            }
          ]
        }
      ]
    },
    {
      "name": "Dashboard",
      "subgroups": [
        {
          "name": "Vista principal",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/dashboard",
              "id": "ep-4"
            }
          ]
        },
        {
          "name": "Indicadores",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/dashboard/resumen",
              "id": "ep-5"
            },
            {
              "method": "GET",
              "path": "/api/dashboard/actividad-semana",
              "id": "ep-6"
            },
            {
              "method": "GET",
              "path": "/api/dashboard/rechazos/resumen",
              "id": "ep-7"
            },
            {
              "method": "GET",
              "path": "/api/dashboard/rechazos/tipos",
              "id": "ep-8"
            }
          ]
        },
        {
          "name": "Búsqueda de órdenes",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/dashboard/ordenes/buscar",
              "id": "ep-9"
            }
          ]
        }
      ]
    },
    {
      "name": "Agenda",
      "subgroups": [
        {
          "name": "Configuración",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/agenda/config",
              "id": "ep-10"
            },
            {
              "method": "POST",
              "path": "/api/agenda/config",
              "id": "ep-11"
            },
            {
              "method": "GET",
              "path": "/api/agenda/config/<config_id>",
              "id": "ep-12"
            },
            {
              "method": "PUT",
              "path": "/api/agenda/config/<config_id>",
              "id": "ep-13"
            },
            {
              "method": "PATCH",
              "path": "/api/agenda/config/<config_id>",
              "id": "ep-14"
            },
            {
              "method": "PATCH",
              "path": "/api/agenda/config/<config_id>/activar",
              "id": "ep-15"
            },
            {
              "method": "PATCH",
              "path": "/api/agenda/config/<config_id>/desactivar",
              "id": "ep-16"
            }
          ]
        },
        {
          "name": "Horarios",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/agenda/config/<config_id>/horarios",
              "id": "ep-17"
            },
            {
              "method": "POST",
              "path": "/api/agenda/config/<config_id>/horarios",
              "id": "ep-18"
            },
            {
              "method": "PUT",
              "path": "/api/agenda/horarios/<horario_id>",
              "id": "ep-19"
            },
            {
              "method": "PATCH",
              "path": "/api/agenda/horarios/<horario_id>",
              "id": "ep-20"
            },
            {
              "method": "DELETE",
              "path": "/api/agenda/horarios/<horario_id>",
              "id": "ep-21"
            }
          ]
        },
        {
          "name": "Días especiales",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/agenda/dias-especiales",
              "id": "ep-22"
            },
            {
              "method": "POST",
              "path": "/api/agenda/dias-especiales",
              "id": "ep-23"
            },
            {
              "method": "PUT",
              "path": "/api/agenda/dias-especiales/<dia_id>",
              "id": "ep-24"
            },
            {
              "method": "PATCH",
              "path": "/api/agenda/dias-especiales/<dia_id>",
              "id": "ep-25"
            },
            {
              "method": "DELETE",
              "path": "/api/agenda/dias-especiales/<dia_id>",
              "id": "ep-26"
            }
          ]
        },
        {
          "name": "Bloqueos",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/agenda/bloqueos",
              "id": "ep-27"
            },
            {
              "method": "POST",
              "path": "/api/agenda/bloqueos",
              "id": "ep-28"
            },
            {
              "method": "PUT",
              "path": "/api/agenda/bloqueos/<bloqueo_id>",
              "id": "ep-29"
            },
            {
              "method": "PATCH",
              "path": "/api/agenda/bloqueos/<bloqueo_id>",
              "id": "ep-30"
            },
            {
              "method": "DELETE",
              "path": "/api/agenda/bloqueos/<bloqueo_id>",
              "id": "ep-31"
            }
          ]
        },
        {
          "name": "Slots y disponibilidad",
          "endpoints": [
            {
              "method": "POST",
              "path": "/api/agenda/slots/generar",
              "id": "ep-32"
            },
            {
              "method": "GET",
              "path": "/api/agenda/slots",
              "id": "ep-33"
            },
            {
              "method": "GET",
              "path": "/api/agenda/disponibilidad",
              "id": "ep-34"
            },
            {
              "method": "PATCH",
              "path": "/api/agenda/slots/<slot_id>/estado",
              "id": "ep-35"
            }
          ]
        },
        {
          "name": "Citas",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/agenda",
              "id": "ep-36"
            },
            {
              "method": "POST",
              "path": "/api/agenda",
              "id": "ep-37"
            },
            {
              "method": "GET",
              "path": "/api/agenda/buscar-codigo/<codigo>",
              "id": "ep-38"
            },
            {
              "method": "GET",
              "path": "/api/agenda/<agenda_id>",
              "id": "ep-39"
            },
            {
              "method": "PUT",
              "path": "/api/agenda/<agenda_id>",
              "id": "ep-40"
            },
            {
              "method": "PATCH",
              "path": "/api/agenda/<agenda_id>",
              "id": "ep-41"
            },
            {
              "method": "PATCH",
              "path": "/api/agenda/<agenda_id>/confirmar",
              "id": "ep-42"
            },
            {
              "method": "PATCH",
              "path": "/api/agenda/<agenda_id>/no-asiste",
              "id": "ep-43"
            },
            {
              "method": "PATCH",
              "path": "/api/agenda/<agenda_id>/en-atencion",
              "id": "ep-44"
            },
            {
              "method": "PATCH",
              "path": "/api/agenda/<agenda_id>/atendida",
              "id": "ep-45"
            },
            {
              "method": "PATCH",
              "path": "/api/agenda/<agenda_id>/cancelar",
              "id": "ep-46"
            },
            {
              "method": "POST",
              "path": "/api/agenda/<agenda_id>/reagendar",
              "id": "ep-47"
            }
          ]
        },
        {
          "name": "Prestaciones de cita",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/agenda/<agenda_id>/prestaciones",
              "id": "ep-48"
            },
            {
              "method": "POST",
              "path": "/api/agenda/<agenda_id>/prestaciones",
              "id": "ep-49"
            },
            {
              "method": "PUT",
              "path": "/api/agenda/<agenda_id>/prestaciones",
              "id": "ep-50"
            },
            {
              "method": "DELETE",
              "path": "/api/agenda/prestaciones/<prestacion_id>",
              "id": "ep-51"
            }
          ]
        },
        {
          "name": "Catálogos",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/agenda/catalogo/prestaciones",
              "id": "ep-52"
            },
            {
              "method": "GET",
              "path": "/api/agenda/catalogo/demograficos",
              "id": "ep-53"
            },
            {
              "method": "GET",
              "path": "/api/agenda/catalogo/demograficos-efectivos",
              "id": "ep-54"
            }
          ]
        },
        {
          "name": "Recepción",
          "endpoints": [
            {
              "method": "POST",
              "path": "/api/agenda/<agenda_id>/recibir",
              "id": "ep-55"
            },
            {
              "method": "PATCH",
              "path": "/api/agenda/<agenda_id>/recibir",
              "id": "ep-56"
            },
            {
              "method": "GET",
              "path": "/api/agenda/<agenda_id>/contexto-ingreso",
              "id": "ep-57"
            },
            {
              "method": "POST",
              "path": "/api/agenda/<agenda_id>/confirmar-ingreso",
              "id": "ep-58"
            }
          ]
        },
        {
          "name": "Logs",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/agenda/logs",
              "id": "ep-59"
            }
          ]
        }
      ]
    },
    {
      "name": "Pacientes y ficha clínica",
      "subgroups": [
        {
          "name": "Pacientes",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/pacientes",
              "id": "ep-60"
            },
            {
              "method": "GET",
              "path": "/api/pacientes/<id>",
              "id": "ep-61"
            },
            {
              "method": "POST",
              "path": "/api/pacientes",
              "id": "ep-62"
            },
            {
              "method": "PUT",
              "path": "/api/pacientes/<id>",
              "id": "ep-63"
            },
            {
              "method": "PATCH",
              "path": "/api/pacientes/<id>/activar",
              "id": "ep-64"
            },
            {
              "method": "PATCH",
              "path": "/api/pacientes/<id>/desactivar",
              "id": "ep-65"
            }
          ]
        },
        {
          "name": "Tutores",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/tutores",
              "id": "ep-66"
            },
            {
              "method": "GET",
              "path": "/api/tutores/<id>",
              "id": "ep-67"
            },
            {
              "method": "POST",
              "path": "/api/tutores",
              "id": "ep-68"
            },
            {
              "method": "PUT",
              "path": "/api/tutores/<id>",
              "id": "ep-69"
            },
            {
              "method": "PATCH",
              "path": "/api/tutores/<id>/activar",
              "id": "ep-70"
            },
            {
              "method": "PATCH",
              "path": "/api/tutores/<id>/desactivar",
              "id": "ep-71"
            }
          ]
        },
        {
          "name": "Vacunas",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/vacunas",
              "id": "ep-72"
            },
            {
              "method": "GET",
              "path": "/api/vacunas/<id>",
              "id": "ep-73"
            },
            {
              "method": "POST",
              "path": "/api/vacunas",
              "id": "ep-74"
            },
            {
              "method": "PUT",
              "path": "/api/vacunas/<id>",
              "id": "ep-75"
            },
            {
              "method": "PATCH",
              "path": "/api/vacunas/<id>/activar",
              "id": "ep-76"
            },
            {
              "method": "PATCH",
              "path": "/api/vacunas/<id>/desactivar",
              "id": "ep-77"
            }
          ]
        },
        {
          "name": "Ficha clínica de orden",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/ficha/resolve",
              "id": "ep-78"
            },
            {
              "method": "GET",
              "path": "/api/ficha/principal",
              "id": "ep-79"
            },
            {
              "method": "GET",
              "path": "/api/ficha/<ficha_id>",
              "id": "ep-80"
            },
            {
              "method": "GET",
              "path": "/api/ficha/numero/<ficha_numero>",
              "id": "ep-81"
            },
            {
              "method": "GET",
              "path": "/api/ficha/paciente/<paciente_id>",
              "id": "ep-82"
            },
            {
              "method": "GET",
              "path": "/api/ficha/establecimiento",
              "id": "ep-83"
            },
            {
              "method": "POST",
              "path": "/api/ficha",
              "id": "ep-84"
            },
            {
              "method": "POST",
              "path": "/api/ficha/resolve-or-create",
              "id": "ep-85"
            },
            {
              "method": "PUT",
              "path": "/api/ficha/<ficha_id>",
              "id": "ep-86"
            },
            {
              "method": "PATCH",
              "path": "/api/ficha/<ficha_id>/cerrar",
              "id": "ep-87"
            },
            {
              "method": "PATCH",
              "path": "/api/ficha/<ficha_id>/reactivar",
              "id": "ep-88"
            }
          ]
        },
        {
          "name": "Ficha clínica de paciente",
          "endpoints": [
            {
              "method": "POST",
              "path": "/api/fichaclinica/formato/preview",
              "id": "ep-89"
            },
            {
              "method": "GET",
              "path": "/api/fichaclinica/correlativos",
              "id": "ep-90"
            },
            {
              "method": "GET",
              "path": "/api/fichaclinica/correlativos/resolve",
              "id": "ep-91"
            },
            {
              "method": "GET",
              "path": "/api/fichaclinica",
              "id": "ep-92"
            },
            {
              "method": "GET",
              "path": "/api/fichaclinica/resolve",
              "id": "ep-93"
            },
            {
              "method": "POST",
              "path": "/api/fichaclinica/resolve-or-create",
              "id": "ep-94"
            },
            {
              "method": "GET",
              "path": "/api/fichaclinica/paciente/<paciente_id>",
              "id": "ep-95"
            },
            {
              "method": "GET",
              "path": "/api/fichaclinica/establecimiento",
              "id": "ep-96"
            },
            {
              "method": "GET",
              "path": "/api/fichaclinica/establecimiento/<establecimiento_id>",
              "id": "ep-97"
            },
            {
              "method": "GET",
              "path": "/api/fichaclinica/numero/<ficha_numero>",
              "id": "ep-98"
            },
            {
              "method": "GET",
              "path": "/api/fichaclinica/<ficha_id>",
              "id": "ep-99"
            },
            {
              "method": "POST",
              "path": "/api/fichaclinica",
              "id": "ep-100"
            },
            {
              "method": "PUT",
              "path": "/api/fichaclinica/<ficha_id>",
              "id": "ep-101"
            },
            {
              "method": "PATCH",
              "path": "/api/fichaclinica/<ficha_id>/cerrar",
              "id": "ep-102"
            },
            {
              "method": "PATCH",
              "path": "/api/fichaclinica/<ficha_id>/reactivar",
              "id": "ep-103"
            },
            {
              "method": "PATCH",
              "path": "/api/fichaclinica/<ficha_id>/principal",
              "id": "ep-104"
            },
            {
              "method": "DELETE",
              "path": "/api/fichaclinica/<ficha_id>",
              "id": "ep-105"
            }
          ]
        }
      ]
    },
    {
      "name": "Órdenes y rechazos",
      "subgroups": [
        {
          "name": "Órdenes",
          "endpoints": [
            {
              "method": "POST",
              "path": "/api/ordenes",
              "id": "ep-106"
            },
            {
              "method": "PATCH",
              "path": "/api/ordenes/tubo/<tubo_id>/estado",
              "id": "ep-107"
            },
            {
              "method": "PATCH",
              "path": "/api/ordenes/prueba/<detalle_id>/estado",
              "id": "ep-108"
            },
            {
              "method": "PATCH",
              "path": "/api/ordenes/prueba/<detalle_id>/resultado",
              "id": "ep-109"
            },
            {
              "method": "PATCH",
              "path": "/api/ordenes/prueba/<detalle_id>/validar",
              "id": "ep-110"
            },
            {
              "method": "PATCH",
              "path": "/api/ordenes/prueba/<detalle_id>/cancelar",
              "id": "ep-111"
            },
            {
              "method": "POST",
              "path": "/api/ordenes/<orden_id>/pruebas/agregar",
              "id": "ep-112"
            },
            {
              "method": "DELETE",
              "path": "/api/ordenes/<orden_id>/pruebas/<detalle_id>",
              "id": "ep-113"
            },
            {
              "method": "POST",
              "path": "/api/ordenes/<orden_id>/imprimir",
              "id": "ep-114"
            },
            {
              "method": "PATCH",
              "path": "/api/ordenes/<orden_id>/archivar",
              "id": "ep-115"
            },
            {
              "method": "GET",
              "path": "/api/ordenes/historico",
              "id": "ep-116"
            },
            {
              "method": "POST",
              "path": "/api/ordenes/historico/procesar-vencidas",
              "id": "ep-117"
            },
            {
              "method": "GET",
              "path": "/api/ordenes/historico/<orden_id>",
              "id": "ep-118"
            },
            {
              "method": "GET",
              "path": "/api/ordenes/<orden_id>",
              "id": "ep-119"
            },
            {
              "method": "GET",
              "path": "/api/ordenes/<orden_id>/full",
              "id": "ep-120"
            },
            {
              "method": "GET",
              "path": "/api/ordenes",
              "id": "ep-121"
            },
            {
              "method": "GET",
              "path": "/api/ordenes/bandeja/pendientes-tm",
              "id": "ep-122"
            },
            {
              "method": "GET",
              "path": "/api/ordenes/bandeja/pendientes-recepcion",
              "id": "ep-123"
            },
            {
              "method": "GET",
              "path": "/api/ordenes/bandeja/en-proceso",
              "id": "ep-124"
            },
            {
              "method": "GET",
              "path": "/api/ordenes/bandeja/pendientes-validacion",
              "id": "ep-125"
            },
            {
              "method": "GET",
              "path": "/api/ordenes/bandeja/parciales",
              "id": "ep-126"
            },
            {
              "method": "GET",
              "path": "/api/ordenes/bandeja/finalizadas",
              "id": "ep-127"
            },
            {
              "method": "POST",
              "path": "/api/ordenes/<orden_id>/publicar",
              "id": "ep-128"
            },
            {
              "method": "PATCH",
              "path": "/api/ordenes/<orden_id>/publicar/desactivar",
              "id": "ep-129"
            },
            {
              "method": "GET",
              "path": "/api/ordenes/public/<token>",
              "id": "ep-130"
            }
          ]
        },
        {
          "name": "Rechazos clínicos",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/rechazos/motivos",
              "id": "ep-131"
            },
            {
              "method": "GET",
              "path": "/api/rechazos/motivos/<id>",
              "id": "ep-132"
            },
            {
              "method": "POST",
              "path": "/api/rechazos/motivos",
              "id": "ep-133"
            },
            {
              "method": "PUT",
              "path": "/api/rechazos/motivos/<id>",
              "id": "ep-134"
            },
            {
              "method": "PATCH",
              "path": "/api/rechazos/motivos/<id>/activar",
              "id": "ep-135"
            },
            {
              "method": "PATCH",
              "path": "/api/rechazos/motivos/<id>/desactivar",
              "id": "ep-136"
            },
            {
              "method": "GET",
              "path": "/api/rechazos",
              "id": "ep-137"
            },
            {
              "method": "GET",
              "path": "/api/rechazos/<id>",
              "id": "ep-138"
            },
            {
              "method": "POST",
              "path": "/api/rechazos",
              "id": "ep-139"
            },
            {
              "method": "PUT",
              "path": "/api/rechazos/<id>",
              "id": "ep-140"
            },
            {
              "method": "PATCH",
              "path": "/api/rechazos/<id>/anular",
              "id": "ep-141"
            },
            {
              "method": "PATCH",
              "path": "/api/rechazos/<id>/reactivar",
              "id": "ep-142"
            },
            {
              "method": "GET",
              "path": "/api/rechazos/bloqueo",
              "id": "ep-143"
            },
            {
              "method": "POST",
              "path": "/api/rechazos/prueba/<detalle_id>",
              "id": "ep-144"
            },
            {
              "method": "POST",
              "path": "/api/rechazos/tubo/<orden_tubo_id>",
              "id": "ep-145"
            },
            {
              "method": "PATCH",
              "path": "/api/rechazos/prueba/<detalle_id>",
              "id": "ep-146"
            },
            {
              "method": "POST",
              "path": "/api/rechazos/prueba/<detalle_id>/repetir",
              "id": "ep-147"
            },
            {
              "method": "GET",
              "path": "/api/rechazos/orden/<orden_id>/historial",
              "id": "ep-148"
            },
            {
              "method": "PATCH",
              "path": "/api/rechazos/prueba/<detalle_id>/anular-ultimo",
              "id": "ep-149"
            },
            {
              "method": "GET",
              "path": "/api/rechazos/paciente/<paciente_id>",
              "id": "ep-150"
            },
            {
              "method": "GET",
              "path": "/api/rechazos/",
              "id": "ep-151"
            },
            {
              "method": "POST",
              "path": "/api/rechazos/orden/<orden_id>",
              "id": "ep-152"
            },
            {
              "method": "GET",
              "path": "/api/rechazos/motivos/<motivo_id>",
              "id": "ep-153"
            }
          ]
        }
      ]
    },
    {
      "name": "Laboratorio",
      "subgroups": [
        {
          "name": "Bandeja y búsqueda",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/laboratorio/version",
              "id": "ep-154"
            },
            {
              "method": "GET",
              "path": "/api/laboratorio/busqueda-global",
              "id": "ep-155"
            },
            {
              "method": "GET",
              "path": "/api/laboratorio/bandeja",
              "id": "ep-156"
            },
            {
              "method": "GET",
              "path": "/api/laboratorio/bandeja/areas",
              "id": "ep-157"
            },
            {
              "method": "GET",
              "path": "/api/laboratorio/ordenes/<orden_id>",
              "id": "ep-158"
            },
            {
              "method": "GET",
              "path": "/api/laboratorio/pacientes/<paciente_id>/historial",
              "id": "ep-159"
            }
          ]
        },
        {
          "name": "Resultados y estados",
          "endpoints": [
            {
              "method": "PATCH",
              "path": "/api/laboratorio/pruebas/<detalle_id>/resultado",
              "id": "ep-160"
            },
            {
              "method": "PATCH",
              "path": "/api/laboratorio/pruebas/<detalle_id>/estado",
              "id": "ep-161"
            },
            {
              "method": "PATCH",
              "path": "/api/laboratorio/tubos/<tubo_id>/estado",
              "id": "ep-162"
            }
          ]
        },
        {
          "name": "Validación",
          "endpoints": [
            {
              "method": "PATCH",
              "path": "/api/laboratorio/pruebas/<detalle_id>/validar",
              "id": "ep-163"
            },
            {
              "method": "PATCH",
              "path": "/api/laboratorio/ordenes/<orden_id>/validar",
              "id": "ep-164"
            },
            {
              "method": "PATCH",
              "path": "/api/laboratorio/pruebas/desvalidar",
              "id": "ep-165"
            }
          ]
        },
        {
          "name": "Gestión de pruebas y rechazos",
          "endpoints": [
            {
              "method": "POST",
              "path": "/api/laboratorio/ordenes/<orden_id>/pruebas",
              "id": "ep-166"
            },
            {
              "method": "DELETE",
              "path": "/api/laboratorio/ordenes/<orden_id>/pruebas/<detalle_id>",
              "id": "ep-167"
            },
            {
              "method": "POST",
              "path": "/api/laboratorio/pruebas/<detalle_id>/rechazar",
              "id": "ep-168"
            },
            {
              "method": "POST",
              "path": "/api/laboratorio/tubos/<tubo_id>/rechazar",
              "id": "ep-169"
            },
            {
              "method": "POST",
              "path": "/api/laboratorio/pruebas/<detalle_id>/repetir",
              "id": "ep-170"
            },
            {
              "method": "GET",
              "path": "/api/laboratorio/motivos-rechazo",
              "id": "ep-171"
            }
          ]
        },
        {
          "name": "Historial, eventos e informe",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/laboratorio/ordenes/<orden_id>/eventos",
              "id": "ep-172"
            },
            {
              "method": "GET",
              "path": "/api/laboratorio/ordenes/<orden_id>/informe",
              "id": "ep-173"
            }
          ]
        }
      ]
    },
    {
      "name": "Tracking / Trazabilidad",
      "subgroups": [
        {
          "name": "Tracking",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/tracking/resumen",
              "id": "ep-174"
            },
            {
              "method": "GET",
              "path": "/api/tracking/tubos",
              "id": "ep-175"
            },
            {
              "method": "GET",
              "path": "/api/tracking/buscar/<codigo>",
              "id": "ep-176"
            },
            {
              "method": "GET",
              "path": "/api/tracking/tubos/<tubo_id>",
              "id": "ep-177"
            },
            {
              "method": "POST",
              "path": "/api/tracking/tubos/<tubo_id>/eventos",
              "id": "ep-178"
            },
            {
              "method": "POST",
              "path": "/api/tracking/scan",
              "id": "ep-179"
            },
            {
              "method": "POST",
              "path": "/api/tracking/scan/rapido",
              "id": "ep-180"
            }
          ]
        },
        {
          "name": "Puntos de control",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/tracking/puntos-control",
              "id": "ep-181"
            },
            {
              "method": "POST",
              "path": "/api/tracking/puntos-control",
              "id": "ep-182"
            },
            {
              "method": "PUT",
              "path": "/api/tracking/puntos-control/<punto_id>",
              "id": "ep-183"
            },
            {
              "method": "PATCH",
              "path": "/api/tracking/puntos-control/<punto_id>",
              "id": "ep-184"
            }
          ]
        },
        {
          "name": "Rechazos de tracking",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/tracking/rechazos/motivos",
              "id": "ep-185"
            },
            {
              "method": "GET",
              "path": "/api/tracking/rechazos/resumen",
              "id": "ep-186"
            },
            {
              "method": "GET",
              "path": "/api/tracking/rechazos",
              "id": "ep-187"
            },
            {
              "method": "PATCH",
              "path": "/api/tracking/rechazos/<rechazo_id>",
              "id": "ep-188"
            },
            {
              "method": "PATCH",
              "path": "/api/tracking/rechazos/<rechazo_id>/resolver",
              "id": "ep-189"
            },
            {
              "method": "PATCH",
              "path": "/api/tracking/rechazos/<rechazo_id>/anular",
              "id": "ep-190"
            }
          ]
        },
        {
          "name": "Configuración",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/tracking/configuracion",
              "id": "ep-191"
            },
            {
              "method": "PATCH",
              "path": "/api/tracking/configuracion",
              "id": "ep-192"
            }
          ]
        }
      ]
    },
    {
      "name": "Informes y reportes",
      "subgroups": [
        {
          "name": "Formatos de informe",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/informe/modulos",
              "id": "ep-193"
            },
            {
              "method": "GET",
              "path": "/api/informe",
              "id": "ep-194"
            },
            {
              "method": "GET",
              "path": "/api/informe/formatos",
              "id": "ep-195"
            },
            {
              "method": "GET",
              "path": "/api/informe/formatos/<formato_uid>",
              "id": "ep-196"
            },
            {
              "method": "POST",
              "path": "/api/informe",
              "id": "ep-197"
            },
            {
              "method": "PUT",
              "path": "/api/informe/<formato_uid>",
              "id": "ep-198"
            },
            {
              "method": "PATCH",
              "path": "/api/informe/<formato_uid>/activar",
              "id": "ep-199"
            },
            {
              "method": "PATCH",
              "path": "/api/informe/<formato_uid>/desactivar",
              "id": "ep-200"
            }
          ]
        },
        {
          "name": "Datos de informe",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/informes/<orden_uid>/datos",
              "id": "ep-201"
            },
            {
              "method": "GET",
              "path": "/api/informes/<orden_uid>/datos/verificar",
              "id": "ep-202"
            }
          ]
        },
        {
          "name": "Reportes",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/reports/permisos",
              "id": "ep-203"
            },
            {
              "method": "GET",
              "path": "/api/reports/catalogo",
              "id": "ep-204"
            },
            {
              "method": "GET",
              "path": "/api/reports/resumen",
              "id": "ep-205"
            },
            {
              "method": "POST",
              "path": "/api/reports/consultar",
              "id": "ep-206"
            },
            {
              "method": "POST",
              "path": "/api/reports/exportar",
              "id": "ep-207"
            },
            {
              "method": "GET",
              "path": "/api/reports/configuraciones",
              "id": "ep-208"
            },
            {
              "method": "GET",
              "path": "/api/reports/configuraciones/<config_id>",
              "id": "ep-209"
            },
            {
              "method": "POST",
              "path": "/api/reports/configuraciones",
              "id": "ep-210"
            },
            {
              "method": "PUT",
              "path": "/api/reports/configuraciones/<config_id>",
              "id": "ep-211"
            },
            {
              "method": "DELETE",
              "path": "/api/reports/configuraciones/<config_id>",
              "id": "ep-212"
            }
          ]
        },
        {
          "name": "EngineInforme",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/engine-informe/render/<token>",
              "id": "ep-213"
            },
            {
              "method": "GET",
              "path": "/api/engine-informe/estado",
              "id": "ep-214"
            },
            {
              "method": "GET",
              "path": "/api/engine-informe/emisiones",
              "id": "ep-215"
            },
            {
              "method": "POST",
              "path": "/api/engine-informe/ordenes/<order_id>/encolar",
              "id": "ep-216"
            }
          ]
        }
      ]
    },
    {
      "name": "Configuración general",
      "subgroups": [
        {
          "name": "Mi perfil",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/profile",
              "id": "ep-217"
            },
            {
              "method": "PUT",
              "path": "/api/profile/update",
              "id": "ep-218"
            },
            {
              "method": "POST",
              "path": "/api/profile/change-password",
              "id": "ep-219"
            },
            {
              "method": "GET",
              "path": "/api/profile/firma",
              "id": "ep-220"
            },
            {
              "method": "POST",
              "path": "/api/profile/firma",
              "id": "ep-221"
            },
            {
              "method": "GET",
              "path": "/api/profile/firma/historial",
              "id": "ep-222"
            }
          ]
        },
        {
          "name": "Usuarios",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/usuarios/perfiles-list",
              "id": "ep-223"
            },
            {
              "method": "GET",
              "path": "/api/usuarios/centros-list",
              "id": "ep-224"
            },
            {
              "method": "GET",
              "path": "/api/usuarios",
              "id": "ep-225"
            },
            {
              "method": "POST",
              "path": "/api/usuarios/create",
              "id": "ep-226"
            },
            {
              "method": "PUT",
              "path": "/api/usuarios/update/<user_id>",
              "id": "ep-227"
            },
            {
              "method": "POST",
              "path": "/api/usuarios/reset-password/<user_id>",
              "id": "ep-228"
            },
            {
              "method": "PATCH",
              "path": "/api/usuarios/toggle-status/<user_id>",
              "id": "ep-229"
            },
            {
              "method": "GET",
              "path": "/api/usuarios/<user_id>/firma",
              "id": "ep-230"
            },
            {
              "method": "POST",
              "path": "/api/usuarios/<user_id>/firma",
              "id": "ep-231"
            },
            {
              "method": "DELETE",
              "path": "/api/usuarios/<user_id>/firma",
              "id": "ep-232"
            }
          ]
        },
        {
          "name": "Perfiles y permisos",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/perfiles",
              "id": "ep-233"
            },
            {
              "method": "GET",
              "path": "/api/perfiles/menus-disponibles",
              "id": "ep-234"
            },
            {
              "method": "POST",
              "path": "/api/perfiles/crear",
              "id": "ep-235"
            },
            {
              "method": "PUT",
              "path": "/api/perfiles/update/<id>",
              "id": "ep-236"
            },
            {
              "method": "PATCH",
              "path": "/api/perfiles/toggle/<id>",
              "id": "ep-237"
            },
            {
              "method": "POST",
              "path": "/api/perfiles/usuarios/asignar-perfil",
              "id": "ep-238"
            },
            {
              "method": "GET",
              "path": "/api/perfiles/acciones-disponibles",
              "id": "ep-239"
            },
            {
              "method": "GET",
              "path": "/api/perfiles/superficies-disponibles",
              "id": "ep-240"
            },
            {
              "method": "GET",
              "path": "/api/perfiles/mis-superficies",
              "id": "ep-241"
            }
          ]
        },
        {
          "name": "Centros",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/centros",
              "id": "ep-242"
            },
            {
              "method": "GET",
              "path": "/api/centros/<id>",
              "id": "ep-243"
            },
            {
              "method": "POST",
              "path": "/api/centros",
              "id": "ep-244"
            },
            {
              "method": "PUT",
              "path": "/api/centros/<id>",
              "id": "ep-245"
            },
            {
              "method": "PATCH",
              "path": "/api/centros/<id>/activar",
              "id": "ep-246"
            },
            {
              "method": "PATCH",
              "path": "/api/centros/<id>/desactivar",
              "id": "ep-247"
            }
          ]
        },
        {
          "name": "Sistema",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/sistema",
              "id": "ep-248"
            },
            {
              "method": "GET",
              "path": "/api/sistema/<config_id>",
              "id": "ep-249"
            },
            {
              "method": "GET",
              "path": "/api/sistema/resolve/<establecimiento_id>",
              "id": "ep-250"
            },
            {
              "method": "GET",
              "path": "/api/sistema/current",
              "id": "ep-251"
            },
            {
              "method": "POST",
              "path": "/api/sistema",
              "id": "ep-252"
            },
            {
              "method": "PUT",
              "path": "/api/sistema/<config_id>",
              "id": "ep-253"
            },
            {
              "method": "PATCH",
              "path": "/api/sistema/<config_id>/activar",
              "id": "ep-254"
            },
            {
              "method": "PATCH",
              "path": "/api/sistema/<config_id>/desactivar",
              "id": "ep-255"
            },
            {
              "method": "DELETE",
              "path": "/api/sistema/<config_id>",
              "id": "ep-256"
            }
          ]
        },
        {
          "name": "Ajustes generales",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/ajustes-generales",
              "id": "ep-257"
            },
            {
              "method": "GET",
              "path": "/api/ajustes-generales/<config_id>",
              "id": "ep-258"
            },
            {
              "method": "POST",
              "path": "/api/ajustes-generales",
              "id": "ep-259"
            },
            {
              "method": "PUT",
              "path": "/api/ajustes-generales/<config_id>",
              "id": "ep-260"
            },
            {
              "method": "PATCH",
              "path": "/api/ajustes-generales/<config_id>",
              "id": "ep-261"
            },
            {
              "method": "PATCH",
              "path": "/api/ajustes-generales/<config_id>/activar",
              "id": "ep-262"
            },
            {
              "method": "PATCH",
              "path": "/api/ajustes-generales/<config_id>/desactivar",
              "id": "ep-263"
            },
            {
              "method": "DELETE",
              "path": "/api/ajustes-generales/<config_id>",
              "id": "ep-264"
            },
            {
              "method": "GET",
              "path": "/api/ajustes-generales/patient-review",
              "id": "ep-265"
            },
            {
              "method": "PUT",
              "path": "/api/ajustes-generales/patient-review",
              "id": "ep-266"
            },
            {
              "method": "PATCH",
              "path": "/api/ajustes-generales/patient-review",
              "id": "ep-267"
            }
          ]
        }
      ]
    },
    {
      "name": "Configuración laboratorio",
      "subgroups": [
        {
          "name": "Médicos",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/medicos",
              "id": "ep-268"
            },
            {
              "method": "GET",
              "path": "/api/medicos/<id>",
              "id": "ep-269"
            },
            {
              "method": "POST",
              "path": "/api/medicos",
              "id": "ep-270"
            },
            {
              "method": "PUT",
              "path": "/api/medicos/<id>",
              "id": "ep-271"
            },
            {
              "method": "PATCH",
              "path": "/api/medicos/<id>/activar",
              "id": "ep-272"
            },
            {
              "method": "PATCH",
              "path": "/api/medicos/<id>/desactivar",
              "id": "ep-273"
            }
          ]
        },
        {
          "name": "Especies",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/especies",
              "id": "ep-274"
            },
            {
              "method": "GET",
              "path": "/api/especies/<id>",
              "id": "ep-275"
            },
            {
              "method": "POST",
              "path": "/api/especies",
              "id": "ep-276"
            },
            {
              "method": "PUT",
              "path": "/api/especies/<id>",
              "id": "ep-277"
            },
            {
              "method": "PATCH",
              "path": "/api/especies/<id>/activar",
              "id": "ep-278"
            },
            {
              "method": "PATCH",
              "path": "/api/especies/<id>/desactivar",
              "id": "ep-279"
            }
          ]
        },
        {
          "name": "Razas",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/razas",
              "id": "ep-280"
            },
            {
              "method": "GET",
              "path": "/api/razas/<id>",
              "id": "ep-281"
            },
            {
              "method": "POST",
              "path": "/api/razas",
              "id": "ep-282"
            },
            {
              "method": "PUT",
              "path": "/api/razas/<id>",
              "id": "ep-283"
            },
            {
              "method": "PATCH",
              "path": "/api/razas/<id>/activar",
              "id": "ep-284"
            },
            {
              "method": "PATCH",
              "path": "/api/razas/<id>/desactivar",
              "id": "ep-285"
            }
          ]
        },
        {
          "name": "Muestras",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/muestras",
              "id": "ep-286"
            },
            {
              "method": "GET",
              "path": "/api/muestras/<id>",
              "id": "ep-287"
            },
            {
              "method": "POST",
              "path": "/api/muestras",
              "id": "ep-288"
            },
            {
              "method": "PUT",
              "path": "/api/muestras/<id>",
              "id": "ep-289"
            },
            {
              "method": "PATCH",
              "path": "/api/muestras/<id>/activar",
              "id": "ep-290"
            },
            {
              "method": "PATCH",
              "path": "/api/muestras/<id>/desactivar",
              "id": "ep-291"
            }
          ]
        },
        {
          "name": "Grupos laboratorio",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/labgrupos",
              "id": "ep-292"
            },
            {
              "method": "GET",
              "path": "/api/labgrupos/<id>",
              "id": "ep-293"
            },
            {
              "method": "POST",
              "path": "/api/labgrupos",
              "id": "ep-294"
            },
            {
              "method": "PUT",
              "path": "/api/labgrupos/<id>",
              "id": "ep-295"
            },
            {
              "method": "PATCH",
              "path": "/api/labgrupos/<id>/activar",
              "id": "ep-296"
            },
            {
              "method": "PATCH",
              "path": "/api/labgrupos/<id>/desactivar",
              "id": "ep-297"
            }
          ]
        },
        {
          "name": "Tubos",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/tubos/imagenes",
              "id": "ep-298"
            },
            {
              "method": "POST",
              "path": "/api/tubos/imagenes",
              "id": "ep-299"
            },
            {
              "method": "GET",
              "path": "/api/tubos/imagenes/<imagen_id>/archivo",
              "id": "ep-300"
            },
            {
              "method": "GET",
              "path": "/api/tubos",
              "id": "ep-301"
            },
            {
              "method": "GET",
              "path": "/api/tubos/<id>",
              "id": "ep-302"
            },
            {
              "method": "POST",
              "path": "/api/tubos",
              "id": "ep-303"
            },
            {
              "method": "PUT",
              "path": "/api/tubos/<id>",
              "id": "ep-304"
            },
            {
              "method": "PATCH",
              "path": "/api/tubos/<id>/activar",
              "id": "ep-305"
            },
            {
              "method": "PATCH",
              "path": "/api/tubos/<id>/desactivar",
              "id": "ep-306"
            }
          ]
        },
        {
          "name": "Pruebas",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/pruebas",
              "id": "ep-307"
            },
            {
              "method": "GET",
              "path": "/api/pruebas/<id>",
              "id": "ep-308"
            },
            {
              "method": "POST",
              "path": "/api/pruebas",
              "id": "ep-309"
            },
            {
              "method": "PUT",
              "path": "/api/pruebas/<id>",
              "id": "ep-310"
            },
            {
              "method": "PATCH",
              "path": "/api/pruebas/<id>/activar",
              "id": "ep-311"
            },
            {
              "method": "PATCH",
              "path": "/api/pruebas/<id>/desactivar",
              "id": "ep-312"
            },
            {
              "method": "GET",
              "path": "/api/pruebas/integracion-status",
              "id": "ep-313"
            },
            {
              "method": "POST",
              "path": "/api/pruebas/codigo-lis/automatico",
              "id": "ep-314"
            },
            {
              "method": "POST",
              "path": "/api/pruebas/importar-excel",
              "id": "ep-315"
            }
          ]
        },
        {
          "name": "Perfil de pruebas",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/perfilpruebas",
              "id": "ep-316"
            },
            {
              "method": "GET",
              "path": "/api/perfilpruebas/<id>",
              "id": "ep-317"
            },
            {
              "method": "POST",
              "path": "/api/perfilpruebas",
              "id": "ep-318"
            },
            {
              "method": "PUT",
              "path": "/api/perfilpruebas/<id>",
              "id": "ep-319"
            },
            {
              "method": "PATCH",
              "path": "/api/perfilpruebas/<id>/activar",
              "id": "ep-320"
            },
            {
              "method": "PATCH",
              "path": "/api/perfilpruebas/<id>/desactivar",
              "id": "ep-321"
            },
            {
              "method": "DELETE",
              "path": "/api/perfilpruebas/<id>",
              "id": "ep-322"
            }
          ]
        },
        {
          "name": "Perfiles de pruebas",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/perfilespruebas",
              "id": "ep-323"
            },
            {
              "method": "GET",
              "path": "/api/perfilespruebas/<id>",
              "id": "ep-324"
            },
            {
              "method": "POST",
              "path": "/api/perfilespruebas",
              "id": "ep-325"
            },
            {
              "method": "PUT",
              "path": "/api/perfilespruebas/<id>",
              "id": "ep-326"
            },
            {
              "method": "POST",
              "path": "/api/perfilespruebas/codigo-lis/automatico",
              "id": "ep-327"
            },
            {
              "method": "PATCH",
              "path": "/api/perfilespruebas/<id>/activar",
              "id": "ep-328"
            },
            {
              "method": "PATCH",
              "path": "/api/perfilespruebas/<id>/desactivar",
              "id": "ep-329"
            },
            {
              "method": "DELETE",
              "path": "/api/perfilespruebas/<id>",
              "id": "ep-330"
            }
          ]
        },
        {
          "name": "Catálogo laboratorio",
          "endpoints": [
            {
              "method": "POST",
              "path": "/api/catalogo-laboratorio/resolver",
              "id": "ep-331"
            },
            {
              "method": "GET",
              "path": "/api/catalogo-laboratorio/perfiles/<perfil_id>/perfiles",
              "id": "ep-332"
            },
            {
              "method": "POST",
              "path": "/api/catalogo-laboratorio/perfiles/<perfil_id>/perfiles",
              "id": "ep-333"
            },
            {
              "method": "DELETE",
              "path": "/api/catalogo-laboratorio/perfil-relaciones/<relacion_id>",
              "id": "ep-334"
            },
            {
              "method": "GET",
              "path": "/api/catalogo-laboratorio/grupos",
              "id": "ep-335"
            },
            {
              "method": "POST",
              "path": "/api/catalogo-laboratorio/grupos",
              "id": "ep-336"
            },
            {
              "method": "PUT",
              "path": "/api/catalogo-laboratorio/grupos/<grupo_id>",
              "id": "ep-337"
            },
            {
              "method": "GET",
              "path": "/api/catalogo-laboratorio/grupos/<grupo_id>/perfiles",
              "id": "ep-338"
            },
            {
              "method": "POST",
              "path": "/api/catalogo-laboratorio/grupos/<grupo_id>/perfiles",
              "id": "ep-339"
            },
            {
              "method": "DELETE",
              "path": "/api/catalogo-laboratorio/grupo-relaciones/<relacion_id>",
              "id": "ep-340"
            },
            {
              "method": "GET",
              "path": "/api/catalogo-laboratorio/prestaciones",
              "id": "ep-341"
            },
            {
              "method": "POST",
              "path": "/api/catalogo-laboratorio/ordenes/<orden_id>/origenes",
              "id": "ep-342"
            }
          ]
        },
        {
          "name": "Motivos de rechazo maestros",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/mrechazos",
              "id": "ep-343"
            },
            {
              "method": "GET",
              "path": "/api/mrechazos/<id>",
              "id": "ep-344"
            },
            {
              "method": "POST",
              "path": "/api/mrechazos",
              "id": "ep-345"
            },
            {
              "method": "PUT",
              "path": "/api/mrechazos/<id>",
              "id": "ep-346"
            },
            {
              "method": "PATCH",
              "path": "/api/mrechazos/<id>/activar",
              "id": "ep-347"
            },
            {
              "method": "PATCH",
              "path": "/api/mrechazos/<id>/desactivar",
              "id": "ep-348"
            }
          ]
        },
        {
          "name": "Demográficos",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/demograficos",
              "id": "ep-349"
            },
            {
              "method": "GET",
              "path": "/api/demograficos/<id>",
              "id": "ep-350"
            },
            {
              "method": "POST",
              "path": "/api/demograficos",
              "id": "ep-351"
            },
            {
              "method": "PUT",
              "path": "/api/demograficos/<id>",
              "id": "ep-352"
            },
            {
              "method": "PATCH",
              "path": "/api/demograficos/<id>/activar",
              "id": "ep-353"
            },
            {
              "method": "PATCH",
              "path": "/api/demograficos/<id>/desactivar",
              "id": "ep-354"
            },
            {
              "method": "GET",
              "path": "/api/demograficos/<demografico_id>/opciones",
              "id": "ep-355"
            },
            {
              "method": "POST",
              "path": "/api/demograficos/<demografico_id>/opciones",
              "id": "ep-356"
            },
            {
              "method": "PUT",
              "path": "/api/demograficos/opciones/<id>",
              "id": "ep-357"
            },
            {
              "method": "PATCH",
              "path": "/api/demograficos/opciones/<id>/activar",
              "id": "ep-358"
            },
            {
              "method": "PATCH",
              "path": "/api/demograficos/opciones/<id>/desactivar",
              "id": "ep-359"
            },
            {
              "method": "GET",
              "path": "/api/demograficos/asignaciones",
              "id": "ep-360"
            },
            {
              "method": "GET",
              "path": "/api/demograficos/efectivos",
              "id": "ep-361"
            },
            {
              "method": "POST",
              "path": "/api/demograficos/asignar",
              "id": "ep-362"
            },
            {
              "method": "POST",
              "path": "/api/demograficos/desasignar",
              "id": "ep-363"
            }
          ]
        },
        {
          "name": "Diccionario de resultados",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/diccionario-resultados",
              "id": "ep-364"
            },
            {
              "method": "PUT",
              "path": "/api/diccionario-resultados",
              "id": "ep-365"
            }
          ]
        },
        {
          "name": "Engine Rules",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/engine-rules/estado",
              "id": "ep-366"
            },
            {
              "method": "GET",
              "path": "/api/engine-rules/catalogo",
              "id": "ep-367"
            },
            {
              "method": "GET",
              "path": "/api/engine-rules/reglas",
              "id": "ep-368"
            },
            {
              "method": "GET",
              "path": "/api/engine-rules/reglas/<rule_id>",
              "id": "ep-369"
            },
            {
              "method": "POST",
              "path": "/api/engine-rules/reglas",
              "id": "ep-370"
            },
            {
              "method": "PUT",
              "path": "/api/engine-rules/reglas/<rule_id>",
              "id": "ep-371"
            },
            {
              "method": "PATCH",
              "path": "/api/engine-rules/reglas/<rule_id>",
              "id": "ep-372"
            },
            {
              "method": "POST",
              "path": "/api/engine-rules/reglas/<rule_id>/versiones",
              "id": "ep-373"
            },
            {
              "method": "POST",
              "path": "/api/engine-rules/reglas/<rule_id>/versiones/<version_id>/publicar",
              "id": "ep-374"
            },
            {
              "method": "PATCH",
              "path": "/api/engine-rules/reglas/<rule_id>/estado",
              "id": "ep-375"
            },
            {
              "method": "GET",
              "path": "/api/engine-rules/reglas/<rule_id>/impacto",
              "id": "ep-376"
            },
            {
              "method": "DELETE",
              "path": "/api/engine-rules/reglas/<rule_id>",
              "id": "ep-377"
            },
            {
              "method": "POST",
              "path": "/api/engine-rules/reglas/<rule_id>/versiones/<version_id>/simular",
              "id": "ep-378"
            },
            {
              "method": "POST",
              "path": "/api/engine-rules/ordenes/<order_id>/ejecutar",
              "id": "ep-379"
            },
            {
              "method": "POST",
              "path": "/api/engine-rules/ejecuciones/<execution_id>/reejecutar",
              "id": "ep-380"
            },
            {
              "method": "GET",
              "path": "/api/engine-rules/ejecuciones",
              "id": "ep-381"
            }
          ]
        }
      ]
    },
    {
      "name": "Conexiones / Integraciones",
      "subgroups": [
        {
          "name": "Motores / nodos / catálogo",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/connections/engines",
              "id": "ep-382"
            },
            {
              "method": "POST",
              "path": "/api/connections/nodos",
              "id": "ep-383"
            },
            {
              "method": "GET",
              "path": "/api/connections/catalogo",
              "id": "ep-384"
            }
          ]
        },
        {
          "name": "Conexiones",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/connections/conexiones",
              "id": "ep-385"
            },
            {
              "method": "POST",
              "path": "/api/connections/conexiones",
              "id": "ep-386"
            },
            {
              "method": "GET",
              "path": "/api/connections/conexiones/<process_id>",
              "id": "ep-387"
            },
            {
              "method": "PATCH",
              "path": "/api/connections/conexiones/<process_id>",
              "id": "ep-388"
            },
            {
              "method": "PUT",
              "path": "/api/connections/conexiones/<process_id>/politica",
              "id": "ep-389"
            },
            {
              "method": "POST",
              "path": "/api/connections/conexiones/<process_id>/mappings",
              "id": "ep-390"
            },
            {
              "method": "POST",
              "path": "/api/connections/conexiones/<process_id>/mappings/clonar",
              "id": "ep-391"
            },
            {
              "method": "GET",
              "path": "/api/connections/conexiones/<process_id>/flujo",
              "id": "ep-392"
            },
            {
              "method": "PUT",
              "path": "/api/connections/conexiones/<process_id>/flujo",
              "id": "ep-393"
            },
            {
              "method": "POST",
              "path": "/api/connections/conexiones/<process_id>/comandos",
              "id": "ep-394"
            }
          ]
        },
        {
          "name": "Mapeos y conversiones",
          "endpoints": [
            {
              "method": "PATCH",
              "path": "/api/connections/mappings/<mapping_id>",
              "id": "ep-395"
            },
            {
              "method": "DELETE",
              "path": "/api/connections/mappings/<mapping_id>",
              "id": "ep-396"
            },
            {
              "method": "POST",
              "path": "/api/connections/mappings/<mapping_id>/conversiones",
              "id": "ep-397"
            },
            {
              "method": "DELETE",
              "path": "/api/connections/conversiones/<conversion_id>",
              "id": "ep-398"
            }
          ]
        },
        {
          "name": "Hosts",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/connections/hosts",
              "id": "ep-399"
            },
            {
              "method": "POST",
              "path": "/api/connections/hosts",
              "id": "ep-400"
            },
            {
              "method": "PATCH",
              "path": "/api/connections/hosts/<host_id>",
              "id": "ep-401"
            },
            {
              "method": "DELETE",
              "path": "/api/connections/hosts/<host_id>",
              "id": "ep-402"
            },
            {
              "method": "POST",
              "path": "/api/connections/hosts/<host_id>/probar-carpeta",
              "id": "ep-403"
            },
            {
              "method": "POST",
              "path": "/api/connections/hosts/<host_id>/clonar",
              "id": "ep-404"
            }
          ]
        },
        {
          "name": "Reglas",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/connections/reglas",
              "id": "ep-405"
            },
            {
              "method": "POST",
              "path": "/api/connections/reglas",
              "id": "ep-406"
            },
            {
              "method": "PATCH",
              "path": "/api/connections/reglas/<rule_id>",
              "id": "ep-407"
            },
            {
              "method": "DELETE",
              "path": "/api/connections/reglas/<rule_id>",
              "id": "ep-408"
            },
            {
              "method": "POST",
              "path": "/api/connections/reglas/<rule_id>/simular",
              "id": "ep-409"
            }
          ]
        },
        {
          "name": "Formatos",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/connections/formatos",
              "id": "ep-410"
            },
            {
              "method": "POST",
              "path": "/api/connections/formatos",
              "id": "ep-411"
            },
            {
              "method": "GET",
              "path": "/api/connections/formatos/<format_id>",
              "id": "ep-412"
            },
            {
              "method": "PATCH",
              "path": "/api/connections/formatos/<format_id>",
              "id": "ep-413"
            },
            {
              "method": "PUT",
              "path": "/api/connections/formatos/<format_id>/componentes",
              "id": "ep-414"
            },
            {
              "method": "POST",
              "path": "/api/connections/formatos/<format_id>/vista-previa",
              "id": "ep-415"
            },
            {
              "method": "POST",
              "path": "/api/connections/formatos/<format_id>/clonar",
              "id": "ep-416"
            },
            {
              "method": "POST",
              "path": "/api/connections/formatos/importar",
              "id": "ep-417"
            },
            {
              "method": "DELETE",
              "path": "/api/connections/formatos/<format_id>",
              "id": "ep-418"
            }
          ]
        },
        {
          "name": "Configuración de HOST",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/connections/hosts/<host_id>/configuraciones",
              "id": "ep-419"
            },
            {
              "method": "POST",
              "path": "/api/connections/hosts/<host_id>/configuraciones",
              "id": "ep-420"
            },
            {
              "method": "POST",
              "path": "/api/connections/hosts/configuraciones/<config_id>/aplicar",
              "id": "ep-421"
            },
            {
              "method": "GET",
              "path": "/api/connections/orquestacion/hosts",
              "id": "ep-422"
            },
            {
              "method": "GET",
              "path": "/api/connections/host-configuraciones",
              "id": "ep-423"
            },
            {
              "method": "POST",
              "path": "/api/connections/host-configuraciones",
              "id": "ep-424"
            },
            {
              "method": "PATCH",
              "path": "/api/connections/host-configuraciones/<config_id>",
              "id": "ep-425"
            },
            {
              "method": "DELETE",
              "path": "/api/connections/host-configuraciones/<config_id>",
              "id": "ep-426"
            },
            {
              "method": "POST",
              "path": "/api/connections/host-configuraciones/<config_id>/aplicar",
              "id": "ep-427"
            }
          ]
        },
        {
          "name": "Engines / mapeos HOST",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/connections/hosts/<host_id>/engine",
              "id": "ep-428"
            },
            {
              "method": "GET",
              "path": "/api/connections/hosts/<host_id>/mapeos",
              "id": "ep-429"
            },
            {
              "method": "PUT",
              "path": "/api/connections/hosts/<host_id>/mapeos",
              "id": "ep-430"
            },
            {
              "method": "GET",
              "path": "/api/connections/hosts/<host_id>/mapeos-perfiles",
              "id": "ep-431"
            },
            {
              "method": "PUT",
              "path": "/api/connections/hosts/<host_id>/mapeos-perfiles",
              "id": "ep-432"
            },
            {
              "method": "GET",
              "path": "/api/connections/hosts/<host_id>/reglas",
              "id": "ep-433"
            },
            {
              "method": "PUT",
              "path": "/api/connections/hosts/<host_id>/reglas",
              "id": "ep-434"
            }
          ]
        },
        {
          "name": "Demográficos HOST",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/connections/hosts/<host_id>/mapeos-demograficos",
              "id": "ep-435"
            },
            {
              "method": "PUT",
              "path": "/api/connections/hosts/<host_id>/mapeos-demograficos",
              "id": "ep-436"
            },
            {
              "method": "POST",
              "path": "/api/connections/hosts/<host_id>/mapeos-demograficos/automatico",
              "id": "ep-437"
            }
          ]
        },
        {
          "name": "Bandeja de integración",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/connections/host-inbox",
              "id": "ep-438"
            },
            {
              "method": "GET",
              "path": "/api/connections/host-inbox/catalogo-pruebas",
              "id": "ep-439"
            },
            {
              "method": "GET",
              "path": "/api/connections/host-inbox/<ingreso_id>",
              "id": "ep-440"
            },
            {
              "method": "POST",
              "path": "/api/connections/host-inbox/<ingreso_id>/aceptar",
              "id": "ep-441"
            },
            {
              "method": "POST",
              "path": "/api/connections/host-inbox/<ingreso_id>/rechazar",
              "id": "ep-442"
            }
          ]
        },
        {
          "name": "Runtime / monitor / logs / paquetes",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/connections/runtime",
              "id": "ep-443"
            },
            {
              "method": "POST",
              "path": "/api/connections/runtime/<process_id>/comandos",
              "id": "ep-444"
            },
            {
              "method": "GET",
              "path": "/api/connections/runtime/<process_id>/logs",
              "id": "ep-445"
            },
            {
              "method": "GET",
              "path": "/api/connections/runtime/<process_id>/logs/export",
              "id": "ep-446"
            },
            {
              "method": "GET",
              "path": "/api/connections/runtime/<process_id>/paquetes",
              "id": "ep-447"
            },
            {
              "method": "GET",
              "path": "/api/connections/runtime/<process_id>/paquetes/<message_id>/validar",
              "id": "ep-448"
            },
            {
              "method": "GET",
              "path": "/api/connections/monitor",
              "id": "ep-449"
            },
            {
              "method": "GET",
              "path": "/api/connections/monitor/eventos",
              "id": "ep-450"
            }
          ]
        },
        {
          "name": "Drivers",
          "endpoints": [
            {
              "method": "POST",
              "path": "/api/connections/drivers/upload",
              "id": "ep-451"
            },
            {
              "method": "POST",
              "path": "/api/connections/drivers/<version_id>/finalizar",
              "id": "ep-452"
            },
            {
              "method": "POST",
              "path": "/api/connections/driver/claim",
              "id": "ep-453"
            },
            {
              "method": "GET",
              "path": "/api/connections/driver/artifacts/<version_id>",
              "id": "ep-454"
            },
            {
              "method": "POST",
              "path": "/api/connections/driver/heartbeat",
              "id": "ep-455"
            },
            {
              "method": "POST",
              "path": "/api/connections/driver/comandos/<command_id>/completar",
              "id": "ep-456"
            },
            {
              "method": "POST",
              "path": "/api/connections/driver/resultados",
              "id": "ep-457"
            },
            {
              "method": "POST",
              "path": "/api/connections/driver/eventos",
              "id": "ep-458"
            }
          ]
        },
        {
          "name": "Buffer Connect",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/buffer-connect/retencion",
              "id": "ep-459"
            },
            {
              "method": "PUT",
              "path": "/api/buffer-connect/retencion",
              "id": "ep-460"
            },
            {
              "method": "GET",
              "path": "/api/buffer-connect/mensajes",
              "id": "ep-461"
            },
            {
              "method": "GET",
              "path": "/api/buffer-connect/mensajes/<message_id>",
              "id": "ep-462"
            },
            {
              "method": "POST",
              "path": "/api/buffer-connect/mensajes/<message_id>/accion",
              "id": "ep-463"
            }
          ]
        }
      ]
    },
    {
      "name": "Etiquetado / Impresión",
      "subgroups": [
        {
          "name": "Catálogos / dispositivos",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/etiquetado/catalogos",
              "id": "ep-464"
            },
            {
              "method": "GET",
              "path": "/api/etiquetado/nodos",
              "id": "ep-465"
            },
            {
              "method": "GET",
              "path": "/api/etiquetado/descubrimiento",
              "id": "ep-466"
            }
          ]
        },
        {
          "name": "Impresoras",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/etiquetado/impresoras",
              "id": "ep-467"
            },
            {
              "method": "POST",
              "path": "/api/etiquetado/impresoras",
              "id": "ep-468"
            },
            {
              "method": "PATCH",
              "path": "/api/etiquetado/impresoras/seleccion",
              "id": "ep-469"
            },
            {
              "method": "GET",
              "path": "/api/etiquetado/impresoras/<printer_id>",
              "id": "ep-470"
            },
            {
              "method": "PUT",
              "path": "/api/etiquetado/impresoras/<printer_id>",
              "id": "ep-471"
            },
            {
              "method": "DELETE",
              "path": "/api/etiquetado/impresoras/<printer_id>",
              "id": "ep-472"
            },
            {
              "method": "POST",
              "path": "/api/etiquetado/impresoras/importar",
              "id": "ep-473"
            },
            {
              "method": "PATCH",
              "path": "/api/etiquetado/impresoras/<printer_id>/estado",
              "id": "ep-474"
            },
            {
              "method": "POST",
              "path": "/api/etiquetado/impresoras/<printer_id>/probar-conexion",
              "id": "ep-475"
            },
            {
              "method": "POST",
              "path": "/api/etiquetado/impresoras/<printer_id>/imprimir-prueba",
              "id": "ep-476"
            }
          ]
        },
        {
          "name": "Formatos",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/etiquetado/formatos",
              "id": "ep-477"
            },
            {
              "method": "POST",
              "path": "/api/etiquetado/formatos",
              "id": "ep-478"
            },
            {
              "method": "PUT",
              "path": "/api/etiquetado/formatos/<format_id>",
              "id": "ep-479"
            },
            {
              "method": "POST",
              "path": "/api/etiquetado/preview",
              "id": "ep-480"
            },
            {
              "method": "GET",
              "path": "/api/etiquetado/designer-preview",
              "id": "ep-481"
            }
          ]
        },
        {
          "name": "Configuración automática",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/etiquetado/configuracion-automatica",
              "id": "ep-482"
            },
            {
              "method": "PUT",
              "path": "/api/etiquetado/configuracion-automatica",
              "id": "ep-483"
            }
          ]
        },
        {
          "name": "Cola",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/etiquetado/cola",
              "id": "ep-484"
            },
            {
              "method": "DELETE",
              "path": "/api/etiquetado/cola",
              "id": "ep-485"
            }
          ]
        },
        {
          "name": "Etiquetado clínico",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/etiquetado/variables",
              "id": "ep-486"
            },
            {
              "method": "GET",
              "path": "/api/etiquetado/clinico/resumen",
              "id": "ep-487"
            },
            {
              "method": "POST",
              "path": "/api/etiquetado/clinico/imprimir",
              "id": "ep-488"
            },
            {
              "method": "POST",
              "path": "/api/etiquetado/clinico/tubos/<tube_id>/reimprimir-directo",
              "id": "ep-489"
            }
          ]
        },
        {
          "name": "Formatos V2",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/etiquetado/formatos-v2",
              "id": "ep-490"
            },
            {
              "method": "POST",
              "path": "/api/etiquetado/formatos-v2",
              "id": "ep-491"
            },
            {
              "method": "PUT",
              "path": "/api/etiquetado/formatos-v2/<format_id>",
              "id": "ep-492"
            }
          ]
        },
        {
          "name": "Configuración paquete",
          "endpoints": [
            {
              "method": "GET",
              "path": "/api/etiquetado/configuracion-paquete",
              "id": "ep-493"
            },
            {
              "method": "PUT",
              "path": "/api/etiquetado/configuracion-paquete",
              "id": "ep-494"
            }
          ]
        }
      ]
    }
  ]
};
