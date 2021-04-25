import { getCustomRepository, Repository } from 'typeorm'
import { SettingsRepository } from '../repositories/SettingRepository'
import { Setting } from "../entities/Setting"

interface CreateSettingsInterface {
  chat: boolean,
  username: string
}

class SettingsService {
  private settingsRepository: Repository<Setting>

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository)
  }

  async create({ chat, username }: CreateSettingsInterface) {
    const userAlreadyExist = await this.settingsRepository.findOne({
      username,
    })
    if (userAlreadyExist) {
      throw new Error("User already exists!");
    }
    const settings = this.settingsRepository.create({
      chat,
      username
    })
    await this.settingsRepository.save(settings)
    return settings
  }

  async findByUsername(username:string){
    const settings = await this.settingsRepository.findOne({ username })

    return settings
  }
}

export { SettingsService }