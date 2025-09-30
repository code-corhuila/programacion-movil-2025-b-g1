# 🚀 GENERADOR UNIVERSAL DE BACKEND SPRING BOOT

## Instrucciones de Uso

Este prompt está diseñado para generar **CUALQUIER** backend Spring Boot completo con arquitectura empresarial robusta, usando únicamente la información de módulos, entidades y atributos. El sistema generará automáticamente toda la infraestructura necesaria.

## ⚡ Información Mínima Requerida

### 1. Configuración Básica del Proyecto
```
Nombre del proyecto: [Nombre de tu aplicación]
Paquete base: [com.empresa.proyecto]
Puerto: [Puerto de la aplicación - opcional, default: 8080]
Base de datos: [PostgreSQL/MySQL/H2 - opcional, default: PostgreSQL]
```

### 2. Módulos y Entidades
Define tus módulos con sus entidades y atributos usando esta sintaxis:

```
[MODULO_NOMBRE]:
  - [ENTIDAD_NOMBRE]:
      - [atributo1]: [TIPO] ([longitud], [constraints])
      - [atributo2]: [TIPO] ([longitud], [constraints])
      - [atributo3]: [TIPO] ([longitud], [constraints])
  - [OTRA_ENTIDAD]:
      - [atributo1]: [TIPO] ([longitud], [constraints])
      - [atributo2]: [TIPO] ([longitud], [constraints])
```

### 3. Tipos de Datos Soportados
- `String` - Texto
- `Integer` - Número entero
- `Long` - Número entero largo
- `Double` - Número decimal
- `Float` - Número decimal flotante
- `Boolean` - Verdadero/Falso
- `LocalDateTime` - Fecha y hora
- `LocalDate` - Solo fecha
- `LocalTime` - Solo hora
- `BigDecimal` - Número decimal de precisión alta
- `UUID` - Identificador único

### 4. Constraints Soportados
- `not null` - Campo obligatorio
- `unique` - Valor único
- `email` - Validación de email
- `phone` - Validación de teléfono
- `url` - Validación de URL
- `min(X)` - Valor mínimo
- `max(X)` - Valor máximo
- `size(min,max)` - Tamaño de texto
- `positive` - Número positivo
- `negative` - Número negativo
- `past` - Fecha pasada
- `future` - Fecha futura

## 📝 Ejemplos de Uso

### Ejemplo 1: Sistema de E-commerce
```
Nombre del proyecto: ECommerceSystem
Paquete base: com.ecommerce.system
Puerto: 8080
Base de datos: PostgreSQL

PRODUCTS:
  - Product:
      - name: String (100, not null)
      - description: String (500, not null)
      - price: BigDecimal (not null, positive)
      - stock: Integer (not null, min(0))
      - category: String (50, not null)
      - sku: String (20, unique, not null)
      - isActive: Boolean (not null)

  - Category:
      - name: String (50, unique, not null)
      - description: String (200, not null)
      - parentId: UUID (null)

USERS:
  - User:
      - email: String (100, unique, not null, email)
      - password: String (255, not null)
      - firstName: String (50, not null)
      - lastName: String (50, not null)
      - phone: String (15, phone)
      - isActive: Boolean (not null)
      - createdAt: LocalDateTime (not null)

  - Role:
      - name: String (50, unique, not null)
      - description: String (200, not null)

ORDERS:
  - Order:
      - orderNumber: String (20, unique, not null)
      - userId: UUID (not null)
      - totalAmount: BigDecimal (not null, positive)
      - status: String (20, not null)
      - orderDate: LocalDateTime (not null)
      - shippingAddress: String (500, not null)

  - OrderItem:
      - orderId: UUID (not null)
      - productId: UUID (not null)
      - quantity: Integer (not null, min(1))
      - unitPrice: BigDecimal (not null, positive)
```

