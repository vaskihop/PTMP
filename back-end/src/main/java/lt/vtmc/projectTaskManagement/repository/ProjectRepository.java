package lt.vtmc.projectTaskManagement.repository;

import org.springframework.data.repository.CrudRepository;

import lt.vtmc.projectTaskManagement.model.ProjectEntity;

public interface ProjectRepository extends CrudRepository<ProjectEntity, Long> {

}
