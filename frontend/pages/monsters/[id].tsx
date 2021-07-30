import { useRouter } from 'next/dist/client/router'
import { DataFrame } from '../../src/components/Monsters/DataFrame/DataFrame'
import { TableWeak } from '../../src/components/Monsters/TableWeak/TableWeak'
import { getMonster } from '../../src/domain/service/monsters/getMonster'
import { elementKeys, enduranceKeys, stateKeys } from '../../src/lib/render'
import {
  Article,
  Icon,
  Information,
  Physiology,
  Quote,
  RowIconText,
  Weakness,
} from '../../src/styles/monsters'
import Monsters from '../monsters'

const MonsterPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { monster, isLoading } = getMonster(id, router)

  return (
    <Monsters>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <Article>
            <h2>Ecología</h2>
            <Information>
              <img
                src={`/img/monsters/icon${monster.ruta}.png`}
                alt={`Icono del monstruo ${monster.ruta}`}
              />
              <h4>{monster.nombre}</h4>
              <p>Tamaño: {monster.tipo}</p>
              <p>Especie: {monster.especie}</p>
            </Information>
            <h3>Características</h3>
            <p>{monster.caracteristicas}</p>
            <h3>Notas</h3>
            <p>{monster.notas}</p>
            <h3>Coronas:</h3>
            <div>
              <RowIconText>
                <Icon
                  src={`/img/icons/big-crown.png`}
                  alt="Icono de una corona dorada"
                />
                Pequeña: {monster.tamano_min}
              </RowIconText>
              <RowIconText>
                <Icon
                  src={`/img/icons/big-crown.png`}
                  alt="Icono de una corona dorada"
                />
                Grande: {monster.tamano_max}
              </RowIconText>
            </div>
            <h3>Habitat</h3>
            <div>
              {monster.habitats.map((habitat: string, index) => (
                <RowIconText key={index}>
                  {habitat !== 'Desconocida' && (
                    <Icon
                      src={`/img/icons/${habitat
                        .split(' ')
                        .join('-')
                        .toLowerCase()}.png`}
                      alt={`icono del habitat ${habitat}`}
                    />
                  )}
                  {habitat}
                </RowIconText>
              ))}
            </div>
            <h3>Elemento</h3>
            <DataFrame data={monster} type={elementKeys} />
            <h3>Resistencias</h3>
            <DataFrame data={monster} type={enduranceKeys} />
            <h3>Estados</h3>
            <DataFrame data={monster} type={stateKeys} />
          </Article>
          <Article>
            <h2>Fisiología</h2>

            <Physiology
              src={`/img/monsters/physiology/physRathalos.jpg`}
              alt=""
            />
            <Quote>
              Recuerda que puedes hacer click sobre las zonas rojas del monstruo
              para descubrir las debilidades del monstruo más a fondo.
            </Quote>
            <Weakness>
              <TableWeak data={monster} title={'Elementos'}></TableWeak>
              <TableWeak data={monster} title={'Estados'}></TableWeak>
            </Weakness>
          </Article>
        </>
      )}
    </Monsters>
  )
}

export default MonsterPage
