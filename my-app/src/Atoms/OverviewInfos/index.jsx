import React from 'react';
import PropTypes from 'prop-types';
import './OverviewInfos.scss';

const OverviewInfos = ({
    userType,
    overviewInfosArr
}) => (
    <div className="OverviewInfos">
        {userType === 'Admin' ?
            <p>
                Quantidade de pilotos cadastrados: {overviewInfosArr[0]} <br/>
                Quantidade de escuderias cadastradas: {overviewInfosArr[1]} <br/>
                Quantidade de corridas cadastradas: {overviewInfosArr[2]} <br/>
                Quantidade de temporadas (seasons) cadastradas: {overviewInfosArr[3]} <br/>
            </p> : 
            userType === 'Escuderia' ?
                <p>
                    Quantidade de vitorias da escuderia: {overviewInfosArr[0]} <br/>
                    Quantidade de pilotos diferentes que ja correram pela escuderia: {overviewInfosArr[1]} <br/>
                    Primeiro ano em que ha dados da escuderia na base: {overviewInfosArr[2]} <br/>
                    Ultimo ano em que ha dados da escuderia na base: {overviewInfosArr[3]} <br/>
                </p> :
                <p>
                    Quantidade de vitorias do piloto: {overviewInfosArr[0]} <br/>
                    Primeiro ano em que ha dados do piloto na base: {overviewInfosArr[1]} <br/>
                    Ultimo ano em que ha dados do piloto na base: {overviewInfosArr[2]} <br/>
                </p>
        }
    </div>
);

export default OverviewInfos;

AboutPage.propTypes = {
    userType: PropTypes.string.isRequired,
    overviewInfosArr: PropTypes.array.isRequired
};