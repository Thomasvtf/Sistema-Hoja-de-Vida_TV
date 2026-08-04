function Vista ({ persona }) {
    return (
        <div className="vista">
            <h2>Vista previa</h2>
            <h4 className="text-center">Datos Academicos</h4>
            <p className="img text-center">{persona.foto && <img src={persona.foto} alt="Foto" 
                style={{
                    width: '200px',
                    height: '200px',
                    'border-radius': '100%',
                    'border': '2px solid #ffffff',
                }} />}</p>

            <p><strong>Nombre:</strong> {persona.nombre}</p>
            <p><strong>Edad:</strong> {persona.edad}</p>
            <p><strong>Ciudad:</strong> {persona.ciudad}</p>
            <p><strong>Programa:</strong> {persona.programa}</p>
            <p><strong>Correo:</strong> {persona.correo}</p>
            <p><strong>Ficha:</strong> {persona.ficha}</p>
            <p><strong>Jornada:</strong> {persona.jornada}</p>
            <h4 className="text-center">Datos de Estudios</h4>
            <p><strong>Nivel:</strong> {persona.nivel}</p>
            <p><strong>Institución:</strong> {persona.institucion}</p>
            <p><strong>Título:</strong> {persona.titulo}</p>
            <p><strong>Año de Graduación:</strong> {persona.anio}</p>
            <p><strong>Cursos:</strong> {persona.cursos}</p>
            <h4 className="text-center">Datos de Experiencia</h4>
            <p><strong>Empresa:</strong> {persona.empresa}</p>
            <p><strong>Cargo:</strong> {persona.cargo}</p>
            <p><strong>Experiencia:</strong> {persona.experiencia}</p>
            <p><strong>Funciones:</strong> {persona.funciones}</p>
            <p><strong>Habilidades:</strong> {persona.habilidades}</p>
        </div>
    )
}

export default Vista