class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    } else {
      return res.text().then((err) =>
        Promise.reject({
          status: res.status,
          message: JSON.parse(err).message,
        })
      );
    }
  }

  loginUser(item) {
    return fetch(`${this._baseUrl}/users/signin`, {
      method: 'POST',
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({
        login: item.login,
        password: item.password,
      }),
    }).then(this._checkRes);
  }

  getCurentUser(jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this._checkRes);
  }

  updateUserInfo(item, jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${jwt}`,
        ...this._headers,
      },
      body: JSON.stringify({
        password: item,
      }),
    }).then(this._checkRes);
  }

  tokenValid(jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this._checkRes);
  }

  getInfo(jwt) {
    return fetch(`${this._baseUrl}/info`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
        ...this._headers,
      },
    }).then(this._checkRes);
  }

  createEnterprise(item, jwt) {
    return fetch(`${this._baseUrl}/enterprise`, {
      method: 'POST',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        enterprise: item.enterprise,
      }),
    }).then(this._checkRes);
  }

  getEnterprise(jwt) {
    return fetch(`${this._baseUrl}/enterprise`, {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this._checkRes);
  }

  getCerrentEnterprise(Id, jwt) {
    return fetch(`${this._baseUrl}/enterprise/${Id}`, {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this._checkRes);
  }
  updateCurrentEnterpriseValue(Id, item, jwt) {
    return fetch(`${this._baseUrl}/enterprise/${Id}`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        proff: item.proff,
        proffId: item.proffId,
        danger: item.danger,
        dangerID: item.dangerID,
        dangerGroup: item.dangerGroup,
        dangerGroupId: item.dangerGroupId,
        dangerEvent: item.dangerEvent,
        dangerEventID: item.dangerEventID,
        ipr: item.ipr,
        riskAttitude: item.riskAttitude,
        risk: item.risk,
        acceptability: item.acceptability,
        probability1: item.probability1,
        heaviness1: item.heaviness1,
        ipr1: item.ipr1,
        riskAttitude1: item.riskAttitude1,
        risk1: item.risk1,
        acceptability1: item.acceptability1,
        typeSIZ: item.typeSIZ,
        speciesSIZ: item.speciesSIZ,
        issuanceRate: item.issuanceRate,
        commit: item.commit,
        proffSIZ: item.proffSIZ,
        danger776: item.danger776,
        danger776Id: item.danger776Id,
        dangerEvent776: item.dangerEvent776,
        dangerEvent776Id: item.dangerEvent776Id,
        riskManagement: item.riskManagement,
        riskManagementID: item.riskManagementID,
        standart: item.standart,
        OperatingLevel: item.OperatingLevel,
        periodicity: item.periodicity,
        probability: item.probability,
        heaviness: item.heaviness,
        responsiblePerson: item.responsiblePerson,
        completionMark: item.completionMark,
        existingRiskManagement: item.existingRiskManagement,
        obj: item.obj,
        source: item.source,
        job: item.job,
        subdivision: item.subdivision,
      }),
    }).then(this._checkRes);
  }
}

const api = new Api({
  baseUrl: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
