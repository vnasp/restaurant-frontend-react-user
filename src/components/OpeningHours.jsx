const OpeningHours = () => {
  return (
    <div className="d-flex flex-column text-white">
      <div className="mb-2"><h4>Horario de atención</h4></div>
      <div className="text-uppercase">
        <div className="mb-4">
          <div className="badge-green">
            Lunes - Viernes
          </div>
          <div>
            11:30 AM a 10:00 PM
          </div>
        </div>
        <div className="badge-green">
          Viernes - Sábado
        </div>
        <div>
          11:30 AM a 11:00 PM
        </div>
      </div>
    </div>
  )
}

export default OpeningHours