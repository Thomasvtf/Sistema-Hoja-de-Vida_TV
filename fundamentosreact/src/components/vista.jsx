function Vista ({ persona, anterior, guardar_hoja_Vida }) {
    return (
        <div className="vista">
            <h2>Vista previa</h2>
            
            {/* --- SECCIÓN 1: DATOS PERSONALES --- */}
            <h4 className="text-center">Datos Académicos</h4>
            <p className="img text-center">
                {persona.foto && (
                    <img 
                        src={persona.foto} 
                        alt="Foto" 
                        style={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '100%', // CORREGIDO: En React se usa camelCase para los estilos
                            border: '2px solid #ffffff',
                        }} 
                    />
                )}
            </p>

            <p><strong>Nombre:</strong> {persona.nombre}</p>
            <p><strong>Edad:</strong> {persona.edad}</p>
            <p><strong>Ciudad:</strong> {persona.ciudad}</p>
            <p><strong>Programa:</strong> {persona.programa}</p>
            <p><strong>Correo:</strong> {persona.correo}</p>
            <p><strong>Ficha:</strong> {persona.ficha}</p>
            <p><strong>Jornada:</strong> {persona.jornada}</p>

            {/* --- SECCIÓN 2: DATOS DE ESTUDIOS --- */}
            <h4 className="text-center">Datos de Estudios</h4>
            <p><strong>Nivel:</strong> {persona.nivel}</p>
            <p><strong>Institución:</strong> {persona.institucion}</p>
            <p><strong>Título:</strong> {persona.titulo}</p>
            <p><strong>Año de Graduación:</strong> {persona.anio}</p>
            
            <div className="detalle">
                <strong>Cursos</strong>
            </div>
            
            {(persona.cursos || []).map((curso, indice) => (
                <p key={indice}>- {curso}</p>
            ))}

            {/* --- SECCIÓN 3: DATOS DE EXPERIENCIA (ACTUALIZADO) --- */}
            <h4 className="text-center">Datos de Experiencia Laboral</h4>
            
            {/* CORREGIDO: Mapeamos el arreglo de experiencias para mostrar todas las tarjetas registradas */}

                {(persona.experiencias || []).map((exp, indice) => (
                    <div 
                        key={indice} 
                        className="tarjeta-resumen-experiencia" 
                        style={{ 
                            border: "1px solid #ddd", 
                            padding: "12px", 
                            borderRadius: "6px", 
                            marginBottom: "12px",
                            backgroundColor: "rgba(255, 255, 255, 0.05)" // Le da un toque visual sutil
                        }}
                    >
                        <h5><strong>{indice + 1}. {exp.cargo}</strong> en <em>{exp.empresa}</em></h5>
                        <p style={{ margin: "4px 0" }}><strong>Tiempo:</strong> {exp.tiempo || "No especificado"}</p>
                        <p style={{ margin: "4px 0" }}><strong>Funciones:</strong> {exp.funciones || "No especificadas"}</p>
                        <p style={{ margin: "4px 0" }}><strong>Habilidades:</strong> {exp.habilidades || "No especificadas"}</p>
                    </div>
                ))
            }

            <div className="botones">
                <div className="boton">
                    <button className="button" type="button" onClick={anterior}>Anterior</button>
                </div>
                
                <div className="boton">
                    <button className="button" type="submit" onClick={guardar_hoja_Vida}>Confirmar Registro</button>
                </div>
            </div>
        </div>
    )
}

export default Vista;