### Ejemplo 2: Sistema de Gestión Hospitalaria
```
Nombre del proyecto: HospitalManagement
Paquete base: com.hospital.management
Puerto: 9090
Base de datos: MySQL

PATIENTS:
  - Patient:
      - patientId: String (20, unique, not null)
      - firstName: String (50, not null)
      - lastName: String (50, not null)
      - birthDate: LocalDate (not null, past)
      - gender: String (10, not null)
      - phone: String (15, phone)
      - email: String (100, email)
      - address: String (200, not null)
      - emergencyContact: String (100, not null)

  - MedicalRecord:
      - patientId: UUID (not null)
      - diagnosis: String (500, not null)
      - treatment: String (1000, not null)
      - recordDate: LocalDateTime (not null)
      - doctorId: UUID (not null)

STAFF:
  - Doctor:
      - licenseNumber: String (20, unique, not null)
      - firstName: String (50, not null)
      - lastName: String (50, not null)
      - specialization: String (100, not null)
      - phone: String (15, phone)
      - email: String (100, unique, email)
      - isActive: Boolean (not null)

  - Nurse:
      - employeeId: String (20, unique, not null)
      - firstName: String (50, not null)
      - lastName: String (50, not null)
      - department: String (50, not null)
      - phone: String (15, phone)
      - email: String (100, unique, email)
      - isActive: Boolean (not null)

APPOINTMENTS:
  - Appointment:
      - appointmentId: String (20, unique, not null)
      - patientId: UUID (not null)
      - doctorId: UUID (not null)
      - appointmentDate: LocalDateTime (not null, future)
      - status: String (20, not null)
      - notes: String (500, null)
```

## 🎯 Resultado Esperado

Con esta información mínima, el sistema generará automáticamente:

### 🏗️ **Infraestructura Completa**
1. **Estructura de proyecto Maven** con todas las dependencias necesarias
2. **Configuración Spring Boot** completa (application.properties/yml)
3. **Configuración de base de datos** automática según el tipo seleccionado
4. **Configuración de seguridad** básica con JWT
5. **Configuración de CORS** para desarrollo frontend
6. **Configuración de logging** con Logback
7. **🧪 Configuración completa de Testing** con todas las dependencias
8. **Configuración de JaCoCo** para cobertura de código
9. **Configuración de TestContainers** para tests de integración
10. **Configuración de H2** para tests unitarios rápidos

### 📦 **Arquitectura en Capas**
1. **Clases base abstractas** reutilizables:
   - `ABaseEntity` - Entidad base con auditoría completa
   - `ABaseController` - Controlador base con CRUD completo
   - `ABaseService` - Servicio base con lógica común
   - `ABaseRepository` - Repositorio base con JPA
   - `ABaseMapper` - Mapper base para DTOs
   - `ABaseValidator` - Validador base personalizado

2. **Por cada módulo generado**:
   - **Entidades JPA** con todas las anotaciones y validaciones
   - **DTOs** (Request/Response) con validaciones Bean Validation
   - **Mappers** para conversión entre entidades y DTOs
   - **Repositorios** con métodos personalizados según necesidades
   - **Servicios** con lógica de negocio completa
   - **Controladores REST** con endpoints CRUD + endpoints personalizados
   - **Validadores personalizados** para reglas de negocio complejas

### 🔧 **Funcionalidades Automáticas**
1. **CRUD completo** para todas las entidades
2. **Soft Delete** implementado en todas las entidades
3. **Auditoría completa** (createdBy, updatedBy, deletedBy, timestamps)
4. **Validaciones automáticas** basadas en constraints definidos
5. **Manejo de errores** estandarizado con GlobalExceptionHandler
6. **Paginación** automática en endpoints de listado
7. **Filtros y búsquedas** dinámicas
8. **Respuestas estandarizadas** con ApiResponseDto
9. **Documentación Swagger/OpenAPI** automática
10. **🧪 TESTS UNITARIOS COMPLETOS** para todas las capas
11. **Tests de integración** para endpoints REST
12. **Tests de validación** para DTOs y entidades
13. **Tests de repositorio** con @DataJpaTest
14. **Tests de servicio** con mocks y stubs
15. **Tests de controlador** con @WebMvcTest
16. **Cobertura de código** automática con JaCoCo
17. **Tests de performance** básicos
18. **Tests de seguridad** para endpoints protegidos

### 🛡️ **Seguridad y Validaciones**
1. **Validaciones Bean Validation** automáticas
2. **Validadores personalizados** para reglas complejas
3. **Manejo de excepciones** robusto
4. **Logging** estructurado para debugging
5. **Configuración de seguridad** básica
6. **CORS** configurado para desarrollo

