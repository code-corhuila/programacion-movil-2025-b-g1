# Flight Management System

## Descripción General

El **Flight Management System** es una aplicación Spring Boot desarrollada en Java 17 que implementa un sistema de gestión de vuelos con arquitectura modular y patrones de diseño robustos. El sistema está diseñado para manejar múltiples aspectos de la gestión aeronáutica incluyendo aeronaves, vuelos, personal, geolocalización, infraestructura, notificaciones, servicios de pasajeros, seguridad y parametrización.

## Arquitectura del Sistema

### Tecnologías Utilizadas

- **Java 17**
- **Spring Boot 3.5.5**
- **Spring Data JPA**
- **PostgreSQL** (Base de datos)
- **Maven** (Gestión de dependencias)
- **SpringDoc OpenAPI 2.0.4** (Documentación de API)
- **Spring Boot DevTools** (Herramientas de desarrollo)

### Patrón Arquitectónico

El sistema implementa una **arquitectura en capas (Layered Architecture)** con los siguientes componentes:

```
┌─────────────────────────────────────────────────────────────┐
│                    PRESENTATION LAYER                      │
│  Controllers (REST API Endpoints)                          │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                     BUSINESS LAYER                         │
│  Services (Business Logic)                                 │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                    PERSISTENCE LAYER                       │
│  Repositories (Data Access)                                │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                      DATABASE LAYER                        │
│  PostgreSQL Database                                       │
└─────────────────────────────────────────────────────────────┘
```

## Estructura Modular

El sistema está organizado en **9 módulos principales**, cada uno con su propia responsabilidad:

### 1. **AircraftManagement** (Gestión de Aeronaves)
- **Entidad**: `Arcraft`
- **Esquema DB**: `aircraft_management`
- **Responsabilidad**: Gestión de aeronaves del sistema

### 2. **Flight** (Gestión de Vuelos)
- **Entidad**: `ABaseEntity` (Base para entidades de vuelo)
- **Esquema DB**: `flight`
- **Responsabilidad**: Gestión de vuelos y operaciones relacionadas

### 3. **Geolocation** (Geolocalización)
- **Entidad**: `ABaseEntity` (Base para entidades de geolocalización)
- **Esquema DB**: `geolocation`
- **Responsabilidad**: Gestión de ubicaciones geográficas

### 4. **HumanResources** (Recursos Humanos)
- **Entidad**: `ABaseEntity` (Base para entidades de RRHH)
- **Esquema DB**: `human_resources`
- **Responsabilidad**: Gestión del personal y tripulación

### 5. **Infrastructure** (Infraestructura)
- **Entidad**: `ABaseEntity` (Base para entidades de infraestructura)
- **Esquema DB**: `infrastructure`
- **Responsabilidad**: Gestión de infraestructura aeroportuaria

### 6. **Notifications** (Notificaciones)
- **Entidad**: `ABaseEntity` (Base para entidades de notificaciones)
- **Esquema DB**: `notifications`
- **Responsabilidad**: Sistema de notificaciones

### 7. **Parameterization** (Parametrización) ⭐
- **Entidades**:
  - `AircraftType` (Tipos de aeronaves)
  - `CrewRole` (Roles de tripulación)
  - `DocumentType` (Tipos de documentos)
  - `FlightType` (Tipos de vuelos)
  - `TicketClass` (Clases de boletos)
- **Esquema DB**: `parameterization`
- **Responsabilidad**: Configuración y parámetros del sistema

### 8. **PassengersServices** (Servicios de Pasajeros)
- **Entidad**: `ABaseEntity` (Base para entidades de servicios)
- **Esquema DB**: `passengers_services`
- **Responsabilidad**: Servicios ofrecidos a pasajeros

### 9. **Security** (Seguridad)
- **Entidad**: `ABaseEntity` (Base para entidades de seguridad)
- **Esquema DB**: `security`
- **Responsabilidad**: Autenticación y autorización

## Patrones de Diseño Implementados

### 1. **Template Method Pattern**
Cada módulo implementa clases base abstractas que definen la estructura común:

- `ABaseEntity`: Entidad base con campos comunes
- `ABaseController`: Controlador base con operaciones CRUD
- `ABaseService`: Servicio base con lógica de negocio común
- `ABaseRepository`: Repositorio base para acceso a datos
- `ABaseUtils`: Utilidades base del módulo

### 2. **Repository Pattern**
Interfaces de repositorio que extienden `JpaRepository` para operaciones de base de datos.

### 3. **Service Layer Pattern**
Capa de servicios que encapsula la lógica de negocio y actúa como intermediario entre controladores y repositorios.

### 4. **DTO Pattern**
Uso de `ApiResponseDto<T>` para respuestas estandarizadas de la API.

## Estructura de Entidades

### Entidad Base (`ABaseEntity`)

Todas las entidades extienden de `ABaseEntity` que incluye:

```java
- id: String (UUID, Primary Key)
- status: Boolean (Estado activo/inactivo)
- createdAt: LocalDateTime (Fecha de creación)
- updatedAt: LocalDateTime (Fecha de actualización)
- deletedAt: LocalDateTime (Fecha de eliminación lógica)
- createdBy: String (Usuario que creó)
- updatedBy: String (Usuario que modificó)
- deletedBy: String (Usuario que eliminó)
```

