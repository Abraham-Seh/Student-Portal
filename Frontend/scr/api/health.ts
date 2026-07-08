import apiClient from './client'

export const checkHealth = async () => {
  try {
    const response = await apiClient.get('/health')
    return response.data
  } catch (error) {
    throw new Error('Backend health check failed')
  }
}