### 📊 **Base de Datos**
1. **Scripts de creación** de esquemas automáticos
2. **Migraciones** con Flyway/Liquibase
3. **Índices** automáticos para campos únicos y búsquedas frecuentes
4. **Constraints** de base de datos basados en validaciones
5. **Datos de prueba** (opcional)

### 📚 **Documentación**
1. **README.md** completo con instrucciones
2. **API Documentation** con Swagger UI
3. **Diagramas de arquitectura** generados
4. **Guía de desarrollo** para el equipo
5. **Ejemplos de uso** de la API

### 🧪 **Testing Completo Automatizado**

#### **Tests Unitarios por Capa:**
1. **Tests de Entidades** (`@Entity` classes):
   - Validaciones de campos obligatorios
   - Validaciones de constraints personalizados
   - Tests de getters/setters
   - Tests de equals/hashCode
   - Tests de toString

2. **Tests de DTOs** (Request/Response DTOs):
   - Validaciones Bean Validation
   - Tests de serialización/deserialización JSON
   - Tests de mappers DTO ↔ Entity
   - Validaciones de campos opcionales/obligatorios

3. **Tests de Repositorios** (`@DataJpaTest`):
   - Tests de métodos CRUD básicos
   - Tests de queries personalizadas
   - Tests de soft delete
   - Tests de búsquedas dinámicas
   - Tests de paginación
   - Tests de ordenamiento

4. **Tests de Servicios** (`@ExtendWith(MockitoExtension.class)`):
   - Tests de lógica de negocio
   - Tests con mocks de repositorios
   - Tests de validaciones de negocio
   - Tests de manejo de excepciones
   - Tests de transacciones
   - Tests de auditoría

5. **Tests de Controladores** (`@WebMvcTest`):
   - Tests de todos los endpoints CRUD
   - Tests de validaciones de entrada
   - Tests de respuestas HTTP
   - Tests de códigos de estado
   - Tests de headers de respuesta
   - Tests de CORS

6. **Tests de Integración** (`@SpringBootTest`):
   - Tests end-to-end de flujos completos
   - Tests de base de datos real
   - Tests de configuración Spring
   - Tests de seguridad
   - Tests de performance básicos

#### **Herramientas de Testing Incluidas:**
- **JUnit 5** - Framework principal de testing
- **Mockito** - Para mocks y stubs
- **AssertJ** - Para assertions fluidas
- **TestContainers** - Para tests de integración con BD real
- **WireMock** - Para mocks de servicios externos
- **JaCoCo** - Para cobertura de código
- **Testcontainers** - Para tests con PostgreSQL/MySQL real
- **Spring Boot Test** - Para tests de integración
- **H2 Database** - Para tests unitarios rápidos

#### **Cobertura de Testing:**
- **Cobertura mínima**: 80% de líneas de código
- **Cobertura de ramas**: 70% de ramas condicionales
- **Cobertura de métodos**: 90% de métodos públicos
- **Cobertura de clases**: 100% de clases públicas

#### **Tests Generados Automáticamente:**
```
src/test/java/
├── com/empresa/proyecto/
│   ├── [ModuleName]/
│   │   ├── controller/
│   │   │   ├── [Entity]ControllerTest.java
│   │   │   └── [Entity]ControllerIntegrationTest.java
│   │   ├── service/
│   │   │   ├── [Entity]ServiceTest.java
│   │   │   └── [Entity]ServiceIntegrationTest.java
│   │   ├── repository/
│   │   │   ├── [Entity]RepositoryTest.java
│   │   │   └── [Entity]RepositoryIntegrationTest.java
│   │   ├── dto/
│   │   │   ├── [Entity]RequestDtoTest.java
│   │   │   └── [Entity]ResponseDtoTest.java
│   │   ├── entity/
│   │   │   └── [Entity]Test.java
│   │   └── mapper/
│   │       └── [Entity]MapperTest.java
│   ├── config/
│   │   ├── SecurityConfigTest.java
│   │   └── DatabaseConfigTest.java
│   ├── util/
│   │   └── TestDataBuilder.java
│   └── [ProjectName]ApplicationTests.java
```

