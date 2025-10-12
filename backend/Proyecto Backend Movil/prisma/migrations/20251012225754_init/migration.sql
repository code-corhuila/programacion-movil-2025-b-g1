-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fechaRegistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Documento" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "fechaCarga" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "Documento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flashcard" (
    "id" SERIAL NOT NULL,
    "pregunta" TEXT NOT NULL,
    "respuesta" TEXT NOT NULL,
    "tema" TEXT,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "documentoId" INTEGER NOT NULL,

    CONSTRAINT "Flashcard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Progreso" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "flashcardId" INTEGER NOT NULL,
    "intentos" INTEGER NOT NULL DEFAULT 0,
    "aciertos" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Progreso_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Progreso_usuarioId_flashcardId_key" ON "Progreso"("usuarioId", "flashcardId");

-- AddForeignKey
ALTER TABLE "Documento" ADD CONSTRAINT "Documento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flashcard" ADD CONSTRAINT "Flashcard_documentoId_fkey" FOREIGN KEY ("documentoId") REFERENCES "Documento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Progreso" ADD CONSTRAINT "Progreso_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Progreso" ADD CONSTRAINT "Progreso_flashcardId_fkey" FOREIGN KEY ("flashcardId") REFERENCES "Flashcard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