### Entidad de Parametrización (`ABaseEntityParameterization`)

Las entidades de parametrización extienden de `ABaseEntityParameterization` que incluye:

```java
- code: String (Código único, 10 caracteres)
- name: String (Nombre, 100 caracteres)
- description: String (Descripción, 255 caracteres)
```

## Configuración de Base de Datos

### PostgreSQL Configuration
```properties
spring.datasource.url = jdbc:postgresql://127.0.0.1:5432/flight_management
spring.datasource.username = postgres
spring.datasource.password = abcd1234
spring.jpa.hibernate.ddl-auto = create-drop
spring.jpa.show-sql = true
```

### Esquemas de Base de Datos
Cada módulo utiliza su propio esquema:
- `aircraft_management`
- `flight`
- `geolocation`
- `human_resources`
- `infrastructure`
- `notifications`
- `parameterization`
- `passengers_services`
- `security`

## API REST

### Endpoints Comunes
Cada módulo expone los siguientes endpoints estándar:

- `GET /api/{ModuleName}` - Obtener todos los registros activos
- `GET /api/{ModuleName}/{id}` - Obtener registro por ID
- `POST /api/{ModuleName}` - Crear nuevo registro
- `PUT /api/{ModuleName}/{id}` - Actualizar registro
- `DELETE /api/{ModuleName}/{id}` - Eliminar registro (soft delete)

### Documentación API
- **Swagger UI**: `http://localhost:9000/swagger-ui.html`
- **API Docs**: `http://localhost:9000/api-docs`

## Configuración del Servidor

```properties
server.port = 9000
spring.application.name = FlightManagementSystem
```

## Estructura de Proyecto

```
src/main/java/com/SENA/FlightManagementSystem/
├── AircraftManagement/
│   ├── Controller/
│   ├── Entity/
│   ├── IRepository/
│   ├── IService/
│   ├── Service/
│   └── Utils/
├── Flight/
├── Geolocation/
├── HumanResources/
├── Infrastructure/
├── Notifications/
├── Parameterization/
│   ├── Controller/
│   │   ├── ABaseController.java
│   │   ├── AircraftTypeController.java
│   │   ├── CrewRoleController.java
│   │   ├── DocumentTypeController.java
│   │   ├── FlightTypeController.java
│   │   └── TicketClassController.java
│   ├── DTO/
│   │   └── ApiResponseDto.java
│   ├── Entity/
│   │   ├── ABaseEntity.java
│   │   ├── ABaseEntityParameterization.java
│   │   ├── AircraftType.java
│   │   ├── CrewRole.java
│   │   ├── DocumentType.java
│   │   ├── FlightType.java
│   │   └── TicketClass.java
│   ├── IRepository/
│   ├── IService/
│   ├── Service/
│   └── Utils/
├── PassengersServices/
├── Security/
└── FlightManagementSystemApplication.java
```

## Características Técnicas

### Soft Delete
El sistema implementa eliminación lógica mediante el campo `deletedAt`.

### Auditoría
Todas las entidades incluyen campos de auditoría:
- Usuario que creó (`createdBy`)
- Usuario que modificó (`updatedBy`)
- Usuario que eliminó (`deletedBy`)
- Fechas de creación, modificación y eliminación

### Validaciones
- Campos obligatorios definidos con `@Column(nullable = false)`
- Longitudes máximas especificadas
- Códigos únicos para entidades de parametrización

### Respuestas Estandarizadas
Todas las respuestas de la API utilizan `ApiResponseDto<T>` con:
- `status`: Boolean (éxito/error)
- `data`: T (datos de respuesta)
- `message`: String (mensaje descriptivo)

## Instalación y Ejecución

### Prerrequisitos
- Java 17 o superior
- Maven 3.6+
- PostgreSQL 12+

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd FlightManagementSystem
```

2. **Configurar la base de datos**
```sql
CREATE DATABASE flight_management;
```

3. **Configurar application.properties**
```properties
spring.datasource.url = jdbc:postgresql://localhost:5432/flight_management
spring.datasource.username = tu_usuario
spring.datasource.password = tu_contraseña
```

4. **Ejecutar la aplicación**
```bash
./mvnw spring-boot:run
```

5. **Acceder a la documentación**
- Swagger UI: `http://localhost:9000/swagger-ui.html`

## Desarrollo

### Agregar un Nuevo Módulo

1. Crear la estructura de carpetas siguiendo el patrón existente
2. Implementar las clases base:
   - `ABaseEntity` (si es necesario)
   - `ABaseController`
   - `ABaseService`
   - `ABaseRepository`
3. Crear la entidad específica
4. Implementar el controlador específico
5. Configurar el esquema de base de datos

### Convenciones de Código

- **Naming**: PascalCase para clases, camelCase para métodos y variables
- **Packages**: Estructura modular por funcionalidad
- **Anotaciones**: Uso consistente de Spring y JPA annotations
- **Documentación**: JavaDoc para métodos públicos

## Licencia

Este proyecto está bajo la licencia Apache 2.0.

## Contacto

Desarrollado por SENA - Análisis y Desarrollo de Software.