#### **Dependencias Maven para Testing:**
```xml
<dependencies>
    <!-- Testing Dependencies -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
    
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter</artifactId>
        <scope>test</scope>
    </dependency>
    
    <dependency>
        <groupId>org.mockito</groupId>
        <artifactId>mockito-core</artifactId>
        <scope>test</scope>
    </dependency>
    
    <dependency>
        <groupId>org.mockito</groupId>
        <artifactId>mockito-junit-jupiter</artifactId>
        <scope>test</scope>
    </dependency>
    
    <dependency>
        <groupId>org.assertj</groupId>
        <artifactId>assertj-core</artifactId>
        <scope>test</scope>
    </dependency>
    
    <dependency>
        <groupId>org.testcontainers</groupId>
        <artifactId>junit-jupiter</artifactId>
        <scope>test</scope>
    </dependency>
    
    <dependency>
        <groupId>org.testcontainers</groupId>
        <artifactId>postgresql</artifactId>
        <scope>test</scope>
    </dependency>
    
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <scope>test</scope>
    </dependency>
    
    <dependency>
        <groupId>org.wiremock</groupId>
        <artifactId>wiremock-standalone</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>

<build>
    <plugins>
        <!-- JaCoCo Plugin for Code Coverage -->
        <plugin>
            <groupId>org.jacoco</groupId>
            <artifactId>jacoco-maven-plugin</artifactId>
            <version>0.8.8</version>
            <executions>
                <execution>
                    <goals>
                        <goal>prepare-agent</goal>
                    </goals>
                </execution>
                <execution>
                    <id>report</id>
                    <phase>test</phase>
                    <goals>
                        <goal>report</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
        
        <!-- Surefire Plugin for Unit Tests -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-surefire-plugin</artifactId>
            <version>3.0.0-M9</version>
            <configuration>
                <includes>
                    <include>**/*Test.java</include>
                    <include>**/*Tests.java</include>
                </includes>
            </configuration>
        </plugin>
        
        <!-- Failsafe Plugin for Integration Tests -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-failsafe-plugin</artifactId>
            <version>3.0.0-M9</version>
            <executions>
                <execution>
                    <goals>
                        <goal>integration-test</goal>
                        <goal>verify</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```

#### **Configuración de Testing:**
```properties
# application-test.properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.show-sql=false
logging.level.org.springframework.test=DEBUG
logging.level.org.testcontainers=DEBUG

# TestContainers Configuration
testcontainers.reuse.enable=true
```

#### **Ejemplos de Tests Generados:**

**Test de Controlador:**
```java
@WebMvcTest(UserController.class)
class UserControllerTest {
    
    @Test
    void shouldCreateUser_WhenValidData() throws Exception {
        // Given
        UserRequestDto userDto = TestDataBuilder.createUserRequestDto();
        
        // When & Then
        mockMvc.perform(post("/api/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(userDto)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.success").value(true))
                .andExpect(jsonPath("$.data.name").value(userDto.getName()));
    }
}
```

**Test de Servicio:**
```java
@ExtendWith(MockitoExtension.class)
class UserServiceTest {
    
    @Test
    void shouldThrowException_WhenUserNotFound() {
        // Given
        String userId = "non-existent-id";
        when(userRepository.findById(userId)).thenReturn(Optional.empty());
        
        // When & Then
        assertThatThrownBy(() -> userService.findById(userId))
                .isInstanceOf(EntityNotFoundException.class)
                .hasMessage("User not found with id: " + userId);
    }
}
```

**Test de Repositorio:**
```java
@DataJpaTest
class UserRepositoryTest {
    
    @Test
    void shouldFindByEmail_WhenEmailExists() {
        // Given
        User user = TestDataBuilder.createUser();
        userRepository.save(user);
        
        // When
        Optional<User> found = userRepository.findByEmail(user.getEmail());
        
        // Then
        assertThat(found).isPresent();
        assertThat(found.get().getEmail()).isEqualTo(user.getEmail());
    }
}
```

