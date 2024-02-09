const OpeningHours = () => {
  return (
    <div className="d-flex flex-column text-white mb-4">
      <div className="mb-2"><h4>Nuestro horario de atención</h4></div>
      <div>
        <div className="mb-4">
          <div className="text-capitalize">
            Lunes a Viernes
          </div>
          <div>
            11:30 am a 10:00 pm
          </div>
        </div>
        <div className="text-capitalize">
          Viernes a Sábado
        </div>
        <div>
          11:30 am a 11:00 pm
        </div>
      </div>
    </div>
  )
}

export default OpeningHours