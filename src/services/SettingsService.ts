import { getCustomRepository } from 'typeorm'
import { SettingsRepository } from '../repositories/SettingRepository'

interface CreateSettingsInterface {
  chat: boolean,
  username: string
}

class SettingsService {
  async create({ chat, username }: CreateSettingsInterface) {
    const settingsRepository = getCustomRepository(SettingsRepository)

    const userAlreadyExist = await settingsRepository.findOne({
      username,
    })
    // não precisa do where, pq é um select simples

    if (userAlreadyExist) {
      throw new Error("User already exists!");
    }

    const settings = settingsRepository.create({
      chat,
      username
    })

    await settingsRepository.save(settings)
    return settings
  }
}

export { SettingsService }