#### **TestDataBuilder Generado Automáticamente:**
```java
@Component
public class TestDataBuilder {
    
    // User Entity Builder
    public static User createUser() {
        User user = new User();
        user.setEmail("test@example.com");
        user.setName("Test User");
        user.setAge(25);
        user.setActive(true);
        return user;
    }
    
    public static User createUserWithEmail(String email) {
        User user = createUser();
        user.setEmail(email);
        return user;
    }
    
    public static User createInactiveUser() {
        User user = createUser();
        user.setActive(false);
        return user;
    }
    
    // UserRequestDto Builder
    public static UserRequestDto createUserRequestDto() {
        UserRequestDto dto = new UserRequestDto();
        dto.setEmail("test@example.com");
        dto.setName("Test User");
        dto.setAge(25);
        return dto;
    }
    
    // UserResponseDto Builder
    public static UserResponseDto createUserResponseDto() {
        UserResponseDto dto = new UserResponseDto();
        dto.setId("test-id");
        dto.setEmail("test@example.com");
        dto.setName("Test User");
        dto.setAge(25);
        dto.setActive(true);
        return dto;
    }
    
    // List Builders
    public static List<User> createUserList(int count) {
        return IntStream.range(0, count)
                .mapToObj(i -> createUserWithEmail("user" + i + "@example.com"))
                .collect(Collectors.toList());
    }
    
    // Random Data Builders
    public static User createRandomUser() {
        User user = new User();
        user.setEmail("user" + System.currentTimeMillis() + "@example.com");
        user.setName("User " + System.currentTimeMillis());
        user.setAge(18 + (int) (Math.random() * 50));
        user.setActive(true);
        return user;
    }
}
```

#### **Tests de Validación de DTOs:**
```java
class UserRequestDtoTest {
    
    private Validator validator;
    
    @BeforeEach
    void setUp() {
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        validator = factory.getValidator();
    }
    
    @Test
    void shouldBeValid_WhenAllFieldsAreCorrect() {
        // Given
        UserRequestDto dto = TestDataBuilder.createUserRequestDto();
        
        // When
        Set<ConstraintViolation<UserRequestDto>> violations = validator.validate(dto);
        
        // Then
        assertThat(violations).isEmpty();
    }
    
    @Test
    void shouldBeInvalid_WhenEmailIsNull() {
        // Given
        UserRequestDto dto = TestDataBuilder.createUserRequestDto();
        dto.setEmail(null);
        
        // When
        Set<ConstraintViolation<UserRequestDto>> violations = validator.validate(dto);
        
        // Then
        assertThat(violations).hasSize(1);
        assertThat(violations.iterator().next().getMessage())
                .contains("Email is required");
    }
    
    @Test
    void shouldBeInvalid_WhenEmailFormatIsWrong() {
        // Given
        UserRequestDto dto = TestDataBuilder.createUserRequestDto();
        dto.setEmail("invalid-email");
        
        // When
        Set<ConstraintViolation<UserRequestDto>> violations = validator.validate(dto);
        
        // Then
        assertThat(violations).hasSize(1);
        assertThat(violations.iterator().next().getMessage())
                .contains("Invalid email format");
    }
}
```

## 🏛️ Características de la Arquitectura Generada

### 🎨 **Patrones de Diseño Implementados**
- **Template Method Pattern** - Clases base reutilizables
- **Repository Pattern** - Abstracción de acceso a datos
- **Service Layer Pattern** - Separación de lógica de negocio
- **DTO Pattern** - Transferencia de datos optimizada
- **Builder Pattern** - Construcción de objetos complejos
- **Factory Pattern** - Creación de objetos dinámicos
- **Strategy Pattern** - Algoritmos intercambiables
- **Observer Pattern** - Notificaciones y eventos
- **Command Pattern** - Operaciones encapsuladas

### ⚡ **Características Técnicas Avanzadas**
- **Soft Delete** con auditoría completa automática
- **Validaciones Bean Validation** + validadores personalizados
- **Manejo de errores** con GlobalExceptionHandler
- **Documentación OpenAPI 3.0** automática con Swagger UI
- **Respuestas estandarizadas** con ApiResponseDto genérico
- **Configuración modular** por módulo independiente
- **Esquemas de BD** separados con migraciones automáticas
- **Caché** con Redis (opcional)
- **Métricas** con Micrometer y Actuator
- **Health Checks** automáticos
- **Profiling** con Spring Boot DevTools

### 📡 **Endpoints Generados Automáticamente**

