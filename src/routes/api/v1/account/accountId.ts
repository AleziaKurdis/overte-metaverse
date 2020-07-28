//   Copyright 2020 Vircadia Contributors
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

'use strict'

import { Router, RequestHandler, Request, Response, NextFunction } from 'express';
import { setupMetaverseAPI, finishMetaverseAPI } from '@Route-Tools/middleware';
import { accountFromAuthToken, accountFromParams } from '@Route-Tools/middleware';
import { tokenFromParams } from '@Route-Tools/middleware';

import { Accounts } from '@Entities/Accounts';

import { Logger } from '@Tools/Logging';

// metaverseServerApp.use(express.urlencoded({ extended: false }));

const procPostAccountId: RequestHandler = (req: Request, resp: Response, next: NextFunction) => {
  next();
};

const procDeleteAccountId: RequestHandler = (req: Request, resp: Response, next: NextFunction) => {
  next();
};

export const name = '/api/v1/account/:accountId';

export const router = Router();

router.post(  '/api/v1/account/:accountId',       [ setupMetaverseAPI,
                                                    accountFromAuthToken,   // vRestResp.vAuthAccount
                                                    accountFromParams,
                                                    procPostAccountId,
                                                    finishMetaverseAPI ] );
router.delete('/api/v1/account/:accountId',       [ setupMetaverseAPI,
                                                    accountFromAuthToken,   // vRestResp.vAuthAccount
                                                    accountFromParams,      // vRestResp.vAccount
                                                    procDeleteAccountId,
                                                    finishMetaverseAPI ] );