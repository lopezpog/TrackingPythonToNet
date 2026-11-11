# TrackingPythonToNet

Herramienta **independiente de PetData** para controlar la migración Python → .NET.

No forma parte de `Backend/`, `Backend .net/` ni `Frontend/`.

## Uso

Abrir `index.html` directamente o publicar esta carpeta mediante GitHub Pages.

La pantalla permite:

- ver avance total, por grupo y por subgrupo;
- marcar cada endpoint con checkbox **Terminado**;
- filtrar por grupo, estado o texto;
- guardar automáticamente los checks en `localStorage` del navegador;
- exportar el estado a JSON;
- importar un estado JSON;
- reiniciar los checks sin modificar el inventario base.

## Persistencia

GitHub Pages es estático. Por seguridad, la página **no escribe commits ni usa tokens de GitHub**.

Los checks se guardan localmente en el navegador. Para respaldar el avance usa **Exportar estado** y conserva/commitea ese JSON cuando corresponda.

## Estructura

```text
TrackingPythonToNet/
├── index.html
├── styles.css
├── tracking-data.js
├── app.js
└── README.md
```

## Modelo de porcentaje

```text
TOTAL = promedio de grupos
  └── GRUPO = promedio de subgrupos
       └── SUBGRUPO = endpoints terminados / endpoints del subgrupo
```

Cada grupo pesa lo mismo dentro del total y cada subgrupo pesa lo mismo dentro de su grupo.