#### **CRUD Básico** (para cada entidad):
```
GET    /api/{module}/{entity}           - Listar todos (paginado)
GET    /api/{module}/{entity}/{id}      - Obtener por ID
POST   /api/{module}/{entity}           - Crear nuevo
PUT    /api/{module}/{entity}/{id}      - Actualizar completo
PATCH  /api/{module}/{entity}/{id}      - Actualizar parcial
DELETE /api/{module}/{entity}/{id}      - Eliminar (soft delete)
```

#### **Endpoints Avanzados** (generados automáticamente):
```
GET    /api/{module}/{entity}/search    - Búsqueda dinámica
GET    /api/{module}/{entity}/filter    - Filtros avanzados
GET    /api/{module}/{entity}/export    - Exportar datos
POST   /api/{module}/{entity}/bulk      - Operaciones masivas
GET    /api/{module}/{entity}/stats     - Estadísticas
```

### 🔍 **Estructura de Respuestas Estandarizada**
```json
{
  "success": true,
  "message": "Operación exitosa",
  "data": { /* datos de respuesta */ },
  "timestamp": "2024-01-01T10:00:00Z",
  "path": "/api/module/entity",
  "status": 200
}
```

### 🚨 **Manejo de Errores Estandarizado**
```json
{
  "success": false,
  "message": "Error en la operación",
  "errors": [
    {
      "field": "email",
      "message": "El email es obligatorio",
      "rejectedValue": null
    }
  ],
  "timestamp": "2024-01-01T10:00:00Z",
  "path": "/api/module/entity",
  "status": 400
}
```

### 🗄️ **Configuración de Base de Datos Automática**

#### **PostgreSQL** (por defecto):
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/{project_name}
spring.datasource.username=postgres
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=validate
spring.jpa.show-sql=true
```

#### **MySQL**:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/{project_name}
spring.datasource.username=root
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=validate
```

#### **H2** (para desarrollo):
```properties
spring.datasource.url=jdbc:h2:mem:{project_name}
spring.h2.console.enabled=true
```

### 🔐 **Seguridad Implementada**
- **JWT Authentication** automática
- **Role-based Authorization** (RBAC)
- **CORS** configurado para desarrollo
- **CSRF Protection** habilitado
- **Password Encryption** con BCrypt
- **Rate Limiting** básico
- **Input Validation** exhaustiva

### 📊 **Monitoreo y Observabilidad**
- **Health Endpoints** (`/actuator/health`)
- **Metrics** (`/actuator/metrics`)
- **Logs** estructurados con Logback
- **Tracing** con Sleuth (opcional)
- **Profiling** con DevTools

## 🚀 Instrucciones de Uso

### **Paso 1: Preparar la Información**
1. **Define tu proyecto** con nombre y paquete base
2. **Lista tus módulos** y sus entidades
3. **Especifica atributos** con tipos y validaciones
4. **Copia el formato** de los ejemplos mostrados

### **Paso 2: Ejecutar el Prompt**
1. **Pega este prompt completo** en tu herramienta de IA
2. **Agrega tu información** al final del prompt
3. **Ejecuta** y espera la generación completa
4. **Descarga** todos los archivos generados

### **Paso 3: Configurar el Proyecto**
1. **Crea el proyecto** con la estructura generada
2. **Configura la base de datos** según las instrucciones
3. **Ejecuta las migraciones** automáticas
4. **Inicia la aplicación** y verifica funcionamiento

### **Paso 4: Desarrollo**
1. **Personaliza** según necesidades específicas
2. **Agrega lógica de negocio** adicional
3. **Implementa** funcionalidades específicas
4. **Extiende** con nuevos módulos si es necesario

## ⚠️ Notas Importantes

### ✅ **Lo que SÍ incluye automáticamente:**
- **Arquitectura completa** con todas las capas
- **Validaciones automáticas** basadas en constraints
- **Manejo de errores** robusto y estandarizado
- **Documentación API** completa con Swagger
- **🧪 TESTS UNITARIOS COMPLETOS** para todas las capas
- **Tests de integración** end-to-end
- **Tests de validación** para DTOs y entidades
- **Tests de repositorio** con base de datos real
- **Tests de controlador** con MockMvc
- **Tests de servicio** con mocks y stubs
- **Cobertura de código** automática con JaCoCo
- **Configuración de seguridad** básica
- **Soft delete** y auditoría en todas las entidades
- **Respuestas estandarizadas** para toda la API
- **Paginación** automática en listados
- **Búsquedas dinámicas** por cualquier campo
- **Filtros avanzados** automáticos
- **Operaciones masivas** (bulk operations)
- **Exportación de datos** en múltiples formatos
- **Métricas y monitoreo** con Actuator
- **Health checks** automáticos
- **Logging estructurado** para debugging

