/**
 * @license
 * OFFLINE2ONLINE CLIENT CONFIDENTIAL - COVERED UNDER NDA
 * Copyright 2018 Offline2Online Pty Ltd - All Rights Reserved.
 * NOTICE:  All information contained herein is, and remains
 * the property of Offline2Online Pty Ltd. The intellectual property, source code and technical approach contained herein are proprietary to Offline2Online Pty Ltd and are protected by Client NDAs and copyright law.
 * Dissemination of this information, or reproduction of this material, is strictly forbidden unless prior written permission has been obtained from Offline2Online Pty Ltd.
 *
 */
// tslint:disable-next-line:no-var-requires
const $$Array = require('bs-platform/lib/js/array')

// tslint:disable-next-line:max-classes-per-file
export abstract class EmptyList {
  protected opaque: any
}

// tslint:disable-next-line:max-classes-per-file
export abstract class Cons<T> {
  protected opaque!: T
}

export type list<T> = Cons<T> | EmptyList

export function cons<T>(itm: T, lst: list<T>): list<T> {
  return /* :: */ [itm, lst] as any
}

export const emptyList: EmptyList = /* [] */ 0 as any

export const fromArray = $$Array.to_list
/**
 * @license
 * OFFLINE2ONLINE CLIENT CONFIDENTIAL - COVERED UNDER NDA
 * Copyright 2018 Offline2Online Pty Ltd - All Rights Reserved.
 * NOTICE:  All information contained herein is, and remains
 * the property of Offline2Online Pty Ltd. The intellectual property, source code and technical approach contained herein are proprietary to Offline2Online Pty Ltd and are protected by Client NDAs and copyright law.
 * Dissemination of this information, or reproduction of this material, is strictly forbidden unless prior written permission has been obtained from Offline2Online Pty Ltd.
 *
 */