### 🔧 **Lo que puedes personalizar después:**
- **Lógica de negocio** específica
- **Validaciones personalizadas** complejas
- **Endpoints adicionales** específicos
- **Integraciones** con servicios externos
- **Configuraciones** de seguridad avanzadas
- **Templates** de respuestas personalizadas
- **Algoritmos** de búsqueda específicos

### 🎯 **Casos de Uso Ideales:**
- **Sistemas empresariales** con múltiples módulos
- **APIs REST** complejas con validaciones
- **Aplicaciones de gestión** con auditoría
- **Sistemas multi-tenant** con esquemas separados
- **Microservicios** independientes
- **APIs de integración** con documentación automática

## 📋 **Checklist de Verificación**

Después de generar tu backend, verifica que tengas:

### 🏗️ **Infraestructura Base**
- [ ] **Estructura de proyecto** Maven completa
- [ ] **Configuración** de base de datos funcional
- [ ] **Dependencias de testing** incluidas (JUnit 5, Mockito, AssertJ, TestContainers)
- [ ] **Configuración JaCoCo** para cobertura de código
- [ ] **Configuración H2** para tests unitarios

### 🧪 **Testing Completo**
- [ ] **Tests de entidades** con validaciones
- [ ] **Tests de DTOs** con Bean Validation
- [ ] **Tests de repositorios** con @DataJpaTest
- [ ] **Tests de servicios** con mocks
- [ ] **Tests de controladores** con @WebMvcTest
- [ ] **Tests de integración** end-to-end
- [ ] **Tests de seguridad** para endpoints protegidos
- [ ] **Cobertura de código** ≥ 80%
- [ ] **Tests ejecutándose** sin errores
- [ ] **TestDataBuilder** para datos de prueba

### 🚀 **Funcionalidades Core**
- [ ] **Todas las entidades** con validaciones
- [ ] **Controladores REST** con endpoints CRUD
- [ ] **Servicios** con lógica de negocio
- [ ] **Repositorios** con métodos personalizados
- [ ] **DTOs** con validaciones Bean Validation
- [ ] **Mappers** para conversión de datos
- [ ] **Manejo de errores** estandarizado
- [ ] **Soft delete** funcionando
- [ ] **Auditoría** registrándose correctamente

### 🔍 **API y Documentación**
- [ ] **Documentación Swagger** accesible
- [ ] **Validaciones** funcionando en todos los endpoints
- [ ] **Paginación** en endpoints de listado
- [ ] **Búsquedas dinámicas** operativas
- [ ] **Filtros avanzados** funcionando
- [ ] **Operaciones masivas** (bulk) operativas
- [ ] **Exportación de datos** funcionando

### 🛡️ **Seguridad y Monitoreo**
- [ ] **Health checks** respondiendo
- [ ] **Logs** estructurados apareciendo
- [ ] **CORS** configurado para frontend
- [ ] **Seguridad básica** implementada
- [ ] **Métricas** con Actuator funcionando
- [ ] **Rate limiting** configurado

### 🎯 **Comandos de Verificación**
```bash
# Ejecutar todos los tests
./mvnw test

# Ejecutar tests con cobertura
./mvnw clean test jacoco:report

# Ejecutar tests de integración
./mvnw verify

# Verificar cobertura de código
open target/site/jacoco/index.html

# Ejecutar aplicación y verificar health
./mvnw spring-boot:run
curl http://localhost:8080/actuator/health
```

---

## 🎉 **¡Listo para Usar!**

Con este prompt mejorado, puedes generar **CUALQUIER** backend Spring Boot completo con solo definir tus módulos, entidades y atributos. El sistema se encarga de todo lo demás automáticamente.

**Desarrollado por**: SENA - Análisis y Desarrollo de Software  
**Versión**: 2.0 - Universal Backend Generator  
**Fecha**: 2024
